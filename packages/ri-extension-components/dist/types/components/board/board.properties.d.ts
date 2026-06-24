import { BoardPublic } from '../../utils/boards';
import { BoardItemShow } from '../board-item/board-item.properties.ts';
import { ContainerProperties } from '../_container/_container.properties.ts';
export declare const BoardHeaderVariantList: string[];
export type BoardHeaderVariantType = (typeof BoardHeaderVariantList)[number];
export type BoardProperties = {
    board?: BoardPublic;
    showHeader?: boolean;
    headerVariant?: BoardHeaderVariantType;
    showBoardItems?: BoardItemShow;
} & ContainerProperties;
