import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getNextDepartures, DepartureServiceImpl } from './departure-service';
import type { BusDeparture } from '../types/index';

describe('getNextDepartures', () => {
  const now = new Date('2025-06-15T14:00:00Z');

  it('filters out past departures', () => {
    const departures: BusDeparture[] = [
      { departureTime: '2025-06-15T13:00:00Z', destination: 'A', busStop: 'Stop 1', isRealtime: true },
      { departureTime: '2025-06-15T15:00:00Z', destination: 'B', busStop: 'Stop 2', isRealtime: true },
    ];

    const result = getNextDepartures(departures, now);
    expect(result).toHaveLength(1);
    expect(result[0].destination).toBe('B');
  });

  it('filters out departures exactly at now', () => {
    const departures: BusDeparture[] = [
      { departureTime: '2025-06-15T14:00:00Z', destination: 'A', busStop: 'Stop 1', isRealtime: true },
      { departureTime: '2025-06-15T14:30:00Z', destination: 'B', busStop: 'Stop 2', isRealtime: true },
    ];

    const result = getNextDepartures(departures, now);
    expect(result).toHaveLength(1);
    expect(result[0].destination).toBe('B');
  });

  it('sorts departures by time ascending', () => {
    const departures: BusDeparture[] = [
      { departureTime: '2025-06-15T16:00:00Z', destination: 'C', busStop: 'Stop 3', isRealtime: true },
      { departureTime: '2025-06-15T14:30:00Z', destination: 'A', busStop: 'Stop 1', isRealtime: true },
      { departureTime: '2025-06-15T15:00:00Z', destination: 'B', busStop: 'Stop 2', isRealtime: true },
    ];

    const result = getNextDepartures(departures, now);
    expect(result).toHaveLength(3);
    expect(result[0].destination).toBe('A');
    expect(result[1].destination).toBe('B');
    expect(result[2].destination).toBe('C');
  });

  it('returns empty array when all departures are in the past', () => {
    const departures: BusDeparture[] = [
      { departureTime: '2025-06-15T12:00:00Z', destination: 'A', busStop: 'Stop 1', isRealtime: true },
      { departureTime: '2025-06-15T13:00:00Z', destination: 'B', busStop: 'Stop 2', isRealtime: true },
    ];

    const result = getNextDepartures(departures, now);
    expect(result).toHaveLength(0);
  });

  it('returns empty array for empty input', () => {
    const result = getNextDepartures([], now);
    expect(result).toHaveLength(0);
  });
});

describe('DepartureServiceImpl', () => {
  let service: DepartureServiceImpl;

  beforeEach(() => {
    service = new DepartureServiceImpl();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe('getDepartures', () => {
    it('fetches and filters departures from API', async () => {
      const futureDeparture: BusDeparture = {
        departureTime: new Date(Date.now() + 60_000).toISOString(),
        destination: 'Wiener Neustadt',
        busStop: 'Bussteig A3',
        isRealtime: true,
      };

      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ departures: [futureDeparture] }),
      }));

      const result = await service.getDepartures('WIEN-HBF');
      expect(result).toHaveLength(1);
      expect(result[0].destination).toBe('Wiener Neustadt');
      expect(result[0].isRealtime).toBe(true);
    });

    it('returns fallback data on fetch failure', async () => {
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')));

      const result = await service.getDepartures('WIEN-HBF');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((d) => d.isRealtime === false)).toBe(true);
    });

    it('returns fallback data on non-ok response', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      }));

      const result = await service.getDepartures('WIEN-HBF');
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((d) => d.isRealtime === false)).toBe(true);
    });
  });

  describe('subscribeToUpdates', () => {
    it('calls callback immediately with departures', async () => {
      const futureDeparture: BusDeparture = {
        departureTime: new Date(Date.now() + 60_000).toISOString(),
        destination: 'Wiener Neustadt',
        busStop: 'Bussteig A3',
        isRealtime: true,
      };

      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ departures: [futureDeparture] }),
      }));

      const callback = vi.fn();
      const unsubscribe = service.subscribeToUpdates('WIEN-HBF', callback);

      // Wait for the initial async call to resolve
      await vi.advanceTimersByTimeAsync(0);
      expect(callback).toHaveBeenCalledTimes(1);

      unsubscribe();
    });

    it('polls every 30 seconds', async () => {
      const futureDeparture: BusDeparture = {
        departureTime: new Date(Date.now() + 3_600_000).toISOString(),
        destination: 'Wiener Neustadt',
        busStop: 'Bussteig A3',
        isRealtime: true,
      };

      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ departures: [futureDeparture] }),
      }));

      const callback = vi.fn();
      service.subscribeToUpdates('WIEN-HBF', callback);

      // Initial call
      await vi.advanceTimersByTimeAsync(0);
      expect(callback).toHaveBeenCalledTimes(1);

      // After 30 seconds — second poll
      await vi.advanceTimersByTimeAsync(30_000);
      expect(callback).toHaveBeenCalledTimes(2);

      // After another 30 seconds — third poll
      await vi.advanceTimersByTimeAsync(30_000);
      expect(callback).toHaveBeenCalledTimes(3);
    });

    it('returns unsubscribe function that stops polling', async () => {
      const futureDeparture: BusDeparture = {
        departureTime: new Date(Date.now() + 3_600_000).toISOString(),
        destination: 'Wiener Neustadt',
        busStop: 'Bussteig A3',
        isRealtime: true,
      };

      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ departures: [futureDeparture] }),
      }));

      const callback = vi.fn();
      const unsubscribe = service.subscribeToUpdates('WIEN-HBF', callback);

      // Initial call
      await vi.advanceTimersByTimeAsync(0);
      expect(callback).toHaveBeenCalledTimes(1);

      // Unsubscribe
      unsubscribe();

      // After 30 seconds — should NOT have polled again
      await vi.advanceTimersByTimeAsync(30_000);
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
