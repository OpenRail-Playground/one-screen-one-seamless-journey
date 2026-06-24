import { Base } from '../_base/_base.lit.ts';
export declare class Station extends Base {
    protected readonly i18n = false;
    /**
     * Change the emphasis of the station
     */
    emphasis?: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-station': Station;
    }
}
