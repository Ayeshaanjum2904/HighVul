/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const listagemVaziaErroIntercept = () => {
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('GET', '**/td-gestao-ofertas/ofertas*', {
    fixture: 'gestaoTestDriveOfertas',
  });
  cy.intercept('GET', '**/produtos*', {
    fixture: 'gestaoTestDriveProdutos',
  });
  cy.intercept('GET', '**/pedidos?ipp=50&tipo=todos&isAscSort=false', {
    fixture: 'gestaoTestDrivePedidos',
  });
};

describe('Página pedidos listagem vazia', () => {
  it('Deve exibir mensagem de listagem vazia ao acessar a página de veículos do test drive',
    () => {
      listagemVaziaErroIntercept();
      cy.intercept('GET', '**/veiculos*', {
        fixture: 'listagemVaziaVeiculos',
      }).as('getVeiculos');
      setMediumViewport();
      cy.login('teste', 'senha');
      cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
      cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
      cy.wait('@getVeiculos');
      cy.get('.alerta-mensagem__container__breakLine').should('be.visible')
        .and('have.text', 'Nenhum veículo foi encontrado.');
      cy.get('.MuiDataGrid-footerContainer').should('be.visible');
      cy.get('[data-cy=ItensPerPage_25]').should('have.text', '25');
      cy.get('[data-cy=ItensPerPage_50]').should('have.text', '50');
      cy.get('[data-cy=ItensPerPage_75]').should('have.text', '75');
      cy.get('[data-cy="IndicadorPagina"]').should('have.text', '1 - 0 de 0');
      cy.get('[data-cy="PageNumber"]').should('have.text', '1');
    });
});

describe('Página pedidos erro', () => {
  it('Deve exibir mensagem de erro ao acessar a página de veículos do test drive', () => {
    listagemVaziaErroIntercept();
    cy.intercept('GET', '**/veiculos**',
      { forceNetworkError: true })
      .as('getNetworkFailure');
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
    cy.get('.alerta-mensagem__container__breakLine').should('be.visible')
      .and('have.text', 'Ocorreu um erro ao carregar os veículos.');
  });
});
