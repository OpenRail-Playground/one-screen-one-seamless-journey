import { TemplateResult } from 'lit-html';
export declare const isActive: (time: string, nowAsDate?: Date) => boolean;
export declare const getTimeStamp: ({ time, timeSchedule, timeType, index, items, arrival }: {
    time: string;
    timeSchedule: string;
    timeType: string;
    items: unknown[];
    index: number;
    arrival?: boolean;
}) => TemplateResult;
export declare const getIcon: (items: unknown[], index: number, stopCancelled?: boolean, forceEnd?: boolean) => TemplateResult;
