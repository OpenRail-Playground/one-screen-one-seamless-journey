import { VehicleRouteProperties } from './vehicle-route.properties.ts';
import { RouteBase } from '../_route/_route.lit.ts';
export declare class VehicleRoute extends RouteBase {
    /**
     * The journey data containing all stops and event information
     */
    journey?: VehicleRouteProperties['journey'];
    render(): import("lit-html").TemplateResult<1>;
    handleStopIconDetection(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-vehicle-route': VehicleRoute;
    }
}
