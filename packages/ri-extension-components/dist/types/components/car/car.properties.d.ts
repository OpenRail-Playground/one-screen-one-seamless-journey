import { TransportTypeType } from '../transport-tag/transport-tag.properties';
import { VehicleType } from '../../utils/cars';
import { InteractiveItemProperties, InteractiveProperties } from '../_interactive/_interactive.properties.ts';
export declare const CarCategoryList: string[];
export type CarCategoryType = (typeof CarCategoryList)[number] | string;
export declare const CarVariantList: string[];
export type CarVariantType = (typeof CarVariantList)[number];
export type CarTransportProperties = {
    transportType?: string | TransportTypeType;
};
export declare const InteractiveList: string[];
export type InteractiveType = (typeof InteractiveList)[number];
export type CarProperties = {
    vehicle?: VehicleType;
    active?: boolean;
    variant?: CarVariantType | string;
    carIndex?: string;
    postfix?: string;
} & CarTransportProperties & InteractiveItemProperties & InteractiveProperties;
