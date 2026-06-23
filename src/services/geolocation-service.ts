/**
 * GeolocationService - Wraps the browser Geolocation API.
 *
 * Provides methods to request permission, get the current position,
 * and watch position changes. Handles permission denied and
 * position unavailable errors gracefully.
 *
 * @validates Requirements 10.1, 10.2, 10.3, 10.4
 */

import type { GeolocationService } from '../types/services';

export class GeolocationServiceImpl implements GeolocationService {
  /**
   * Requests geolocation permission by triggering a getCurrentPosition call.
   * Returns 'granted' if the browser provides a position, 'denied' otherwise.
   *
   * If navigator.geolocation is not available (e.g., non-HTTPS context),
   * returns 'denied' immediately.
   */
  async requestPermission(): Promise<'granted' | 'denied'> {
    if (!navigator.geolocation) {
      return 'denied';
    }

    try {
      await this.getCurrentPosition();
      return 'granted';
    } catch {
      return 'denied';
    }
  }

  /**
   * Returns the device's current position as { lat, lng }.
   * Wraps navigator.geolocation.getCurrentPosition in a Promise.
   *
   * Throws an error if:
   * - Geolocation API is not available
   * - Permission is denied
   * - Position is unavailable
   * - Request times out
   */
  getCurrentPosition(): Promise<{ lat: number; lng: number }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation API is not available'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          reject(this.mapGeolocationError(error));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 30000,
        }
      );
    });
  }

  /**
   * Watches the device's position and invokes the callback on each update.
   * Returns a cleanup function that stops watching when called.
   *
   * If navigator.geolocation is not available, the callback is never
   * invoked and the returned cleanup function is a no-op.
   */
  watchPosition(callback: (pos: { lat: number; lng: number }) => void): () => void {
    if (!navigator.geolocation) {
      return () => {};
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        callback({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        // Errors during watch are silently ignored — the map continues
        // to display without a live position marker per Requirement 10.3.
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }

  /**
   * Maps a GeolocationPositionError to a descriptive Error instance.
   */
  private mapGeolocationError(error: GeolocationPositionError): Error {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return new Error('Geolocation permission denied');
      case error.POSITION_UNAVAILABLE:
        return new Error('Geolocation position unavailable');
      case error.TIMEOUT:
        return new Error('Geolocation request timed out');
      default:
        return new Error('Geolocation error');
    }
  }
}

/** Singleton instance of GeolocationService */
export const geolocationService: GeolocationService = new GeolocationServiceImpl();
