import { CarCategoryType, CarTransportProperties, CarVariantType } from '../../components/car/car.properties';
import { VehicleInGroupArrival, VehicleInGroupDeparture } from 'ri-extension-components-service/ris/schemas/transports';
import { TemplateResult } from 'lit-html';
export type VehicleType = (VehicleInGroupArrival | VehicleInGroupDeparture) & {
    reservedSeat?: string;
};
/**
 * Analyses the vehicle to add all icons based on priority to list.
 * List should contain at least one element if it isn't a locomotive.
 * @param vehicle
 */
export declare const getVehicleIconPriorityList: (vehicle: VehicleInGroupDeparture | VehicleInGroupArrival) => string[];
/**
 * Get the category to shape vehicle.
 * Maybe we need to add transport type to this as well to detect if it is ICE, RE, etc.
 * @param category
 * @param transportCategory
 * @param transportType
 */
export declare const getCarShape: ({ category, transportType, variant, uuid }: {
    variant?: CarVariantType | string;
    category?: CarCategoryType;
    uuid: string;
} & CarTransportProperties) => TemplateResult;
export declare const getVehicleId: (vehicle: VehicleType, postfix?: string) => string;
export declare const getVehicleDomId: (vehicle: VehicleType, postfix?: string) => string;
export type VehicleNumberProperties = {
    vehicle?: VehicleType;
    active?: boolean;
    fullText?: boolean;
};
export declare const getVehicleNumber: ({ vehicle, active, fullText }: VehicleNumberProperties) => TemplateResult;
export type CarTagProperties = {
    icon: string;
    isDoubleDeck?: boolean;
    carTagsCount?: number;
};
export declare const getCarTag: ({ icon, carTagsCount, isDoubleDeck }: CarTagProperties) => TemplateResult;
export declare const shouldIgnoreGroup: (vehicles?: VehicleType[]) => boolean;
