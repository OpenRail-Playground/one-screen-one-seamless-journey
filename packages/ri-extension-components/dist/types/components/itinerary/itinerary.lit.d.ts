import { ItineraryProperties } from './itinerary.properties.ts';
import { RouteBase } from '../_route/_route.lit.ts';
import { LegJourney } from 'ri-extension-components-service/ris/schemas/routing.ts';
export declare class Itinerary extends RouteBase {
    /**
     * A trip from ris-routing, containing all the information about the itinerary to be displayed
     */
    trip?: ItineraryProperties['trip'];
    /**
     * Shows the transport tags of the itinerary as interactive elements.
     * This means that they will have a hover effect and a pointer cursor.
     */
    interactiveTransportTags?: ItineraryProperties['interactiveTransportTags'];
    /**
     * Shows the vehicle attributes of the itinerary as interactive elements.
     * This means that they will have a hover effect and a pointer cursor.
     */
    interactiveVehicleAttributes?: ItineraryProperties['interactiveVehicleAttributes'];
    /**
     * Shows the alternative check button for all critical and impossible connectionLegs.
     */
    showCheckAlternative?: ItineraryProperties['showCheckAlternative'];
    /**
     * Hides the connection evaluation (safe, critical, impossible) for connect legs.
     */
    hideConnectionEvaluation?: ItineraryProperties['hideConnectionEvaluation'];
    /**
     * The type of traveller for which the itinerary is displayed.
     * This type decides which connection can be reached.
     */
    traveller?: ItineraryProperties['traveller'];
    _lineChange: boolean;
    _openVias: LegJourney[];
    private viasDetailsClick;
    private alternativeClick;
    private vehicleAttributeClick;
    render(): import("lit-html").TemplateResult<1>;
    handleStopIconDetection(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-itinerary': Itinerary;
    }
}
