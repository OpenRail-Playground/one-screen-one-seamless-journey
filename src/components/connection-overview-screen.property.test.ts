/**
 * Property-based tests for ConnectionOverviewScreen rendering.
 * Feature: rail-replacement-navigation, Property 4: Connection List Completeness
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { renderConnectionList, formatDepartureTime } from './connection-overview-screen.js';
import type { Connection } from '../types/index.js';

/** Replicates the escapeHtml logic used in the component */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Arbitrary for generating valid ISO 8601 date strings.
 * Generates dates within a reasonable range for departure times.
 */
const isoDateArbitrary = fc
  .date({
    min: new Date('2020-01-01T00:00:00Z'),
    max: new Date('2030-12-31T23:59:59Z'),
  })
  .map((d) => d.toISOString());

/**
 * Arbitrary for generating non-empty strings suitable for connection fields.
 * Uses printable ASCII characters to ensure meaningful test data.
 */
const nonEmptyStringArbitrary = fc.string({ minLength: 1, maxLength: 50 }).filter((s) => s.trim().length > 0);

/**
 * Arbitrary for generating a valid Connection object.
 */
const connectionArbitrary: fc.Arbitrary<Connection> = fc.record({
  id: fc.uuid(),
  trainNumber: nonEmptyStringArbitrary,
  routeName: nonEmptyStringArbitrary,
  destination: nonEmptyStringArbitrary,
  departureTime: isoDateArbitrary,
  busStop: nonEmptyStringArbitrary,
  disruption: nonEmptyStringArbitrary,
});

/**
 * Arbitrary for generating non-empty arrays of connections.
 */
const nonEmptyConnectionsArbitrary = fc.array(connectionArbitrary, { minLength: 1, maxLength: 20 });

describe('Feature: rail-replacement-navigation, Property 4: Connection List Completeness', () => {
  /**
   * **Validates: Requirements 3.1, 3.3**
   *
   * For any non-empty array of Connection objects, the Connection Overview renderer
   * should produce output that contains the destination, departure time, and bus stop
   * for every connection in the array, with no connections omitted.
   */

  it('rendered output contains the escaped destination for every connection', () => {
    fc.assert(
      fc.property(nonEmptyConnectionsArbitrary, (connections) => {
        const output = renderConnectionList(connections);
        for (const connection of connections) {
          const escapedDestination = escapeHtml(connection.destination);
          expect(output).toContain(escapedDestination);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('rendered output contains the formatted departure time (HH:MM) for every connection', () => {
    fc.assert(
      fc.property(nonEmptyConnectionsArbitrary, (connections) => {
        const output = renderConnectionList(connections);
        for (const connection of connections) {
          const formattedTime = formatDepartureTime(connection.departureTime);
          expect(output).toContain(formattedTime);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('rendered output contains the escaped bus stop for every connection', () => {
    fc.assert(
      fc.property(nonEmptyConnectionsArbitrary, (connections) => {
        const output = renderConnectionList(connections);
        for (const connection of connections) {
          const escapedBusStop = escapeHtml(connection.busStop);
          expect(output).toContain(escapedBusStop);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('rendered output contains all three fields (destination, time, bus stop) for every connection simultaneously', () => {
    fc.assert(
      fc.property(nonEmptyConnectionsArbitrary, (connections) => {
        const output = renderConnectionList(connections);
        for (const connection of connections) {
          const escapedDestination = escapeHtml(connection.destination);
          const formattedTime = formatDepartureTime(connection.departureTime);
          const escapedBusStop = escapeHtml(connection.busStop);

          expect(output).toContain(escapedDestination);
          expect(output).toContain(formattedTime);
          expect(output).toContain(escapedBusStop);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('formatDepartureTime produces HH:MM format for valid ISO strings', () => {
    fc.assert(
      fc.property(isoDateArbitrary, (isoString) => {
        const result = formatDepartureTime(isoString);
        // Result should match HH:MM pattern (German locale uses 24h format)
        expect(result).toMatch(/^\d{2}:\d{2}$/);
      }),
      { numRuns: 100 }
    );
  });
});
