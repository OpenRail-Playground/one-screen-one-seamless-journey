/**
 * Unit tests for the NavigationPreviewScreen web component.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import type { Milestone } from '../types/index.js';
import {
  NavigationPreviewScreen,
  renderPreviewSummary,
} from './navigation-preview-screen.js';

const sampleMilestones: Milestone[] = [
  {
    id: 1,
    instruction: 'Treppe am Ende des Bahnsteigs runter zur Unterführung',
    direction: 'down',
    distanceMeters: 25,
    photoUrl: '/data/photos/WIEN-HBF/step-1.jpg',
  },
  {
    id: 2,
    instruction: 'In der Unterführung links abbiegen, Richtung Ausgang Süd',
    direction: 'west',
    distanceMeters: 60,
    photoUrl: '/data/photos/WIEN-HBF/step-2.jpg',
  },
  {
    id: 3,
    instruction: 'Geradeaus durch die Eingangshalle zum Südausgang',
    direction: 'south',
    distanceMeters: 45,
    photoUrl: '/data/photos/WIEN-HBF/step-3.jpg',
  },
];

describe('renderPreviewSummary', () => {
  it('includes the step count in the summary', () => {
    const html = renderPreviewSummary(sampleMilestones);
    expect(html).toContain('3 Schritte');
  });

  it('includes estimated walking time in minutes', () => {
    // Total distance: 25 + 60 + 45 = 130m, at 1.2 m/s = ~108s = ~2 min (ceil)
    const html = renderPreviewSummary(sampleMilestones);
    expect(html).toContain('2 Minuten Fußweg');
  });

  it('includes total distance in meters', () => {
    const html = renderPreviewSummary(sampleMilestones);
    expect(html).toContain('130 Meter');
  });

  it('handles an empty milestones array', () => {
    const html = renderPreviewSummary([]);
    expect(html).toContain('0 Schritte');
    expect(html).toContain('0 Minuten Fußweg');
  });

  it('handles a single milestone', () => {
    const html = renderPreviewSummary([sampleMilestones[0]]);
    expect(html).toContain('1 Schritte');
    expect(html).toContain('25 Meter');
  });
});

describe('NavigationPreviewScreen element', () => {
  let element: NavigationPreviewScreen;

  beforeEach(() => {
    element = document.createElement('navigation-preview-screen') as NavigationPreviewScreen;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders a db-card element', () => {
    element.milestones = sampleMilestones;
    expect(element.innerHTML).toContain('<db-card>');
  });

  it('renders exactly two db-button elements', () => {
    element.milestones = sampleMilestones;
    const buttons = element.querySelectorAll('db-button');
    expect(buttons).toHaveLength(2);
  });

  it('renders a "Navigation starten" button', () => {
    element.milestones = sampleMilestones;
    expect(element.innerHTML).toContain('Navigation starten</db-button>');
  });

  it('renders a "Barrierefreie Navigation starten" button', () => {
    element.milestones = sampleMilestones;
    expect(element.innerHTML).toContain('Barrierefreie Navigation starten</db-button>');
  });

  it('renders the milestone summary with step count', () => {
    element.milestones = sampleMilestones;
    expect(element.innerHTML).toContain('3 Schritte');
  });

  it('includes bus-departure-info component', () => {
    element.stationId = 'WIEN-HBF';
    element.milestones = sampleMilestones;
    expect(element.innerHTML).toContain('<bus-departure-info');
    expect(element.innerHTML).toContain('stationid="WIEN-HBF"');
  });

  it('navigates to #navigation when "Navigation starten" is clicked', () => {
    element.milestones = sampleMilestones;
    element.stationId = 'WIEN-HBF';
    const button = element.querySelector('[data-action="start-standard"]') as HTMLElement;
    button.click();
    expect(window.location.hash).toBe('#navigation');
  });

  it('navigates to #navigation when "Barrierefreie Navigation starten" is clicked', () => {
    element.milestones = sampleMilestones;
    element.stationId = 'WIEN-HBF';
    const button = element.querySelector('[data-action="start-accessible"]') as HTMLElement;
    button.click();
    expect(window.location.hash).toBe('#navigation');
  });

  it('sets navigationMode to standard when "Navigation starten" is clicked', async () => {
    const { appState } = await import('../state.js');
    element.milestones = sampleMilestones;
    element.stationId = 'WIEN-HBF';
    const button = element.querySelector('[data-action="start-standard"]') as HTMLElement;
    button.click();
    expect(appState.getState().navigationMode).toBe('standard');
  });

  it('sets navigationMode to accessible when "Barrierefreie Navigation starten" is clicked', async () => {
    const { appState } = await import('../state.js');
    element.milestones = sampleMilestones;
    element.stationId = 'WIEN-HBF';
    const button = element.querySelector('[data-action="start-accessible"]') as HTMLElement;
    button.click();
    expect(appState.getState().navigationMode).toBe('accessible');
  });

  it('uses German language for all UI text', () => {
    element.milestones = sampleMilestones;
    expect(element.innerHTML).toContain('Navigationsvorschau');
    expect(element.innerHTML).toContain('Schritte');
    expect(element.innerHTML).toContain('Minuten Fußweg');
  });
});
