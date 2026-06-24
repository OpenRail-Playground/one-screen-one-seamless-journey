export declare const JourneyTimeStampEmphasisList: string[];
export type JourneyTimeStampEmphasisType = (typeof JourneyTimeStampEmphasisList)[number];
export declare const JourneyTimeStampVariantList: string[];
export type JourneyTimeStampVariantType = (typeof JourneyTimeStampVariantList)[number];
export type JourneyTimeStampProperties = {
    emphasis?: JourneyTimeStampEmphasisType;
    background?: boolean;
    variant?: JourneyTimeStampVariantType;
};
