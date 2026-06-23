/**
 * NavigationScreen Web Component
 *
 * The active navigation interface with a tab toggle between "Wegbeschreibung" (text directions)
 * and "Maps" (map view). Displays milestone-based navigation with swipe gestures and dot
 * indicators in text mode, or a Leaflet map in map mode. Shows bus departure info in both views.
 *
 * Usage:
 *   <navigation-screen></navigation-screen>
 *   const el = document.querySelector('navigation-screen');
 *   el.milestones = [...];
 *   el.stationId = 'WIEN-HBF';
 *   el.exitLocation = { lat: 50.107, lng: 8.663 };
 *   el.busStopLocation = { lat: 50.108, lng: 8.665 };
 *   el.routeGeoJSON = { type: 'LineString', coordinates: [...] };
 *
 * Properties:
 *   - milestones: Milestone[] — navigation steps to display
 *   - stationId: string — station ID for bus departure info
 *   - currentMilestoneIndex: number — active milestone index
 *   - exitLocation: { lat, lng } — station exit coordinates for map
 *   - busStopLocation: { lat, lng } — bus stop coordinates for map
 *   - routeGeoJSON: GeoJSON.LineString — route polyline for map
 *
 * @validates Requirements 7.1, 7.2, 7.3, 7.6, 5.4
 */

import type { Milestone } from '../types/index';
import { appState } from '../state';
import './swipe-container';
import './milestone-card';
import './dot-indicator';
import './map-view';
import './bus-departure-info';

export class NavigationScreen extends HTMLElement {
  private _milestones: Milestone[] = [];
  private _stationId: string = '';
  private _currentMilestoneIndex: number = 0;
  private _exitLocation: { lat: number; lng: number } | null = null;
  private _busStopLocation: { lat: number; lng: number } | null = null;
  private _routeGeoJSON: GeoJSON.LineString | null = null;
  private _unsubscribe: (() => void) | null = null;

  /** Navigation milestones to display */
  get milestones(): Milestone[] {
    return this._milestones;
  }

  set milestones(value: Milestone[]) {
    this._milestones = value;
    this._render();
  }

  /** Station ID for bus departure info subscription */
  get stationId(): string {
    return this._stationId;
  }

  set stationId(value: string) {
    this._stationId = value;
    this._render();
  }

  /** Current milestone index (0-based) */
  get currentMilestoneIndex(): number {
    return this._currentMilestoneIndex;
  }

  set currentMilestoneIndex(value: number) {
    this._currentMilestoneIndex = value;
    this._updateMilestoneView();
  }

  /** Station exit location for map view */
  get exitLocation(): { lat: number; lng: number } | null {
    return this._exitLocation;
  }

  set exitLocation(value: { lat: number; lng: number } | null) {
    this._exitLocation = value;
  }

  /** Bus stop location for map view */
  get busStopLocation(): { lat: number; lng: number } | null {
    return this._busStopLocation;
  }

  set busStopLocation(value: { lat: number; lng: number } | null) {
    this._busStopLocation = value;
  }

  /** Route GeoJSON for map view */
  get routeGeoJSON(): GeoJSON.LineString | null {
    return this._routeGeoJSON;
  }

  set routeGeoJSON(value: GeoJSON.LineString | null) {
    this._routeGeoJSON = value;
  }

  connectedCallback(): void {
    // Default to text view on navigation start
    appState.setState({ activeView: 'text' });

    // Subscribe to state changes for milestone index updates
    this._unsubscribe = appState.subscribe((state) => {
      if (state.currentMilestoneIndex !== this._currentMilestoneIndex) {
        this._currentMilestoneIndex = state.currentMilestoneIndex;
        this._updateMilestoneView();
      }
    });

    this._render();
    this._attachEventListeners();
  }

  disconnectedCallback(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
  }

