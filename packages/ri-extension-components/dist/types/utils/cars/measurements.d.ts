import { Measurement } from '../measurements';
import { VehicleType } from './index';
import { nothing } from 'lit';
import { MeasurementProperties, VariantType } from '../../components/_measurement/_measurement.properties';
import { SequenceProperties } from '../../components/_sequence/_sequence.properties';
export declare const getMeasurementsByVehicles: (vehicles?: VehicleType[], variant?: VariantType) => Measurement | undefined;
export type SequenceMeasurementType = {
    sequenceWidth: string;
    inlinePaddingStartValue: number;
    inlinePaddingEndValue: number;
};
export declare const getSequenceMeasurements: ({ vehicles, variant, absoluteScale, platformWidth }: {
    vehicles?: VehicleType[];
} & MeasurementProperties & SequenceProperties) => SequenceMeasurementType | undefined;
export declare const getSequenceMeasurementStyles: (measurement?: SequenceMeasurementType | undefined, variant?: VariantType) => string | typeof nothing;
export declare const getCarStyles: ({ carMeasurements, variant, absoluteScale, platformWidth, index }: {
    index: number;
    carMeasurements?: Measurement;
} & MeasurementProperties & SequenceProperties) => string | typeof nothing;
