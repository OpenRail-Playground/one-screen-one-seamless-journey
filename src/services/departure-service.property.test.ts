import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { getNextDepartures } from './departure-service';
import type { BusDeparture } from '../types/index';

/**
 * Property-Based Tests for Next Departures Computation
 * Feature: rail-replacement-navigation, Property 6: Next Departures Computation
 *
 * Validates: Requirements 4.5, 5.4, 6.1, 6.2, 6.3
 *
 * For any non-empty array of BusDeparture objects and any current timestamp,
 * the "next departures" computation should return departures ordered by time
 * where all returned departures have a departure time strictly after the current
 * timestamp, and the first returned departure is the earliest future departure
 * in the array.
 */

/** Arbitrary for generating random BusDeparture objects with ISO 8601 times */
const busDepartureArb = fc.record({
  departureTime: fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') }).map(
    (d) => d.toISOString(),
  ),
  destination: fc.string({ minLength: 1, maxLength: 30 }),
  busStop: fc.string({ minLength: 1, maxLength: 20 }),
  isRealtime: fc.boolean(),
});

/** Arbitrary for generating a non-empty array of BusDeparture objects */
const departuresArb = fc.array(busDepartureArb, { minLength: 1, maxLength: 20 });

/** Arbitrary for generating a random "now" timestamp */
const nowArb = fc.date({ min: new Date('2020-01-01'), max: new Date('2030-12-31') });

describe('Feature: rail-replacement-navigation, Property 6: Next Departures Computation', () => {
  it('all returned departures have departureTime strictly after now', () => {
    fc.assert(
      fc.property(departuresArb, nowArb, (departures, now) => {
        const result = getNextDepartures(departures, now);
        const nowMs = now.getTime();

        for (const dep of result) {
          expect(new Date(dep.departureTime).getTime()).toBeGreaterThan(nowMs);
        }
      }),
      { numRuns: 100 },
    );
  });

  it('the returned array is sorted ascending by departureTime', () => {
    fc.assert(
      fc.property(departuresArb, nowArb, (departures, now) => {
        const result = getNextDepartures(departures, now);

        for (let i = 1; i < result.length; i++) {
          const prevTime = new Date(result[i - 1].departureTime).getTime();
          const currTime = new Date(result[i].departureTime).getTime();
          expect(currTime).toBeGreaterThanOrEqual(prevTime);
        }
      }),
      { numRuns: 100 },
    );
  });

  it('the first returned element (if any) is the earliest future departure', () => {
    fc.assert(
      fc.property(departuresArb, nowArb, (departures, now) => {
        const result = getNextDepartures(departures, now);
        const nowMs = now.getTime();

        if (result.length === 0) return;

        // The first element should be the earliest future departure
        const firstTime = new Date(result[0].departureTime).getTime();

        // Check no future departure in the input is earlier
        for (const dep of departures) {
          const depTime = new Date(dep.departureTime).getTime();
          if (depTime > nowMs) {
            expect(firstTime).toBeLessThanOrEqual(depTime);
          }
        }
      }),
      { numRuns: 100 },
    );
  });

  it('no future departure from the input is missing from the output', () => {
    fc.assert(
      fc.property(departuresArb, nowArb, (departures, now) => {
        const result = getNextDepartures(departures, now);
        const nowMs = now.getTime();

        // Count future departures in original input
        const futureDepartures = departures.filter(
          (d) => new Date(d.departureTime).getTime() > nowMs,
        );

        // The result should contain exactly the same number of future departures
        expect(result.length).toBe(futureDepartures.length);

        // Every future departure from the input should be present in the output
        for (const dep of futureDepartures) {
          const found = result.some(
            (r) =>
              r.departureTime === dep.departureTime &&
              r.destination === dep.destination &&
              r.busStop === dep.busStop &&
              r.isRealtime === dep.isRealtime,
          );
          expect(found).toBe(true);
        }
      }),
      { numRuns: 100 },
    );
  });
});