  private _render(): void {
    const activeView = appState.getState().activeView;
    const isTextView = activeView === 'text';

    this.innerHTML = `
      <div class="navigation-screen">
        <db-button variant="ghost" icon="arrow_left" type="button" data-action="back">Zurück</db-button>
        <db-tabs>
          <db-tab-list>
            <db-tab-item ${isTextView ? 'active' : ''} data-view="text">Wegbeschreibung</db-tab-item>
            <db-tab-item ${!isTextView ? 'active' : ''} data-view="map">Maps</db-tab-item>
          </db-tab-list>
          <db-tab-panel>
            ${this._renderTextView()}
          </db-tab-panel>
          <db-tab-panel>
            ${this._renderMapView()}
          </db-tab-panel>
        </db-tabs>
        <div class="navigation-screen__departure-info">
          <bus-departure-info stationid="${this._stationId}"></bus-departure-info>
        </div>
      </div>
      <style>
        .navigation-screen {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100%;
        }
        .navigation-screen__text-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--db-spacing-fixed-sm);
        }
        .navigation-screen__departure-info {
          padding: var(--db-spacing-fixed-sm);
        }
      </style>
    `;

    this._attachEventListeners();
    this._setMapViewProperties();
    this._setMilestoneCardData();
  }

  private _renderTextView(): string {
    return `
      <div class="navigation-screen__text-view">
        <swipe-container total="${this._milestones.length}" active-index="${this._currentMilestoneIndex}">
          <milestone-card></milestone-card>
        </swipe-container>
        <dot-indicator total="${this._milestones.length}" activeindex="${this._currentMilestoneIndex}"></dot-indicator>
      </div>
    `;
  }

  private _renderMapView(): string {
    return `<map-view></map-view>`;
  }

  private _attachEventListeners(): void {
    // Back button
    const backBtn = this.querySelector('[data-action="back"]');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '#preview';
      });
    }

    // Listen for swipe events to update milestone card and dot indicator
    const swipeContainer = this.querySelector('swipe-container');
    if (swipeContainer) {
      swipeContainer.addEventListener('swipe', ((e: CustomEvent<{ index: number }>) => {
        this._currentMilestoneIndex = e.detail.index;
        this._updateMilestoneView();
      }) as EventListener);
    }

    // Listen for tab changes
    const tabItems = this.querySelectorAll('db-tab-item');
    tabItems.forEach((tabItem, index) => {
      tabItem.addEventListener('click', () => {
        const view = index === 0 ? 'text' : 'map';
        appState.setState({ activeView: view as 'text' | 'map' });
      });
    });
  }

  /**
   * Updates the milestone card and dot indicator without a full re-render.
   */
  private _updateMilestoneView(): void {
    const milestoneCard = this.querySelector('milestone-card') as HTMLElement & { milestone: Milestone | null } | null;
    if (milestoneCard && this._milestones[this._currentMilestoneIndex]) {
      milestoneCard.milestone = this._milestones[this._currentMilestoneIndex];
    }

    const dotIndicator = this.querySelector('dot-indicator') as HTMLElement & { activeIndex: number } | null;
    if (dotIndicator) {
      dotIndicator.activeIndex = this._currentMilestoneIndex;
    }

    const swipeContainer = this.querySelector('swipe-container') as HTMLElement & { activeIndex: number } | null;
    if (swipeContainer) {
      swipeContainer.activeIndex = this._currentMilestoneIndex;
    }
  }

  /**
   * Sets the map-view component properties after render.
   */
  private _setMapViewProperties(): void {
    const mapView = this.querySelector('map-view') as HTMLElement & {
      exitLocation: { lat: number; lng: number } | null;
      busStopLocation: { lat: number; lng: number } | null;
      routeGeoJSON: GeoJSON.LineString | null;
      milestones: Milestone[];
    } | null;

    if (mapView) {
      mapView.exitLocation = this._exitLocation;
      mapView.busStopLocation = this._busStopLocation;
      mapView.routeGeoJSON = this._routeGeoJSON;
      mapView.milestones = this._milestones;
    }
  }

  /**
   * Sets the current milestone data on the milestone-card after render.
   */
  private _setMilestoneCardData(): void {
    const milestoneCard = this.querySelector('milestone-card') as HTMLElement & { milestone: Milestone | null } | null;
    if (milestoneCard && this._milestones[this._currentMilestoneIndex]) {
      milestoneCard.milestone = this._milestones[this._currentMilestoneIndex];
    }
  }
}

customElements.define('navigation-screen', NavigationScreen);
