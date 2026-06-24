/**
 * Minimal type declarations for leaflet-polylinedecorator.
 * Augments the Leaflet namespace with polylineDecorator and Symbol.arrowHead.
 */
import * as L from 'leaflet';

declare module 'leaflet' {
  interface PathOptions {
    fill?: boolean;
    fillOpacity?: number;
  }

  namespace Symbol {
    function arrowHead(options?: {
      pixelSize?: number;
      polygon?: boolean;
      headAngle?: number;
      pathOptions?: L.PathOptions;
    }): unknown;

    function dash(options?: {
      pixelSize?: number;
      pathOptions?: L.PathOptions;
    }): unknown;
  }

  function polylineDecorator(
    path: L.Polyline | L.LatLngExpression[],
    options?: {
      patterns?: Array<{
        offset?: number | string;
        endOffset?: number | string;
        repeat?: number | string;
        symbol?: unknown;
      }>;
    }
  ): L.Layer;
}

declare module 'leaflet-polylinedecorator' {
  // Side-effect import that extends the L namespace
}
