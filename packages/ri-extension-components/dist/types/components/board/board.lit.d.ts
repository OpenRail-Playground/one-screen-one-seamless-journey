import { BoardPublic } from '../../utils/boards';
import { BoardHeaderVariantType } from './board.properties.ts';
import { BoardItemShow } from '../board-item/board-item.properties.ts';
import { ContainerBase } from '../_container/_container.lit.ts';
export declare class Board extends ContainerBase {
    /**
     * The board data containing all stops and journey information
     */
    board?: BoardPublic;
    /**
     * Controls whether the board header is displayed
     */
    showHeader?: boolean;
    /**
     * The variant of the board header. Can be:
     * - `light`
     * - `dark`
     */
    headerVariant?: BoardHeaderVariantType;
    /**
     * Controls which elements are shown in board items
     */
    showBoardItems?: BoardItemShow;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-board': Board;
    }
}
