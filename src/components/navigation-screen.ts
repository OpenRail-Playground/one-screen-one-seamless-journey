/**
 * NavigationScreen Web Component
 *
 * The active navigation interface with a tab toggle between "Wegbeschreibung" (text directions)
 * and "Maps" (map view). Displays milestone-based navigation with swipe gestures and dot
 * indicators in text mode, or a Leaflet map in map mode. Shows bus departure info in both views.
 *
 * Usage:
 *   <navigation-screen></navigation-screen>
 *   const el = document.querySelector('navigation-screen');
 *   el.milestones = [...];
 *   el.stationId = 'WIEN-HBF';
 *   el.exitLocation = { lat: 50.107, lng: 8.663 };
 *   el.busStopLocation = { lat: 50.108, lng: 8.665 };
 *   el.routeGeoJSON = { type: 'LineString', coordinates: [...] };
 *
 * Properties:
 *   - milestones: Milestone[] — navigation steps to display
 *   - stationId: string — station ID for bus departure info
 *   - currentMilestoneIndex: number — active milestone index
 *   - exitLocation: { lat, lng } — station exit coordinates for map
 *   - busStopLocation: { lat, lng } — bus stop coordinates for map
 *   - routeGeoJSON: GeoJSON.LineString — route polyline for map
 *
 * @validates Requirements 7.1, 7.2, 7.3, 7.6, 5.4
 */

import type { Milestone } from '../types/index';
import { appState } from '../state';
import './swipe-container';
import './dot-indicator';
import './map-view';

export class NavigationScreen extends HTMLElement {
  private _milestones: Milestone[] = [];
  private _stationId: string = '';
  private _currentMilestoneIndex: number = 0;
  private _exitLocation: { lat: number; lng: number } | null = null;
  private _busStopLocation: { lat: number; lng: number } | null = null;
  private _routeGeoJSON: GeoJSON.LineString | null = null;
  private _unsubscribe: (() => void) | null = null;

  /** Navigation milestones to display */
  get milestones(): Milestone[] {
    return this._milestones;
  }

  set milestones(value: Milestone[]) {
    this._milestones = value;
    this._render();
  }

  /** Station ID for bus departure info subscription */
  get stationId(): string {
    return this._stationId;
  }

  set stationId(value: string) {
    this._stationId = value;
    this._render();
  }

  /** Current milestone index (0-based) */
  get currentMilestoneIndex(): number {
    return this._currentMilestoneIndex;
  }

  set currentMilestoneIndex(value: number) {
    this._currentMilestoneIndex = value;
    this._updateMilestoneView();
  }

  /** Station exit location for map view */
  get exitLocation(): { lat: number; lng: number } | null {
    return this._exitLocation;
  }

  set exitLocation(value: { lat: number; lng: number } | null) {
    this._exitLocation = value;
  }

  /** Bus stop location for map view */
  get busStopLocation(): { lat: number; lng: number } | null {
    return this._busStopLocation;
  }

  set busStopLocation(value: { lat: number; lng: number } | null) {
    this._busStopLocation = value;
  }

  /** Route GeoJSON for map view */
  get routeGeoJSON(): GeoJSON.LineString | null {
    return this._routeGeoJSON;
  }

  set routeGeoJSON(value: GeoJSON.LineString | null) {
    this._routeGeoJSON = value;
  }

  connectedCallback(): void {
    // Default to text view on navigation start
    appState.setState({ activeView: 'text' });

    // Subscribe to state changes for milestone index updates
    this._unsubscribe = appState.subscribe((state) => {
      if (state.currentMilestoneIndex !== this._currentMilestoneIndex) {
        this._currentMilestoneIndex = state.currentMilestoneIndex;
        this._updateMilestoneView();
      }
    });

    this._render();
    this._attachEventListeners();
  }

  disconnectedCallback(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
  }

