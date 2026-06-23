/**
 * Service interfaces for data fetching and device APIs.
 */

import type { BusDeparture, Milestone, StationRoute } from './index';

/** Service for fetching static route data per station */
export interface RouteDataService {
  getStationRoute(stationId: string, platformId: string): Promise<StationRoute>;
  getMilestones(
    stationId: string,
    connectionId: string,
    mode: 'standard' | 'accessible'
  ): Milestone[];
}

/** Service for real-time bus departure information */
export interface DepartureService {
  getDepartures(stationId: string): Promise<BusDeparture[]>;
  subscribeToUpdates(
    stationId: string,
    callback: (departures: BusDeparture[]) => void
  ): () => void;
}

/** Service wrapping the browser Geolocation API */
export interface GeolocationService {
  requestPermission(): Promise<'granted' | 'denied'>;
  getCurrentPosition(): Promise<{ lat: number; lng: number }>;
  watchPosition(
    callback: (pos: { lat: number; lng: number }) => void
  ): () => void;
}
