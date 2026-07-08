/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const mensagensFiltrosIntercept = () => {
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
};

const breadCrumb = (eq, text) => (
  cy.get('[data-cy="page-subtitle"]').children().eq(eq)
    .should('be.visible')
    .and('have.text', text)
);

describe('Header página Criação de alertas', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteGestaoComunicados', () => {
      cy.login('teste', 'senha');
    });
    mensagensFiltrosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
  });

  it('Deve exibir a página de Mensagens, testar o submenu e header', () => {
    cy.get(':nth-child(1) > .menu-item').should('be.visible').and('have.text', 'Criação de alertas')
      .find('svg')
      .click();
    breadCrumb(0, 'Gestão de Comunicados');
    breadCrumb(2, 'Criação de Alertas');
    cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Criação de alertas');
    cy.get('[data-cy="botao-criar-alerta"]').should('be.visible').and('have.text', 'Criar novo alerta')
      .click();
  });
});
