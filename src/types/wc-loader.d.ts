/**
 * Type declaration for the DB UX web component bundle loader.
 * The bundle entry eagerly imports all components and exports defineCustomElements.
 */
declare module '@db-ux/wc-core-components/bundle/index.js' {
  export function defineCustomElements(options?: unknown): void;
}
