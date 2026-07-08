/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const resgateIntercept = () => {
  cy.server();
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('POST', '**/fidc/gestao-resgates/mensagens', {
    fixture: 'resgateFidc',
  }).as('getResgates');
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
  cy.intercept('PATCH', '**fidc/gestao-resgates/mensagem/*/atualizar-status*', {
    statusCode: 200,
    body: true,
  }).as('updateStatus');
};

describe('Página de Resgates do FIDC', () => {
  before(() => {
    cy.server();
  });

  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteResgatesFIDC', () => {
      cy.login('teste', 'senha');
    });
    resgateIntercept();
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}/resgates-fidc`);
  });

  // it('Deve testar o modal na etapa de Conteúdo', () => {

  // });

  it('Deve testar modal com mensagem ativa', () => {
    cy.get('[data-cy=Resgate_Row_0]').click();
    cy.get('[data-cy=DesativaMensagemSwitch]').find('input')
      .should('be.enabled')
      .click();
    cy.get('.snackbar-succes__item-container')
      .should('have.text', 'Mensagem desativada com sucesso.')
      .click();
  });

  it('Deve testar modal com mensagem inativa ou finalizada', () => {
    cy.get('[data-cy=Resgate_Row_2]').click();
    cy.get('[data-cy=DesativaMensagemSwitch]').find('input').should('be.disabled');
    cy.get('[data-cy=ModalCloseButton]').click();
  });
});
