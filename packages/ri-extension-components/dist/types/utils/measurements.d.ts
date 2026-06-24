import { Sector } from 'ri-extension-components-service/ris/schemas/transports';
import { VariantType } from '../components/_measurement/_measurement.properties';
/**
 * @return Measurement related to the current type of the component, rounded for usage as a pixel value
 */
export declare const getMeasurementInPx: (number: number, absoluteScale?: number) => number;
/**
 * @return Container length (meter)
 */
export declare const getContainerLength: (container: {
    start: number;
    end: number;
}) => number;
/**
 * Get the CSS width string for passed relative / absolute value respecting a given scale
 * @param width the width (e.g. 50 or 0.5)
 * @param absoluteScale the scale if handled as absolute width. e.g. 2 would scale a width of 50px to 100px
 */
export declare const getCSSWidth: (width: number, absoluteScale?: number) => string;
/**
 * Get the relative value for the center for given data
 * @param data.start first position
 * @param data.end last position
 * @param data.start position between start and end
 * @return Either the relative middle between start and end (~0.50)
 * or the relative position of the center value between start and end (e.g. 0.323)
 */
export declare const getRelativeCenterPosition: (data: {
    start: number;
    end: number;
    center?: number;
}) => number;
/**
 * Get the relative center position for the cube within the sector
 * @param sector the Sector with an eventually set cubePosition
 */
export declare const relativeCubePosition: (sector: Sector) => number;
export type Measurement = {
    containerLength: number;
    widthChildren: number[];
};
/**
 * Get Measurement information for a container with children
 */
export declare const getMeasurements: (variant: VariantType, container: {
    start?: number;
    end?: number;
}, children: {
    start: number;
    end: number;
}[]) => Measurement | undefined;
export declare const isAbsolute: (variant?: VariantType) => boolean;
