import { BoardStop } from '../../utils/boards';
import { ContainerProperties } from '../_container/_container.properties.ts';
export type BoardItemShow = {
    via?: boolean;
    viaCities?: boolean;
    platformTag?: boolean;
};
export type BoardItemProperties = {
    isArrival?: boolean;
    background?: boolean;
    stop?: BoardStop;
    show?: BoardItemShow;
    riClick: () => void;
} & ContainerProperties;
