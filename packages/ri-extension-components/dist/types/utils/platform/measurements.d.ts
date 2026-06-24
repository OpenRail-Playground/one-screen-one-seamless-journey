import { Platform } from 'ri-extension-components-service/ris/schemas/transports';
import { Measurement } from '../measurements';
import { VariantType } from '../../components/_measurement/_measurement.properties';
import { CarSequence } from '../../components/car-sequence-overview/car-sequence-overview.properties';
import { DepartureDirectionType } from '../../components/platform-structure/platform-structure.properties';
export declare const getMeasurementsByPlatformDetail: (platform?: Platform, variant?: VariantType) => Measurement | undefined;
export declare const getPlatformWidth: (measurement: Measurement, variant?: VariantType, absoluteScale?: number) => string;
export declare const getDirectionOfTravel: (sequence: CarSequence) => DepartureDirectionType | undefined;
