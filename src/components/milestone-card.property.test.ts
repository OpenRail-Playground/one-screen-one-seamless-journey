/**
 * Property-based tests for MilestoneCard rendering.
 * Feature: rail-replacement-navigation, Property 7: Milestone Rendering Completeness
 * Feature: rail-replacement-navigation, Property 12: Accessible Milestone Feature Label Rendering
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { renderMilestoneCard } from './milestone-card.js';
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
 * Arbitrary for generating a non-null AccessibilityFeature (always present).
 */
const accessibilityFeatureArbitrary: fc.Arbitrary<AccessibilityFeature> = fc.constantFrom(
  'elevator' as AccessibilityFeature,
  'ramp' as AccessibilityFeature,
  'level-crossing' as AccessibilityFeature,
  'tactile-paving' as AccessibilityFeature
);

/**
 * German labels for accessibility features matching the implementation.
 */
const FEATURE_LABELS: Record<AccessibilityFeature, string> = {
  elevator: 'Aufzug',
  ramp: 'Rampe',
  'level-crossing': 'Ebenerdiger Übergang',
  'tactile-paving': 'Taktile Leitung',
};

/**
 * Arbitrary for generating a Milestone that always has a non-null accessibilityFeature.
 */
const accessibleMilestoneArbitrary: fc.Arbitrary<Milestone> = fc.record({
  id: fc.nat(),
  instruction: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  direction: directionArbitrary,
  distanceMeters: fc.integer({ min: 1, max: 5000 }),
  photoUrl: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  accessibilityFeature: accessibilityFeatureArbitrary,
});

describe('Feature: rail-replacement-navigation, Property 12: Accessible Milestone Feature Label Rendering', () => {
  /**
   * **Validates: Requirements 8.4**
   *
   * For any Milestone with a non-null accessibilityFeature, the rendered output should
   * contain a visible label indicating which feature (elevator, ramp, level-crossing,
   * tactile-paving) is used at that step.
   */

  it('rendered output contains a db-badge element for accessible milestones', () => {
    fc.assert(
      fc.property(accessibleMilestoneArbitrary, (milestone) => {
        const output = renderMilestoneCard(milestone);

        // The rendered output must contain a <db-badge element
        expect(output).toContain('<db-badge');
      }),
      { numRuns: 100 }
    );
  });

  it('rendered output contains the correct German label for the accessibility feature', () => {
    fc.assert(
      fc.property(accessibleMilestoneArbitrary, (milestone) => {
        const output = renderMilestoneCard(milestone);
        const expectedLabel = FEATURE_LABELS[milestone.accessibilityFeature!];

        // The rendered output must contain the German label for the feature
        expect(output).toContain(expectedLabel);
      }),
      { numRuns: 100 }
    );
  });
});
