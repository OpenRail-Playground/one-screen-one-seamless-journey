import { Dot } from '../../../utils/vehicle-route';
import { TravellerType } from '../itinerary.properties';
import { TemplateResult } from 'lit-html';
import { Leg, LegJourney } from 'ri-extension-components-service/ris/schemas/routing';
export declare const getProgressLines: ({ dots, leg, nowAsDate, index, lineChange, legs, traveller, openVias }: {
    dots: Dot[];
    leg: Leg;
    nowAsDate?: Date;
    index: number;
    legs: Leg[];
    lineChange: boolean;
    traveller?: TravellerType;
    openVias: LegJourney[];
}) => TemplateResult | symbol;
