import { CapacityIndicatorProperties } from './capacity-indicator.properties.ts';
import { Base } from '../_base/_base.lit.ts';
export declare class CapacityIndicator extends Base {
    /**
     * Change the capacity state of the indicator. The state can be one of the following:
     * - `low`
     * - `moderate`
     * - `high`
     * - `booked`
     */
    capacity?: CapacityIndicatorProperties['capacity'];
    /**
     * Change the variant of the indicator. The variant can be one of the following:
     * - `text`
     * - `tag`
     */
    variant?: CapacityIndicatorProperties['variant'];
    /**
     * Change the size of the indicator. The size can be one of the following:
     * - `small`
     * - `medium`
     */
    size?: CapacityIndicatorProperties['size'];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-capacity-indicator': CapacityIndicator;
    }
}
