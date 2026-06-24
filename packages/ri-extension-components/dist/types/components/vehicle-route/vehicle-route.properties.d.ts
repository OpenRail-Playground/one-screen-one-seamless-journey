import { JourneyEventBased } from 'ri-extension-components-service/ris/schemas/journeys.ts';
import { RouteProperties } from '../_route/_route.properties.ts';
export type VehicleRouteProperties = {
    journey?: JourneyEventBased;
} & RouteProperties;
