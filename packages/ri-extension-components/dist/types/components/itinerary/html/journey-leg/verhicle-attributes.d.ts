import { TemplateResult } from 'lit-html';
import { Administration, MessageAttributeLegacy } from 'ri-extension-components-service/ris/schemas/routing';
import { VehicleAttributeTypeType } from '../../itinerary.properties.ts';
export declare const getVehicleAttributes: (administration: Administration, attributes?: MessageAttributeLegacy[], vehicleAttributeClick?: (attributeType: VehicleAttributeTypeType) => void, interactiveVehicleAttributes?: boolean) => TemplateResult | symbol;
