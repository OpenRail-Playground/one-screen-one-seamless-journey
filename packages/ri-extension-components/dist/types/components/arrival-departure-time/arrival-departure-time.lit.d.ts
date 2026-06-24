import { ArrivalDepartureTimeProperties } from './arrival-departure-time.properties.ts';
import { Base } from '../_base/_base.lit.ts';
export declare class ArrivalDepartureTime extends Base {
    protected readonly i18n = false;
    /**
     * Change the size of the arrival-departure-time. The size can be one of the following:
     * - `small`
     * - `medium`
     * - `large`
     */
    size?: ArrivalDepartureTimeProperties['size'];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-arrival-departure-time': ArrivalDepartureTime;
    }
}
