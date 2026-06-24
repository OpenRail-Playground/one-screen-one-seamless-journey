/**
 * Property-based tests for walking distance and duration calculation.
 * Feature: rail-replacement-navigation, Property 10: Walking Distance and Duration Calculation
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { calculateWalkingInfo, geoJSONCoordToLatLng } from './map-view.js';
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

describe('Feature: rail-replacement-navigation, Property 11: GeoJSON Coordinate Conversion', () => {
  /**
   * **Validates: Requirement 7.3**
   *
   * GeoJSON positions are [longitude, latitude, ?elevation].
   * Leaflet expects [latitude, longitude].
   * The conversion must correctly swap the axes for any valid coordinate.
   */

  const geoJSONPositionArb = fc.tuple(
    fc.double({ min: -180, max: 180, noNaN: true }), // longitude
    fc.double({ min: -90, max: 90, noNaN: true }),   // latitude
    fc.option(fc.double({ min: -500, max: 9000, noNaN: true })) // optional elevation
  ).map(([lng, lat, elev]) => elev !== null ? [lng, lat, elev] : [lng, lat]);

  it('output[0] equals input latitude (index 1)', () => {
    fc.assert(
      fc.property(geoJSONPositionArb, (coord) => {
        const [lat] = geoJSONCoordToLatLng(coord);
        expect(lat).toBe(coord[1]);
      }),
      { numRuns: 200 }
    );
  });

  it('output[1] equals input longitude (index 0)', () => {
    fc.assert(
      fc.property(geoJSONPositionArb, (coord) => {
        const [, lng] = geoJSONCoordToLatLng(coord);
        expect(lng).toBe(coord[0]);
      }),
      { numRuns: 200 }
    );
  });

  it('output is always a 2-tuple regardless of elevation presence', () => {
    fc.assert(
      fc.property(geoJSONPositionArb, (coord) => {
        const result = geoJSONCoordToLatLng(coord);
        expect(result).toHaveLength(2);
      }),
      { numRuns: 200 }
    );
  });

  it('output latitude stays within valid geographic range [-90, 90]', () => {
    fc.assert(
      fc.property(geoJSONPositionArb, (coord) => {
        const [lat] = geoJSONCoordToLatLng(coord);
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
      }),
      { numRuns: 200 }
    );
  });

  it('output longitude stays within valid geographic range [-180, 180]', () => {
    fc.assert(
      fc.property(geoJSONPositionArb, (coord) => {
        const [, lng] = geoJSONCoordToLatLng(coord);
        expect(lng).toBeGreaterThanOrEqual(-180);
        expect(lng).toBeLessThanOrEqual(180);
      }),
      { numRuns: 200 }
    );
  });
});
