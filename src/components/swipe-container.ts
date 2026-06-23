/**
 * SwipeContainer Web Component
 *
 * Handles horizontal touch/swipe gestures to advance or go back between milestones.
 * Emits a 'swipe' custom event with the new index when the milestone changes.
 *
 * Usage:
 *   <swipe-container total="5" active-index="0">
 *     <!-- milestone content here -->
 *   </swipe-container>
 *
 * Properties:
 *   - total: number of milestones
 *   - activeIndex: current milestone index
 *
 * Events:
 *   - swipe: CustomEvent<{ index: number }> — fired when index changes via swipe
 */

import { appState } from '../state';

/** Minimum horizontal distance (px) for a swipe to register */
const SWIPE_THRESHOLD = 50;

/**
 * Calculates the new milestone index after a swipe gesture.
 *
 * - Swiping forward increments the index (clamped to total - 1).
 * - Swiping backward decrements the index (clamped to 0).
 *
 * @param currentIndex - The current milestone index (0-based)
 * @param direction - 'forward' to advance, 'backward' to go back
 * @param total - Total number of milestones
 * @returns The new clamped index
 */
export function calculateNewIndex(
  currentIndex: number,
  direction: 'forward' | 'backward',
  total: number
): number {
  if (total <= 0) {
    return 0;
  }

  const clampedCurrent = Math.max(0, Math.min(currentIndex, total - 1));

  if (direction === 'forward') {
    return Math.min(clampedCurrent + 1, total - 1);
  }

  return Math.max(clampedCurrent - 1, 0);
}

export class SwipeContainer extends HTMLElement {
  private _total = 0;
  private _activeIndex = 0;
  private _touchStartX = 0;
  private _touchStartY = 0;
  private _isSwiping = false;

  private _onTouchStart = this._handleTouchStart.bind(this);
  private _onTouchMove = this._handleTouchMove.bind(this);
  private _onTouchEnd = this._handleTouchEnd.bind(this);

  static get observedAttributes(): string[] {
    return ['total', 'active-index'];
  }

  /** Total number of milestones */
  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = Math.max(0, Math.floor(value));
    this.setAttribute('total', String(this._total));
  }

  /** Current active milestone index */
  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(value: number) {
    this._activeIndex = Math.max(0, Math.min(value, this._total - 1));
    this.setAttribute('active-index', String(this._activeIndex));
  }

  connectedCallback(): void {
    this.addEventListener('touchstart', this._onTouchStart, { passive: true });
    this.addEventListener('touchmove', this._onTouchMove, { passive: true });
    this.addEventListener('touchend', this._onTouchEnd);
  }

  disconnectedCallback(): void {
    this.removeEventListener('touchstart', this._onTouchStart);
    this.removeEventListener('touchmove', this._onTouchMove);
    this.removeEventListener('touchend', this._onTouchEnd);
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return;

    if (name === 'total') {
      this._total = Math.max(0, Math.floor(Number(newValue) || 0));
    } else if (name === 'active-index') {
      this._activeIndex = Math.max(0, Math.min(Number(newValue) || 0, this._total - 1));
    }
  }

  private _handleTouchStart(e: TouchEvent): void {
    if (e.touches.length !== 1) return;
    this._touchStartX = e.touches[0].clientX;
    this._touchStartY = e.touches[0].clientY;
    this._isSwiping = true;
  }

  private _handleTouchMove(e: TouchEvent): void {
    if (!this._isSwiping || e.touches.length !== 1) return;

    // If vertical movement exceeds horizontal, cancel the swipe detection
    const deltaX = Math.abs(e.touches[0].clientX - this._touchStartX);
    const deltaY = Math.abs(e.touches[0].clientY - this._touchStartY);

    if (deltaY > deltaX) {
      this._isSwiping = false;
    }
  }

  private _handleTouchEnd(e: TouchEvent): void {
    if (!this._isSwiping) return;
    this._isSwiping = false;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - this._touchStartX;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    // Swipe left (negative deltaX) → advance forward
    // Swipe right (positive deltaX) → go backward
    const direction: 'forward' | 'backward' = deltaX < 0 ? 'forward' : 'backward';
    const newIndex = calculateNewIndex(this._activeIndex, direction, this._total);

    if (newIndex !== this._activeIndex) {
      this._activeIndex = newIndex;
      this.setAttribute('active-index', String(this._activeIndex));

      // Update app state
      appState.setState({ currentMilestoneIndex: newIndex });

      // Emit swipe event
      this.dispatchEvent(
        new CustomEvent('swipe', {
          detail: { index: newIndex },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

customElements.define('swipe-container', SwipeContainer);
