/**
 * Unit tests for the hash-based router.
 * Tests the URL parsing utility and router behavior.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { parseUrlParams, parseHashScreen, HashRouter } from './router';

describe('parseUrlParams', () => {
  it('returns station and platform for a valid search string', () => {
    const result = parseUrlParams('?station=FFM-HBF&platform=7');
    expect(result).toEqual({ station: 'FFM-HBF', platform: '7' });
  });

  it('returns null when station is missing', () => {
    const result = parseUrlParams('?platform=7');
    expect(result).toBeNull();
  });

  it('returns null when platform is missing', () => {
    const result = parseUrlParams('?station=FFM-HBF');
    expect(result).toBeNull();
  });

  it('returns null for an empty search string', () => {
    const result = parseUrlParams('');
    expect(result).toBeNull();
  });

  it('returns null when station is empty string', () => {
    const result = parseUrlParams('?station=&platform=7');
    expect(result).toBeNull();
  });

  it('returns null when platform is empty string', () => {
    const result = parseUrlParams('?station=FFM-HBF&platform=');
    expect(result).toBeNull();
  });

  it('returns null when station is only whitespace', () => {
    const result = parseUrlParams('?station=%20&platform=7');
    expect(result).toBeNull();
  });

  it('trims whitespace from station and platform', () => {
    const result = parseUrlParams('?station=%20FFM-HBF%20&platform=%207%20');
    expect(result).toEqual({ station: 'FFM-HBF', platform: '7' });
  });

  it('handles URL-encoded characters in station', () => {
    const result = parseUrlParams('?station=FFM%2DHBF&platform=7');
    expect(result).toEqual({ station: 'FFM-HBF', platform: '7' });
  });

  it('handles additional query parameters without breaking', () => {
    const result = parseUrlParams('?station=FFM-HBF&platform=7&extra=value');
    expect(result).toEqual({ station: 'FFM-HBF', platform: '7' });
  });
});

describe('parseHashScreen', () => {
  it('returns confirmation for #confirmation', () => {
    expect(parseHashScreen('#confirmation')).toBe('confirmation');
  });

  it('returns connections for #connections', () => {
    expect(parseHashScreen('#connections')).toBe('connections');
  });

  it('returns preview for #preview', () => {
    expect(parseHashScreen('#preview')).toBe('preview');
  });

  it('returns navigation for #navigation', () => {
    expect(parseHashScreen('#navigation')).toBe('navigation');
  });

  it('returns default screen (confirmation) for empty hash', () => {
    expect(parseHashScreen('')).toBe('confirmation');
  });

  it('returns default screen for invalid hash', () => {
    expect(parseHashScreen('#invalid')).toBe('confirmation');
  });

  it('handles hash without # prefix', () => {
    expect(parseHashScreen('preview')).toBe('preview');
  });

  it('returns default for hash with extra characters', () => {
    expect(parseHashScreen('#confirmation/extra')).toBe('confirmation');
  });
});

describe('HashRouter', () => {
  let originalLocation: Location;

  beforeEach(() => {
    // Store original location
    originalLocation = window.location;

    // Mock window.location
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        ...originalLocation,
        hash: '',
        search: '?station=FFM-HBF&platform=7',
      },
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  it('parses URL params on construction', () => {
    const router = new HashRouter();
    const params = router.getParams();
    expect(params.station).toBe('FFM-HBF');
    expect(params.platform).toBe('7');
    router.destroy();
  });

  it('defaults to confirmation screen when no hash is present', () => {
    const router = new HashRouter();
    expect(router.getCurrentScreen()).toBe('confirmation');
    router.destroy();
  });

  it('reads initial screen from existing hash', () => {
    window.location.hash = '#preview';
    const router = new HashRouter();
    expect(router.getCurrentScreen()).toBe('preview');
    router.destroy();
  });

  it('navigate updates the hash', () => {
    const router = new HashRouter();
    router.navigate('connections');
    expect(window.location.hash).toBe('#connections');
    router.destroy();
  });

  it('navigate merges additional params', () => {
    const router = new HashRouter();
    router.navigate('preview', { connectionId: 'conn-1' });
    const params = router.getParams();
    expect(params.station).toBe('FFM-HBF');
    expect(params.platform).toBe('7');
    expect(params.connectionId).toBe('conn-1');
    router.destroy();
  });

  it('getParams returns a copy, not a reference', () => {
    const router = new HashRouter();
    const params1 = router.getParams();
    params1.station = 'modified';
    const params2 = router.getParams();
    expect(params2.station).toBe('FFM-HBF');
    router.destroy();
  });

  it('notifies listeners on hash change', () => {
    const router = new HashRouter();
    const callback = vi.fn();
    router.onRouteChange(callback);

    // Simulate hash change
    window.location.hash = '#navigation';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    expect(callback).toHaveBeenCalledWith('navigation');
    router.destroy();
  });

  it('does not notify listeners if screen did not change', () => {
    window.location.hash = '#confirmation';
    const router = new HashRouter();
    const callback = vi.fn();
    router.onRouteChange(callback);

    // Hash change to same screen
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    expect(callback).not.toHaveBeenCalled();
    router.destroy();
  });

  it('handles missing URL params gracefully', () => {
    window.location.search = '';
    const router = new HashRouter();
    expect(router.getParams()).toEqual({});
    router.destroy();
  });

  it('destroy removes event listener and clears listeners', () => {
    const router = new HashRouter();
    const callback = vi.fn();
    router.onRouteChange(callback);
    router.destroy();

    window.location.hash = '#navigation';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    expect(callback).not.toHaveBeenCalled();
  });
});
