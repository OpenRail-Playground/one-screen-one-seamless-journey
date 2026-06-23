/**
 * Property-based tests for NavigationPreviewScreen rendering.
 * Feature: rail-replacement-navigation, Property 5: Navigation Preview Milestone Summary
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { renderPreviewSummary } from './navigation-preview-screen.js';
import type { Milestone, Direction, AccessibilityFeature } from '../types/index.js';

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
 * Arbitrary for generating an optional AccessibilityFeature.
 */
const accessibilityFeatureArbitrary: fc.Arbitrary<AccessibilityFeature | undefined> = fc.oneof(
  fc.constant(undefined),
  fc.constantFrom('elevator' as AccessibilityFeature, 'ramp' as AccessibilityFeature, 'level-crossing' as AccessibilityFeature, 'tactile-paving' as AccessibilityFeature)
);

/**
 * Arbitrary for generating a valid Milestone object.
 */
const milestoneArbitrary: fc.Arbitrary<Milestone> = fc.record({
  id: fc.nat(),
  instruction: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  direction: directionArbitrary,
  distanceMeters: fc.integer({ min: 1, max: 5000 }),
  photoUrl: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  accessibilityFeature: accessibilityFeatureArbitrary,
});

/**
 * Arbitrary for generating arrays of Milestone objects (including empty arrays).
 */
const milestonesArbitrary = fc.array(milestoneArbitrary, { minLength: 0, maxLength: 30 });

describe('Feature: rail-replacement-navigation, Property 5: Navigation Preview Milestone Summary', () => {
  /**
   * **Validates: Requirements 4.1**
   *
   * For any array of Milestones, the Navigation Preview renderer should produce a summary
   * that accounts for every milestone in the route (the count of rendered summary items
   * equals the count of milestones).
   */

  it('rendered summary contains the step count equal to the length of the milestones array', () => {
    fc.assert(
      fc.property(milestonesArbitrary, (milestones) => {
        const output = renderPreviewSummary(milestones);
        const expectedStepCount = milestones.length;

        // The rendered summary should contain the step count matching the milestones array length
        expect(output).toContain(`${expectedStepCount} Schritte`);
      }),
      { numRuns: 100 }
    );
  });

  it('rendered summary accounts for every milestone in the route', () => {
    fc.assert(
      fc.property(milestonesArbitrary, (milestones) => {
        const output = renderPreviewSummary(milestones);

        // Extract the step count number from the rendered output
        const stepCountMatch = output.match(/(\d+)\s+Schritte/);
        expect(stepCountMatch).not.toBeNull();

        const renderedCount = parseInt(stepCountMatch![1], 10);
        expect(renderedCount).toBe(milestones.length);
      }),
      { numRuns: 100 }
    );
  });
});
