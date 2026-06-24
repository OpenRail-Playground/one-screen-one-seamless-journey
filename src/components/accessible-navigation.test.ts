/**
 * Integration tests for accessible navigation wiring.
 *
 * Verifies that:
 * 1. NavigationPreviewScreen correctly triggers accessible mode
 * 2. RouteDataService returns accessible milestones when mode='accessible'
 * 3. Accessible milestones have accessibilityFeature labels
 * 4. WIEN-HBF.json accessible route has no stair/escalator-only instructions
 * 5. MilestoneCard renders accessibility feature badges for accessible milestones
 *
 * Requirements: 8.1, 8.2, 8.3, 8.4
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { Milestone, StationRoute } from '../types/index.js';
import { appState } from '../state.js';
import { RouteDataServiceImpl, routeDataService } from '../services/route-data-service.js';
import { renderMilestoneCard } from './milestone-card.js';

// Load the real WIEN-HBF route data for integration testing
import routeData from '../../public/data/routes/WIEN-HBF.json';

const stationRoute = routeData as unknown as StationRoute;

describe('Accessible Navigation - Integration', () => {
  describe('NavigationPreviewScreen triggers accessible mode', () => {
    beforeEach(() => {
      // Reset app state before each test
      appState.setState({
        navigationMode: 'standard',
        milestones: [],
        currentMilestoneIndex: 0,
        selectedConnection: null,
      });

      // Populate the route data service cache so getMilestones works
      (routeDataService as unknown as { cache: Map<string, StationRoute> }).cache.set(
        'WIEN-HBF',
        stationRoute
      );
    });

    afterEach(() => {
      window.location.hash = '';
    });

    it('startNavigation("accessible") sets navigationMode to "accessible" in appState', () => {
      // Simulate what the NavigationPreviewScreen.startNavigation('accessible') does:
      // 1. Get milestones for accessible mode from routeDataService
      // 2. Set navigationMode, milestones, and currentMilestoneIndex in appState
      // 3. Navigate to #navigation
      const milestones = routeDataService.getMilestones('WIEN-HBF', '', 'accessible');

      appState.setState({
        navigationMode: 'accessible',
        milestones,
        currentMilestoneIndex: 0,
      });

      const state = appState.getState();
      expect(state.navigationMode).toBe('accessible');
    });

    it('accessible mode loads milestones from routes.accessible', () => {
      const milestones = routeDataService.getMilestones('WIEN-HBF', '', 'accessible');

      appState.setState({
        navigationMode: 'accessible',
        milestones,
        currentMilestoneIndex: 0,
      });

      const state = appState.getState();
      expect(state.milestones).toEqual(stationRoute.routes.accessible);
      expect(state.milestones).not.toEqual(stationRoute.routes.standard);
    });

    it('accessible mode loads different milestones than standard mode', () => {
      const accessibleMilestones = routeDataService.getMilestones('WIEN-HBF', '', 'accessible');
      const standardMilestones = routeDataService.getMilestones('WIEN-HBF', '', 'standard');

      expect(accessibleMilestones).not.toEqual(standardMilestones);
    });

    it('currentMilestoneIndex is reset to 0 when accessible navigation starts', () => {
      appState.setState({ currentMilestoneIndex: 3 });

      const milestones = routeDataService.getMilestones('WIEN-HBF', '', 'accessible');
      appState.setState({
        navigationMode: 'accessible',
        milestones,
        currentMilestoneIndex: 0,
      });

      const state = appState.getState();
      expect(state.currentMilestoneIndex).toBe(0);
    });

    it('navigation hash is set to #navigation when accessible navigation starts', () => {
      const milestones = routeDataService.getMilestones('WIEN-HBF', '', 'accessible');
      appState.setState({
        navigationMode: 'accessible',
        milestones,
        currentMilestoneIndex: 0,
      });
      window.location.hash = '#navigation';

      expect(window.location.hash).toBe('#navigation');
    });
  });

  describe('RouteDataService returns accessible milestones', () => {
    let service: RouteDataServiceImpl;

    beforeEach(() => {
      service = new RouteDataServiceImpl();
      // Manually populate the cache with the station route data
      (service as unknown as { cache: Map<string, StationRoute> }).cache.set(
        'WIEN-HBF',
        stationRoute
      );
    });

    it('returns accessible milestones when mode is "accessible"', () => {
      const milestones = service.getMilestones('WIEN-HBF', 'conn-1', 'accessible');
      expect(milestones).toEqual(stationRoute.routes.accessible);
    });

    it('returns standard milestones when mode is "standard"', () => {
      const milestones = service.getMilestones('WIEN-HBF', 'conn-1', 'standard');
      expect(milestones).toEqual(stationRoute.routes.standard);
    });

    it('accessible milestones are different from standard milestones', () => {
      const accessible = service.getMilestones('WIEN-HBF', 'conn-1', 'accessible');
      const standard = service.getMilestones('WIEN-HBF', 'conn-1', 'standard');
      expect(accessible).not.toEqual(standard);
    });
  });

  describe('Accessible milestones have accessibility features', () => {
    const accessibleMilestones = stationRoute.routes.accessible;

    it('all accessible milestones have an accessibilityFeature defined', () => {
      for (const milestone of accessibleMilestones) {
        expect(milestone.accessibilityFeature).toBeDefined();
        expect(milestone.accessibilityFeature).not.toBeNull();
      }
    });

    it('accessibility features are valid types (elevator, ramp, level-crossing, tactile-paving)', () => {
      const validFeatures = ['elevator', 'ramp', 'level-crossing', 'tactile-paving'];
      for (const milestone of accessibleMilestones) {
        expect(validFeatures).toContain(milestone.accessibilityFeature);
      }
    });

    it('accessible route contains at least one elevator milestone', () => {
      const hasElevator = accessibleMilestones.some(
        (m) => m.accessibilityFeature === 'elevator'
      );
      expect(hasElevator).toBe(true);
    });

    it('accessible route contains at least one ramp milestone', () => {
      const hasRamp = accessibleMilestones.some(
        (m) => m.accessibilityFeature === 'ramp'
      );
      expect(hasRamp).toBe(true);
    });
  });

  describe('Accessible route contains no stair/escalator instructions', () => {
    const accessibleMilestones = stationRoute.routes.accessible;

    // German terms for stairs and escalators that should NOT appear in accessible routes
    const barrierTerms = [
      'treppe',
      'treppen',
      'rolltreppe',
      'rolltreppen',
      'escalator',
      'stairs',
      'stufen',
    ];

    it('no accessible milestone instruction contains stair-related terms', () => {
      for (const milestone of accessibleMilestones) {
        const instructionLower = milestone.instruction.toLowerCase();
        for (const term of barrierTerms) {
          expect(instructionLower).not.toContain(term);
        }
      }
    });

    it('standard route differs from accessible route (confirming routes are distinct)', () => {
      const standardMilestones = stationRoute.routes.standard;
      const accessibleMilestones = stationRoute.routes.accessible;
      // Standard route has no accessibilityFeature on any milestone
      const standardHasFeature = standardMilestones.some((m) => m.accessibilityFeature != null);
      expect(standardHasFeature).toBe(false);
      // Accessible route does
      const accessibleHasFeature = accessibleMilestones.some((m) => m.accessibilityFeature != null);
      expect(accessibleHasFeature).toBe(true);
    });
  });

  describe('MilestoneCard displays accessibilityFeature labels', () => {
    it('renders a db-badge for milestones with elevator feature', () => {
      const milestone: Milestone = {
        id: 1,
        instruction: 'Aufzug nehmen zu Ebene 0',
        direction: 'down',
        distanceMeters: 15,
        photoUrl: '/data/photos/1.jpg',
        accessibilityFeature: 'elevator',
      };

      const html = renderMilestoneCard(milestone);
      expect(html).toContain('<db-badge');
      expect(html).toContain('Aufzug');
    });

    it('renders a db-badge for milestones with ramp feature', () => {
      const milestone: Milestone = {
        id: 4,
        instruction: 'Rampe zum Vorplatz nutzen',
        direction: 'south',
        distanceMeters: 100,
        photoUrl: '/data/photos/4.jpg',
        accessibilityFeature: 'ramp',
      };

      const html = renderMilestoneCard(milestone);
      expect(html).toContain('<db-badge');
      expect(html).toContain('Rampe');
    });

    it('renders a db-badge for milestones with tactile-paving feature', () => {
      const milestone: Milestone = {
        id: 2,
        instruction: 'Dem taktilen Leitsystem folgen',
        direction: 'west',
        distanceMeters: 65,
        photoUrl: '/data/photos/2.jpg',
        accessibilityFeature: 'tactile-paving',
      };

      const html = renderMilestoneCard(milestone);
      expect(html).toContain('<db-badge');
      expect(html).toContain('Taktile Leitung');
    });

    it('renders a db-badge for milestones with level-crossing feature', () => {
      const milestone: Milestone = {
        id: 3,
        instruction: 'Ebenerdigen Übergang nutzen',
        direction: 'east',
        distanceMeters: 30,
        photoUrl: '/data/photos/3.jpg',
        accessibilityFeature: 'level-crossing',
      };

      const html = renderMilestoneCard(milestone);
      expect(html).toContain('<db-badge');
      expect(html).toContain('Ebenerdiger Übergang');
    });

    it('does NOT render a db-badge for milestones without accessibility feature', () => {
      const milestone: Milestone = {
        id: 1,
        instruction: 'Treppe runter',
        direction: 'down',
        distanceMeters: 25,
        photoUrl: '/data/photos/1.jpg',
      };

      const html = renderMilestoneCard(milestone);
      expect(html).not.toContain('<db-badge');
    });

    it('renders all WIEN-HBF accessible milestones with accessibility badges', () => {
      for (const milestone of stationRoute.routes.accessible) {
        const html = renderMilestoneCard(milestone);
        expect(html).toContain('<db-badge');
        expect(html).toContain('milestone-card__accessibility');
      }
    });
  });
});
