import { TemplateResult } from 'lit-html';
export declare const getHourAndMinutes: (date: Date | string) => string;
export declare const getScheduledTimeStamp: ({ time, timeSchedule, timeType, emphasis, arrival }: {
    time: string;
    timeSchedule: string;
    timeType: string;
    emphasis: string;
    arrival?: boolean;
}) => TemplateResult;