  private _render(): void {
    const activeView = appState.getState().activeView;
    const isTextView = activeView === 'text';
    const isAccessible = appState.getState().navigationMode === 'accessible';

    this.innerHTML = `
      <div class="navigation-screen">
        <div class="navigation-screen__top-bar">
          <db-tabs>
            <db-tab-list>
              <db-tab-item ${isTextView ? 'active' : ''} data-view="text">Wegbeschreibung</db-tab-item>
              <db-tab-item ${!isTextView ? 'active' : ''} data-view="map">Karte</db-tab-item>
            </db-tab-list>
          </db-tabs>
          <db-button variant="ghost" icon="close" no-text type="button" data-action="close">
            <db-tooltip>Schließen</db-tooltip>
          </db-button>
        </div>
        <div class="navigation-screen__body">
          ${isTextView ? this._renderTextView() : this._renderMapView()}
        </div>
        <div class="navigation-screen__footer">
          <db-switch data-action="toggle-accessible" ${isAccessible ? 'checked' : ''}>Barrierefreie Alternative</db-switch>
        </div>
      </div>
      <style>
        .navigation-screen {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
        }
        .navigation-screen__top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--db-spacing-fixed-xs) var(--db-spacing-fixed-sm);
          flex-shrink: 0;
        }
        .navigation-screen__body {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        .navigation-screen__text-view {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .navigation-screen__image-fill {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .navigation-screen__image-fill img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .navigation-screen__overlay {
          position: relative;
          z-index: 1;
          background-color: color-mix(in srgb, var(--app-yellow) 92%, transparent);
          padding: var(--db-spacing-fixed-sm);
          margin: var(--db-spacing-fixed-sm);
          margin-bottom: var(--db-spacing-fixed-md);
          border-radius: var(--db-border-radius-md);
          display: flex;
          flex-direction: column;
          gap: var(--db-spacing-fixed-xs);
        }
        .navigation-screen__instruction-row {
          display: flex;
          align-items: flex-start;
          gap: var(--db-spacing-fixed-xs);
        }
        .navigation-screen__instruction-row svg {
          width: var(--db-sizing-sm);
          height: var(--db-sizing-sm);
          flex-shrink: 0;
          color: var(--app-navy);
        }
        .navigation-screen__instruction-text {
          font: var(--db-type-body-md);
          font-weight: normal;
          color: var(--app-navy);
          margin: 0;
        }
        .navigation-screen__nav-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .navigation-screen__nav-controls dot-indicator {
          flex: 1;
        }
        .navigation-screen__footer {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: var(--db-spacing-fixed-sm);
          background-color: var(--app-yellow);
        }
      </style>
    `;

    this._attachEventListeners();
    this._setMapViewProperties();

    requestAnimationFrame(() => {
      this._setMilestoneCardData();
    });
  }

  private _renderTextView(): string {
    return `
      <div class="navigation-screen__text-view">
        <div class="navigation-screen__image-fill">
          <img id="milestone-image" src="" alt="" />
        </div>
        <swipe-container total="${this._milestones.length}" active-index="${this._currentMilestoneIndex}">
          <div class="navigation-screen__overlay">
            <div class="navigation-screen__instruction-row">
              <span id="milestone-icon"></span>
              <p class="navigation-screen__instruction-text" id="milestone-text"></p>
            </div>
            <div class="navigation-screen__nav-controls">
              <db-button variant="ghost" icon="arrow_left" no-text type="button" data-action="prev-step">
                <db-tooltip>Vorheriger Schritt</db-tooltip>
              </db-button>
              <dot-indicator total="${this._milestones.length}" activeindex="${this._currentMilestoneIndex}"></dot-indicator>
              <db-button variant="ghost" icon="arrow_right" no-text type="button" data-action="next-step">
                <db-tooltip>Nächster Schritt</db-tooltip>
              </db-button>
            </div>
          </div>
        </swipe-container>
      </div>
    `;
  }

  private _renderMapView(): string {
    return `<map-view></map-view>`;
  }

