/**
 * Journey Confirmation Screen Web Component.
 *
 * Displays train information (train number, route, disruption) from the scanned QR code
 * and asks the user to confirm whether this is their disrupted journey.
 *
 * - "Ja" navigates to #preview
 * - "Nein" navigates to #connections
 * - Shows an error message if QR code data is invalid/malformed
 *
 * Uses DB UX components: db-card, db-button
 * All UI text is in German (Requirement 9.3).
 */

import type { Connection } from '../types/index.js';

/**
 * Renders the journey confirmation HTML for a valid connection.
 * Exported for testability (Property 3).
 */
export function renderConfirmationContent(connection: Connection): string {
  return `
    <db-card>
      <h2>Ist das deine geplante Verbindung?</h2>
      <ri-vehicle-route id="journey-route"></ri-vehicle-route>
      <p data-field="disruption" class="disruption-notice">${escapeHtml(connection.disruption)}</p>
      <div class="confirmation-actions">
        <db-button variant="brand" type="button" data-action="confirm" width="full">Ja</db-button>
        <db-button variant="outlined" type="button" data-action="reject" width="full">Nein</db-button>
      </div>
    </db-card>
  `;
}

/**
 * Renders an error message for invalid/malformed QR code data.
 * Exported for testability.
 */
export function renderErrorContent(): string {
  return `
    <db-card>
      <h2>Fehler</h2>
      <p data-field="error">Der QR-Code konnte nicht gelesen werden. Bitte versuchen Sie es erneut.</p>
    </db-card>
  `;
}

/** Escapes HTML special characters to prevent XSS */
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * JourneyConfirmationScreen custom element.
 *
 * Properties:
 * - connection: Connection | null — the connection data to display
 * - error: boolean — whether to show an error state
 *
 * Methods:
 * - getRenderedContent(): string — returns the current innerHTML for testing
 */
export class JourneyConfirmationScreen extends HTMLElement {
  private _connection: Connection | null = null;
  private _error = false;

  /** The connection to display on the confirmation screen */
  get connection(): Connection | null {
    return this._connection;
  }

  set connection(value: Connection | null) {
    this._connection = value;
    this.render();
  }

  /** Whether to display the error state */
  get error(): boolean {
    return this._error;
  }

  set error(value: boolean) {
    this._error = value;
    this.render();
  }

  connectedCallback(): void {
    this.render();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.handleClick);
  }

  /** Returns the rendered HTML content for property-based testing */
  getRenderedContent(): string {
    return this.innerHTML;
  }

  private render(): void {
    if (this._error || !this._connection) {
      this.innerHTML = renderErrorContent();
    } else {
      this.innerHTML = renderConfirmationContent(this._connection);
      this.setJourneyData(this._connection);
    }
  }

  /**
   * Sets the journey data on the ri-vehicle-route component after rendering.
   * Uses the full REX 7 timetable from Breclav to Wiener Neustadt Hbf.
   */
  private setJourneyData(_connection: Connection): void {
    const routeEl = this.querySelector('#journey-route') as HTMLElement & { journey?: object } | null;
    if (!routeEl) return;

    const baseDate = '2025-06-15T';
    const tz = '+02:00';

    const makeEvent = (
      type: 'DEPARTURE' | 'ARRIVAL',
      name: string,
      time: string,
      platform: string,
      id: string
    ) => ({
      type,
      stopPlace: { name },
      platform,
      platformSchedule: platform,
      time: `${baseDate}${time}:00${tz}`,
      timeSchedule: `${baseDate}${time}:00${tz}`,
      timeType: 'SCHEDULE',
      arrivalOrDepartureID: id,
      cancelled: false,
      additional: false,
    });

    routeEl.journey = {
      info: { journeyCancelled: false },
      events: [
        makeEvent('DEPARTURE', 'Flughafen Wien', '08:02', '1D-F', 'flughafen-wien-dep'),
        makeEvent('DEPARTURE', 'Wien Hbf', '08:24', '8A-B', 'wien-hbf-dep'),
        makeEvent('DEPARTURE', 'Wien Meidling', '08:31', '5', 'wien-meidling-dep'),
        makeEvent('ARRIVAL', 'Wiener Neustadt Hbf', '08:57', '4', 'wr-neustadt-arr'),
      ],
    };
  }

  private handleClick = (event: Event): void => {
    const target = event.target as HTMLElement;
    const button = target.closest('[data-action]') as HTMLElement | null;
    if (!button) return;

    const action = button.getAttribute('data-action');
    if (action === 'confirm') {
      window.location.hash = '#preview';
    } else if (action === 'reject') {
      window.location.hash = '#connections';
    }
  };
}

customElements.define('journey-confirmation-screen', JourneyConfirmationScreen);
