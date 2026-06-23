import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { GeolocationServiceImpl } from './geolocation-service';

describe('GeolocationService', () => {
  let service: GeolocationServiceImpl;

  beforeEach(() => {
    service = new GeolocationServiceImpl();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('requestPermission', () => {
    it('returns "denied" when navigator.geolocation is not available', async () => {
      vi.stubGlobal('navigator', {});
      const result = await service.requestPermission();
      expect(result).toBe('denied');
    });

    it('returns "granted" when getCurrentPosition succeeds', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn((success: PositionCallback) => {
          success({
            coords: { latitude: 50.1109, longitude: 8.6821 },
            timestamp: Date.now(),
          } as GeolocationPosition);
        }),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      const result = await service.requestPermission();
      expect(result).toBe('granted');
    });

    it('returns "denied" when permission is denied', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn(
          (_success: PositionCallback, error: PositionErrorCallback) => {
            error({
              code: 1,
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
              message: 'User denied',
            } as GeolocationPositionError);
          }
        ),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      const result = await service.requestPermission();
      expect(result).toBe('denied');
    });

    it('returns "denied" when position is unavailable', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn(
          (_success: PositionCallback, error: PositionErrorCallback) => {
            error({
              code: 2,
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
              message: 'Position unavailable',
            } as GeolocationPositionError);
          }
        ),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      const result = await service.requestPermission();
      expect(result).toBe('denied');
    });
  });

  describe('getCurrentPosition', () => {
    it('resolves with lat/lng on success', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn((success: PositionCallback) => {
          success({
            coords: { latitude: 50.1109, longitude: 8.6821 },
            timestamp: Date.now(),
          } as GeolocationPosition);
        }),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      const pos = await service.getCurrentPosition();
      expect(pos).toEqual({ lat: 50.1109, lng: 8.6821 });
    });

    it('rejects when geolocation API is not available', async () => {
      vi.stubGlobal('navigator', {});
      await expect(service.getCurrentPosition()).rejects.toThrow(
        'Geolocation API is not available'
      );
    });

    it('rejects with permission denied error', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn(
          (_success: PositionCallback, error: PositionErrorCallback) => {
            error({
              code: 1,
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
              message: 'User denied',
            } as GeolocationPositionError);
          }
        ),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      await expect(service.getCurrentPosition()).rejects.toThrow(
        'Geolocation permission denied'
      );
    });

    it('rejects with position unavailable error', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn(
          (_success: PositionCallback, error: PositionErrorCallback) => {
            error({
              code: 2,
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
              message: 'Position unavailable',
            } as GeolocationPositionError);
          }
        ),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      await expect(service.getCurrentPosition()).rejects.toThrow(
        'Geolocation position unavailable'
      );
    });

    it('rejects with timeout error', async () => {
      const mockGeolocation = {
        getCurrentPosition: vi.fn(
          (_success: PositionCallback, error: PositionErrorCallback) => {
            error({
              code: 3,
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
              message: 'Timeout',
            } as GeolocationPositionError);
          }
        ),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      await expect(service.getCurrentPosition()).rejects.toThrow(
        'Geolocation request timed out'
      );
    });
  });

  describe('watchPosition', () => {
    it('returns a no-op cleanup when geolocation is not available', () => {
      vi.stubGlobal('navigator', {});
      const cleanup = service.watchPosition(() => {});
      expect(cleanup).toBeTypeOf('function');
      // Should not throw
      cleanup();
    });

    it('calls callback with position updates', () => {
      const callback = vi.fn();
      let watchCallback: PositionCallback | null = null;

      const mockGeolocation = {
        watchPosition: vi.fn((success: PositionCallback) => {
          watchCallback = success;
          return 42;
        }),
        clearWatch: vi.fn(),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      service.watchPosition(callback);

      // Simulate position update
      watchCallback!({
        coords: { latitude: 50.1109, longitude: 8.6821 },
        timestamp: Date.now(),
      } as GeolocationPosition);

      expect(callback).toHaveBeenCalledWith({ lat: 50.1109, lng: 8.6821 });
    });

    it('returns cleanup function that calls clearWatch', () => {
      const mockGeolocation = {
        watchPosition: vi.fn(() => 42),
        clearWatch: vi.fn(),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      const cleanup = service.watchPosition(() => {});
      cleanup();

      expect(mockGeolocation.clearWatch).toHaveBeenCalledWith(42);
    });

    it('does not invoke callback on watch errors', () => {
      const callback = vi.fn();
      let errorCallback: PositionErrorCallback | null = null;

      const mockGeolocation = {
        watchPosition: vi.fn(
          (_success: PositionCallback, error: PositionErrorCallback) => {
            errorCallback = error;
            return 1;
          }
        ),
        clearWatch: vi.fn(),
      };
      vi.stubGlobal('navigator', { geolocation: mockGeolocation });

      service.watchPosition(callback);

      // Simulate an error — should not throw or invoke callback
      errorCallback!({
        code: 2,
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
        message: 'Position unavailable',
      } as GeolocationPositionError);

      expect(callback).not.toHaveBeenCalled();
    });
  });
});
