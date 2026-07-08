/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const defaultTestModalHeader = (pedidoId) => {
  cy.get('[data-cy=pedidos-modal-header]').should('be.visible').children().as('modalHeader').eq(0)
    .should('have.text', 'Pedidos');
  cy.get('@modalHeader').eq(1).should('have.text', `Pedido #${pedidoId}`).and('have.css', 'color', 'rgb(85, 87, 112)');
}

const stepperTest = (position, describePosition) => {
  cy.get('@statusModalHeader').eq(position).children().eq(0).should('have.css', 'background-color', 'rgb(0, 175, 173)');
  cy.get('@statusModalHeader').eq(position).children().eq(1).should('have.text', describePosition)
    .and('have.css', 'color', 'rgb(85, 87, 112)');
}

const defaultTestButtonModal = (rejectButtonName, approveButtonName) => {
  cy.get('[data-cy=pedidos__modal-footer__container]').children().children().as('buttonModal').eq(1)
      .should('have.css', 'background-color', 'rgba(237, 92, 111, 0.24)').children().should('have.text', 
      rejectButtonName).and('have.css', 'color', 'rgb(237, 92, 111)');
  cy.get('@buttonModal').eq(2).should('have.css', 'background-color', 'rgb(0, 175, 173)').children()
    .should('have.text', approveButtonName).and('have.css', 'color', 'rgb(255, 255, 255)');
}

describe('Pedidos', () => {
  before(() => {
    cy.server();
  });
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClientePedido', () => {
      cy.login('teste', 'senha');
      cy.intercept('POST', '**/authorize/refresh', {
        statusCode: 200,
			  body: mockLogin,
		  });
    });

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
    cy.intercept('**/pedidos?ipp=25&tipo=todos&marca=jeep&marca=fiat&marca=chrysler&marca=dodge&marca=ram&isAscSort=false', {
      fixture: 'gestaoTestDrivePedidos',
    });
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });
  
  it('Deve exibir o modal do pedido que está com status Em Separação', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheSeparacao'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(12).scrollIntoView().click();
  })

  it('Deve exibir o modal do pedido que está com status Pronto Para Faturamento', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheProntoFaturamento'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(23).scrollIntoView().click();
    defaultTestModalHeader('13196');  
    cy.get('@modalHeader').eq(2).children().children().as('statusModalHeader').eq(0).children().eq(0)
      .should('have.css', 'background-color', 'rgb(0, 175, 173)');
    cy.get('@statusModalHeader').eq(0).children().eq(1).should('have.text', 'COMERCIAL')
      .and('have.css', 'color', 'rgb(85, 87, 112)');
    stepperTest(1, 'CRÉDITO');
    stepperTest(2, 'REVISÃO');
    stepperTest(3, 'SEPARAÇÃO');
    cy.get('@statusModalHeader').eq(4).children().eq(0).should('have.css', 'background-color', 'rgb(143, 155, 179)');
    cy.get('@statusModalHeader').eq(4).children().eq(1).should('have.text', 'FATURAMENTO')
      ;
    cy.get('[data-cy=pedidos__faturamento__container]').scrollIntoView().should('be.visible').children()
      .as('infoFaturamento').eq(0).should('have.text', 'Faturamento').and('have.css', 'color', 'rgb(85, 87, 112)');
    cy.get('@infoFaturamento').eq(1).children().eq(0).children().children().eq(0)
      .should('have.text', 'Data Faturamento');
    cy.get('@infoFaturamento').eq(1).children().eq(0).children().children().eq(1).should('be.visible');
    cy.get('@infoFaturamento').eq(1).children().eq(1).should('be.visible').children().children().eq(0)
      .should('have.text', 'Nº NF');
    cy.get('@infoFaturamento').eq(2).should('be.visible').children().eq(0).children().children().children().children()
      .eq(2).get('input[type="file"]').selectFile('cypress/fixtures/exemple.pdf', {force: true}).then(input => {
      expect(input[0].files[0].name).to.equal('exemple.pdf')});
    defaultTestButtonModal('Cancelar pedido', 'Encerrar pedido');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(0).click();
  })

  it('Deve exibir o modal do pedido que está com status Faturado', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheFaturado'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(25).scrollIntoView().should('be.visible').click();
    defaultTestModalHeader('12706');
    cy.get('@modalHeader').eq(2).children().children().as('statusModalHeader').eq(0).children().eq(0)
      .should('have.css', 'background-color', 'rgb(0, 175, 173)');
    cy.get('@statusModalHeader').eq(0).children().eq(1).should('have.text', 'COMERCIAL')
      .and('have.css', 'color', 'rgb(85, 87, 112)');
    stepperTest(1, 'CRÉDITO');
    stepperTest(2, 'REVISÃO');
    stepperTest(3, 'SEPARAÇÃO');
    stepperTest(4, 'FATURAMENTO');
    cy.get('[data-cy=pedidos__faturamento__container]').scrollIntoView().should('be.visible').children()
      .as('infoFaturamento').eq(0).should('have.text', 'Faturamento').and('have.css', 'color', 'rgb(85, 87, 112)');
    cy.get('@infoFaturamento').eq(1).children().eq(0).children().children().eq(0)
      .should('have.text', 'Data Faturamento').and('have.css', 'color', 'rgb(85, 87, 112)');
    cy.get('@infoFaturamento').eq(1).children().eq(0).children().children().eq(1)
      .should('have.text', '28/10/2022').and('have.css', 'color', 'rgb(85, 87, 112)');
    cy.get('@infoFaturamento').eq(1).children().eq(1).children().children().eq(0)
      .should('have.text', 'Nº NF');
    cy.get('@infoFaturamento').eq(1).children().eq(1).children().children().eq(1)
      .should('have.text', '5894579');
    cy.get('@infoFaturamento').eq(2).should('be.visible');
    cy.get('[data-cy=pedidos__contrato__container]').scrollIntoView().should('be.visible').children()
      .as('pedidoContrato').eq(0).and('have.text', 'Contrato').and('have.css', 'color', 'rgb(85, 87, 112)');
    cy.get('@pedidoContrato').eq(1).children().children().children().eq(0).should('have.text', 'Contrato do pedido')
      ;
    cy.get('@pedidoContrato').eq(2).children().children().eq(0).should('have.text', 'Data de pagamento')
      ;
    cy.get('@pedidoContrato').eq(2).children().children().eq(1).should('have.text', 'Nº Contrato')
      ;
    defaultTestButtonModal('Cancelar contrato', 'Inserir Contrato');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(0).click();
  })
});