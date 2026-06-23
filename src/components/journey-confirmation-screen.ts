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
      <h2>Ist das Ihre Verbindung?</h2>
      <dl>
        <dt>Zugnummer</dt>
        <dd data-field="trainNumber">${escapeHtml(connection.trainNumber)}</dd>
        <dt>Strecke</dt>
        <dd data-field="routeName">${escapeHtml(connection.routeName)}</dd>
        <dt>Störung</dt>
        <dd data-field="disruption">${escapeHtml(connection.disruption)}</dd>
      </dl>
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
    }
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
