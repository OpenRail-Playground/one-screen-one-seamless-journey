export type CategoryColors = 'ICE' | 'IC' | 'RE' | 'S' | 'U' | 'STR' | 'BUS' | 'RUF' | 'FAE' | 'Long_distance_Bus' | 'SEV_Bus' | 'Ship' | 'Plane' | 'Car_Sharing' | 'Taxi' | 'Bike_Sharing' | 'WALK' | 'UNKNOWN';
export declare const getCorrectCategory: (category?: string) => CategoryColors | undefined;
export declare const getVariantText: (variant?: CategoryColors) => string;
