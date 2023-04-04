import {defineStep} from '@badeball/cypress-cucumber-preprocessor';

import {LocalSelectors} from './selectors';

beforeEach(() => {
  // enregistre les définitions locales
  cy.wrap(LocalSelectors).as('LocalSelectors', {type: 'static'});
});

defineStep('un formulaire de modification de compte est affiché', () => {
  cy.get(
    LocalSelectors['formulaire de modification de compte'].selector
  ).should('be.visible');
});

defineStep(/je modifie le champ "([^"]+)" en "([^"]+)"/, (champ, value) => {
  cy.get(`[data-test="${champ}"]`)
    .type('{selectall}{backspace}' + value)
    .blur();
});

defineStep(/le champ "([^"]+)" doit contenir "([^"]+)"/, (champ, value) => {
  cy.get(`[data-test="${champ}"]`).should('have.value', value);
});

defineStep("la modale de modification d'email est affichée", () => {
  cy.get(LocalSelectors["modale de modification d'email"].selector).should(
    'be.visible'
  );
});

const INBUCKET_URL = 'http://localhost:54324/';

defineStep(/je vide la boîte de réception de "([^"]+)"/, email => {
  cy.origin(INBUCKET_URL, {args: {email}}, ({email}) => {
    cy.visit(`/m/${email}`);
    cy.get(`.fa-trash`).click();
    cy.get(`.danger`).click();
  });
  cy.visit('/');
});

defineStep(
  "je clique sur le bouton confirmer de la modale de modification d'email",
  () => {
    cy.get(LocalSelectors["modale de modification d'email"].selector)
      .get(`[aria-label="Confirmer"]`)
      .click();
  }
);

defineStep(
  /la boîte de réception de "([^"]+)" contient un mail intitulé "([^"]+)"/,
  (email, titre) => {
    cy.origin(INBUCKET_URL, {args: {email, titre}}, ({email, titre}) => {
      cy.visit(`/m/${email}`);
      cy.get('.message-list').contains(titre);
    });
  }
);
