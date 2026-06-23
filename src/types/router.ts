/**
 * Router interface for hash-based client-side navigation.
 */

import type { Screen } from './index';

/** Hash-based router for screen transitions */
export interface Router {
  navigate(screen: Screen, params?: Record<string, string>): void;
  getCurrentScreen(): Screen;
  getParams(): Record<string, string>;
  onRouteChange(callback: (screen: Screen) => void): void;
}
