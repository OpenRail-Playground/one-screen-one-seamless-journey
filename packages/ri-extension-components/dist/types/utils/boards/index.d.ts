import { StopArrival, StopDeparture, BoardPublicArrival, BoardPublicDeparture, TransportPublicDestinationVia, TransportPublicOriginVia, StopPlaceEmbedded } from 'ri-extension-components-service/ris/schemas/boards.ts';
export type BetterStopDeparture = Omit<StopDeparture, 'travelsWith'> & {
    travelsWith?: (TransportPublicDestinationVia & {
        separationAt?: StopPlaceEmbedded;
    })[];
};
export type BetterStopArrival = Omit<StopArrival, 'travelsWith'> & {
    travelsWith?: (TransportPublicOriginVia & {
        separationAt?: StopPlaceEmbedded;
    })[];
};
export type BoardStop = BetterStopArrival | BetterStopDeparture;
export type BoardPublic = BoardPublicArrival | BoardPublicDeparture;
export declare const isBoardPublicArrival: (board: BoardPublic) => board is BoardPublicArrival;
export declare const isBoardPublicDeparture: (board: BoardPublic) => board is BoardPublicDeparture;
export declare const getCleanedName: (name: string) => string;
