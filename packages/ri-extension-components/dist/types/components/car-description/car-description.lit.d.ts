import { CarDescriptionProperties } from './car-description.properties';
import { Base } from '../_base/_base.lit.ts';
export declare class CarDescription extends Base {
    /**
     * The vehicle to show description
     */
    vehicle: CarDescriptionProperties['vehicle'];
    /**
     * If the vehicle should be marked as active
     */
    active?: CarDescriptionProperties['active'];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car-description': CarDescription;
    }
}
