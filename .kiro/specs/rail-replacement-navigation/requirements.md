# Requirements Document

## Introduction

This feature provides a mobile web application that guides train passengers from their platform to the rail replacement bus stop during train service disruptions. The app is triggered by scanning a QR code at the station platform, presenting step-by-step navigation using photos, direction arrows, distance indicators, and real-time bus departure information. The goal is to reduce confusion, minimize missed connections, and help the majority of passengers find the bus stop within 5 minutes.

## Glossary

- **Navigation_App**: The mobile web application that guides passengers from platform to rail replacement bus stop
- **QR_Scanner**: The native camera application on the passenger's device used to scan QR codes
- **Journey_Confirmation_Screen**: The screen displaying train information for the passenger to confirm their disrupted journey
- **Connection_Overview**: The screen listing available current rail replacement connections for selection
- **Navigation_Preview**: The screen showing a summary of navigation steps with options to start standard or accessible navigation
- **Navigation_Screen**: The active navigation interface showing direction, distance, landmark photos, and progress indicators
- **Milestone**: A single waypoint step in the navigation route (e.g., "go downstairs", "turn left at exit")
- **Landmark_Photo**: A photograph of the physical location at a station milestone to help passengers visually recognize their surroundings
- **Bus_Departure_Info**: Real-time information about the next departing rail replacement bus and subsequent departures
- **Accessible_Navigation**: An alternative navigation route optimized for passengers with mobility impairments (barrier-free path)
- **Direction_Indicator**: A visual arrow showing the direction the passenger should walk
- **Map_View**: A map display showing the passenger's current location and the route to the bus stop destination
- **Text_Directions_View**: The step-by-step milestone-based navigation view with photos and direction arrows (Wegbeschreibung)
- **Dot_Indicator**: A visual progress indicator showing which milestone the passenger is currently viewing and how many remain

## Requirements

### Requirement 1: QR Code Entry Point

**User Story:** As a train passenger on the platform, I want to scan a QR code with my phone's camera to immediately access navigation guidance, so that I do not need to install an app or search for information.

#### Acceptance Criteria

1. WHEN the QR_Scanner scans a valid station QR code, THE Navigation_App SHALL open in the device's default mobile browser
2. THE QR code content SHALL encode the station identifier and platform information needed to determine the passenger's starting location
3. WHEN the Navigation_App loads from a QR code scan, THE Navigation_App SHALL display the Journey_Confirmation_Screen within 3 seconds on a standard mobile connection
4. IF the QR code content is malformed or unrecognized, THEN THE Navigation_App SHALL display an error message indicating the code is invalid

### Requirement 2: Journey Confirmation

**User Story:** As a passenger, I want to confirm that the displayed train information matches my disrupted journey, so that I receive navigation to the correct rail replacement bus.

#### Acceptance Criteria

1. WHEN the Journey_Confirmation_Screen loads, THE Navigation_App SHALL display the train number, route, and disruption details associated with the scanned QR code
2. WHEN the passenger taps "Ja" on the Journey_Confirmation_Screen, THE Navigation_App SHALL navigate to the Navigation_Preview
3. WHEN the passenger taps "Nein" on the Journey_Confirmation_Screen, THE Navigation_App SHALL navigate to the Connection_Overview
4. THE Journey_Confirmation_Screen SHALL present exactly two action buttons labeled "Ja" and "Nein"

### Requirement 3: Connection Overview

**User Story:** As a passenger whose journey does not match the displayed information, I want to see all current rail replacement connections, so that I can select the correct one for my trip.

#### Acceptance Criteria

1. WHEN the Connection_Overview loads, THE Navigation_App SHALL display a list of all currently active rail replacement connections departing from the station
2. WHEN the passenger selects a connection from the Connection_Overview, THE Navigation_App SHALL navigate to the Navigation_Preview for the selected connection
3. THE Connection_Overview SHALL display the destination, departure time, and platform or bus stop for each connection
4. IF no active rail replacement connections are available, THEN THE Navigation_App SHALL display a message indicating no current connections exist

### Requirement 4: Navigation Preview and Mode Selection

**User Story:** As a passenger, I want to preview the navigation route and choose between standard and accessible navigation, so that I can select a path suited to my mobility needs.

#### Acceptance Criteria

1. WHEN the Navigation_Preview loads, THE Navigation_App SHALL display a summary of the navigation steps from platform to bus stop
2. THE Navigation_Preview SHALL present exactly two navigation start buttons: "Navigation starten" and "Barrierefreie Navigation starten"
3. WHEN the passenger taps "Navigation starten", THE Navigation_App SHALL begin standard navigation on the Navigation_Screen
4. WHEN the passenger taps "Barrierefreie Navigation starten", THE Navigation_App SHALL begin Accessible_Navigation on the Navigation_Screen using barrier-free routes
5. WHILE the Navigation_Preview is displayed, THE Navigation_App SHALL show the Bus_Departure_Info for the next departing bus and subsequent departures