  private _attachEventListeners(): void {
    // Close button (top-right cross)
    const closeBtn = this.querySelector('[data-action="close"]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        window.location.hash = '#preview';
      });
    }

    // Previous/Next step arrow buttons
    const prevBtn = this.querySelector('[data-action="prev-step"]');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this._currentMilestoneIndex > 0) {
          this._currentMilestoneIndex--;
          appState.setState({ currentMilestoneIndex: this._currentMilestoneIndex });
          this._updateMilestoneView();
        }
      });
    }

    const nextBtn = this.querySelector('[data-action="next-step"]');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this._currentMilestoneIndex < this._milestones.length - 1) {
          this._currentMilestoneIndex++;
          appState.setState({ currentMilestoneIndex: this._currentMilestoneIndex });
          this._updateMilestoneView();
        }
      });
    }

    // Accessible toggle switch
    const accessToggle = this.querySelector('[data-action="toggle-accessible"]');
    if (accessToggle) {
      accessToggle.addEventListener('change', (e: Event) => {
        const checked = (e.target as HTMLInputElement).checked;
        const mode = checked ? 'accessible' : 'standard';
        appState.setState({ navigationMode: mode });
        // Reload milestones for new mode would require routeDataService access
      });
    }

    // Listen for swipe events to update milestone card and dot indicator
    const swipeContainer = this.querySelector('swipe-container');
    if (swipeContainer) {
      swipeContainer.addEventListener('swipe', ((e: CustomEvent<{ index: number }>) => {
        this._currentMilestoneIndex = e.detail.index;
        this._updateMilestoneView();
      }) as EventListener);
    }

    // Listen for tab changes
    const tabItems = this.querySelectorAll('db-tab-item');
    tabItems.forEach((tabItem, index) => {
      tabItem.addEventListener('click', () => {
        const view = index === 0 ? 'text' : 'map';
        const currentView = appState.getState().activeView;
        if (view === currentView) return;
        appState.setState({ activeView: view as 'text' | 'map' });
        const body = this.querySelector('.navigation-screen__body');
        if (body) {
          body.innerHTML = view === 'text' ? this._renderTextView() : this._renderMapView();
          if (view === 'text') {
            this._setMilestoneCardData();
            // Re-attach swipe and button listeners for the new DOM
            const swipeContainer = this.querySelector('swipe-container');
            if (swipeContainer) {
              swipeContainer.addEventListener('swipe', ((e: CustomEvent<{ index: number }>) => {
                this._currentMilestoneIndex = e.detail.index;
                this._updateMilestoneView();
              }) as EventListener);
            }
            const prevBtn = this.querySelector('[data-action="prev-step"]');
            if (prevBtn) {
              prevBtn.addEventListener('click', () => {
                if (this._currentMilestoneIndex > 0) {
                  this._currentMilestoneIndex--;
                  appState.setState({ currentMilestoneIndex: this._currentMilestoneIndex });
                  this._updateMilestoneView();
                }
              });
            }
            const nextBtn = this.querySelector('[data-action="next-step"]');
            if (nextBtn) {
              nextBtn.addEventListener('click', () => {
                if (this._currentMilestoneIndex < this._milestones.length - 1) {
                  this._currentMilestoneIndex++;
                  appState.setState({ currentMilestoneIndex: this._currentMilestoneIndex });
                  this._updateMilestoneView();
                }
              });
            }
          } else {
            this._setMapViewProperties();
          }
        }
      });
    });
  }

  /**
   * Updates the milestone display without a full re-render.
   */
  private _updateMilestoneView(): void {
    this._setMilestoneCardData();

    const dotIndicator = this.querySelector('dot-indicator') as HTMLElement & { activeIndex: number } | null;
    if (dotIndicator) {
      dotIndicator.activeIndex = this._currentMilestoneIndex;
    }

    const swipeContainer = this.querySelector('swipe-container') as HTMLElement & { activeIndex: number } | null;
    if (swipeContainer) {
      swipeContainer.activeIndex = this._currentMilestoneIndex;
    }
  }

  /**
   * Sets the map-view component properties after render.
   */
  private _setMapViewProperties(): void {
    const mapView = this.querySelector('map-view') as HTMLElement & {
      exitLocation: { lat: number; lng: number } | null;
      busStopLocation: { lat: number; lng: number } | null;
      routeGeoJSON: GeoJSON.LineString | null;
      milestones: Milestone[];
    } | null;

    if (mapView) {
      mapView.exitLocation = this._exitLocation;
      mapView.busStopLocation = this._busStopLocation;
      mapView.routeGeoJSON = this._routeGeoJSON;
      mapView.milestones = this._milestones;
    }
  }

  /**
   * Sets the current milestone data on the image and text elements after render.
   */
  private _setMilestoneCardData(): void {
    const milestone = this._milestones[this._currentMilestoneIndex];
    if (!milestone) return;

    const img = this.querySelector('#milestone-image') as HTMLImageElement | null;
    if (img) {
      img.src = `${import.meta.env.BASE_URL}${milestone.photoUrl.replace(/^\//, '')}`;
      img.alt = milestone.instruction;
    }

    const text = this.querySelector('#milestone-text') as HTMLElement | null;
    if (text) {
      text.textContent = milestone.instruction;
    }

    // Icon per slide: walking_fast, arrow_up, arrow_left, arrow_up, bus
    const iconNames = ['walking_fast', 'arrow_up', 'arrow_left', 'arrow_up', 'bus'];
    const iconName = iconNames[this._currentMilestoneIndex] || 'arrow_forward';

    const icon = this.querySelector('#milestone-icon') as HTMLElement | null;
    if (icon) {
      icon.innerHTML = `<db-icon icon="${iconName}"></db-icon>`;
    }

    if (!img && this._milestones.length > 0) {
      setTimeout(() => this._setMilestoneCardData(), 50);
    }
  }
}

customElements.define('navigation-screen', NavigationScreen);
