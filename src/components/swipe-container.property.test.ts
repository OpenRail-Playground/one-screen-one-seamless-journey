/**
 * Property-based tests for milestone index state transitions (swipe-container.ts).
 * Feature: rail-replacement-navigation
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { calculateNewIndex } from './swipe-container';

describe('Feature: rail-replacement-navigation, Property 8: Milestone Index State Transitions', () => {
  /**
   * **Validates: Requirements 5.2**
   *
   * For any milestone array of length N and any current index I (0 ≤ I < N),
   * swiping forward should produce index min(I+1, N-1) and swiping backward
   * should produce index max(I-1, 0).
   */

  it('forward swipe produces min(I+1, N-1)', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }).chain((total) =>
          fc.tuple(fc.constant(total), fc.integer({ min: 0, max: total - 1 }))
        ),
        ([total, currentIndex]) => {
          const result = calculateNewIndex(currentIndex, 'forward', total);
          const expected = Math.min(currentIndex + 1, total - 1);
          expect(result).toBe(expected);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('backward swipe produces max(I-1, 0)', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }).chain((total) =>
          fc.tuple(fc.constant(total), fc.integer({ min: 0, max: total - 1 }))
        ),
        ([total, currentIndex]) => {
          const result = calculateNewIndex(currentIndex, 'backward', total);
          const expected = Math.max(currentIndex - 1, 0);
          expect(result).toBe(expected);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('result is always in valid range [0, N-1]', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }).chain((total) =>
          fc.tuple(
            fc.constant(total),
            fc.integer({ min: 0, max: total - 1 }),
            fc.constantFrom('forward' as const, 'backward' as const)
          )
        ),
        ([total, currentIndex, direction]) => {
          const result = calculateNewIndex(currentIndex, direction, total);
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThanOrEqual(total - 1);
        }
      ),
      { numRuns: 100 }
    );
  });
});
