# Implementation Plan: Rail Replacement Navigation

## Overview

Build a mobile-first web application using vanilla Web Components and the DB UX Design System that guides train passengers from their platform to a rail replacement bus stop. The app uses hash-based client-side routing, static JSON route data, Leaflet maps, and the browser Geolocation API. Implementation is in TypeScript with no framework overhead.

## Tasks

- [ ] 1. Set up project structure, tooling, and core interfaces
  - [~] 1.1 Set up TypeScript build tooling and project scaffolding
    - Create `tsconfig.json` for TypeScript compilation targeting ES2020 modules
    - Create `index.html` entry point that loads DB UX theme CSS, fonts, and icons
    - Add a build script (e.g., esbuild or preferably vite) to `package.json` for bundling TypeScript to JS
    - Add `fast-check` as a dev dependency for property-based testing
    - Add a test runner (e.g., vitest) as dev dependency
    - Create directory structure: `src/`, `src/components/`, `src/services/`, `src/types/`, `data/routes/`, `data/photos/`
    - _Requirements: 9.1, 9.5_

  - [~] 1.2 Define TypeScript interfaces and types
    - Create `src/types/index.ts` with all interfaces: `StationRoute`, `Connection`, `Milestone`, `BusDeparture`, `NavigationState`, `Direction`, `AccessibilityFeature`, `Screen`
    - Create `src/types/router.ts` with the `Router` interface
    - Create `src/types/services.ts` with `RouteDataService`, `DepartureService`, and `GeolocationService` interfaces
    - _Requirements: 1.2, 5.1, 8.2_

  - [~] 1.3 Create sample static route JSON data file
    - Create `data/routes/FFM-HBF.json` with example station data including standard and accessible routes, connections, and milestone entries
    - Include `exitLocation` and `busStopLocation` coordinate fields for map rendering
    - Include a GeoJSON linestring for the route polyline
    - _Requirements: 2.1, 3.1, 3.3, 5.5, 8.3_

- [ ] 2. Implement hash router and application state
  - [~] 2.1 Implement hash-based router
    - Create `src/router.ts` implementing the `Router` interface
    - Support hash routes: `#confirmation`, `#connections`, `#preview`, `#navigation`
    - Parse URL query parameters (`station`, `platform`) on initial load
    - Dispatch route change events to registered listeners
    - _Requirements: 1.1, 1.2, 2.2, 2.3_

  - [~] 2.2 Write property test for URL parsing round trip
    - **Property 1: URL Parsing Round Trip**
    - **Validates: Requirements 1.2**

  - [~] 2.3 Write property test for malformed URL rejection
    - **Property 2: Malformed URL Rejection**
    - **Validates: Requirements 1.4**

  - [~] 2.4 Implement application state store
    - Create `src/state.ts` with the `AppState` class implementing observable state pattern
    - Support `getState()`, `setState(partial)`, and `subscribe(listener)` methods
    - Initialize default state with `activeView: 'text'`, `currentMilestoneIndex: 0`
    - _Requirements: 5.2, 7.6_

