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
        <db-button variant="brand" type="button" data-action="confirm">Ja</db-button>
        <db-button variant="outlined" type="button" data-action="reject">Nein</db-button>
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
        makeEvent('DEPARTURE', 'Breclav', '13:25', '', 'breclav-dep'),
        makeEvent('DEPARTURE', 'Bernhardsthal', '13:32', 'Gl. 1', 'bernhardsthal-dep'),
        makeEvent('DEPARTURE', 'Rabensburg', '13:36', 'Gl. 1', 'rabensburg-dep'),
        makeEvent('DEPARTURE', 'Hohenau', '13:41', 'Gl. 3', 'hohenau-dep'),
        makeEvent('DEPARTURE', 'Drösing', '13:46', 'Gl. 2', 'droesing-dep'),
        makeEvent('DEPARTURE', 'Sierndorf an der March', '13:49', 'Gl. 1', 'sierndorf-dep'),
        makeEvent('DEPARTURE', 'Jedenspeigen', '13:51', 'Gl. 1', 'jedenspeigen-dep'),
        makeEvent('DEPARTURE', 'Dürnkrut', '13:54', 'Gl. 3', 'duernkrut-dep'),
        makeEvent('DEPARTURE', 'Stillfried', '13:59', 'Gl. 1', 'stillfried-dep'),
        makeEvent('DEPARTURE', 'Angern/March', '14:02', 'Gl. 2', 'angern-dep'),
        makeEvent('DEPARTURE', 'Tallesbrunn', '14:06', 'Gl. 1', 'tallesbrunn-dep'),
        makeEvent('DEPARTURE', 'Weikendorf-Dörfles', '14:09', 'Gl. 1', 'weikendorf-dep'),
        makeEvent('DEPARTURE', 'Gänserndorf', '14:15', 'Gl. 3', 'gaenserndorf-dep'),
        makeEvent('DEPARTURE', 'Deutsch Wagram', '14:25', 'Gl. 3', 'deutsch-wagram-dep'),
        makeEvent('DEPARTURE', 'Wien Leopoldau', '14:32', 'Gl. 1', 'wien-leopoldau-dep'),
        makeEvent('DEPARTURE', 'Wien Siemensstraße', '14:35', 'Gl. 1', 'wien-siemensstr-dep'),
        makeEvent('DEPARTURE', 'Wien Floridsdorf', '14:39', 'Gl. 2', 'wien-floridsdorf-dep'),
        makeEvent('DEPARTURE', 'Wien Handelskai', '14:42', 'Gl. 1', 'wien-handelskai-dep'),
        makeEvent('DEPARTURE', 'Wien Traisengasse', '14:44', 'Gl. 1', 'wien-traisengasse-dep'),
        makeEvent('DEPARTURE', 'Wien Praterstern', '14:48', 'Gl. 1', 'wien-praterstern-dep'),
        makeEvent('DEPARTURE', 'Wien Mitte', '14:52', 'Gl. 1', 'wien-mitte-dep'),
        makeEvent('DEPARTURE', 'Wien Rennweg', '14:54', 'Gl. 1', 'wien-rennweg-dep'),
        makeEvent('DEPARTURE', 'Wien Quartier Belvedere', '14:57', 'Gl. 1', 'wien-belvedere-dep'),
        makeEvent('DEPARTURE', 'Wien Hbf', '14:59', 'Gl. 1', 'wien-hbf-dep'),
        makeEvent('DEPARTURE', 'Wien Matzleinsdorfer Platz', '15:01', 'Gl. 1', 'wien-matzleinsdorf-dep'),
        makeEvent('DEPARTURE', 'Wien Meidling', '15:07', 'Gl. 1', 'wien-meidling-dep'),
        makeEvent('DEPARTURE', 'Wien Liesing', '15:14', 'Gl. 1', 'wien-liesing-dep'),
        makeEvent('DEPARTURE', 'Mödling', '15:19', 'Gl. 2', 'moedling-dep'),
        makeEvent('DEPARTURE', 'Baden b.Wien', '15:27', 'Gl. 1', 'baden-dep'),
        makeEvent('DEPARTURE', 'Bad Vöslau', '15:32', 'Gl. 1', 'bad-voeslau-dep'),
        makeEvent('DEPARTURE', 'Leobersdorf', '15:36', 'Gl. 2', 'leobersdorf-dep'),
        makeEvent('DEPARTURE', 'Felixdorf', '15:41', 'Gl. 1', 'felixdorf-dep'),
        makeEvent('ARRIVAL', 'Wiener Neustadt Hbf', '15:48', 'Gl. 8C-D', 'wr-neustadt-arr'),
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
