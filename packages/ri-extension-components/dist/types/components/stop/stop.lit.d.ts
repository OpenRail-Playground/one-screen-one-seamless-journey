import { StopProperties } from './stop.properties.ts';
import { ContainerBase } from '../_container/_container.lit.ts';
export declare class Stop extends ContainerBase {
    protected readonly i18n = false;
    /**
     * Set the stop to active mode
     */
    active?: StopProperties['active'];
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): Promise<void>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-stop': Stop;
    }
}
