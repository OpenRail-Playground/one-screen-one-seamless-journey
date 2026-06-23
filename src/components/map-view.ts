/**
 * MapViewComponent Web Component
 *
 * Displays a Leaflet map with the walking route from station exit to bus stop,
 * marks both locations, shows the user's real-time position, and displays
 * walking distance and duration below the map.
 *
 * Usage:
 *   <map-view></map-view>
 *   const el = document.querySelector('map-view');
 *   el.exitLocation = { lat: 50.107, lng: 8.663 };
 *   el.busStopLocation = { lat: 50.108, lng: 8.665 };
 *   el.routeGeoJSON = { type: 'LineString', coordinates: [...] };
 *   el.milestones = [...];
 *
 * @validates Requirements 7.3, 7.4, 7.5, 10.1, 10.2, 10.3, 10.4
 */

import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Milestone } from '../types/index';
import { geolocationService } from '../services/geolocation-service';

/**
 * Calculates total walking distance and estimated duration from milestones.
 *
 * @param milestones - Array of milestones with distanceMeters values
 * @returns Object with totalMeters (sum of distances) and durationMinutes (total / 1.2 m/s, in minutes)
 */
export function calculateWalkingInfo(milestones: Milestone[]): {
  totalMeters: number;
  durationMinutes: number;
} {
  const totalMeters = milestones.reduce(
    (sum, m) => sum + m.distanceMeters,
    0
  );
  // Walking speed: 1.2 m/s → convert total seconds to minutes
  const durationSeconds = totalMeters / 1.2;
  const durationMinutes = durationSeconds / 60;

  return { totalMeters, durationMinutes };
}

export class MapViewComponent extends HTMLElement {
  private _map: L.Map | null = null;
  private _exitLocation: { lat: number; lng: number } | null = null;
  private _busStopLocation: { lat: number; lng: number } | null = null;
  private _routeGeoJSON: GeoJSON.LineString | null = null;
  private _milestones: Milestone[] = [];
  private _userMarker: L.CircleMarker | null = null;
  private _stopWatching: (() => void) | null = null;

  /** Station exit location */
  get exitLocation(): { lat: number; lng: number } | null {
    return this._exitLocation;
  }

  set exitLocation(value: { lat: number; lng: number } | null) {
    this._exitLocation = value;
    if (this._map) {
      this._renderMap();
    }
  }

  /** Bus stop location */
  get busStopLocation(): { lat: number; lng: number } | null {
    return this._busStopLocation;
  }

  set busStopLocation(value: { lat: number; lng: number } | null) {
    this._busStopLocation = value;
    if (this._map) {
      this._renderMap();
    }
  }

  /** Route GeoJSON LineString */
  get routeGeoJSON(): GeoJSON.LineString | null {
    return this._routeGeoJSON;
  }

  set routeGeoJSON(value: GeoJSON.LineString | null) {
    this._routeGeoJSON = value;
    if (this._map) {
      this._renderMap();
    }
  }

  /** Milestones for distance/duration calculation */
  get milestones(): Milestone[] {
    return this._milestones;
  }

  set milestones(value: Milestone[]) {
    this._milestones = value;
    this._renderWalkingInfo();
  }

  connectedCallback(): void {
    this._renderShell();
    this._initMap();
    this._renderMap();
    this._renderWalkingInfo();
    this._requestGeolocation();
  }

  disconnectedCallback(): void {
    if (this._stopWatching) {
      this._stopWatching();
      this._stopWatching = null;
    }
    if (this._map) {
      this._map.remove();
      this._map = null;
    }
  }

  /**
   * Renders the outer HTML shell with map container and walking info area.
   */
  private _renderShell(): void {
    this.innerHTML = `
      <div class="map-view">
        <div class="map-view__container" id="map-container"></div>
        <div class="map-view__walking-info" id="walking-info"></div>
      </div>
      <style>
        .map-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .map-view__container {
          width: 100%;
          height: 60vh;
          min-height: 300px;
        }
        .map-view__walking-info {
          padding: var(--db-spacing-fixed-sm);
          text-align: center;
          font: var(--db-type-body-md);
        }
      </style>
    `;
  }

