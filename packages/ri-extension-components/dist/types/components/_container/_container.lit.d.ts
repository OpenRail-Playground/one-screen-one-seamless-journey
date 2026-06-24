import { ContainerProperties } from './_container.properties';
import { Base } from '../_base/_base.lit.ts';
export declare class ContainerBase extends Base {
    /**
     * Changed the variant of the container breakpoint:
     * - `screen`: Will be measured based on the screen inline size.
     * - `container`: Will be measured based on the container inline size.
     */
    breakpointVariant?: ContainerProperties['breakpointVariant'];
}
