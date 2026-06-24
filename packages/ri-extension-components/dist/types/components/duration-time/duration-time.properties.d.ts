export declare const DurationVariantList: string[];
export type DurationVariantType = (typeof DurationVariantList)[number];
export type DurationTimeProperties = {
    journeyTimes?: {
        departureTime?: string;
        arrivalTime?: string;
    };
    times?: {
        hours: number;
        minutes: number;
    };
    duration?: string;
    variant?: DurationVariantType;
    changeover?: boolean;
};
