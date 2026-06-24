export declare const BreakpointVariantList: string[];
export type BreakpointVariantType = (typeof BreakpointVariantList)[number];
export type ContainerProperties = {
    breakpointVariant?: BreakpointVariantType;
};
