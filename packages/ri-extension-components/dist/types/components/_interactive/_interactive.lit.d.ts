import { CarProperties } from '../car/car.properties';
import { Base } from '../_base/_base.lit.ts';
export declare class InteractiveBase extends Base {
    /**
     * Set href for item.
     */
    anchor?: CarProperties['anchor'];
    /**
     * Set interactive mode:
     * link: All items become <a> tags requires anchor property.
     * button: All items become <button> tags you can listen to custom event
     */
    interactive?: CarProperties['interactive'];
}
