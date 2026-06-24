import { VehicleRouteProperties } from './vehicle-route.properties';
import { TemplateResult } from 'lit-html';
import { Dot } from '../../utils/vehicle-route';
export declare const VehicleRouteHtml: ({ journey, now, dots, debug }: VehicleRouteProperties & {
    dots: Dot[];
}) => TemplateResult<1>;