- [ ] 3. Implement data services
  - [~] 3.1 Implement RouteDataService
    - Create `src/services/route-data-service.ts`
    - Fetch static JSON from `/data/routes/{stationId}.json`
    - Parse and return `StationRoute` data
    - Provide `getMilestones()` method that returns standard or accessible milestones based on mode
    - _Requirements: 1.2, 4.4, 8.1, 8.2_

  - [~] 3.2 Implement DepartureService
    - Create `src/services/departure-service.ts`
    - Fetch bus departure data from API endpoint (mock-ready)
    - Implement `subscribeToUpdates()` with periodic polling (every 30 seconds)
    - Filter departures to show only future departures, sorted by time
    - Handle API failure: return scheduled times with `isRealtime: false`
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [~] 3.3 Write property test for next departures computation
    - **Property 6: Next Departures Computation**
    - **Validates: Requirements 4.5, 5.4, 6.1, 6.2, 6.3**

  - [~] 3.4 Implement GeolocationService
    - Create `src/services/geolocation-service.ts`
    - Wrap browser `navigator.geolocation` API
    - Implement `requestPermission()`, `getCurrentPosition()`, and `watchPosition()` methods
    - Handle permission denied and position unavailable errors gracefully
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [~] 4. Checkpoint - Core infrastructure verified
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implement screen components - Journey Confirmation and Connection Overview
  - [~] 5.1 Implement JourneyConfirmationScreen component
    - Create `src/components/journey-confirmation-screen.ts` as a Web Component
    - Display train number, route name, and disruption details from route data
    - Render exactly two `db-button` elements labeled "Ja" and "Nein"
    - "Ja" navigates to `#preview`, "Nein" navigates to `#connections`
    - Show error message for invalid/malformed QR code data
    - Use `db-card` for content layout
    - _Requirements: 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 9.3_

  - [~] 5.2 Write property test for journey confirmation rendering
    - **Property 3: Journey Confirmation Renders All Connection Fields**
    - **Validates: Requirements 2.1**

  - [~] 5.3 Implement ConnectionOverviewScreen component
    - Create `src/components/connection-overview-screen.ts` as a Web Component
    - Display list of all active rail replacement connections using `db-card` and `db-stack`
    - Show destination, departure time, and bus stop for each connection
    - Handle tap on a connection to navigate to `#preview` with selected connection
    - Show "Keine aktuellen Verbindungen" message when connections array is empty using `db-notification`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 9.3_

  - [~] 5.4 Write property test for connection list completeness
    - **Property 4: Connection List Completeness**
    - **Validates: Requirements 3.1, 3.3**

- [ ] 6. Implement screen components - Navigation Preview
  - [~] 6.1 Implement BusDepartureInfo component
    - Create `src/components/bus-departure-info.ts` as a Web Component
    - Display next bus departure time and at least one subsequent departure
    - Show "Echtzeitdaten nicht verfügbar" notice when `isRealtime` is false
    - Subscribe to departure service updates and re-render on changes
    - _Requirements: 4.5, 5.4, 6.1, 6.2, 6.3, 6.4_

  - [~] 6.2 Implement NavigationPreviewScreen component
    - Create `src/components/navigation-preview-screen.ts` as a Web Component
    - Display a summary of navigation steps (milestone count and overview)
    - Render exactly two `db-button` elements: "Navigation starten" and "Barrierefreie Navigation starten"
    - "Navigation starten" sets navigation mode to `standard` and navigates to `#navigation`
    - "Barrierefreie Navigation starten" sets navigation mode to `accessible` and navigates to `#navigation`
    - Include `BusDepartureInfo` component below route summary
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 9.3_

  - [~] 6.3 Write property test for navigation preview milestone summary
    - **Property 5: Navigation Preview Milestone Summary**
    - **Validates: Requirements 4.1**

- [ ] 7. Implement Navigation Screen - Text Directions View
  - [~] 7.1 Implement MilestoneCard component
    - Create `src/components/milestone-card.ts` as a Web Component
    - Display direction arrow (SVG rotated by direction), distance to next milestone, landmark photo, and instruction text
    - For accessible milestones, display accessibility feature label (elevator, ramp, etc.) using `db-badge`
    - Handle missing photos with a placeholder image
    - _Requirements: 5.1, 5.5, 8.4, 9.3_

  - [~] 7.2 Write property test for milestone rendering completeness
    - **Property 7: Milestone Rendering Completeness**
    - **Validates: Requirements 5.1**

  - [~] 7.3 Write property test for accessible milestone feature label rendering
    - **Property 12: Accessible Milestone Feature Label Rendering**
    - **Validates: Requirements 8.4**

  - [~] 7.4 Implement SwipeContainer component
    - Create `src/components/swipe-container.ts` as a Web Component
    - Handle horizontal touch/swipe gestures to advance or go back between milestones
    - Update `currentMilestoneIndex` in app state on swipe, clamped to valid range [0, N-1]
    - _Requirements: 5.2_

  - [~] 7.5 Write property test for milestone index state transitions
    - **Property 8: Milestone Index State Transitions**
    - **Validates: Requirements 5.2**

  - [~] 7.6 Implement DotIndicator component
    - Create `src/components/dot-indicator.ts` as a Web Component
    - Render a dot for each milestone, highlighting the current milestone position
    - Accept `total` and `activeIndex` as properties
    - _Requirements: 5.3_

  - [~] 7.7 Write property test for dot indicator correctness
    - **Property 9: Dot Indicator Correctness**
    - **Validates: Requirements 5.3**

