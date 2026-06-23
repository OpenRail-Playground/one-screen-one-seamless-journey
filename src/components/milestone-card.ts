/**
 * MilestoneCard Web Component
 *
 * Displays a single navigation milestone with direction arrow, distance,
 * landmark photo, instruction text, and optional accessibility feature badge.
 *
 * Usage:
 *   <milestone-card></milestone-card>
 *   const el = document.querySelector('milestone-card');
 *   el.milestone = { id: 1, instruction: '...', direction: 'north', distanceMeters: 50, photoUrl: '...' };
 */

import type { Milestone, Direction, AccessibilityFeature } from '../types/index';

/** Placeholder image as a data URI for missing photos */
const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">' +
      '<rect width="300" height="200" fill="#e0e0e0"/>' +
      '<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="14" fill="#666">Bild nicht verfügbar</text>' +
      '</svg>'
  );

/** Direction rotation mapping in degrees for compass directions */
const DIRECTION_ROTATION: Record<Direction, number | null> = {
  north: 0,
  northeast: 45,
  east: 90,
  southeast: 135,
  south: 180,
  southwest: 225,
  west: 270,
  northwest: 315,
  up: null,
  down: null,
};

/** German labels for accessibility features */
const ACCESSIBILITY_LABELS: Record<AccessibilityFeature, string> = {
  elevator: 'Aufzug',
  ramp: 'Rampe',
  'level-crossing': 'Ebenerdiger Übergang',
  'tactile-paving': 'Taktile Leitung',
};

/**
 * Returns an SVG arrow for directional compass headings, rotated by degrees.
 */
function getDirectionArrowSvg(direction: Direction): string {
  if (direction === 'up') {
    return `<svg class="milestone-card__arrow milestone-card__arrow--vertical" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3L12 21M12 3L5 10M12 3L19 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  if (direction === 'down') {
    return `<svg class="milestone-card__arrow milestone-card__arrow--vertical" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 21L12 3M12 21L5 14M12 21L19 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  const rotation = DIRECTION_ROTATION[direction] ?? 0;
  return `<svg class="milestone-card__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="transform: rotate(${rotation}deg)">
    <path d="M12 3L12 21M12 3L5 10M12 3L19 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

/**
 * Renders the milestone card HTML for a given milestone.
 * Exported for use in property-based testing.
 */
export function renderMilestoneCard(milestone: Milestone): string {
  const arrowSvg = getDirectionArrowSvg(milestone.direction);
  const distanceText = `${milestone.distanceMeters} m`;
  const photoUrl = milestone.photoUrl || PLACEHOLDER_IMAGE;

  let accessibilityBadge = '';
  if (milestone.accessibilityFeature) {
    const label = ACCESSIBILITY_LABELS[milestone.accessibilityFeature];
    accessibilityBadge = `<db-badge semantic="informational" emphasis="strong">${label}</db-badge>`;
  }

  return `<div class="milestone-card__content">
    <div class="milestone-card__photo-container">
      <img
        class="milestone-card__photo"
        src="${photoUrl}"
        alt="${milestone.instruction}"
        onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';"
      />
    </div>
    <div class="milestone-card__instruction-row">
      ${arrowSvg}
      <p class="milestone-card__instruction">${milestone.instruction}</p>
    </div>
    ${accessibilityBadge ? `<div class="milestone-card__accessibility">${accessibilityBadge}</div>` : ''}
  </div>`;
}

export class MilestoneCard extends HTMLElement {
  private _milestone: Milestone | null = null;

  /** The milestone data to display. */
  get milestone(): Milestone | null {
    return this._milestone;
  }

  set milestone(value: Milestone | null) {
    this._milestone = value;
    this._render();
  }

  connectedCallback(): void {
    this._render();
  }

  private _render(): void {
    if (!this._milestone) {
      this.innerHTML = '';
      return;
    }

    this.innerHTML = renderMilestoneCard(this._milestone);
  }
}

customElements.define('milestone-card', MilestoneCard);
