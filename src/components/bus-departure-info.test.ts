import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { BusDeparture } from '../types/index';

// Mock the departure service before importing the component
vi.mock('../services/departure-service', () => ({
  departureService: {
    subscribeToUpdates: vi.fn(() => vi.fn()),
  },
}));

import './bus-departure-info';
import { BusDepartureInfo } from './bus-departure-info';
import { departureService } from '../services/departure-service';

describe('BusDepartureInfo', () => {
  let element: BusDepartureInfo;

  beforeEach(() => {
    element = document.createElement('bus-departure-info') as BusDepartureInfo;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    vi.clearAllMocks();
  });

  it('renders nothing when no departures are set', () => {
    expect(element.innerHTML).toBe('');
  });

  it('renders next departure time formatted as HH:MM', () => {
    const departures: BusDeparture[] = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
      {
        departureTime: '2025-06-15T14:50:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
    ];

    element.departures = departures;

    expect(element.innerHTML).toContain('Nächste Abfahrt:');
    expect(element.innerHTML).toContain('14:30');
  });

  it('renders subsequent departures', () => {
    const departures: BusDeparture[] = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
      {
        departureTime: '2025-06-15T14:50:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
      {
        departureTime: '2025-06-15T15:10:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
    ];

    element.departures = departures;

    expect(element.innerHTML).toContain('Weitere Abfahrten:');
    expect(element.innerHTML).toContain('14:50');
    expect(element.innerHTML).toContain('15:10');
  });

  it('shows realtime unavailable notice when isRealtime is false', () => {
    const departures: BusDeparture[] = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: false,
      },
      {
        departureTime: '2025-06-15T14:50:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: false,
      },
    ];

    element.departures = departures;

    expect(element.innerHTML).toContain('Echtzeitdaten nicht verfügbar');
    expect(element.innerHTML).toContain('Zeiten basieren auf dem Fahrplan');
    expect(element.innerHTML).toContain('db-notification');
  });

  it('does not show realtime notice when all departures have isRealtime true', () => {
    const departures: BusDeparture[] = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
      {
        departureTime: '2025-06-15T14:50:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
    ];

    element.departures = departures;

    expect(element.innerHTML).not.toContain('Echtzeitdaten nicht verfügbar');
  });

  it('shows realtime notice if even one departure is not realtime', () => {
    const departures: BusDeparture[] = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
      {
        departureTime: '2025-06-15T14:50:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: false,
      },
    ];

    element.departures = departures;

    expect(element.innerHTML).toContain('Echtzeitdaten nicht verfügbar');
  });

  it('displays destination for the next departure', () => {
    const departures: BusDeparture[] = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
    ];

    element.departures = departures;

    expect(element.innerHTML).toContain('Wiener Neustadt Hbf');
  });

  it('subscribes to departure updates when stationId is set', () => {
    element.stationId = 'WIEN-HBF';

    expect(departureService.subscribeToUpdates).toHaveBeenCalledWith(
      'WIEN-HBF',
      expect.any(Function)
    );
  });

  it('subscribes via attribute', () => {
    element.setAttribute('stationid', 'WIEN-HBF');

    expect(departureService.subscribeToUpdates).toHaveBeenCalledWith(
      'WIEN-HBF',
      expect.any(Function)
    );
  });

  it('cleans up subscription on disconnect', () => {
    const unsubFn = vi.fn();
    vi.mocked(departureService.subscribeToUpdates).mockReturnValue(unsubFn);

    element.stationId = 'WIEN-HBF';
    document.body.removeChild(element);

    expect(unsubFn).toHaveBeenCalled();

    // Re-append so afterEach doesn't fail
    document.body.appendChild(element);
  });

  it('re-renders when departure service provides new data', () => {
    let capturedCallback: ((departures: BusDeparture[]) => void) | null = null;

    vi.mocked(departureService.subscribeToUpdates).mockImplementation(
      (_stationId, callback) => {
        capturedCallback = callback;
        return vi.fn();
      }
    );

    element.stationId = 'WIEN-HBF';
    expect(element.innerHTML).toBe('');

    // Simulate service update
    capturedCallback!([
      {
        departureTime: '2025-06-15T16:00:00+02:00',
        destination: 'Wien Meidling',
        busStop: 'Bussteig B1',
        isRealtime: true,
      },
      {
        departureTime: '2025-06-15T16:20:00+02:00',
        destination: 'Wien Meidling',
        busStop: 'Bussteig B1',
        isRealtime: true,
      },
    ]);

    expect(element.innerHTML).toContain('16:00');
    expect(element.innerHTML).toContain('Wien Meidling');
    expect(element.innerHTML).toContain('16:20');
  });

  it('uses db-card for layout', () => {
    element.departures = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
    ];

    expect(element.innerHTML).toContain('<db-card');
  });

  it('uses db-badge for time display', () => {
    element.departures = [
      {
        departureTime: '2025-06-15T14:30:00+02:00',
        destination: 'Wiener Neustadt Hbf',
        busStop: 'Bussteig A3',
        isRealtime: true,
      },
    ];

    expect(element.innerHTML).toContain('<db-badge');
  });
});
