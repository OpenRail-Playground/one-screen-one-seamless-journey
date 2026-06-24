/**
 * Entry point for the Rail Replacement Navigation App.
 *
 * Initializes DB UX Web Components via Stencil loader,
 * then mounts the root application shell component.
 */

import './styles/global.css';
import { defineCustomElements } from '@db-ux/wc-core-components/bundle/index.js';
import './app.js';
import '@db-ux-inner-source/ri-extension-components/dist/headless/index.js';
// import '@db-ux-inner-source/ri-extension-components/dist/localization/languages/german.js';
// import '@db-ux-inner-source/ri-extension-components/dist/localization/languages/english.js';
// import '@db-ux-inner-source/ri-extension-components/dist/localization/language-provider.js';
import '@db-ux-inner-source/ri-extension-components';

// Register all DB UX web components (eager bundle, no lazy-loading)
defineCustomElements();

const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = '<rail-nav-app></rail-nav-app>';
}
