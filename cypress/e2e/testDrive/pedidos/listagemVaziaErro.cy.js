/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';

const cabecalhoListHeader = () => {
  cy.get('[data-cy=pedidos-list-header]').should('be.visible').children().as('listHeader')
    .eq(0).should('have.text', 'ID');
  cy.get('@listHeader').eq(1).should('have.text', 'DATA');
  cy.get('@listHeader').eq(2).should('have.text', 'VEÍCULO');
  cy.get('@listHeader').eq(3).should('have.text', 'CONCESSIONÁRIA');
  cy.get('@listHeader').eq(4).should('have.text', 'MODALIDADE');
  cy.get('@listHeader').eq(5).should('have.text', 'PRODUTO');
}

const defaultTestFooter = (description) => {
  cy.get('[data-cy=page-footer]').should('be.visible').children().children().eq(0).children()
      .children().eq(0).children().as('itensPorPagina').eq(0).should('have.text', '25');
    cy.get('@itensPorPagina').eq(1).should('have.text', '50');
    cy.get('@itensPorPagina').eq(2).should('have.text', '75');
    cy.get('[data-cy=page-footer]').children().children().eq(1).children().children().eq(0)
      .should('have.text', description)
    cy.get('[data-cy=page-footer]').children().children().eq(1).children().children().eq(1)
      .should('have.text', '1')
}

describe('Página pedidos erro', () => {
  it('Deve exibir mensagem de erro ao acessar a página de ofertas do test drive', () => {
    cy.server();
    cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
      fixture: 'gestaoTestDriveOfertas'
    })
    cy.intercept('GET','**/produtos*', {
      fixture: 'gestaoTestDriveProdutos'
    })
    cy.intercept(
      'GET', 
      '**/pedidos?ipp=25&tipo=todos&marca=jeep&marca=fiat&marca=chrysler&marca=dodge&marca=ram&isAscSort=false', 
      { forceNetworkError: true }
    ).as('getNetworkFailure');
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    cy.get('[data-cy=pedidos-list-message-container-erro]').should('be.visible')
      .and('have.text', 'Ocorreu um erro ao carregar os pedidos.');
    defaultTestFooter('Mostrando 1 - 0 de 0 itens totais');
  });
})

describe('Página pedidos listagem vazia', () => {
  it('Deve exibir mensagem de listagem vazia ao acessar a página de ofertas do test drive', () => {
    cy.server();
    cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
      fixture: 'gestaoTestDriveOfertas'
    })
    cy.intercept('GET','**/produtos*', {
      fixture: 'gestaoTestDriveProdutos'
    })
    cy.intercept('GET','**/pedidos?ipp=25&tipo=todos&marca=jeep&marca=fiat&marca=chrysler&marca=dodge&marca=ram&isAscSort=false', {
      status: 200,
      body: []
    });
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    cy.get('[data-cy=pedidos-list-message-container-vazia]').should('be.visible')
      .and('have.text', 'Nenhum pedido encontrado.');
    defaultTestFooter('Mostrando 1 - 0 de 0 itens totais');
  });
})