/**
 * NavigationPreviewScreen Web Component
 *
 * Displays a summary of the navigation route (step count, estimated walking time),
 * two action buttons for starting standard or accessible navigation, and real-time
 * bus departure information.
 *
 * - "Navigation starten" sets mode to 'standard' and navigates to #navigation
 * - "Barrierefreie Navigation starten" sets mode to 'accessible' and navigates to #navigation
 *
 * Uses DB UX components: db-card, db-button
 * All UI text is in German (Requirement 9.3).
 */

import type { Milestone } from '../types/index.js';
import { appState } from '../state.js';
import { routeDataService } from '../services/route-data-service.js';

/** Assumed average walking speed in meters per second */
const WALKING_SPEED_MS = 1.2;

/**
 * Renders a text summary of the navigation route for preview purposes.
 * Exported for property-based testing (Property 5: Navigation Preview Milestone Summary).
 *
 * @param milestones - Array of Milestone objects describing the route
 * @returns HTML string summarizing step count and estimated walking time
 */
export function renderPreviewSummary(milestones: Milestone[]): string {
  const stepCount = milestones.length;
  const totalDistanceMeters = milestones.reduce((sum, m) => sum + m.distanceMeters, 0);
  const walkingTimeSeconds = totalDistanceMeters / WALKING_SPEED_MS;
  const walkingTimeMinutes = Math.ceil(walkingTimeSeconds / 60);

  return `
    <div class="navigation-preview__summary">
      <p><strong>Route: ${stepCount} Schritte, ca. ${walkingTimeMinutes} Minuten Fußweg</strong></p>
      <p>Gesamtstrecke: ${totalDistanceMeters} Meter</p>
    </div>
  `;
}

/**
 * NavigationPreviewScreen custom element.
 *
 * Properties:
 * - milestones: Milestone[] — the standard milestones to preview
 * - stationId: string — the station ID for bus departure info
 *
 * Behavior:
 * - Displays route summary (step count, walking time)
 * - Two buttons to start standard or accessible navigation
 * - Shows BusDepartureInfo below the summary
 */
export class NavigationPreviewScreen extends HTMLElement {
  private _milestones: Milestone[] = [];
  private _stationId: string = '';

  /** The milestones to preview for route summary */
  get milestones(): Milestone[] {
    return this._milestones;
  }

  set milestones(value: Milestone[]) {
    this._milestones = value;
    this.render();
  }

  /** Station ID for bus departure info */
  get stationId(): string {
    return this._stationId;
  }

  set stationId(value: string) {
    this._stationId = value;
    this.render();
  }

  connectedCallback(): void {
    this.render();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.handleClick);
  }

  private render(): void {
    const summaryHtml = renderPreviewSummary(this._milestones);

    this.innerHTML = `
      <db-button variant="ghost" icon="arrow_left" type="button" data-action="back">Zurück</db-button>
      <db-card>
        <h2>Navigationsvorschau</h2>
        ${summaryHtml}
        <div class="navigation-preview__actions">
          <db-button variant="brand" type="button" data-action="start-standard" width="full">Navigation starten</db-button>
          <db-button variant="outlined" type="button" data-action="start-accessible" width="full">Barrierefreie Navigation starten</db-button>
        </div>
      </db-card>
      <bus-departure-info stationid="${this._stationId}"></bus-departure-info>
    `;
  }

  private handleClick = (event: Event): void => {
    const target = event.target as HTMLElement;
    const button = target.closest('[data-action]') as HTMLElement | null;
    if (!button) return;

    const action = button.getAttribute('data-action');
    if (action === 'back') {
      window.location.hash = '#confirmation';
    } else if (action === 'start-standard') {
      this.startNavigation('standard');
    } else if (action === 'start-accessible') {
      this.startNavigation('accessible');
    }
  };

  /**
   * Sets navigation mode in app state, loads milestones, and navigates to #navigation.
   */
  private startNavigation(mode: 'standard' | 'accessible'): void {
    let milestones: Milestone[];

    try {
      const state = appState.getState();
      const connectionId = state.selectedConnection?.id ?? '';
      milestones = routeDataService.getMilestones(this._stationId, connectionId, mode);
    } catch {
      // Fallback: use the milestones provided to this component if route service unavailable
      milestones = this._milestones;
    }

    appState.setState({
      navigationMode: mode,
      milestones,
      currentMilestoneIndex: 0,
    });

    window.location.hash = '#navigation';
  }
}

customElements.define('navigation-preview-screen', NavigationPreviewScreen);
