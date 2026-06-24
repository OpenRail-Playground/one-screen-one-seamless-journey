import { LitElement } from 'lit';
export declare class Base extends LitElement {
    /** Set to false in subclasses that don't use t() and don't need to re-render on language change */
    protected readonly i18n: boolean;
    private hydrateElements;
    private hydrateObserver;
    private readonly onLanguageChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
