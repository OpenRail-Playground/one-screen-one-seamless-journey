/**
 * BusDepartureInfo Web Component
 *
 * Displays real-time bus departure information including the next departure
 * and subsequent departures. Shows a notice when real-time data is unavailable.
 *
 * Usage:
 *   <bus-departure-info stationId="FFM-HBF"></bus-departure-info>
 *
 * Or set departures directly:
 *   const el = document.querySelector('bus-departure-info');
 *   el.departures = [...];
 */

import type { BusDeparture } from '../types/index';
import { departureService } from '../services/departure-service';

/**
 * Formats an ISO 8601 date string as HH:MM in German locale.
 */
function formatTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export class BusDepartureInfo extends HTMLElement {
  private _stationId: string | null = null;
  private _departures: BusDeparture[] = [];
  private _unsubscribe: (() => void) | null = null;

  static get observedAttributes(): string[] {
    return ['stationid'];
  }

  /** The station ID to subscribe to departure updates for. */
  get stationId(): string | null {
    return this._stationId;
  }

  set stationId(value: string | null) {
    const oldValue = this._stationId;
    this._stationId = value;
    if (value) {
      this.setAttribute('stationid', value);
    } else {
      this.removeAttribute('stationid');
    }
    if (oldValue !== value) {
      this._subscribeToUpdates();
    }
  }

  /** Set departures directly (for use in other components). */
  get departures(): BusDeparture[] {
    return this._departures;
  }

  set departures(value: BusDeparture[]) {
    this._departures = value;
    this._render();
  }

  connectedCallback(): void {
    this._render();
    if (this._stationId) {
      this._subscribeToUpdates();
    }
  }

  disconnectedCallback(): void {
    this._cleanup();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name === 'stationid' && oldValue !== newValue) {
      this._stationId = newValue;
      this._subscribeToUpdates();
    }
  }

  private _cleanup(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
  }

  private _subscribeToUpdates(): void {
    this._cleanup();

    if (!this._stationId) {
      return;
    }

    this._unsubscribe = departureService.subscribeToUpdates(
      this._stationId,
      (departures: BusDeparture[]) => {
        this._departures = departures;
        this._render();
      }
    );
  }

  private _render(): void {
    const departures = this._departures;

    if (departures.length === 0) {
      this.innerHTML = '';
      return;
    }

    const nextDeparture = departures[0];
    const subsequentDepartures = departures.slice(1);
    const hasNonRealtime = departures.some((d) => !d.isRealtime);

    let html = `<db-card spacing="small">`;

    // Next departure
    html += `
      <div class="bus-departure-info__next">
        <strong>Nächste Abfahrt:</strong>
        <db-badge semantic="successful" emphasis="strong">
          ${formatTime(nextDeparture.departureTime)}
        </db-badge>
        <span class="bus-departure-info__destination">${nextDeparture.destination}</span>
      </div>`;

    // Subsequent departures
    if (subsequentDepartures.length > 0) {
      html += `
      <div class="bus-departure-info__subsequent">
        <strong>Weitere Abfahrten:</strong>
        <span class="bus-departure-info__times">`;

      for (const departure of subsequentDepartures) {
        html += `
          <db-badge semantic="neutral" emphasis="weak">
            ${formatTime(departure.departureTime)}
          </db-badge>`;
      }

      html += `
        </span>
      </div>`;
    }

    // Real-time data unavailable notice
    if (hasNonRealtime) {
      html += `
      <db-notification
        semantic="warning"
        variant="standalone"
        close-button-text="Schließen"
      >
        Echtzeitdaten nicht verfügbar – Zeiten basieren auf dem Fahrplan
      </db-notification>`;
    }

    html += `</db-card>`;

    this.innerHTML = html;
  }
}

customElements.define('bus-departure-info', BusDepartureInfo);