  /**
   * Initializes the Leaflet map instance with OpenStreetMap tiles.
   */
  private _initMap(): void {
    const container = this.querySelector('#map-container') as HTMLElement;
    if (!container) return;

    this._map = L.map(container, {
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(this._map);

    // Default view (will be adjusted by bounds)
    this._map.setView([50.107, 8.663], 16);
  }

  /**
   * Renders the route polyline, exit marker, and bus stop marker on the map.
   */
  private _renderMap(): void {
    if (!this._map) return;

    // Clear existing layers (except tile layer and user position marker)
    this._map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) return;
      if (layer === this._userMarker) return;
      this._map!.removeLayer(layer);
    });

    const bounds = L.latLngBounds([]);

    // Add route polyline from GeoJSON
    if (this._routeGeoJSON) {
      const coordinates = this._routeGeoJSON.coordinates.map(
        (coord) => [coord[1], coord[0]] as L.LatLngTuple
      );
      const polyline = L.polyline(coordinates, {
        color: '#ec0016', // DB Red
        weight: 4,
        opacity: 0.8,
      }).addTo(this._map);
      bounds.extend(polyline.getBounds());
    }

    // Add exit marker
    if (this._exitLocation) {
      const exitMarker = L.marker(
        [this._exitLocation.lat, this._exitLocation.lng],
        { title: 'Ausgang' }
      ).addTo(this._map);
      exitMarker.bindPopup('<strong>Ausgang</strong>');
      bounds.extend([this._exitLocation.lat, this._exitLocation.lng]);
    }

    // Add bus stop marker
    if (this._busStopLocation) {
      const busStopMarker = L.marker(
        [this._busStopLocation.lat, this._busStopLocation.lng],
        { title: 'Bushaltestelle' }
      ).addTo(this._map);
      busStopMarker.bindPopup('<strong>Bushaltestelle</strong>');
      bounds.extend([this._busStopLocation.lat, this._busStopLocation.lng]);
    }

    // Fit map to bounds if we have markers or polyline
    if (bounds.isValid()) {
      this._map.fitBounds(bounds, { padding: [30, 30] });
    }
  }

  /**
   * Renders walking distance and duration information below the map.
   */
  private _renderWalkingInfo(): void {
    const infoEl = this.querySelector('#walking-info');
    if (!infoEl) return;

    if (this._milestones.length === 0) {
      infoEl.innerHTML = '';
      return;
    }

    const { totalMeters, durationMinutes } = calculateWalkingInfo(
      this._milestones
    );
    const roundedMinutes = Math.ceil(durationMinutes);
    const distanceDisplay =
      totalMeters >= 1000
        ? `${(totalMeters / 1000).toFixed(1)} km`
        : `${Math.round(totalMeters)} m`;

    infoEl.innerHTML = `
      <span class="map-view__duration">🚶 ca. ${roundedMinutes} Min.</span>
      <span class="map-view__distance"> · ${distanceDisplay}</span>
    `;
  }

  /**
   * Requests geolocation permission and starts position watching if granted.
   */
  private async _requestGeolocation(): Promise<void> {
    const permission = await geolocationService.requestPermission();

    if (permission === 'granted') {
      this._stopWatching = geolocationService.watchPosition((pos) => {
        this._updateUserPosition(pos);
      });
    }
    // If denied, map displays without user position marker (Requirement 10.3)
  }

  /**
   * Updates or creates the user's position marker on the map.
   */
  private _updateUserPosition(pos: { lat: number; lng: number }): void {
    if (!this._map) return;

    if (this._userMarker) {
      this._userMarker.setLatLng([pos.lat, pos.lng]);
    } else {
      this._userMarker = L.circleMarker([pos.lat, pos.lng], {
        radius: 8,
        fillColor: '#283db5',
        fillOpacity: 0.9,
        color: '#ffffff',
        weight: 3,
      }).addTo(this._map);
    }
  }
}

customElements.define('map-view', MapViewComponent);
