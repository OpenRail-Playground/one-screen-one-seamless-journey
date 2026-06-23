/**
 * Property-based tests for walking distance and duration calculation.
 * Feature: rail-replacement-navigation, Property 10: Walking Distance and Duration Calculation
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { calculateWalkingInfo } from './map-view.js';
import type { Milestone, Direction } from '../types/index.js';

/**
 * Arbitrary generator for a valid Direction value.
 */
const directionArb: fc.Arbitrary<Direction> = fc.constantFrom(
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
 * Arbitrary generator for a Milestone with a positive distanceMeters value.
 */
const milestoneArb: fc.Arbitrary<Milestone> = fc.record({
  id: fc.nat(),
  instruction: fc.string({ minLength: 1 }),
  direction: directionArb,
  distanceMeters: fc.double({ min: 0.01, max: 10000, noNaN: true }),
  photoUrl: fc.string({ minLength: 1 }),
});

describe('Feature: rail-replacement-navigation, Property 10: Walking Distance and Duration Calculation', () => {
  /**
   * **Validates: Requirements 7.5**
   *
   * For any array of Milestones with positive distance values, the total walking
   * distance should equal the sum of all milestone distances, and the estimated
   * walking duration should equal the total distance divided by the assumed walking
   * speed (approximately 1.2 m/s).
   */

  it('totalMeters equals the sum of all milestone.distanceMeters', () => {
    fc.assert(
      fc.property(fc.array(milestoneArb, { minLength: 1, maxLength: 50 }), (milestones) => {
        const result = calculateWalkingInfo(milestones);
        const expectedTotal = milestones.reduce((sum, m) => sum + m.distanceMeters, 0);

        // Allow floating-point tolerance
        expect(result.totalMeters).toBeCloseTo(expectedTotal, 5);
      }),
      { numRuns: 100 }
    );
  });

  it('durationMinutes equals totalMeters / 1.2 / 60 (within floating point tolerance)', () => {
    fc.assert(
      fc.property(fc.array(milestoneArb, { minLength: 1, maxLength: 50 }), (milestones) => {
        const result = calculateWalkingInfo(milestones);
        const expectedDuration = result.totalMeters / 1.2 / 60;

        expect(result.durationMinutes).toBeCloseTo(expectedDuration, 5);
      }),
      { numRuns: 100 }
    );
  });

  it('both totalMeters and durationMinutes are non-negative', () => {
    fc.assert(
      fc.property(fc.array(milestoneArb, { minLength: 0, maxLength: 50 }), (milestones) => {
        const result = calculateWalkingInfo(milestones);

        expect(result.totalMeters).toBeGreaterThanOrEqual(0);
        expect(result.durationMinutes).toBeGreaterThanOrEqual(0);
      }),
      { numRuns: 100 }
    );
  });
});
