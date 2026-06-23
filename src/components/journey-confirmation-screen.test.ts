/**
 * Unit tests for the JourneyConfirmationScreen web component.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import type { Connection } from '../types/index.js';
import {
  JourneyConfirmationScreen,
  renderConfirmationContent,
  renderErrorContent,
} from './journey-confirmation-screen.js';

const sampleConnection: Connection = {
  id: 'conn-1',
  trainNumber: 'RE 50',
  routeName: 'Wien - Wiener Neustadt',
  destination: 'Wiener Neustadt Hbf',
  departureTime: '2025-06-15T14:30:00+02:00',
  busStop: 'Bussteig A3',
  disruption: 'Streckensperrung zwischen Wien Meidling und Wiener Neustadt',
};

describe('renderConfirmationContent', () => {
  it('includes disruption in the output', () => {
    const html = renderConfirmationContent(sampleConnection);
    expect(html).toContain('Streckensperrung zwischen Wien Meidling und Wiener Neustadt');
  });

  it('includes ri-vehicle-route element', () => {
    const html = renderConfirmationContent(sampleConnection);
    expect(html).toContain('<ri-vehicle-route');
  });

  it('renders a db-card element', () => {
    const html = renderConfirmationContent(sampleConnection);
    expect(html).toContain('<db-card>');
  });

  it('renders exactly two db-button elements', () => {
    const html = renderConfirmationContent(sampleConnection);
    const buttonMatches = html.match(/<db-button/g);
    expect(buttonMatches).toHaveLength(2);
  });

  it('renders a "Ja" button', () => {
    const html = renderConfirmationContent(sampleConnection);
    expect(html).toContain('>Ja</db-button>');
  });

  it('renders a "Nein" button', () => {
    const html = renderConfirmationContent(sampleConnection);
    expect(html).toContain('>Nein</db-button>');
  });

  it('uses German heading text', () => {
    const html = renderConfirmationContent(sampleConnection);
    expect(html).toContain('Ist das deine geplante Verbindung?');
  });

  it('escapes HTML special characters in disruption field', () => {
    const malicious: Connection = {
      ...sampleConnection,
      disruption: '<script>alert("xss")</script>',
    };
    const html = renderConfirmationContent(malicious);
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });
});

describe('renderErrorContent', () => {
  it('renders a db-card element', () => {
    const html = renderErrorContent();
    expect(html).toContain('<db-card>');
  });

  it('renders a German error message', () => {
    const html = renderErrorContent();
    expect(html).toContain('Der QR-Code konnte nicht gelesen werden');
  });

  it('does not render any db-button elements', () => {
    const html = renderErrorContent();
    expect(html).not.toContain('<db-button');
  });
});

describe('JourneyConfirmationScreen element', () => {
  let element: JourneyConfirmationScreen;

  beforeEach(() => {
    element = document.createElement('journey-confirmation-screen') as JourneyConfirmationScreen;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders error state when no connection is set', () => {
    expect(element.innerHTML).toContain('Der QR-Code konnte nicht gelesen werden');
  });

  it('renders error state when error property is true', () => {
    element.connection = sampleConnection;
    element.error = true;
    expect(element.innerHTML).toContain('Der QR-Code konnte nicht gelesen werden');
  });

  it('renders connection details when connection is set', () => {
    element.connection = sampleConnection;
    expect(element.innerHTML).toContain('ri-vehicle-route');
    expect(element.innerHTML).toContain('Streckensperrung zwischen Wien Meidling und Wiener Neustadt');
  });

  it('renders exactly two db-button elements when connection is set', () => {
    element.connection = sampleConnection;
    const buttons = element.querySelectorAll('db-button');
    expect(buttons).toHaveLength(2);
  });

  it('navigates to #preview when "Ja" button is clicked', () => {
    element.connection = sampleConnection;
    const jaButton = element.querySelector('[data-action="confirm"]') as HTMLElement;
    jaButton.click();
    expect(window.location.hash).toBe('#preview');
  });

  it('navigates to #connections when "Nein" button is clicked', () => {
    element.connection = sampleConnection;
    const neinButton = element.querySelector('[data-action="reject"]') as HTMLElement;
    neinButton.click();
    expect(window.location.hash).toBe('#connections');
  });

  it('exposes rendered content via getRenderedContent()', () => {
    element.connection = sampleConnection;
    const content = element.getRenderedContent();
    expect(content).toContain('ri-vehicle-route');
  });
});
