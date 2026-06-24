import { Base } from '../_base/_base.lit.ts';
export declare class TransportContainer extends Base {
    /**
     * Name for destination station. Will be prefixed with "nach "
     */
    destinationName?: string;
    /**
     * Overwrite for destinationName without prefix "nach "
     */
    directionText?: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-transport-container': TransportContainer;
    }
}
