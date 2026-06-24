import { CarProperties } from './car.properties';
import { InteractiveBase } from '../_interactive/_interactive.lit.ts';
export declare class Car extends InteractiveBase {
    /**
     * The vehicle to initialize the element
     */
    vehicle?: CarProperties['vehicle'];
    /**
     * Set the vehicle to active mode
     */
    active?: CarProperties['active'];
    /**
     * Set the variant to change the shape of a control car
     */
    variant?: CarProperties['variant'];
    /**
     * Transportation type, allowed entries: https://git.tech.rz.db.de/ris/ri-ui/components/-/blob/master/source/_patterns/components/transport-tag/transport-tag.scss?ref_type=heads#L16-L141
     */
    transportType?: CarProperties['transportType'];
    /**
     * Fallback index if no wagon number exists
     */
    carIndex?: CarProperties['carIndex'];
    /**
     * Optional postfix for vehicle IDs.
     * Example if you have the same cars for arrival and departure
     */
    postfix?: CarProperties['postfix'];
    private riClick;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car': Car;
    }
}
