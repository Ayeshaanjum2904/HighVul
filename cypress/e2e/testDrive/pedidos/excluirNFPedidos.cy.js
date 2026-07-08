/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

describe('Pedidos', () => {
  before(() => {
    cy.server();
  })
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClientePedido', () => {
      cy.login('teste', 'senha');
      cy.intercept('POST', '**/authorize/refresh', {
        statusCode: 200,
			  body: mockLogin,
		  })
    }); 
   
    cy.intercept('POST', '**/authorize/refresh', {
      statusCode: 200,
			body: mockLogin,
		});
    cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
      fixture: 'gestaoTestDriveOfertas'
    })
    cy.intercept('GET','**/produtos*', {
      fixture: 'gestaoTestDriveProdutos'
    })
    cy.intercept('**/pedidos?ipp=25&tipo=todos&marca=jeep&marca=fiat&marca=chrysler&marca=dodge&marca=ram&isAscSort=false', {
      fixture: 'gestaoTestDrivePedidos'
    });
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  })

  it('Deve excluir nota fiscal de pedido com status Pronto Para Faturamento', () => {
    cy.fixture('pedidoDetalheProntoFaturamento').then((pedido) => {
        pedido.urlFatura = 'google.com'
        pedido.tamanhoFatura = 126
        pedido.nomeFatura = 'exemplo.pdf'
      cy.intercept('**/pedidos/**', pedido).as('pedidoDetalheProntoFaturamentoAnexo');
    });
    cy.intercept('DELETE', '**/pedidos/**', {
      statusCode: 200,
			body: true,
		}).as('pedidoDeleteNotaFiscal');
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(23).scrollIntoView().click();
    cy.wait('@pedidoDetalheProntoFaturamentoAnexo');
    cy.get('[data-cy=pedidos__faturamento__container]').scrollIntoView().should('be.visible')
      .children().as('infoFaturamento');
    cy.get('@infoFaturamento').eq(2).should('be.visible').children().eq(0)
      .get('.action-button > button').as('deleteButton').should('be.visible').click();
    cy.get('.modal').as('deleteModal').should('be.visible');
    cy.intercept('GET', '**/pedidos/**', {
      fixture: 'pedidoDetalheProntoFaturamento'
    });
    cy.get('@deleteModal').get('.modal-footer > :nth-child(2) > .common__btn').click();
    cy.wait('@pedidoDeleteNotaFiscal');
    cy.get('@infoFaturamento').eq(2).children().eq(0).children().children().children().children()
    .eq(1).should('have.value', '');

    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(0).click();
  })
})