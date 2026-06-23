import { describe, it, expect, vi } from 'vitest';
import { AppState, appState } from './state.js';

describe('AppState', () => {
  it('initializes with default state', () => {
    const store = new AppState();
    const state = store.getState();

    expect(state.currentScreen).toBe('confirmation');
    expect(state.selectedConnection).toBeNull();
    expect(state.navigationMode).toBe('standard');
    expect(state.currentMilestoneIndex).toBe(0);
    expect(state.milestones).toEqual([]);
    expect(state.busDepartures).toEqual([]);
    expect(state.geolocationPermission).toBe('prompt');
    expect(state.activeView).toBe('text');
  });

  it('allows custom initial state', () => {
    const store = new AppState({
      currentScreen: 'navigation',
      selectedConnection: null,
      navigationMode: 'accessible',
      currentMilestoneIndex: 2,
      milestones: [],
      busDepartures: [],
      geolocationPermission: 'granted',
      activeView: 'map',
    });

    const state = store.getState();
    expect(state.currentScreen).toBe('navigation');
    expect(state.navigationMode).toBe('accessible');
    expect(state.currentMilestoneIndex).toBe(2);
    expect(state.activeView).toBe('map');
  });

  it('merges partial state with setState', () => {
    const store = new AppState();
    store.setState({ activeView: 'map', currentMilestoneIndex: 3 });

    const state = store.getState();
    expect(state.activeView).toBe('map');
    expect(state.currentMilestoneIndex).toBe(3);
    // Other fields remain unchanged
    expect(state.currentScreen).toBe('confirmation');
    expect(state.navigationMode).toBe('standard');
  });

  it('notifies listeners on state change', () => {
    const store = new AppState();
    const listener = vi.fn();

    store.subscribe(listener);
    store.setState({ currentScreen: 'navigation' });

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(
      expect.objectContaining({ currentScreen: 'navigation' })
    );
  });

  it('supports multiple listeners', () => {
    const store = new AppState();
    const listener1 = vi.fn();
    const listener2 = vi.fn();

    store.subscribe(listener1);
    store.subscribe(listener2);
    store.setState({ activeView: 'map' });

    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  it('returns unsubscribe function that removes listener', () => {
    const store = new AppState();
    const listener = vi.fn();

    const unsubscribe = store.subscribe(listener);
    store.setState({ activeView: 'map' });
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
    store.setState({ activeView: 'text' });
    expect(listener).toHaveBeenCalledTimes(1); // Not called again
  });

  it('getState returns a copy, not a reference', () => {
    const store = new AppState();
    const state1 = store.getState();
    state1.currentMilestoneIndex = 99;

    const state2 = store.getState();
    expect(state2.currentMilestoneIndex).toBe(0);
  });

  it('exports a singleton instance', () => {
    expect(appState).toBeInstanceOf(AppState);
    expect(appState.getState().activeView).toBe('text');
  });
});
