export declare const PlatformTagEmphasisList: string[];
export type PlatformTagEmphasisType = (typeof PlatformTagEmphasisList)[number];
export declare const PlatformTagVariantList: string[];
export type PlatformTagVariantType = (typeof PlatformTagVariantList)[number];
export type PlatformTagProperties = {
    variant?: PlatformTagVariantType;
    emphasis?: PlatformTagEmphasisType;
    title: string;
};
