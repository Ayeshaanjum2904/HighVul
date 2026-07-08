/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const interceptListagem = () => {
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
  cy.intercept('**/pedidos?ipp=25&tipo=todos&isAscSort=false', {
    fixture: 'gestaoTestDrivePedidos',
  });
  cy.intercept('GET', '**/veiculos**', {
    fixture: 'gestaoTestDriveVeiculos',
  });
};

describe('Listagem de veículos', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteVeiculos', () => {
      cy.login('teste', 'senha');
    });
    interceptListagem();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir a página de veículos e testar a listagem dos veículos', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
    cy.get('.MuiDataGrid-main ').children().eq(1).children()
      .children()
      .children()
      .should('be.visible')
      .as('listagemHeader')
      .eq(0)
      .should('have.text', 'Veículo');
    cy.get('@listagemHeader').eq(1).should('have.text', 'MVS');
    cy.get('@listagemHeader').eq(2).should('have.text', 'Nome Comercial');
    cy.get('[data-id="1"] > .MuiDataGrid-cell--withRenderer > .veiculos__list-row__veiculo > .veiculos__list-row__texto > [data-cy="veiculo__subtitle"]').should('have.text', 'Doblo');
    cy.get('[data-id="1"] > .MuiDataGrid-cell--withRenderer > .veiculos__list-row__veiculo > .veiculos__list-row__texto > [data-cy="veiculo__title"]').should('have.text', '1.8 16V flex manual');
    cy.get('[data-id="1"] > [data-field="mvs"]').should('have.text', '119-6GD-1');
    cy.get('[data-id="1"] > [data-field="nomeComercial"]').should('have.text', 'DOBLÒ ESSENCE 7 LUGARES 1.8 16V FLEX 4P 2022');
    cy.get('.MuiDataGrid-footerContainer').should('be.visible');
    cy.get('[data-cy=ItensPerPage_25]').should('have.text', '25');
    cy.get('[data-cy=ItensPerPage_50]').should('have.text', '50');
    cy.get('[data-cy=ItensPerPage_75]').should('have.text', '75');
    cy.get('[data-cy="IndicadorPagina"]').should('have.text', '1 - 25 de 69');
    cy.get('[data-cy="PageNumber"]').should('have.text', '1');
  });
});