### Requirement 5: Step-by-Step Navigation

**User Story:** As a passenger navigating the station, I want to see direction arrows, distances, and photos of landmarks at each step, so that I can easily recognize where to go next.

#### Acceptance Criteria

1. THE Navigation_Screen SHALL display a Direction_Indicator, the distance to the next Milestone, and a Landmark_Photo for the current Milestone
2. WHEN the passenger swipes horizontally on the Navigation_Screen, THE Navigation_App SHALL advance to the next or previous Milestone
3. THE Navigation_Screen SHALL display a Dot_Indicator showing the current Milestone position and total number of Milestones
4. WHILE the Navigation_Screen is active, THE Navigation_App SHALL display the Bus_Departure_Info below the navigation steps
5. THE Landmark_Photo SHALL show a recognizable image of the physical location at the current Milestone so the passenger can visually confirm their position

### Requirement 6: Real-Time Bus Departure Information

**User Story:** As a passenger, I want to see when the next rail replacement bus departs and subsequent departure times, so that I know how much time I have and can plan accordingly.

#### Acceptance Criteria

1. WHILE the Navigation_Preview or Navigation_Screen is displayed, THE Navigation_App SHALL show the departure time of the next rail replacement bus
2. WHILE the Navigation_Preview or Navigation_Screen is displayed, THE Navigation_App SHALL show at least one subsequent bus departure time after the next departure
3. WHEN a bus departure time passes, THE Navigation_App SHALL update the Bus_Departure_Info to reflect the next available departure
4. IF no real-time bus departure data is available, THEN THE Navigation_App SHALL display the scheduled departure times with a notice that real-time data is unavailable

### Requirement 7: View Toggle Between Text Directions and Map

**User Story:** As a passenger, I want to switch between step-by-step text directions and a map view, so that I can use whichever navigation style I find most helpful.

#### Acceptance Criteria

1. THE Navigation_Screen SHALL provide a toggle switch with two options: "Wegbeschreibung" and "Maps"
2. WHEN the passenger selects "Wegbeschreibung", THE Navigation_App SHALL display the Text_Directions_View with Milestones, photos, and direction arrows
3. WHEN the passenger selects "Maps", THE Navigation_App SHALL display the Map_View showing the passenger's current location and the route to the bus stop
4. WHILE the Map_View is displayed, THE Navigation_App SHALL mark the station exit ("Ausgang") on the map
5. WHILE the Map_View is displayed, THE Navigation_App SHALL show the estimated walking duration and distance to the bus stop below the map
6. THE Navigation_App SHALL default to the "Wegbeschreibung" view when navigation starts

### Requirement 8: Accessible Navigation

**User Story:** As a passenger with mobility impairments, I want a barrier-free navigation route, so that I can reach the bus stop using elevators, ramps, and accessible paths.

#### Acceptance Criteria

1. WHEN Accessible_Navigation is active, THE Navigation_App SHALL provide a route that avoids stairs, escalators, and other barriers
2. WHEN Accessible_Navigation is active, THE Navigation_App SHALL use Milestones that include elevators, ramps, and level pathways
3. THE Accessible_Navigation route SHALL include Landmark_Photos specific to the barrier-free path
4. WHILE Accessible_Navigation is active, THE Navigation_App SHALL clearly indicate which accessibility features (elevator, ramp) are used at each Milestone

### Requirement 9: Performance and Usability

**User Story:** As a passenger in a stressful disruption situation, I want the app to load quickly and be intuitive to use, so that I can find the bus stop within 5 minutes without frustration.

#### Acceptance Criteria

1. THE Navigation_App SHALL render the initial Journey_Confirmation_Screen within 3 seconds of the page loading on a 4G mobile connection
2. THE Navigation_App SHALL be usable without prior instruction or onboarding
3. THE Navigation_App user interface SHALL be presented in German language
4. THE Navigation_App SHALL be responsive and optimized for mobile viewport sizes (320px to 428px width)
5. THE Navigation_App SHALL function without requiring app installation, user registration, or login

### Requirement 10: Geolocation for Map View

**User Story:** As a passenger using the map view, I want to see my real-time position on the map, so that I can orient myself relative to the bus stop destination.

#### Acceptance Criteria

1. WHEN the passenger selects the Map_View, THE Navigation_App SHALL request geolocation permission from the device
2. WHILE the Map_View is displayed and geolocation permission is granted, THE Navigation_App SHALL display the passenger's current position on the map
3. IF geolocation permission is denied, THEN THE Navigation_App SHALL display the Map_View without the current position marker and show the route from the station entrance to the bus stop
4. WHILE the Map_View is active and geolocation is available, THE Navigation_App SHALL update the passenger's position on the map as the passenger moves
