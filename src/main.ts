/**
 * Entry point for the Rail Replacement Navigation App.
 *
 * Imports the root application shell component and mounts it into the DOM.
 * The <rail-nav-app> element handles all routing, data loading, and screen rendering.
 */

import './app.js';

const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = '<rail-nav-app></rail-nav-app>';
}
