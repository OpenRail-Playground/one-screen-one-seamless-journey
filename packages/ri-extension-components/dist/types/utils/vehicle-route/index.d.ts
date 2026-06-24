export type Dot = {
    id: string;
    top: number;
};
export declare const getLineStyle: (dots: Dot[], progress: number, offset?: number, blockSize?: number) => string;
export declare const getProgress: ({ nowAsDate, dots, times, collapsed }: {
    times?: string[];
    nowAsDate?: Date;
    collapsed?: boolean;
    dots?: Dot[];
}) => number;
