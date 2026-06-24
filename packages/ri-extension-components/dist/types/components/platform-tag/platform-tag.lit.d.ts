import { PlatformTagEmphasisType, PlatformTagVariantType } from './platform-tag.properties.ts';
import { Base } from '../_base/_base.lit.ts';
export declare class PlatformTag extends Base {
    /**
     * Change the variant of the tag set(blue), changed(red)
     */
    variant: PlatformTagVariantType;
    /**
     * Change the emphasis of the tag
     */
    emphasis: PlatformTagEmphasisType;
    /**
     * Set a required title which explains platform tag for screen reader users
     */
    title: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-platform-tag': PlatformTag;
    }
}
