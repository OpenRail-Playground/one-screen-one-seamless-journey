import { describe, it, expect, beforeEach, vi } from 'vitest';
import { RouteDataServiceImpl } from './route-data-service';
import type { StationRoute } from '../types/index';

const mockStationRoute: StationRoute = {
  stationId: 'FFM-HBF',
  stationName: 'Frankfurt (Main) Hbf',
  platformId: '7',
  connections: [
    {
      id: 'conn-1',
      trainNumber: 'RE 50',
      routeName: 'Frankfurt - Mannheim',
      destination: 'Mannheim Hbf',
      departureTime: '2025-06-15T14:30:00+02:00',
      busStop: 'Bussteig A3',
      disruption: 'Streckensperrung zwischen Frankfurt Süd und Darmstadt',
    },
  ],
  routes: {
    standard: [
      {
        id: 1,
        instruction: 'Treppe runter Richtung Ausgang Süd',
        direction: 'down',
        distanceMeters: 30,
        photoUrl: '/data/photos/FFM-HBF/step-1.jpg',
      },
      {
        id: 2,
        instruction: 'Links abbiegen',
        direction: 'west',
        distanceMeters: 80,
        photoUrl: '/data/photos/FFM-HBF/step-2.jpg',
      },
    ],
    accessible: [
      {
        id: 1,
        instruction: 'Aufzug nehmen zu Ebene 0',
        direction: 'down',
        distanceMeters: 15,
        photoUrl: '/data/photos/FFM-HBF/acc-step-1.jpg',
        accessibilityFeature: 'elevator',
      },
    ],
  },
};

function createFetchMock(response: Partial<Response> & { json: () => Promise<unknown> }) {
  return vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    ...response,
  });
}

describe('RouteDataServiceImpl', () => {
  let service: RouteDataServiceImpl;

  beforeEach(() => {
    service = new RouteDataServiceImpl();
    vi.restoreAllMocks();
  });

  describe('getStationRoute', () => {
    it('fetches route data from the correct URL', async () => {
      const fetchMock = createFetchMock({
        json: () => Promise.resolve(mockStationRoute),
      });
      vi.stubGlobal('fetch', fetchMock);

      await service.getStationRoute('FFM-HBF', '7');

      expect(fetchMock).toHaveBeenCalledWith('/data/routes/FFM-HBF.json');
    });

    it('returns the parsed StationRoute data', async () => {
      vi.stubGlobal('fetch', createFetchMock({
        json: () => Promise.resolve(mockStationRoute),
      }));

      const result = await service.getStationRoute('FFM-HBF', '7');

      expect(result.stationId).toBe('FFM-HBF');
      expect(result.stationName).toBe('Frankfurt (Main) Hbf');
      expect(result.connections).toHaveLength(1);
      expect(result.routes.standard).toHaveLength(2);
      expect(result.routes.accessible).toHaveLength(1);
    });

    it('caches route data after first fetch', async () => {
      const fetchMock = createFetchMock({
        json: () => Promise.resolve(mockStationRoute),
      });
      vi.stubGlobal('fetch', fetchMock);

      await service.getStationRoute('FFM-HBF', '7');
      await service.getStationRoute('FFM-HBF', '7');

      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('throws a descriptive error on network failure', async () => {
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));

      await expect(service.getStationRoute('FFM-HBF', '7')).rejects.toThrow(
        'Routendaten für Station "FFM-HBF" konnten nicht geladen werden: Netzwerkfehler'
      );
    });

    it('throws a descriptive error on HTTP error response', async () => {
      vi.stubGlobal('fetch', createFetchMock({
        ok: false,
        status: 404,
        json: () => Promise.resolve({}),
      }));

      await expect(service.getStationRoute('UNKNOWN', '1')).rejects.toThrow(
        'Routendaten für Station "UNKNOWN" nicht gefunden (HTTP 404)'
      );
    });

    it('throws a descriptive error on invalid JSON', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: () => Promise.reject(new SyntaxError('Unexpected token')),
      }));

      await expect(service.getStationRoute('FFM-HBF', '7')).rejects.toThrow(
        'Routendaten für Station "FFM-HBF" sind ungültig (JSON-Parsing fehlgeschlagen)'
      );
    });

    it('encodes the stationId in the URL', async () => {
      const fetchMock = createFetchMock({
        json: () => Promise.resolve(mockStationRoute),
      });
      vi.stubGlobal('fetch', fetchMock);

      await service.getStationRoute('station with spaces', '7');

      expect(fetchMock).toHaveBeenCalledWith('/data/routes/station%20with%20spaces.json');
    });
  });

  describe('getMilestones', () => {
    beforeEach(async () => {
      vi.stubGlobal('fetch', createFetchMock({
        json: () => Promise.resolve(mockStationRoute),
      }));
      await service.getStationRoute('FFM-HBF', '7');
    });

    it('returns standard milestones when mode is standard', () => {
      const milestones = service.getMilestones('FFM-HBF', 'conn-1', 'standard');

      expect(milestones).toHaveLength(2);
      expect(milestones[0].instruction).toBe('Treppe runter Richtung Ausgang Süd');
    });

    it('returns accessible milestones when mode is accessible', () => {
      const milestones = service.getMilestones('FFM-HBF', 'conn-1', 'accessible');

      expect(milestones).toHaveLength(1);
      expect(milestones[0].instruction).toBe('Aufzug nehmen zu Ebene 0');
      expect(milestones[0].accessibilityFeature).toBe('elevator');
    });

    it('throws an error if no cached data exists for the station', () => {
      expect(() => service.getMilestones('UNKNOWN', 'conn-1', 'standard')).toThrow(
        'Keine gecachten Routendaten für Station "UNKNOWN". Bitte zuerst getStationRoute() aufrufen.'
      );
    });
  });
});
