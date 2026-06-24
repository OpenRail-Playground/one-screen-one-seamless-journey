import { InteractiveType } from '../car/car.properties';
export type InteractiveProperties = {
    interactive?: InteractiveType;
};
export type InteractiveItemProperties = {
    anchor?: string;
    riClick?: () => void;
};
export type CustomAnchorProperties = {
    customAnchors?: Record<string, string>;
};
