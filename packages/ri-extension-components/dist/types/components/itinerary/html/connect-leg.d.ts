import { TemplateResult } from 'lit-html';
import { LegConnect, LegJourney } from 'ri-extension-components-service/ris/schemas/routing';
import { TravellerType } from '../itinerary.properties.ts';
export declare const getDurationSplit: (duration: string) => number[];
export declare const getConnectionInfotext: ({ distance, icon, duration, changeoverName, changeoverPlatform, transport }: {
    distance?: number;
    duration: string;
    changeoverName?: string;
    changeoverPlatform?: string;
    icon: string;
    transport?: string;
}) => TemplateResult;
export declare const getConnectLeg: ({ legBefore, legAfter, leg, traveller, showCheckAlternative, hideConnectionEvaluation, index, alternativeClick }: {
    legBefore?: LegJourney;
    leg: LegConnect;
    legAfter?: LegJourney;
    traveller?: TravellerType;
    showCheckAlternative?: boolean;
    hideConnectionEvaluation?: boolean;
    index?: number;
    alternativeClick?: (leg: LegConnect) => void;
}) => TemplateResult;
