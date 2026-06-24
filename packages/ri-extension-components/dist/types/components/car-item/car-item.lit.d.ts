import { Car } from '../car/car.lit';
export declare class CarItem extends Car {
    protected readonly i18n = false;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ri-car-item': CarItem;
    }
}
