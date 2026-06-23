/**
 * ConnectionOverviewScreen Web Component
 *
 * Displays a departure board of all active rail replacement connections using the
 * ri-board web component from @db-ux-inner-source/ri-extension-components.
 * Tapping a connection navigates to #preview with the selected connection.
 *
 * Uses: ri-board, db-notification
 * All UI text is in German (Requirement 9.3).
 */

import '@db-ux-inner-source/ri-extension-components';
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
 * Converts our Connection array into a BoardPublicDeparture-compatible object
 * that the ri-board component can render.
 */
function connectionsToBoardData(connections: Connection[]): object {
  const departures = connections.map((conn) => ({
    timeSchedule: conn.departureTime,
    time: conn.departureTime,
    timeType: 'SCHEDULE',
    transport: {
      journeyID: conn.id,
      line: conn.trainNumber.split(' ')[1] || conn.trainNumber,
      number: conn.trainNumber,
      category: conn.trainNumber.split(' ')[0] || 'RE',
      name: conn.trainNumber,
      destination: { name: conn.destination },
      via: [],
    },
    platform: conn.busStop,
    platformSchedule: conn.busStop,
    cancelled: false,
    messages: [{ text: conn.disruption, priority: 'LOW' }],
    travelsWith: [],
  }));

  return { departures };
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
 * Renders the HTML for a list of connections (kept for property testing).
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

  // For property testing, produce text output with all fields (HTML-escaped)
  const connectionItems = connections
    .map((connection) => {
      const formattedTime = formatDepartureTime(connection.departureTime);
      return `<li data-connection-id="${escapeHtml(connection.id)}"><strong>${escapeHtml(connection.destination)}</strong> Abfahrt: ${formattedTime} Haltestelle: ${escapeHtml(connection.busStop)}</li>`;
    })
    .join('');

  return `<ul>${connectionItems}</ul>`;
}

/**
 * ConnectionOverviewScreen custom element.
 *
 * Properties:
 * - connections: Connection[] — array of active connections to display
 *
 * Behavior:
 * - Renders an ri-board departure board
 * - Clicking a board item sets selectedConnection in appState and navigates to #preview
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
   * Renders the connection overview screen using the ri-board component.
   */
  private render(): void {
    if (this._connections.length === 0) {
      this.innerHTML = `
        <db-stack direction="column" gap="medium">
          <db-button variant="ghost" icon="arrow_left" type="button" data-action="back">Zurück</db-button>
          <h2>Verbindungen</h2>
          <db-notification
            semantic="informational"
            variant="standalone"
          >Keine aktuellen Verbindungen</db-notification>
        </db-stack>
      `;
      this.attachEventListeners();
      return;
    }

    this.innerHTML = `
      <db-stack direction="column" gap="medium">
        <db-button variant="ghost" icon="arrow_left" type="button" data-action="back">Zurück</db-button>
        <h2>Schienenersatzverkehr</h2>
        <ri-board></ri-board>
      </db-stack>
    `;

    // Set the board data programmatically (complex object)
    const boardEl = this.querySelector('ri-board') as HTMLElement & { board: object };
    if (boardEl) {
      boardEl.board = connectionsToBoardData(this._connections);
      boardEl.setAttribute('show-header', 'true');
    }

    this.attachEventListeners();
  }

  /**
   * Listens for ri-click events from board items to handle connection selection.
   */
  private attachEventListeners(): void {
    // Back button
    const backBtn = this.querySelector('[data-action="back"]');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '#confirmation';
      });
    }

    const boardEl = this.querySelector('ri-board');
    if (boardEl) {
      // The ri-board-item emits click events; listen on the board container
      boardEl.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        const boardItem = target.closest('ri-board-item') as HTMLElement & { stop?: { transport?: { journeyID?: string } } } | null;
        if (boardItem?.stop?.transport?.journeyID) {
          const connectionId = boardItem.stop.transport.journeyID;
          const connection = this._connections.find((c) => c.id === connectionId);
          if (connection) {
            appState.setState({ selectedConnection: connection });
            window.location.hash = '#preview';
          }
        }
      });
    }
  }
}

customElements.define('connection-overview-screen', ConnectionOverviewScreen);
