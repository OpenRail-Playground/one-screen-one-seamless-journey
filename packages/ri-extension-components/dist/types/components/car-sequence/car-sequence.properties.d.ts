import { CarTransportProperties } from '../car/car.properties';
import { VehicleType } from '../../utils/cars';
import { MeasurementProperties } from '../_measurement/_measurement.properties';
import { SequenceProperties } from '../_sequence/_sequence.properties';
import { CustomAnchorProperties, InteractiveProperties } from '../_interactive/_interactive.properties.ts';
import { TransportWithDirection } from 'ri-extension-components-service/ris/schemas/journeys.ts';
export type CarSequenceAriaProperties = {
    trainSplitTransport?: TransportWithDirection;
    destination?: string;
    groupIndex?: string;
};
export type CarSequenceProperties = {
    vehicles?: VehicleType[];
    active?: string;
    describedBys?: Record<string, string>;
    postfix?: string;
} & CarTransportProperties & InteractiveProperties & CustomAnchorProperties & MeasurementProperties & SequenceProperties & CarSequenceAriaProperties;
