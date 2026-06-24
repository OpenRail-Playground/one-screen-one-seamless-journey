import { LegConnect, LegJourney, Trip } from 'ri-extension-components-service/ris/schemas/routing.ts';
import { RouteProperties } from '../_route/_route.properties.ts';
export declare const TravellerList: string[];
export type TravellerType = (typeof TravellerList)[number];
export declare const VehicleAttributeTypeList: string[];
export type VehicleAttributeTypeType = (typeof VehicleAttributeTypeList)[number];
export type ItineraryProperties = {
    trip?: Trip;
    interactiveVehicleAttributes?: boolean;
    interactiveTransportTags?: boolean;
    showCheckAlternative?: boolean;
    hideConnectionEvaluation?: boolean;
    traveller?: TravellerType;
    viasDetailsClick?: (leg: LegJourney) => void;
    alternativeClick?: (leg: LegConnect) => void;
    vehicleAttributeClick?: (attributeType: VehicleAttributeTypeType) => void;
} & RouteProperties;
