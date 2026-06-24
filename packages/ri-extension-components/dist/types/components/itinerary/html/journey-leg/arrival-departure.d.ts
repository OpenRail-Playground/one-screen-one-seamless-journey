import { TemplateResult } from 'lit-html';
import { JourneyLegType } from './index';
import { RoutingArrival, RoutingDeparture } from 'ri-extension-components-service/ris/schemas/routing';
export declare const getArrivalDepartureStop: ({ arrival, nowAsDate, legs, departure, index, timestampIndex, forceEnd }: {
    arrival?: RoutingArrival;
    departure?: RoutingDeparture;
    timestampIndex: number;
    forceEnd?: boolean;
} & JourneyLegType) => TemplateResult;
