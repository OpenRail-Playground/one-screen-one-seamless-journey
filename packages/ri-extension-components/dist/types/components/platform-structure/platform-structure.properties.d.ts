import { Platform } from 'ri-extension-components-service/ris/schemas/transports';
import { MeasurementProperties } from '../_measurement/_measurement.properties';
export declare const DepartureDirectionList: string[];
export type DepartureDirectionType = (typeof DepartureDirectionList)[number] | string;
export type PlatformStructureProperties = {
    departureDirection?: DepartureDirectionType;
    platform?: Platform;
} & MeasurementProperties;
