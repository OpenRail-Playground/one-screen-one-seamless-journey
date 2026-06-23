/**
 * Property-based tests for the Journey Confirmation Screen renderer.
 * Feature: rail-replacement-navigation
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { renderConfirmationContent } from './journey-confirmation-screen';
import type { Connection } from '../types/index';

/**
 * Helper: replicates the escapeHtml logic used in the component
 * so we can predict what the rendered output should contain.
 */
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Arbitrary generator for Connection objects with random
 * trainNumber, routeName, and disruption strings.
 */
const connectionArbitrary: fc.Arbitrary<Connection> = fc.record({
  id: fc.string({ minLength: 1 }),
  trainNumber: fc.string({ minLength: 1 }),
  routeName: fc.string({ minLength: 1 }),
  destination: fc.string({ minLength: 1 }),
  departureTime: fc.string({ minLength: 1 }),
  busStop: fc.string({ minLength: 1 }),
  disruption: fc.string({ minLength: 1 }),
});

describe('Feature: rail-replacement-navigation, Property 3: Journey Confirmation Renders All Connection Fields', () => {
  /**
   * **Validates: Requirements 2.1**
   *
   * For any valid Connection object with trainNumber, routeName, and disruption,
   * the Journey Confirmation Screen renderer should produce output containing
   * all three field values.
   */

  it('rendered output contains the escaped trainNumber, routeName, and disruption for any valid Connection', () => {
    fc.assert(
      fc.property(connectionArbitrary, (connection) => {
        const output = renderConfirmationContent(connection);

        const escapedTrainNumber = escapeHtml(connection.trainNumber);
        const escapedRouteName = escapeHtml(connection.routeName);
        const escapedDisruption = escapeHtml(connection.disruption);

        expect(output).toContain(escapedTrainNumber);
        expect(output).toContain(escapedRouteName);
        expect(output).toContain(escapedDisruption);
      }),
      { numRuns: 100 }
    );
  });
});
