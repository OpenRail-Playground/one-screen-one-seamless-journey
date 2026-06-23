/**
 * Property-based tests for the URL parser (router.ts).
 * Feature: rail-replacement-navigation
 *
 * Uses fast-check for property-based testing with vitest as the test runner.
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { parseUrlParams } from './router';

describe('Feature: rail-replacement-navigation, Property 2: Malformed URL Rejection', () => {
  /**
   * **Validates: Requirements 1.4**
   *
   * For any string that does not conform to the expected URL format
   * (missing station parameter, missing platform parameter, or invalid characters),
   * the URL parser should return an error result and never produce a valid station/platform pair.
   */

  it('rejects URLs with only station param (no platform)', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (station) => {
          const searchString = `?station=${encodeURIComponent(station)}`;
          const result = parseUrlParams(searchString);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('rejects URLs with only platform param (no station)', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (platform) => {
          const searchString = `?platform=${encodeURIComponent(platform)}`;
          const result = parseUrlParams(searchString);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('rejects URLs where station is empty or whitespace', () => {
    fc.assert(
      fc.property(
        fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r')),
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (emptyStation, platform) => {
          const searchString = `?station=${encodeURIComponent(emptyStation)}&platform=${encodeURIComponent(platform)}`;
          const result = parseUrlParams(searchString);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('rejects URLs where platform is empty or whitespace', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r')),
        (station, emptyPlatform) => {
          const searchString = `?station=${encodeURIComponent(station)}&platform=${encodeURIComponent(emptyPlatform)}`;
          const result = parseUrlParams(searchString);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  it('rejects completely random strings (no query param format)', () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => !s.includes('station=') || !s.includes('platform=')),
        (randomString) => {
          const result = parseUrlParams(randomString);
          // If it parsed to non-null, both station and platform must be present and non-empty
          // But since our filter ensures at least one param key is missing, result should be null
          if (result !== null) {
            // This would be a violation - parseUrlParams produced a result
            // from a string missing station= or platform=
            expect(result).toBeNull();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('rejects empty string input', () => {
    fc.assert(
      fc.property(
        fc.constant(''),
        (emptyString) => {
          const result = parseUrlParams(emptyString);
          expect(result).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });
});
