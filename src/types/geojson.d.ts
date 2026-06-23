/**
 * Minimal GeoJSON type declarations for route polyline data.
 * These provide the subset of GeoJSON types needed by StationRoute.
 */

declare namespace GeoJSON {
  interface LineString {
    type: 'LineString';
    coordinates: [number, number][];
  }
}
