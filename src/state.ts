/**
 * Observable application state store for the Rail Replacement Navigation app.
 *
 * Implements a simple publish/subscribe pattern with partial state updates.
 * No external state management library is needed for this use case.
 */

import type { NavigationState } from './types/index.js';

/** Default initial state for the application */
const DEFAULT_STATE: NavigationState = {
  currentScreen: 'confirmation',
  selectedConnection: null,
  navigationMode: 'standard',
  currentMilestoneIndex: 0,
  milestones: [],
  busDepartures: [],
  geolocationPermission: 'prompt',
  activeView: 'text',
};

/**
 * AppState provides a minimal observable state container.
 *
 * - `getState()` returns the current snapshot of navigation state.
 * - `setState(partial)` merges a partial update and notifies all listeners.
 * - `subscribe(listener)` registers a callback and returns an unsubscribe function.
 */
export class AppState {
  private state: NavigationState;
  private listeners: Set<(state: NavigationState) => void>;

  constructor(initialState: NavigationState = DEFAULT_STATE) {
    this.state = { ...initialState };
    this.listeners = new Set();
  }

  /** Returns a copy of the current state */
  getState(): NavigationState {
    return { ...this.state };
  }

  /** Merges partial state and notifies all subscribers */
  setState(partial: Partial<NavigationState>): void {
    this.state = { ...this.state, ...partial };
    this.listeners.forEach((listener) => listener(this.getState()));
  }

  /** Registers a listener; returns an unsubscribe function */
  subscribe(listener: (state: NavigationState) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
}

/** Singleton instance used across the application */
export const appState = new AppState();
