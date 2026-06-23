/**
 * Type declaration for the DB UX Stencil web component loader.
 * The package exports defineCustomElements from its main entry point.
 */
declare module '@db-ux/wc-core-components' {
  export function defineCustomElements(win?: Window, options?: unknown): Promise<void>;
}
