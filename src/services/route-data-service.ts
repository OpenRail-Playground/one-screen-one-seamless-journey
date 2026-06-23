/**
 * RouteDataService - Fetches and caches static route JSON data per station.
 *
 * Loads route data from /data/routes/{stationId}.json and provides
 * access to milestones based on navigation mode (standard or accessible).
 */

import type { Milestone, StationRoute } from '../types/index';
import type { RouteDataService } from '../types/services';

export class RouteDataServiceImpl implements RouteDataService {
  private cache: Map<string, StationRoute> = new Map();

  /**
   * Fetch the station route data for a given station and platform.
   * Caches the result in memory after the first successful fetch.
   *
   * @param stationId - Station identifier (e.g., "WIEN-HBF")
   * @param platformId - Platform identifier for validation
   * @returns The station route data
   * @throws Error if the fetch fails or station data is not found
   */
  async getStationRoute(stationId: string, platformId: string): Promise<StationRoute> {
    const cached = this.cache.get(stationId);
    if (cached) {
      return cached;
    }

    const url = `/data/routes/${encodeURIComponent(stationId)}.json`;

    let response: Response;
    try {
      response = await fetch(url);
    } catch (error) {
      throw new Error(
        `Routendaten für Station "${stationId}" konnten nicht geladen werden: Netzwerkfehler`
      );
    }

    if (!response.ok) {
      throw new Error(
        `Routendaten für Station "${stationId}" nicht gefunden (HTTP ${response.status})`
      );
    }

    let data: StationRoute;
    try {
      data = await response.json();
    } catch {
      throw new Error(
        `Routendaten für Station "${stationId}" sind ungültig (JSON-Parsing fehlgeschlagen)`
      );
    }

    this.cache.set(stationId, data);
    return data;
  }

  /**
   * Get milestones for a given station and mode from cached route data.
   *
   * @param stationId - Station identifier
   * @param connectionId - Connection identifier (for future use / validation)
   * @param mode - Navigation mode: 'standard' or 'accessible'
   * @returns Array of milestones for the requested mode
   * @throws Error if no cached data exists for the station
   */
  getMilestones(
    stationId: string,
    connectionId: string,
    mode: 'standard' | 'accessible'
  ): Milestone[] {
    const cached = this.cache.get(stationId);
    if (!cached) {
      throw new Error(
        `Keine gecachten Routendaten für Station "${stationId}". Bitte zuerst getStationRoute() aufrufen.`
      );
    }

    return cached.routes[mode];
  }
}

/** Singleton instance of RouteDataService */
export const routeDataService = new RouteDataServiceImpl();
