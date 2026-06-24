import { TemplateResult } from 'lit-html';
import { JourneyLegType } from './index';
import { LegJourney } from 'ri-extension-components-service/ris/schemas/routing';
import { VehicleAttributeTypeType } from '../../itinerary.properties.ts';
export declare const getVehicleInfo: ({ leg, index, interactiveTransportTags, vehicleAttributeClick, interactiveVehicleAttributes }: {
    leg: LegJourney;
    interactiveTransportTags?: boolean;
    vehicleAttributeClick?: (attributeType: VehicleAttributeTypeType) => void;
    interactiveVehicleAttributes?: boolean;
} & JourneyLegType) => TemplateResult;
