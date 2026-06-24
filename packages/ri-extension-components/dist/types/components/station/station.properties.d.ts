export declare const StationEmphasisList: string[];
export type StationEmphasisType = (typeof StationEmphasisList)[number];
export type StationProperties = {
    emphasis?: StationEmphasisType;
};
