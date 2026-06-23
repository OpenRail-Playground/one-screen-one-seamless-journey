/**
 * Property-based tests for DotIndicator rendering.
 * Feature: rail-replacement-navigation, Property 9: Dot Indicator Correctness
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { renderDotIndicator } from './dot-indicator.js';

describe('Feature: rail-replacement-navigation, Property 9: Dot Indicator Correctness', () => {
  /**
   * **Validates: Requirements 5.3**
   *
   * For any milestone array of length N and any current index I, the Dot Indicator
   * should report total count equal to N and active position equal to I.
   */

  it('renders exactly N dot elements for a total of N milestones', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 50 }).chain((total) =>
          fc.tuple(fc.constant(total), fc.integer({ min: 0, max: total - 1 }))
        ),
        ([total, activeIndex]) => {
          const output = renderDotIndicator(total, activeIndex);

          // Count elements with class 'dot-indicator__dot'
          const dotMatches = output.match(/class="dot-indicator__dot[^"]*"/g);
          expect(dotMatches).not.toBeNull();
          expect(dotMatches!.length).toBe(total);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('renders exactly one dot with aria-selected="true"', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 50 }).chain((total) =>
          fc.tuple(fc.constant(total), fc.integer({ min: 0, max: total - 1 }))
        ),
        ([total, activeIndex]) => {
          const output = renderDotIndicator(total, activeIndex);

          // Count dots with aria-selected="true"
          const activeMatches = output.match(/aria-selected="true"/g);
          expect(activeMatches).not.toBeNull();
          expect(activeMatches!.length).toBe(1);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('the active dot is at the correct position (activeIndex)', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 50 }).chain((total) =>
          fc.tuple(fc.constant(total), fc.integer({ min: 0, max: total - 1 }))
        ),
        ([total, activeIndex]) => {
          const output = renderDotIndicator(total, activeIndex);

          // Extract all aria-selected values in order
          const ariaSelectedPattern = /aria-selected="(true|false)"/g;
          const selections: string[] = [];
          let match: RegExpExecArray | null;
          while ((match = ariaSelectedPattern.exec(output)) !== null) {
            selections.push(match[1]);
          }

          // Should have exactly `total` entries
          expect(selections.length).toBe(total);

          // The dot at activeIndex should be "true", all others "false"
          for (let i = 0; i < selections.length; i++) {
            if (i === activeIndex) {
              expect(selections[i]).toBe('true');
            } else {
              expect(selections[i]).toBe('false');
            }
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
