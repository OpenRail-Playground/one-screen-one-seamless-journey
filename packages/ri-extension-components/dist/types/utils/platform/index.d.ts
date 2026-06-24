import { TemplateResult } from 'lit-html';
import { PlatformTagEmphasisType, PlatformTagVariantType } from '../../components/platform-tag/platform-tag.properties.ts';
export declare const getPlatformTagHTML: ({ platformName, slot, emphasis, variant }: {
    platformName?: string;
    slot?: string;
    emphasis?: PlatformTagEmphasisType;
    variant?: PlatformTagVariantType;
}) => TemplateResult;
export declare const getPlatformDirection: (departureDirection?: string) => {
    departureDirectionString: string;
    directionString: string;
    platformDirection: string;
};
