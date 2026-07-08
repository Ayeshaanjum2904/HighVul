// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/* eslint-disable*/
import { mockLogin } from '../utils/cyConstants';

Cypress.Commands.add('login', (email, password) => {
  cy.visit(`/`);
	cy.intercept('POST', '**/authorize/login',
		{
			statusCode: 200,
			body: mockLogin,
		}).as('mockLogin');
  cy.get('.user-label').parent().parent().within(() => {
    cy.get('.input-text').type(email);
  });
  cy.get('.password-label').parent().parent().within(() => {
    cy.get('.input-text').type(password);
  });
  cy.get('.loginButtonDiv').click();
  cy.wait('@mockLogin');
});

Cypress.Commands.add('dataCy', (value, selector = '') => cy.get(`[data-cy${selector}=${value}]`));

Cypress.Commands.add(
  'findDataCy',
  { prevSubject: true },
  (subject, value, selector = '') => {
    const $el = subject.find(`[data-cy${selector}=${value}]`);
    Cypress.log({ $el, name: 'findDataCy', message: value });
    return $el;
  },
);
