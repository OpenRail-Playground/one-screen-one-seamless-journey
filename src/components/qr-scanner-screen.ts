/**
 * QR Scanner Screen Web Component.
 *
 * Shows a live camera view and scans for QR codes.
 * On successful scan (any QR code), navigates to the main app flow
 * with hardcoded station parameters: ?station=WIEN-HBF&platform=7#confirmation
 *
 * Uses the qr-scanner library for camera access and QR detection.
 */

import QrScanner from 'qr-scanner';

export class QrScannerScreen extends HTMLElement {
  private scanner: QrScanner | null = null;
  private videoElement: HTMLVideoElement | null = null;

  connectedCallback(): void {
    this.render();
    this.startScanner();
  }

  disconnectedCallback(): void {
    this.stopScanner();
  }

  private render(): void {
    this.innerHTML = `
      <div class="qr-scanner-screen">
        <h2>QR-Code scannen</h2>
        <p class="qr-scanner-screen__hint">Richte die Kamera auf den QR-Code am Bahnsteig.</p>
        <div class="qr-scanner-screen__viewport">
          <video class="qr-scanner-screen__video"></video>
          <div class="qr-scanner-screen__overlay">
            <div class="qr-scanner-screen__frame"></div>
          </div>
        </div>
      </div>
    `;
  }

  private async startScanner(): Promise<void> {
    this.videoElement = this.querySelector('.qr-scanner-screen__video') as HTMLVideoElement;
    if (!this.videoElement) return;

    this.scanner = new QrScanner(
      this.videoElement,
      (result) => {
        this.onScanSuccess(result.data);
      },
      {
        highlightScanRegion: false,
        highlightCodeOutline: false,
        preferredCamera: 'environment',
      }
    );

    try {
      await this.scanner.start();
    } catch (error) {
      this.showCameraError();
    }
  }

  private stopScanner(): void {
    if (this.scanner) {
      this.scanner.stop();
      this.scanner.destroy();
      this.scanner = null;
    }
  }

  private onScanSuccess(_data: string): void {
    // Stop scanning immediately to avoid multiple triggers
    this.stopScanner();

    // Navigate to the app with hardcoded station params
    window.location.href = `${window.location.pathname}?station=WIEN-HBF&platform=7#confirmation`;
  }

  private showCameraError(): void {
    const viewport = this.querySelector('.qr-scanner-screen__viewport');
    if (viewport) {
      viewport.innerHTML = `
        <div class="qr-scanner-screen__error" role="alert">
          <db-icon icon="warning_triangle"></db-icon>
          <p>Kamerazugriff nicht möglich. Bitte erlaube den Zugriff auf die Kamera.</p>
        </div>
      `;
    }
  }
}

customElements.define('qr-scanner-screen', QrScannerScreen);
