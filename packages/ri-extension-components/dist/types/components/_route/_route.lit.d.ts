import { VehicleRouteProperties } from '../vehicle-route/vehicle-route.properties';
import { Dot } from '../../utils/vehicle-route';
import { Base } from '../_base/_base.lit.ts';
export declare class RouteBase extends Base {
    /**
     * Show active stop based on now: fully-qualified-date (ISO-8601 with time-zone or offset).
     */
    now?: VehicleRouteProperties['now'];
    /**
     * Set up a timer to update the route line every 30 seconds.
     * Disables `now` property if you use timeline=`auto`.
     */
    timeline?: VehicleRouteProperties['timeline'];
    /**
     * Prints debug information to the console.
     */
    debug?: VehicleRouteProperties['debug'];
    _dots: Dot[];
    private _intersectionObserver?;
    private _rafId?;
    private _isUpdating;
    protected handleStopIconDetection(): void;
    /**
     * Debounces stop icon detection using requestAnimationFrame.
     * The guard flag `_isUpdating` prevents re-entrant calls (e.g. from
     * IntersectionObserver or MutationObserver) while an update cycle is
     * already in progress. After the first detection pass triggers a Lit
     * re-render, we await `updateComplete` and run a second pass so the
     * line positions reflect the updated layout.
     */
    private _debouncedHandleStopIconDetection;
    private _timerId?;
    protected _startTimer(): void;
    protected _stopTimer(): void;
    private _setNow;
    private _routeChildObserver;
    firstUpdated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
