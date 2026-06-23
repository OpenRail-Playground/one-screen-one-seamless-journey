import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock the state module before importing the component
vi.mock('../state', () => ({
  appState: {
    setState: vi.fn(),
    getState: vi.fn(() => ({ currentMilestoneIndex: 0 })),
    subscribe: vi.fn(() => vi.fn()),
  },
}));

import './swipe-container';
import { SwipeContainer, calculateNewIndex } from './swipe-container';
import { appState } from '../state';

/**
 * Helper to create a TouchEvent with clientX/clientY since Touch constructor
 * is not available in the jsdom test environment.
 */
function createTouchEvent(
  type: string,
  clientX: number,
  clientY: number
): TouchEvent {
  const touchPoint = { clientX, clientY, identifier: 0, target: document.body };
  const event = new Event(type, { bubbles: true }) as unknown as TouchEvent;
  Object.defineProperty(event, 'touches', {
    value: type === 'touchend' ? [] : [touchPoint],
    configurable: true,
    writable: true,
  });
  Object.defineProperty(event, 'changedTouches', {
    value: [touchPoint],
    configurable: true,
    writable: true,
  });
  return event;
}

describe('calculateNewIndex', () => {
  it('increments index on forward swipe', () => {
    expect(calculateNewIndex(0, 'forward', 5)).toBe(1);
    expect(calculateNewIndex(2, 'forward', 5)).toBe(3);
  });

  it('decrements index on backward swipe', () => {
    expect(calculateNewIndex(3, 'backward', 5)).toBe(2);
    expect(calculateNewIndex(1, 'backward', 5)).toBe(0);
  });

  it('clamps forward to total - 1', () => {
    expect(calculateNewIndex(4, 'forward', 5)).toBe(4);
    expect(calculateNewIndex(0, 'forward', 1)).toBe(0);
  });

  it('clamps backward to 0', () => {
    expect(calculateNewIndex(0, 'backward', 5)).toBe(0);
  });

  it('handles total of 0 by returning 0', () => {
    expect(calculateNewIndex(0, 'forward', 0)).toBe(0);
    expect(calculateNewIndex(0, 'backward', 0)).toBe(0);
  });

  it('clamps currentIndex to valid range before computing', () => {
    // currentIndex beyond total is clamped
    expect(calculateNewIndex(10, 'forward', 5)).toBe(4);
    expect(calculateNewIndex(10, 'backward', 5)).toBe(3);
    // Negative currentIndex clamped to 0
    expect(calculateNewIndex(-1, 'forward', 5)).toBe(1);
    expect(calculateNewIndex(-1, 'backward', 5)).toBe(0);
  });
});

describe('SwipeContainer', () => {
  let element: SwipeContainer;

  beforeEach(() => {
    element = document.createElement('swipe-container') as SwipeContainer;
    element.total = 5;
    element.activeIndex = 0;
    document.body.appendChild(element);
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('registers as a custom element', () => {
    expect(customElements.get('swipe-container')).toBeDefined();
  });

  it('sets total via property', () => {
    element.total = 3;
    expect(element.total).toBe(3);
    expect(element.getAttribute('total')).toBe('3');
  });

  it('sets activeIndex via property', () => {
    element.activeIndex = 2;
    expect(element.activeIndex).toBe(2);
    expect(element.getAttribute('active-index')).toBe('2');
  });

  it('sets total via attribute', () => {
    element.setAttribute('total', '7');
    expect(element.total).toBe(7);
  });

  it('sets activeIndex via attribute', () => {
    element.total = 10;
    element.setAttribute('active-index', '3');
    expect(element.activeIndex).toBe(3);
  });

  it('clamps activeIndex to valid range', () => {
    element.total = 3;
    element.activeIndex = 10;
    expect(element.activeIndex).toBe(2);
  });

  it('emits swipe event on left swipe (forward)', () => {
    const handler = vi.fn();
    element.addEventListener('swipe', handler);

    // Simulate touch: start at x=200, end at x=100 (left swipe, deltaX = -100)
    element.dispatchEvent(createTouchEvent('touchstart', 200, 100));
    element.dispatchEvent(createTouchEvent('touchend', 100, 100));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ index: 1 });
  });

  it('emits swipe event on right swipe (backward)', () => {
    element.activeIndex = 2;
    const handler = vi.fn();
    element.addEventListener('swipe', handler);

    // Simulate touch: start at x=100, end at x=200 (right swipe, deltaX = +100)
    element.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    element.dispatchEvent(createTouchEvent('touchend', 200, 100));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ index: 1 });
  });

  it('does not emit swipe when distance is below threshold', () => {
    const handler = vi.fn();
    element.addEventListener('swipe', handler);

    // Swipe only 30px (below 50px threshold)
    element.dispatchEvent(createTouchEvent('touchstart', 200, 100));
    element.dispatchEvent(createTouchEvent('touchend', 170, 100));

    expect(handler).not.toHaveBeenCalled();
  });

  it('does not emit when already at first index and swiping backward', () => {
    element.activeIndex = 0;
    const handler = vi.fn();
    element.addEventListener('swipe', handler);

    // Right swipe (backward) at index 0
    element.dispatchEvent(createTouchEvent('touchstart', 100, 100));
    element.dispatchEvent(createTouchEvent('touchend', 200, 100));

    expect(handler).not.toHaveBeenCalled();
  });

  it('does not emit when already at last index and swiping forward', () => {
    element.activeIndex = 4; // last index for total=5
    const handler = vi.fn();
    element.addEventListener('swipe', handler);

    // Left swipe (forward) at last index
    element.dispatchEvent(createTouchEvent('touchstart', 200, 100));
    element.dispatchEvent(createTouchEvent('touchend', 100, 100));

    expect(handler).not.toHaveBeenCalled();
  });

  it('updates appState.currentMilestoneIndex on swipe', () => {
    element.dispatchEvent(createTouchEvent('touchstart', 200, 100));
    element.dispatchEvent(createTouchEvent('touchend', 100, 100));

    expect(appState.setState).toHaveBeenCalledWith({ currentMilestoneIndex: 1 });
  });
});
