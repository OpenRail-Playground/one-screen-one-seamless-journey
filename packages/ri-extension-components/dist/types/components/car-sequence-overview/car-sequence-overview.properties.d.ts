import { VehicleGroupInSequenceArrival, VehicleGroupInSequenceDeparture, VehicleSequenceArrival, VehicleSequenceDeparture } from 'ri-extension-components-service/ris/schemas/transports';
import { CarTransportProperties } from '../car/car.properties';
import { VariantType } from '../_measurement/_measurement.properties';
import { Ref } from 'lit/directives/ref.js';
import { TransportWithDirection } from 'ri-extension-components-service/ris/schemas/journeys';
export type CarSequence = VehicleSequenceArrival | VehicleSequenceDeparture;
export type CarSequenceGroup = VehicleGroupInSequenceArrival | VehicleGroupInSequenceDeparture;
export type RICarSequenceGroup = CarSequenceGroup & {
    groupIndex?: string;
};
export type CarSequenceOverviewProperties = {
    sequence?: CarSequence;
    hidePlatformStructure?: boolean;
    descriptionList?: 'hidden' | 'single' | 'all';
    variant?: VariantType;
    trainSplitting?: Record<string, TransportWithDirection>;
    postfix?: string;
    _ref?: Ref<HTMLDivElement>;
} & CarTransportProperties;
