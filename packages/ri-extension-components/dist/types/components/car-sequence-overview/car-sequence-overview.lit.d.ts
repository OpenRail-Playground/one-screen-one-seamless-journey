import { CarSequence, CarSequenceOverviewProperties } from './car-sequence-overview.properties';
import { MeasurementBase } from '../_measurement/_measurement.lit';
import { CarTransportProperties } from '../car/car.properties';
import { Ref } from 'lit/directives/ref.js';
import { VariantType } from '../_measurement/_measurement.properties';
export declare class CarSequenceOverview extends MeasurementBase {
    /**
     * The complete sequence which includes platform and cars
     */
    sequence?: CarSequence;
    /**
     * Transportation type, allowed entries: https://git.tech.rz.db.de/ris/ri-ui/components/-/blob/master/source/_patterns/components/transport-tag/transport-tag.scss?ref_type=heads#L16-L141
     */
    transportType?: CarTransportProperties['transportType'];
    /**
     * Hides the platform structure visualization
     */
    hidePlatformStructure?: boolean;
    /**
     * Changes the settings of the descriptionList, allowed values: 'hidden', 'single', 'all'.
     * 'hidden' will hide the description list
     * 'single' will show the description of the selected car
     * 'all' (default) will show the description of all cars
     */
    descriptionList?: CarSequenceOverviewProperties['descriptionList'];
    /**
     * Show train splitting by providing Record<journeyID,TransportWithDirection>
     */
    trainSplitting?: CarSequenceOverviewProperties['trainSplitting'];
    /**
     * Optional postfix for vehicle IDs.
     * Example if you have the same cars for arrival and departure
     */
    postfix?: CarSequenceOverviewProperties['postfix'];
    _ref: Ref<HTMLDivElement>;
    _variant?: VariantType;
    render(): import("lit-html").TemplateResult<1>;
    handleVariantDetection(): void;
    firstUpdated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car-sequence-overview': CarSequenceOverview;
    }
}
