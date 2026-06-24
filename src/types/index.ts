/**
 * Core type definitions for the Rail Replacement Navigation application.
 *
 * These interfaces define the data models used throughout the application
 * for station routes, connections, milestones, bus departures, and navigation state.
 */

/** Compass and vertical directions for milestone navigation arrows */
export type Direction =
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'northeast'
  | 'northwest'
  | 'southeast'
  | 'southwest'
  | 'up'
  | 'down';

/** Accessibility features available on barrier-free route milestones */
export type AccessibilityFeature =
  | 'elevator'
  | 'ramp'
  | 'level-crossing'
  | 'tactile-paving';

/** Screen identifiers for hash-based routing */
export type Screen =
  | 'scan'
  | 'confirmation'
  | 'connections'
  | 'preview'
  | 'navigation';

/** A single waypoint step in the navigation route */
export interface Milestone {
  id: number;
  instruction: string;
  direction: Direction;
  distanceMeters: number;
  photoUrl: string;
  accessibilityFeature?: AccessibilityFeature;
}

/** A rail replacement connection departing from the station */
export interface Connection {
  id: string;
  trainNumber: string;
  routeName: string;
  destination: string;
  departureTime: string; // ISO 8601
  busStop: string;
  disruption: string;
}

/** Complete route data for a station, including standard and accessible routes */
export interface StationRoute {
  stationId: string;
  stationName: string;
  platformId: string;
  connections: Connection[];
  routes: {
    standard: Milestone[];
    accessible: Milestone[];
  };
  exitLocation?: { lat: number; lng: number };
  busStopLocation?: { lat: number; lng: number };
  routeGeoJSON?: GeoJSON.LineString;
}

/** A bus departure entry with real-time status */
export interface BusDeparture {
  departureTime: string; // ISO 8601
  destination: string;
  busStop: string;
  isRealtime: boolean;
}

/** Application-wide navigation state */
export interface NavigationState {
  currentScreen: Screen;
  selectedConnection: Connection | null;
  navigationMode: 'standard' | 'accessible';
  currentMilestoneIndex: number;
  milestones: Milestone[];
  busDepartures: BusDeparture[];
  geolocationPermission: 'granted' | 'denied' | 'prompt';
  activeView: 'text' | 'map';
}
