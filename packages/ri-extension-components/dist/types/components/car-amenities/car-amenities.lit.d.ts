import { VehicleAmenity } from 'ri-extension-components-service/ris/schemas/transports';
import { Base } from '../_base/_base.lit.ts';
export declare class CarAmenities extends Base {
    protected readonly i18n = false;
    /**
     * Array of vehicle amenities to display
     */
    amenities: VehicleAmenity[];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car-amenities': CarAmenities;
    }
}
