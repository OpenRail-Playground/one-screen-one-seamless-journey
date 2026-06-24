import { TemplateResult } from 'lit-html';
import { LegJourney } from 'ri-extension-components-service/ris/schemas/routing';
import { JourneyLegType } from './index';
export declare const getVias: ({ leg, nowAsDate, viasDetailsClick }: {
    leg: LegJourney;
    viasDetailsClick?: (leg: LegJourney) => void;
} & JourneyLegType) => TemplateResult | symbol;
