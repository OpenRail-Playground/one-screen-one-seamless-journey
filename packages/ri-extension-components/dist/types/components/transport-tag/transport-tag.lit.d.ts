import { TransportCategoryType, TransportStateType, TransportTagWidthType, TransportTypeType } from './transport-tag.properties.ts';
import { InteractiveBase } from '../_interactive/_interactive.lit.ts';
export declare class TransportTag extends InteractiveBase {
    /**
     * Transportation category, like ICE, RE, ...
     */
    category?: string | TransportCategoryType;
    /**
     * Transportation type, allowed entries: https://git.tech.rz.db.de/ris/ri-ui/components/-/blob/master/source/_patterns/components/transport-tag/transport-tag.scss?ref_type=heads#L16-L141
     */
    type?: string | TransportTypeType;
    /**
     * Cancellation state of this transportation
     */
    state?: TransportStateType;
    /**
     * Width behavior of the transport tag.
     */
    width?: TransportTagWidthType;
    /**
     * Line of the transport [Linie]
     */
    line?: string;
    /**
     * Description of the journey [Fahrtbezeichnung] that must be used to inform the traveller.
     */
    journeyDescription?: string;
    /**
     * Number of the transport [Fahrtnummer].
     * Format: int32
     */
    number?: number;
    /**
     * Freetext field for the transport (Verkehrsmittel).
     */
    label?: string;
    /**
     * If the current transport was replaced with SEV set this text
     */
    replacementTransportText?: string;
    /**
     * Hides text to show only the icon
     */
    noText?: boolean;
    /**
     * Shows the icon
     */
    showIcon?: boolean;
    /**
     * Disables the interactive mode and sets the tag to static mode.
     */
    staticMode?: boolean;
    /**
     * Enables overflow.
     */
    overflow?: boolean;
    additionalEventDetail?: any;
    private riClick;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-transport-tag': TransportTag;
    }
}
