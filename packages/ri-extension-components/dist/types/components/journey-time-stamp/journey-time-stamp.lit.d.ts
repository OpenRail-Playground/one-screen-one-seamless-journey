import { JourneyTimeStampProperties } from './journey-time-stamp.properties.ts';
import { Base } from '../_base/_base.lit.ts';
export declare class JourneyTimeStamp extends Base {
    protected readonly i18n = false;
    /**
     * The variant of the time stamp. Can be:
     * - `default`
     * - `on-time`
     * - `delayed`
     */
    variant?: JourneyTimeStampProperties['variant'];
    /**
     * The emphasis level of the time stamp. Can be:
     * - `weak`
     * - `strong`
     */
    emphasis?: JourneyTimeStampProperties['emphasis'];
    /**
     * Enables background styling for the time stamp
     */
    background?: JourneyTimeStampProperties['background'];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-journey-time-stamp': JourneyTimeStamp;
    }
}
