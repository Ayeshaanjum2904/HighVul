/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const modalExclusaoIntercept = () => {
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
};

const listagemSvg = () => {
  cy.get('[data-id="1"] > [data-colindex="6"]').children().children().eq(1)
    .should('be.visible')
    .find('svg')
    .click();
};

describe('Modal de exclusão', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteGestaoComunicados', () => {
      cy.login('teste', 'senha');
    });
    modalExclusaoIntercept();
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
  });

  it('Deve exibir a página de Mensagens e testar o modal de exclusão', () => {
    listagemSvg();
    cy.get('.modal-header > .MuiButtonBase-root').should('be.visible').click();
    listagemSvg();
    cy.get('.title').should('be.visible').and('have.text', 'Deseja excluir esse alerta?');
    cy.get('.subtitle').should('be.visible').and('have.text', 'Ao clicar em excluir, esse alerta será apagado definitivamente do Staff.');
    cy.get('.modal-footer').children().eq(0).should('be.visible')
      .and('have.text', 'Voltar')
      .click();
    listagemSvg();
    cy.get('.modal-footer').children().eq(1).should('be.visible')
      .and('have.text', 'Excluir Alerta')
      .click();
  });
});
