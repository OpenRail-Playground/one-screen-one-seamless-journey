import { TemplateResult } from 'lit-html';
import { Leg, LegJourney } from 'ri-extension-components-service/ris/schemas/routing';
import { VehicleAttributeTypeType } from '../../itinerary.properties.ts';
export type JourneyLegType = {
    index: number;
    nowAsDate?: Date;
    legs: Leg[];
};
export declare const getJourneyLeg: ({ leg, nowAsDate, index, legs, interactiveTransportTags, viasDetailsClick, vehicleAttributeClick, interactiveVehicleAttributes }: {
    leg: LegJourney;
    interactiveTransportTags?: boolean;
    viasDetailsClick?: (leg: LegJourney) => void;
    vehicleAttributeClick?: (attributeType: VehicleAttributeTypeType) => void;
    interactiveVehicleAttributes?: boolean;
} & JourneyLegType) => TemplateResult;
