import { LegJourney } from 'ri-extension-components-service/ris/schemas/routing';
import { ItineraryProperties } from './itinerary.properties';
import { TemplateResult } from 'lit-html';
import { Dot } from '../../utils/vehicle-route';
export declare const ItineraryHtml: ({ trip, now, interactiveTransportTags, traveller, showCheckAlternative, hideConnectionEvaluation, dots, lineChange, viasDetailsClick, openVias, alternativeClick, vehicleAttributeClick, interactiveVehicleAttributes }: ItineraryProperties & {
    dots: Dot[];
    lineChange: boolean;
    openVias: LegJourney[];
}) => TemplateResult<1>;
