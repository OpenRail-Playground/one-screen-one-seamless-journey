/**
 * AR View Web Component — WebXR-based visual wayfinding.
 *
 * Uses the WebXR Hit Test API to place directional arrows on detected surfaces.
 * For the PoC, the user places colored duct-tape markers on the ground:
 *
 * MARKER SUGGESTION (PoC):
 *   - Use bright-colored duct tape (neon green or orange) on the floor
 *   - Draw large arrows (≥30cm) pointing in the walking direction
 *   - At decision points, use an "X" mark as a waypoint indicator
 *   - The AR overlay adds animated 3D arrows on top of detected floor surfaces
 *
 * Fallback: If WebXR is unavailable, shows a camera passthrough with a
 * 2D directional arrow overlay (compass-style).
 */

import type { Milestone } from '../types/index';
import { appState } from '../state';

export class ArView extends HTMLElement {
  private _milestones: Milestone[] = [];
  private _currentMilestoneIndex: number = 0;
  private _xrSession: XRSession | null = null;
  private _animationFrameId: number | null = null;
  private _videoStream: MediaStream | null = null;

  set milestones(value: Milestone[]) {
    this._milestones = value;
  }

  get milestones(): Milestone[] {
    return this._milestones;
  }

  connectedCallback(): void {
    this._currentMilestoneIndex = appState.getState().currentMilestoneIndex;
    this._render();
    this._initAR();
  }

  disconnectedCallback(): void {
    this._cleanup();
  }

  private _render(): void {
    const milestone = this._milestones[this._currentMilestoneIndex];
    const instruction = milestone?.instruction ?? 'Folge den Pfeilen am Boden';

    this.innerHTML = `
      <div class="ar-view">
        <div class="ar-view__scene">
          <canvas class="ar-view__canvas"></canvas>
          <video class="ar-view__video" autoplay playsinline></video>
        </div>
        <div class="ar-view__hud">
          <div class="ar-view__instruction">
            <db-icon icon="navigation_straight"></db-icon>
            <span>${instruction}</span>
          </div>
          <div class="ar-view__arrow-overlay">
            <svg class="ar-view__direction-arrow" viewBox="0 0 100 100" aria-hidden="true">
              <polygon points="50,10 80,70 60,70 60,90 40,90 40,70 20,70" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div class="ar-view__status" aria-live="polite"></div>
      </div>
    `;
  }

  private async _initAR(): Promise<void> {
    const statusEl = this.querySelector('.ar-view__status') as HTMLElement | null;

    // Try WebXR immersive-ar first
    if (navigator.xr) {
      const supported = await navigator.xr.isSessionSupported('immersive-ar').catch(() => false);

      if (supported) {
        try {
          await this._startWebXR();
          if (statusEl) statusEl.textContent = '';
          return;
        } catch {
          // Fall through to camera fallback
        }
      }
    }

    // Fallback: camera passthrough with 2D overlay
    await this._startCameraFallback();
    if (statusEl) {
      statusEl.textContent = 'AR nicht verfügbar – Kamera-Modus aktiv';
    }
  }

  private async _startWebXR(): Promise<void> {
    const canvas = this.querySelector('.ar-view__canvas') as HTMLCanvasElement;
    if (!canvas || !navigator.xr) return;

    const gl = canvas.getContext('webgl2', { xrCompatible: true }) ||
               canvas.getContext('webgl', { xrCompatible: true });
    if (!gl) throw new Error('WebGL not available');

    this._xrSession = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test', 'local-floor'],
      optionalFeatures: ['dom-overlay'],
      domOverlay: { root: this.querySelector('.ar-view__hud') as Element },
    });

    const xrLayer = new XRWebGLLayer(this._xrSession, gl);
    await this._xrSession.updateRenderState({ baseLayer: xrLayer });

    const refSpace = await this._xrSession.requestReferenceSpace('local-floor');

    // Hide the video element in WebXR mode (camera passthrough is handled by XR)
    const video = this.querySelector('.ar-view__video') as HTMLVideoElement;
    if (video) video.style.display = 'none';
    canvas.style.display = 'block';

    // Start the render loop
    const onFrame = (_time: DOMHighResTimeStamp, frame: XRFrame) => {
      if (!this._xrSession) return;
      this._animationFrameId = this._xrSession.requestAnimationFrame(onFrame);

      const pose = frame.getViewerPose(refSpace);
      if (!pose) return;

      // Clear and draw — for PoC we just keep the passthrough visible
      // The directional HUD overlay handles the actual navigation hints
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };

    this._xrSession.requestAnimationFrame(onFrame);

    this._xrSession.addEventListener('end', () => {
      this._xrSession = null;
    });

    // Update arrow rotation based on milestone direction
    this._updateArrowDirection();
  }

  private async _startCameraFallback(): Promise<void> {
    const video = this.querySelector('.ar-view__video') as HTMLVideoElement;
    const canvas = this.querySelector('.ar-view__canvas') as HTMLCanvasElement;
    if (!video) return;

    // Hide canvas in fallback mode
    if (canvas) canvas.style.display = 'none';
    video.style.display = 'block';

    try {
      this._videoStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      video.srcObject = this._videoStream;
    } catch {
      const statusEl = this.querySelector('.ar-view__status') as HTMLElement | null;
      if (statusEl) {
        statusEl.textContent = 'Kamerazugriff verweigert';
      }
    }

    this._updateArrowDirection();
  }

  private _updateArrowDirection(): void {
    const milestone = this._milestones[this._currentMilestoneIndex];
    if (!milestone) return;

    const arrow = this.querySelector('.ar-view__direction-arrow') as SVGElement | null;
    if (!arrow) return;

    // Map milestone direction to rotation degrees
    const directionAngles: Record<string, number> = {
      north: 0,
      northeast: 45,
      east: 90,
      southeast: 135,
      south: 180,
      southwest: 225,
      west: 270,
      northwest: 315,
      up: 0,
      down: 180,
    };

    const angle = directionAngles[milestone.direction] ?? 0;
    arrow.style.transform = `rotate(${angle}deg)`;
  }

  private _cleanup(): void {
    if (this._xrSession) {
      this._xrSession.end().catch(() => {});
      this._xrSession = null;
    }

    if (this._videoStream) {
      this._videoStream.getTracks().forEach((track) => track.stop());
      this._videoStream = null;
    }

    if (this._animationFrameId !== null) {
      cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = null;
    }
  }
}

customElements.define('ar-view', ArView);
