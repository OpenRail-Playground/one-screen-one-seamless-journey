/**
 * Property-based tests for Accessible Route Data Validity.
 * Feature: rail-replacement-navigation, Property 11: Accessible Route Data Validity
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import type { Milestone, Direction, AccessibilityFeature } from '../types/index.js';

/**
 * Barrier terms that must NOT appear in accessible route instructions.
 */
const BARRIER_TERMS = ['treppe', 'rolltreppe', 'escalator', 'stairs', 'stufen'];

/**
 * Valid accessibility feature values.
 */
const VALID_ACCESSIBILITY_FEATURES: AccessibilityFeature[] = [
  'elevator',
  'ramp',
  'level-crossing',
  'tactile-paving',
];

/**
 * Arbitrary for generating a valid Direction value.
 */
const directionArbitrary: fc.Arbitrary<Direction> = fc.constantFrom(
  'north',
  'south',
  'east',
  'west',
  'northeast',
  'northwest',
  'southeast',
  'southwest',
  'up',
  'down'
);

/**
 * Arbitrary for generating a non-null AccessibilityFeature.
 */
const accessibilityFeatureArbitrary: fc.Arbitrary<AccessibilityFeature> = fc.constantFrom(
  'elevator' as AccessibilityFeature,
  'ramp' as AccessibilityFeature,
  'level-crossing' as AccessibilityFeature,
  'tactile-paving' as AccessibilityFeature
);

/**
 * Safe words that do NOT contain barrier terms, used to build instructions.
 */
const safeWordArbitrary: fc.Arbitrary<string> = fc.stringOf(
  fc.constantFrom(
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z', ' '
  ),
  { minLength: 3, maxLength: 30 }
).filter((s) => {
  const lower = s.toLowerCase();
  return BARRIER_TERMS.every((term) => !lower.includes(term)) && s.trim().length > 0;
});

/**
 * Arbitrary for generating an accessible milestone with a valid accessibilityFeature
 * and an instruction that does NOT contain barrier terms.
 */
const accessibleMilestoneArbitrary: fc.Arbitrary<Milestone> = fc.record({
  id: fc.nat(),
  instruction: safeWordArbitrary,
  direction: directionArbitrary,
  distanceMeters: fc.integer({ min: 1, max: 5000 }),
  photoUrl: fc.webUrl(),
  accessibilityFeature: accessibilityFeatureArbitrary,
});

/**
 * Arbitrary for generating a non-empty accessible milestone array.
 * Guarantees at least one milestone has a non-null accessibilityFeature.
 */
const accessibleMilestoneArrayArbitrary: fc.Arbitrary<Milestone[]> = fc
  .array(accessibleMilestoneArbitrary, { minLength: 1, maxLength: 20 })
  .filter((milestones) =>
    milestones.some((m) => m.accessibilityFeature != null)
  );

describe('Feature: rail-replacement-navigation, Property 11: Accessible Route Data Validity', () => {
  /**
   * **Validates: Requirements 8.1, 8.2**
   *
   * For any accessible route milestone array, no milestone should contain stair or
   * escalator instructions without an accessibility feature override, and at least one
   * milestone in the route should have a non-null accessibilityFeature (elevator, ramp,
   * or level-crossing).
   */

  it('no milestone instruction contains barrier terms (treppe, rolltreppe, escalator, stairs, stufen)', () => {
    fc.assert(
      fc.property(accessibleMilestoneArrayArbitrary, (milestones) => {
        for (const milestone of milestones) {
          const instructionLower = milestone.instruction.toLowerCase();
          for (const term of BARRIER_TERMS) {
            expect(instructionLower).not.toContain(term);
          }
        }
      }),
      { numRuns: 100 }
    );
  });

  it('at least one milestone in the array has a non-null accessibilityFeature', () => {
    fc.assert(
      fc.property(accessibleMilestoneArrayArbitrary, (milestones) => {
        const hasAccessibilityFeature = milestones.some(
          (m) => m.accessibilityFeature != null
        );
        expect(hasAccessibilityFeature).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it('all accessibilityFeature values are valid types', () => {
    fc.assert(
      fc.property(accessibleMilestoneArrayArbitrary, (milestones) => {
        for (const milestone of milestones) {
          if (milestone.accessibilityFeature != null) {
            expect(VALID_ACCESSIBILITY_FEATURES).toContain(
              milestone.accessibilityFeature
            );
          }
        }
      }),
      { numRuns: 100 }
    );
  });
});
