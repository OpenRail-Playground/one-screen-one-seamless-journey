/**
 * ConnectionOverviewScreen Web Component
 *
 * Displays a list of all active rail replacement connections departing from the station.
 * Each connection shows destination, departure time, and bus stop.
 * Tapping a connection sets it as the selected connection in appState and navigates to #preview.
 * Shows an informational notification when no connections are available.
 *
 * Uses DB UX components: db-card, db-stack, db-notification
 * All UI text is in German (Requirement 9.3).
 */

import '@db-ux/wc-core-components';
import type { Connection } from '../types/index.js';
import { appState } from '../state.js';

/** Escapes HTML special characters to prevent XSS */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Formats an ISO 8601 departure time string to HH:MM in German locale.
 */
export function formatDepartureTime(isoString: string): string {
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      return isoString;
    }
    return date.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return isoString;
  }
}

/**
 * Renders the HTML for a list of connections.
 * Exported for property-based testing (Property 4: Connection List Completeness).
 *
 * @param connections - Array of Connection objects to render
 * @returns HTML string containing the rendered connection list
 */
export function renderConnectionList(connections: Connection[]): string {
  if (connections.length === 0) {
    return `
      <db-stack direction="column" gap="medium">
        <h2>Verbindungen</h2>
        <db-notification
          semantic="informational"
          variant="standalone"
        >Keine aktuellen Verbindungen</db-notification>
      </db-stack>
    `;
  }

  const connectionCards = connections
    .map((connection) => {
      const formattedTime = formatDepartureTime(connection.departureTime);
      return `
      <db-card
        behavior="interactive"
        class="connection-card"
        data-connection-id="${escapeHtml(connection.id)}"
      >
        <db-stack direction="column" gap="small">
          <strong>${escapeHtml(connection.destination)}</strong>
          <span>Abfahrt: ${formattedTime}</span>
          <span>Haltestelle: ${escapeHtml(connection.busStop)}</span>
        </db-stack>
      </db-card>
    `;
    })
    .join('');

  return `
    <db-stack direction="column" gap="medium">
      <h2>Verbindungen</h2>
      ${connectionCards}
    </db-stack>
  `;
}

/**
 * ConnectionOverviewScreen custom element.
 *
 * Properties:
 * - connections: Connection[] — array of active connections to display
 *
 * Behavior:
 * - Clicking a connection card sets selectedConnection in appState and navigates to #preview
 */
export class ConnectionOverviewScreen extends HTMLElement {
  private _connections: Connection[] = [];

  /** Accept an array of Connection objects as a property */
  get connections(): Connection[] {
    return this._connections;
  }

  set connections(value: Connection[]) {
    this._connections = value;
    this.render();
  }

  connectedCallback(): void {
    this.render();
  }

  /**
   * Renders the connection overview screen using light DOM for DB UX component integration.
   */
  private render(): void {
    this.innerHTML = renderConnectionList(this._connections);
    this.attachEventListeners();
  }

  /**
   * Attaches click listeners to each connection card.
   * On tap, sets the selected connection in appState and navigates to #preview.
   */
  private attachEventListeners(): void {
    const cards = this.querySelectorAll('.connection-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const connectionId = card.getAttribute('data-connection-id');
        const connection = this._connections.find((c) => c.id === connectionId);
        if (connection) {
          appState.setState({ selectedConnection: connection });
          window.location.hash = '#preview';
        }
      });
    });
  }
}

customElements.define('connection-overview-screen', ConnectionOverviewScreen);
