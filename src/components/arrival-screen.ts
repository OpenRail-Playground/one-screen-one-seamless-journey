/**
 * ArrivalScreen Web Component
 *
 * Displays a success message after the user has reached the replacement bus stop.
 *
 * Usage:
 *   <arrival-screen></arrival-screen>
 */

export class ArrivalScreen extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = `
      <div class="arrival-screen">
        <div class="arrival-screen__content">
          <div class="arrival-screen__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.5L9.5 18L20 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h1 class="arrival-screen__headline">Du hast deinen Ersatz erreicht!</h1>
          <p class="arrival-screen__message">Wir wünschen dir eine gute Weiterreise.</p>
          <db-button
            variant="brand"
            type="button"
            data-action="back-to-start"
            width="full"
          >
            Zur Startseite
          </db-button>
        </div>
      </div>
      <style>
        .arrival-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100dvh;
          background-color: var(--app-yellow, #ffd800);
          padding: var(--db-spacing-fixed-lg);
          box-sizing: border-box;
        }
        .arrival-screen__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--db-spacing-fixed-md);
          text-align: center;
          max-width: var(--db-container-xs, 20rem);
        }
        .arrival-screen__icon {
          width: var(--db-sizing-regular-xl);
          height: var(--db-sizing-regular-xl);
          color: var(--app-navy, #1d1d3b);
        }
        .arrival-screen__icon svg {
          width: 100%;
          height: 100%;
        }
        .arrival-screen__headline {
          font: var(--db-typography-regular-mobile-headline-md);
          color: var(--app-navy, #1d1d3b);
          margin: 0;
        }
        .arrival-screen__message {
          font: var(--db-typography-regular-mobile-body-md);
          color: var(--app-navy, #1d1d3b);
          margin: 0;
        }
      </style>
    `;

    const backBtn = this.querySelector('[data-action="back-to-start"]');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '#confirmation';
      });
    }
  }
}

customElements.define('arrival-screen', ArrivalScreen);