- [ ] 8. Implement Navigation Screen - Map View and View Toggle
  - [~] 8.1 Implement MapViewComponent
    - Create `src/components/map-view.ts` as a Web Component
    - Initialize Leaflet map with OpenStreetMap tiles
    - Display route polyline from station route GeoJSON data
    - Mark station exit ("Ausgang") on the map
    - Mark bus stop location on the map
    - Show estimated walking duration and distance below map
    - Request geolocation when map view is activated
    - Display user position marker when geolocation is granted; omit marker when denied
    - Update position marker in real-time via `watchPosition`
    - _Requirements: 7.3, 7.4, 7.5, 10.1, 10.2, 10.3, 10.4_

  - [~] 8.2 Write property test for walking distance and duration calculation
    - **Property 10: Walking Distance and Duration Calculation**
    - **Validates: Requirements 7.5**

  - [~] 8.3 Implement NavigationScreen with view toggle
    - Create `src/components/navigation-screen.ts` as a Web Component
    - Render `db-tabs` with two `db-tab-item` entries: "Wegbeschreibung" and "Maps"
    - Default to "Wegbeschreibung" view on navigation start
    - "Wegbeschreibung" tab shows `SwipeContainer` with `MilestoneCard` items and `DotIndicator`
    - "Maps" tab shows `MapViewComponent`
    - Include `BusDepartureInfo` below navigation content in both views
    - _Requirements: 7.1, 7.2, 7.3, 7.6, 5.4_

- [~] 9. Checkpoint - All screens and navigation functional
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Implement accessible navigation and validation
  - [~] 10.1 Wire accessible navigation mode
    - Ensure that when navigation mode is `accessible`, milestones from `routes.accessible` are loaded
    - Verify MilestoneCard displays `accessibilityFeature` labels for accessible milestones
    - Ensure accessible route contains no stair/escalator-only instructions
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [~] 10.2 Write property test for accessible route data validity
    - **Property 11: Accessible Route Data Validity**
    - **Validates: Requirements 8.1, 8.2**

- [ ] 11. Wire application together and configure entry point
  - [~] 11.1 Wire all components into the main application shell
    - Create `src/app.ts` as the root Web Component that listens to router changes and renders the active screen
    - Register all custom elements
    - On initial load: parse URL params, fetch route data, initialize state, and show JourneyConfirmationScreen
    - Wire router navigation between all screens
    - Ensure `index.html` loads the bundled JS and initializes the app
    - _Requirements: 1.1, 1.3, 9.1, 9.2, 9.4, 9.5_

  - [~] 11.2 Add responsive mobile styling
    - Create `src/styles/global.css` with mobile-optimized viewport styles
    - Ensure layout works at 320px, 375px, and 428px widths
    - Set German language attribute (`lang="de"`) on HTML element
    - Apply DB UX theme tokens for consistent visual appearance
    - _Requirements: 9.3, 9.4_

- [~] 12. Final checkpoint - Full integration verified
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using `fast-check` with minimum 100 iterations
- Unit tests validate specific examples and edge cases
- The app uses vanilla Web Components with no framework — all components extend `HTMLElement`
- Static JSON route data enables offline navigation after initial load
- Leaflet + OpenStreetMap provides map functionality without API keys
- All UI text is in German as specified in Requirements 9.3

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1", "2.4", "3.1", "3.2", "3.4"] },
    { "id": 2, "tasks": ["2.2", "2.3", "3.3"] },
    { "id": 3, "tasks": ["5.1", "5.3", "6.1"] },
    { "id": 4, "tasks": ["5.2", "5.4", "6.2"] },
    { "id": 5, "tasks": ["6.3", "7.1", "7.4", "7.6"] },
    { "id": 6, "tasks": ["7.2", "7.3", "7.5", "7.7", "8.1"] },
    { "id": 7, "tasks": ["8.2", "8.3"] },
    { "id": 8, "tasks": ["10.1"] },
    { "id": 9, "tasks": ["10.2", "11.1", "11.2"] }
  ]
}
```
