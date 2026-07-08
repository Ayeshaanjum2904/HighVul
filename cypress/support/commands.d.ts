// ***********************************************
// Habilita IntelliSense nos comandos customizados
// e também nos comandos subsequentes
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login into the application with specific user data provided by the body attribute
     * @example cy.login('email', 'password', body);
     */
    login(email: string, password: string, body?: object): void

    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    dataCy(value: string, selector?: string): Chainable<JQuery<HTMLElement>>

    /**
    * Custom command to find descendent DOM element by data-cy attribute.
    * @example cy.findDataCy('greeting')
    */
    findDataCy(value: string, selector?: string): Chainable<JQuery<HTMLElement>>

  }
}