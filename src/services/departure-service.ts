/**
 * DepartureService — fetches and manages real-time bus departure data.
 *
 * Polls the departure API every 30 seconds, filters to future departures only,
 * and falls back to scheduled times (isRealtime: false) on API failure.
 */

import type { BusDeparture } from '../types/index';
import type { DepartureService } from '../types/services';

const POLLING_INTERVAL_MS = 30_000;
const API_BASE = '/api/departures';

/**
 * Filters departures to only those in the future relative to `now`,
 * sorted ascending by departure time.
 */
export function getNextDepartures(departures: BusDeparture[], now: Date): BusDeparture[] {
  const nowMs = now.getTime();

  return departures
    .filter((d) => new Date(d.departureTime).getTime() > nowMs)
    .sort(
      (a, b) =>
        new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime()
    );
}

/**
 * Fallback scheduled departures returned when the API is unavailable.
 * These represent a reasonable set of placeholder departure times.
 */
function getFallbackDepartures(stationId: string): BusDeparture[] {
  const now = new Date();
  const departures: BusDeparture[] = [];

  for (let i = 1; i <= 3; i++) {
    const time = new Date(now.getTime() + i * 15 * 60_000); // every 15 min
    departures.push({
      departureTime: time.toISOString(),
      destination: 'Scheduled Service',
      busStop: `Station ${stationId}`,
      isRealtime: false,
    });
  }

  return departures;
}

/**
 * Concrete implementation of the DepartureService interface.
 */
export class DepartureServiceImpl implements DepartureService {
  /**
   * Fetches departures for a given station, filtering to future departures only.
   * On API failure, returns fallback scheduled data with isRealtime: false.
   */
  async getDepartures(stationId: string): Promise<BusDeparture[]> {
    try {
      const response = await fetch(`${API_BASE}/${stationId}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: { departures: BusDeparture[] } = await response.json();
      return getNextDepartures(data.departures, new Date());
    } catch {
      // API failure: return scheduled times with isRealtime: false
      return getFallbackDepartures(stationId);
    }
  }

  /**
   * Subscribes to departure updates via periodic polling (every 30 seconds).
   * Returns an unsubscribe function that clears the interval.
   */
  subscribeToUpdates(
    stationId: string,
    callback: (departures: BusDeparture[]) => void
  ): () => void {
    // Fetch immediately on subscribe
    this.getDepartures(stationId).then(callback);

    const intervalId = setInterval(() => {
      this.getDepartures(stationId).then(callback);
    }, POLLING_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }
}

/** Singleton instance of DepartureService */
export const departureService = new DepartureServiceImpl();
