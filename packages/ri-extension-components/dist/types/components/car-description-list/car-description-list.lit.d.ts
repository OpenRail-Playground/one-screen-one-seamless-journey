import { CarDescriptionListProperties } from './car-description-list.properties';
import { CarSequenceProperties } from '../car-sequence/car-sequence.properties';
import { Ref } from 'lit/directives/ref.js';
import { Base } from '../_base/_base.lit.ts';
export declare class CarDescriptionList extends Base {
    /**
     * The vehicles to initialize the list
     */
    vehicles?: CarDescriptionListProperties['vehicles'];
    /**
     * An carID with the car to be marked as active
     */
    active?: CarSequenceProperties['active'];
    /**
     * Shows only the selected car
     */
    single?: CarDescriptionListProperties['single'];
    /**
     * Optional postfix for vehicle IDs.
     * Example if you have the same cars for arrival and departure
     */
    postfix?: CarDescriptionListProperties['postfix'];
    refs: Record<string, Ref<HTMLElement>>;
    render(): typeof import("lit-html").nothing | import("lit-html").TemplateResult<1>;
    private handleAnchorChange;
    firstUpdated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car-description-list': CarDescriptionList;
    }
}
