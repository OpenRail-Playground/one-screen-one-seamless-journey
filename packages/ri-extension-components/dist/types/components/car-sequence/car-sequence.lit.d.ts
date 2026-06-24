import { CarSequenceAriaProperties, CarSequenceProperties } from './car-sequence.properties';
import { CarTransportProperties } from '../car/car.properties';
import { SequenceBase } from '../_sequence/_sequence.lit';
export declare class CarSequence extends SequenceBase {
    /**
     * The cars to initialize the sequence
     */
    vehicles?: CarSequenceProperties['vehicles'];
    /**
     * An carID with the car to be marked as active
     */
    active?: CarSequenceProperties['active'];
    /**
     * Set interactive mode:
     * link: All cars become <a> tags with the carID as anchor.
     * button: All car become <button> tags you can listen to custom event ri-click-car
     */
    interactive?: CarSequenceProperties['interactive'];
    /**
     * Set custom anchors for cars, only when used interactive=links. Use this format:
     * {carID:"www.db.com"}
     */
    customAnchors?: CarSequenceProperties['customAnchors'];
    /**
     * Set aria-describedby based on carID
     */
    describedBys?: CarSequenceProperties['describedBys'];
    /**
     * Transportation type, allowed entries: https://git.tech.rz.db.de/ris/ri-ui/components/-/blob/master/source/_patterns/components/transport-tag/transport-tag.scss?ref_type=heads#L16-L141
     */
    transportType?: CarTransportProperties['transportType'];
    /**
     * Enables train splitting tag with given text
     */
    trainSplitTransport?: CarSequenceProperties['trainSplitTransport'];
    /**
     * You can provide a destination
     */
    destination?: CarSequenceProperties['destination'];
    /**
     * This number is a reference for complete car sequence
     */
    platformWidth?: number;
    /**
     * Index of group for aria label
     */
    groupIndex?: CarSequenceAriaProperties['groupIndex'];
    /**
     * Optional postfix for vehicle IDs.
     * Example if you have the same cars for arrival and departure
     */
    postfix?: CarSequenceProperties['postfix'];
    render(): import("lit-html").TemplateResult<1>;
    private isInteractive;
    private handleAnchorChange;
    firstUpdated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car-sequence': CarSequence;
    }
}
