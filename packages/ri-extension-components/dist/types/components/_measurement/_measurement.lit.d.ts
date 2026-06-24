import { VariantType } from './_measurement.properties';
import { Base } from '../_base/_base.lit.ts';
export declare class MeasurementBase extends Base {
    /**
     * Optional: Changes the variant of the platform.
     * `inside` will calculate it by 100%.
     * `absolute` will give you fixed px.
     * Defaults to `inside`.
     */
    variant?: VariantType;
    /**
     * Optional: If you pick variant="absolute" you can change the scale of px values
     */
    absoluteScale?: number;
}
