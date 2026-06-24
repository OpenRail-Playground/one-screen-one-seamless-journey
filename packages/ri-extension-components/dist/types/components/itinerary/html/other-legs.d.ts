import { Leg } from 'ri-extension-components-service/ris/schemas/routing';
import { TemplateResult } from 'lit-html';
import { JourneyLegType } from './journey-leg';
export declare const getOtherLeg: ({ index, leg, legs, nowAsDate }: {
    leg: Leg;
} & JourneyLegType) => TemplateResult | symbol;
