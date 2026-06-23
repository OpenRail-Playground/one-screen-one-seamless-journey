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

describe('Feature: rail-replacement-navigation, Property 3: Journey Confirmation Renders Connection Info', () => {
  /**
   * **Validates: Requirements 2.1**
   *
   * For any valid Connection object, the Journey Confirmation Screen renderer
   * should produce output containing the disruption text (escaped) and the
   * ri-vehicle-route element for displaying the journey.
   */

  it('rendered output contains the escaped disruption and ri-vehicle-route for any valid Connection', () => {
    fc.assert(
      fc.property(connectionArbitrary, (connection) => {
        const output = renderConfirmationContent(connection);

        const escapedDisruption = escapeHtml(connection.disruption);

        // Disruption is still rendered as HTML text
        expect(output).toContain(escapedDisruption);
        // Journey visualization is via the ri-vehicle-route web component
        expect(output).toContain('<ri-vehicle-route');
      }),
      { numRuns: 100 }
    );
  });
});
