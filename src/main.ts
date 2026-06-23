/**
 * Entry point for the Rail Replacement Navigation App.
 *
 * Initializes DB UX Web Components via Stencil loader,
 * then mounts the root application shell component.
 */

import { defineCustomElements } from '@db-ux/wc-core-components';
import './app.js';

// Register all DB UX web components (Stencil lazy-loading)
defineCustomElements(window);

const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = '<rail-nav-app></rail-nav-app>';
}
