export declare const VariantList: string[];
export type VariantType = (typeof VariantList)[number];
export type MeasurementProperties = {
    variant?: VariantType;
    absoluteScale?: number;
};
