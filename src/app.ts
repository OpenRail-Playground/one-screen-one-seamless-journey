/**
 * RailNavApp - Root Web Component (Application Shell)
 *
 * Listens to router changes and renders the active screen.
 * On initial load: parses URL params, fetches route data, initializes state,
 * and shows JourneyConfirmationScreen.
 *
 * Registered as <rail-nav-app>.
 *
 * @validates Requirements 1.1, 1.3, 9.1, 9.2, 9.4, 9.5
 */

import type { Screen, StationRoute, Connection, Milestone } from './types/index.js';
import { getRouter } from './router.js';
import { appState } from './state.js';
import { routeDataService } from './services/route-data-service.js';

// Import all screen components so they register their custom elements
import './components/qr-scanner-screen.js';
import './components/journey-confirmation-screen.js';
import './components/connection-overview-screen.js';
import './components/navigation-preview-screen.js';
import './components/navigation-screen.js';
import './components/milestone-card.js';
import './components/dot-indicator.js';
import './components/swipe-container.js';
import './components/map-view.js';
import './components/arrival-screen.js';

export class RailNavApp extends HTMLElement {
  private routeData: StationRoute | null = null;

  connectedCallback(): void {
    this.innerHTML = `<div class="rail-nav-app__loading" aria-live="polite">Laden…</div>`;
    this.initialize();
  }

  /**
   * Initialize the application:
   * 1. Parse URL params (station, platform)
   * 2. Fetch route data
   * 3. Set first connection as selectedConnection in appState
   * 4. Show JourneyConfirmationScreen
   * 5. Listen to router for screen changes
   */
  private async initialize(): Promise<void> {
    const router = getRouter();
    const params = router.getParams();
    const stationId = params.station;
    const platformId = params.platform;

    if (!stationId || !platformId) {
      this.showScan();
      return;
    }

    try {
      this.routeData = await routeDataService.getStationRoute(stationId, platformId);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Routendaten konnten nicht geladen werden.';
      this.showError(message);
      return;
    }

    // Set the first connection as selected in state
    const firstConnection = this.routeData.connections[0] ?? null;
    appState.setState({
      selectedConnection: firstConnection,
      milestones: this.routeData.routes.standard,
    });

    // Render the initial screen based on current hash
    this.renderScreen(router.getCurrentScreen());

    // Listen for route changes
    router.onRouteChange((screen: Screen) => {
      this.renderScreen(screen);
    });
  }

  /**
   * Renders the appropriate screen component based on the current route.
   */
  private renderScreen(screen: Screen): void {
    appState.setState({ currentScreen: screen });

    switch (screen) {
      case 'scan':
        this.showScan();
        break;
      case 'confirmation':
        this.showConfirmation();
        break;
      case 'connections':
        this.showConnections();
        break;
      case 'preview':
        this.showPreview();
        break;
      case 'navigation':
        this.showNavigation();
        break;
      case 'arrival':
        this.showArrival();
        break;
      default:
        this.showConfirmation();
    }
  }

  /**
   * Shows the QR Scanner screen when no station/platform params are present.
   */
  private showScan(): void {
    this.innerHTML = `<qr-scanner-screen></qr-scanner-screen>`;
  }

  /**
   * Shows the JourneyConfirmationScreen with the selected connection data.
   */
  private showConfirmation(): void {
    const state = appState.getState();
    const connection = state.selectedConnection;

    this.innerHTML = `<journey-confirmation-screen></journey-confirmation-screen>`;

    const screen = this.querySelector('journey-confirmation-screen') as HTMLElement & {
      connection: Connection | null;
      error: boolean;
    } | null;

    if (screen) {
      if (connection) {
        screen.connection = connection;
      } else {
        screen.error = true;
      }
    }
  }

  /**
   * Shows the ConnectionOverviewScreen with all connections from route data.
   */
  private showConnections(): void {
    const connections = this.routeData?.connections ?? [];

    this.innerHTML = `<connection-overview-screen></connection-overview-screen>`;

    const screen = this.querySelector('connection-overview-screen') as HTMLElement & {
      connections: Connection[];
    } | null;

    if (screen) {
      screen.connections = connections;
    }
  }

  /**
   * Shows the NavigationPreviewScreen with milestones and stationId.
   */
  private showPreview(): void {
    const milestones = this.routeData?.routes.standard ?? [];
    const stationId = this.routeData?.stationId ?? '';

    this.innerHTML = `<navigation-preview-screen></navigation-preview-screen>`;

    const screen = this.querySelector('navigation-preview-screen') as HTMLElement & {
      milestones: Milestone[];
      stationId: string;
    } | null;

    if (screen) {
      screen.milestones = milestones;
      screen.stationId = stationId;
    }
  }

  /**
   * Shows the NavigationScreen with milestones and map data from appState and route data.
   */
  private showNavigation(): void {
    const state = appState.getState();
    const stationId = this.routeData?.stationId ?? '';
    const milestones = state.milestones.length > 0
      ? state.milestones
      : this.routeData?.routes.standard ?? [];

    this.innerHTML = `<navigation-screen></navigation-screen>`;

    const screen = this.querySelector('navigation-screen') as HTMLElement & {
      milestones: Milestone[];
      stationId: string;
      currentMilestoneIndex: number;
      exitLocation: { lat: number; lng: number } | null;
      busStopLocation: { lat: number; lng: number } | null;
      routeGeoJSON: GeoJSON.LineString | null;
    } | null;

    if (screen) {
      screen.milestones = milestones;
      screen.stationId = stationId;
      screen.currentMilestoneIndex = state.currentMilestoneIndex;
      screen.exitLocation = this.routeData?.exitLocation ?? null;
      screen.busStopLocation = this.routeData?.busStopLocation ?? null;
      screen.routeGeoJSON = this.routeData?.routeGeoJSON ?? null;
    }
  }

  /**
   * Shows the ArrivalScreen after the user has reached the bus stop.
   */
  private showArrival(): void {
    this.innerHTML = `<arrival-screen></arrival-screen>`;
  }

  /**
   * Shows an error message when params are missing or data fetch fails.
   */
  private showError(message: string): void {
    this.innerHTML = `
      <div class="rail-nav-app__error" role="alert">
        <db-card>
          <h2>Fehler</h2>
          <p>${message}</p>
        </db-card>
      </div>
    `;
  }
}

customElements.define('rail-nav-app', RailNavApp);
