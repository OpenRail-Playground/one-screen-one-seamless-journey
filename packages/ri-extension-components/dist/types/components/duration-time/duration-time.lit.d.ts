import { DurationTimeProperties } from './duration-time.properties.ts';
import { Base } from '../_base/_base.lit.ts';
export declare class DurationTime extends Base {
    /**
     * The times for the journey (arrival and departure), containing the time as string.
     */
    journeyTimes?: DurationTimeProperties['journeyTimes'];
    /**
     * The times as basic string if you calculate the duration time by yourself. Use this format: {hours:"1", minutes:"30"}
     */
    times?: DurationTimeProperties['times'];
    /**
     * The duration time as string. Duration of leg in ISO8601 (for instance 'P3Y6M4DT12H30M17S').
     */
    duration?: DurationTimeProperties['duration'];
    /**
     * The variant of the duration time, which can be used to style the component differently based on the value.
     * The possible values are 'default', 'successful' and 'critical'.
     */
    variant?: DurationTimeProperties['variant'];
    /**
     * Indicates if the duration time is a changeover time.
     */
    changeover?: DurationTimeProperties['changeover'];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-duration-time': DurationTime;
    }
}
