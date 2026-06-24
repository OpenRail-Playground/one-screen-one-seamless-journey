import { DepartureDirectionType } from './platform-structure.properties';
import { Platform } from 'ri-extension-components-service/ris/schemas/transports';
import { MeasurementBase } from '../_measurement/_measurement.lit';
export declare class PlatformStructure extends MeasurementBase {
    /**
     * Optional: Show direction for departure
     */
    departureDirection?: DepartureDirectionType;
    /**
     * All information for platform
     */
    platform?: Platform;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-platform-structure': PlatformStructure;
    }
}
