/**
 * DotIndicator Web Component
 *
 * Displays pagination dots showing the current milestone position
 * and total number of milestones. Each dot represents a milestone,
 * with the active dot highlighted.
 *
 * Usage:
 *   <dot-indicator total="5" activeindex="2"></dot-indicator>
 *
 * Or set properties directly:
 *   const el = document.querySelector('dot-indicator');
 *   el.total = 5;
 *   el.activeIndex = 2;
 *
 * Requirements: 5.3
 */

/**
 * Renders dot indicator HTML for a given total count and active index.
 * Exported for property testing (task 7.7).
 *
 * @param total - The total number of dots to render
 * @param activeIndex - The zero-based index of the active dot
 * @returns HTML string with dot elements
 */
export function renderDotIndicator(total: number, activeIndex: number): string {
  const clampedTotal = Math.max(0, Math.floor(total));
  const clampedIndex = clampedTotal > 0 ? Math.max(0, Math.min(Math.floor(activeIndex), clampedTotal - 1)) : 0;

  if (clampedTotal === 0) {
    return '<div class="dot-indicator" role="tablist"></div>';
  }

  let dotsHtml = '';
  for (let i = 0; i < clampedTotal; i++) {
    const isActive = i === clampedIndex;
    const activeClass = isActive ? ' dot-indicator__dot--active' : '';
    const ariaSelected = isActive ? 'true' : 'false';
    dotsHtml += `<span class="dot-indicator__dot${activeClass}" role="tab" aria-selected="${ariaSelected}" aria-label="Schritt ${i + 1} von ${clampedTotal}"></span>`;
  }

  return `<div class="dot-indicator" role="tablist">${dotsHtml}</div>`;
}

export class DotIndicator extends HTMLElement {
  private _total: number = 0;
  private _activeIndex: number = 0;

  static get observedAttributes(): string[] {
    return ['total', 'activeindex'];
  }

  /** Total number of dots (milestones). */
  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = Math.max(0, Math.floor(value));
    this.setAttribute('total', String(this._total));
    this._render();
  }

  /** Zero-based index of the active (current) dot. */
  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(value: number) {
    this._activeIndex = Math.max(0, Math.floor(value));
    this.setAttribute('activeindex', String(this._activeIndex));
    this._render();
  }

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return;

    if (name === 'total') {
      this._total = Math.max(0, parseInt(newValue || '0', 10) || 0);
      this._render();
    } else if (name === 'activeindex') {
      this._activeIndex = Math.max(0, parseInt(newValue || '0', 10) || 0);
      this._render();
    }
  }

  private _render(): void {
    this.innerHTML = `
      <style>
        .dot-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--db-spacing-fixed-xs);
          padding: var(--db-spacing-fixed-sm) 0;
        }

        .dot-indicator__dot {
          display: block;
          width: var(--db-sizing-3xs);
          height: var(--db-sizing-3xs);
          border-radius: 50%;
          background-color: var(--db-adaptive-on-bg-basic-emphasis-60-default);
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .dot-indicator__dot--active {
          background-color: var(--db-adaptive-on-bg-basic-emphasis-90-default);
          transform: scale(1.4);
        }
      </style>
      ${renderDotIndicator(this._total, this._activeIndex)}
    `;
  }
}

customElements.define('dot-indicator', DotIndicator);
