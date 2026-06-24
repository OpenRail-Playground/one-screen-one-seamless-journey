/**
 * export type              *     - OVERCROWDED (occupancy is considered as overcrowded)
 * export type              *     - HIGH (occupancy is considered as high)
 * export type              *     - MIDDLE (occupancy is considered as middle)
 * export type              *     - LOW (occupancy is considered as low)
 */
export declare const CapacityList: string[];
export type CapacityType = (typeof CapacityList)[number];
export declare const CapacityVariantList: string[];
export type CapacityVariantType = (typeof CapacityVariantList)[number];
export declare const CapacitySizeList: string[];
export type CapacitySizeType = (typeof CapacitySizeList)[number];
export type CapacityIndicatorProperties = {
    capacity?: CapacityType | string;
    variant?: CapacityVariantType;
    size?: CapacitySizeType;
};
