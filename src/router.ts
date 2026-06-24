/**
 * Hash-based client-side router for screen transitions.
 *
 * The QR code URL format is: https://{domain}/?station={stationId}&platform={platformId}
 * On initial load, query parameters are parsed and stored.
 * Hash changes (#confirmation, #connections, #preview, #navigation) drive screen transitions.
 */

import type { Screen } from './types/index';
import type { Router } from './types/router';

/** Valid screen identifiers that can appear in the URL hash */
const VALID_SCREENS: ReadonlySet<Screen> = new Set([
  'scan',
  'confirmation',
  'connections',
  'preview',
  'navigation',
]);

/** Default screen when no hash is present or hash is invalid */
const DEFAULT_SCREEN: Screen = 'confirmation';

/**
 * Result of parsing a QR code URL for station and platform parameters.
 * Returns null if the URL is malformed (missing station or platform).
 */
export interface ParsedUrlParams {
  station: string;
  platform: string;
}

/**
 * Parses URL search parameters to extract station and platform identifiers.
 * This function is exported separately to enable property-based testing.
 *
 * @param searchString - The URL search string (e.g., "?station=WIEN-HBF&platform=7")
 * @returns ParsedUrlParams if both station and platform are present and non-empty, otherwise null
 */
export function parseUrlParams(searchString: string): ParsedUrlParams | null {
  const params = new URLSearchParams(searchString);
  const station = params.get('station');
  const platform = params.get('platform');

  if (!station || !platform || station.trim() === '' || platform.trim() === '') {
    return null;
  }

  return { station: station.trim(), platform: platform.trim() };
}

/**
 * Extracts a valid Screen from a hash string.
 *
 * @param hash - The URL hash (e.g., "#confirmation" or "confirmation")
 * @returns The matching Screen, or the default screen if invalid
 */
export function parseHashScreen(hash: string): Screen {
  const cleaned = hash.replace(/^#/, '');
  if (VALID_SCREENS.has(cleaned as Screen)) {
    return cleaned as Screen;
  }
  return DEFAULT_SCREEN;
}

/**
 * Hash-based router implementation for the Rail Replacement Navigation app.
 */
export class HashRouter implements Router {
  private currentScreen: Screen;
  private params: Record<string, string>;
  private listeners: Set<(screen: Screen) => void> = new Set();

  constructor() {
    // Parse URL query parameters on initialization
    const parsed = parseUrlParams(window.location.search);
    this.params = parsed
      ? { station: parsed.station, platform: parsed.platform }
      : {};

    // Determine initial screen from hash
    this.currentScreen = parseHashScreen(window.location.hash);

    // Set hash if not present (default to confirmation)
    if (!window.location.hash) {
      window.location.hash = `#${this.currentScreen}`;
    }

    // Listen for hash changes
    window.addEventListener('hashchange', this.handleHashChange);
  }

  /**
   * Navigate to a screen, optionally updating stored params.
   */
  navigate(screen: Screen, params?: Record<string, string>): void {
    if (params) {
      this.params = { ...this.params, ...params };
    }
    window.location.hash = `#${screen}`;
  }

  /**
   * Returns the currently active screen.
   */
  getCurrentScreen(): Screen {
    return this.currentScreen;
  }

  /**
   * Returns the stored URL parameters (station, platform, and any additional params).
   */
  getParams(): Record<string, string> {
    return { ...this.params };
  }

  /**
   * Register a callback to be invoked whenever the route changes.
   */
  onRouteChange(callback: (screen: Screen) => void): void {
    this.listeners.add(callback);
  }

  /**
   * Clean up event listener. Call when router is no longer needed.
   */
  destroy(): void {
    window.removeEventListener('hashchange', this.handleHashChange);
    this.listeners.clear();
  }

  private handleHashChange = (): void => {
    const newScreen = parseHashScreen(window.location.hash);
    if (newScreen !== this.currentScreen) {
      this.currentScreen = newScreen;
      this.notifyListeners();
    }
  };

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      listener(this.currentScreen);
    }
  }
}

/** Singleton router instance for application-wide use (lazy-initialized) */
let _router: HashRouter | null = null;

/**
 * Returns the singleton router instance, creating it on first access.
 * This avoids issues with module-level instantiation in non-browser environments.
 */
export function getRouter(): HashRouter {
  if (!_router) {
    _router = new HashRouter();
  }
  return _router;
}
