import { BoardStop } from '../../utils/boards';
import { BoardItemProperties, BoardItemShow } from './board-item.properties.ts';
import { ContainerBase } from '../_container/_container.lit.ts';
export declare class BoardItem extends ContainerBase {
    /**
     * The stop data containing journey and station information
     */
    stop?: BoardStop;
    /**
     * Controls which elements are shown in the board item
     */
    show?: BoardItemShow;
    /**
     * Enables background styling for the board item
     */
    background?: BoardItemProperties['background'];
    /**
     * Indicates if this is an arrival board item
     */
    isArrival?: BoardItemProperties['isArrival'];
    private riClick;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-board-item': BoardItem;
    }
}
