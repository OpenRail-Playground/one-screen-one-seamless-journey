import { VehicleType } from '../../utils/cars';
import { Ref } from 'lit/directives/ref.js';
export type CarDescriptionListProperties = {
    vehicles?: VehicleType[];
    active?: string;
    single?: boolean;
    postfix?: string;
    _refs: Record<string, Ref<HTMLElement>>;
};
