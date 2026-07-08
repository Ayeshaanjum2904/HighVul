/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

describe('Página de Resgates do FIDC', () => {
  before(() => {
    cy.server();
    cy.intercept('POST', '**/authorize/refresh', {
      statusCode: 200,
      body: mockLogin,
    });
    cy.intercept('POST', '**/fidc/gestao-resgates/mensagens', {
      fixture: 'resgateFidc',
    });
    cy.intercept('GET', '**mensagem-rede/list*', {
      fixture: 'alertas',
    });
  });

  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteResgatesFIDC', () => {
      cy.login('teste', 'senha');
    });
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
  });

  it('Deve acessar a página de Resgates do FIDC, testar o submenu, header, tabela e rodape', () => {
    cy.get('[data-cy=menu-comunicados]').children().eq(1).as('submenu');
    cy.get('@submenu').children().eq(2).should('be.visible')
      .and('have.text', 'Resgate do FIDC')
      .click();
    cy.get('[data-cy=page-title]').should('have.text', 'Resgate do FIDC');
    cy.get('[data-cy=page-subtitle]').children().eq(0)
      .contains('button', 'Gestão de Comunicados');
    cy.get('[data-cy=page-subtitle]').children().eq(2)
      .contains('button', 'Resgate do FIDC');
    cy.get('[data-cy=row-resgate-fidc]').should('be.visible');
    cy.get('[data-cy=Resgate_Id_Row_0]').should('have.text', '#1');
    cy.get('[data-cy=Resgate_DataDeCriacao_Row_0]').should('have.text', '19/06/2023');
    cy.get('[data-cy=Resgate_Titulo_Row_0]').should('have.text', 'Teste 123');
    cy.get('[data-cy=Resgate_Vigencia_Row_0]').should('have.text', '01/07/2023 - 01/08/2023');
    cy.get('[data-cy=Resgate_Status_Row_0]').should('have.text', 'Ativo');
    cy.get('[data-cy=ItensPerPage_25]').should('be.visible');
    cy.get('[data-cy=ItensPerPage_50]').should('be.visible');
    cy.get('[data-cy=ItensPerPage_75]').should('not.be.enabled');
    cy.get('[data-cy=select-page-left]').should('not.be.enabled');
    cy.get('[data-cy=select-page-right]').should('be.visible');
    cy.get('[data-cy=ItensPerPage_50]').click();
    cy.wait(2000);
    cy.get('[data-cy=ItensPerPage_25]').click();
    cy.wait(2000);
    cy.get('[data-cy=select-page-right]').click();
    cy.wait(2000);
    cy.get('[data-cy=select-page-left]').should('be.visible');
    cy.get('[data-cy=select-page-right]').should('not.be.enabled');
  });
});
