/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const digitaData = () => {
  cy.get('.pedidos__page__select-dataPedido > .pedidos__select-data__date-picker > .date-picker-container > .date-picker-x-and-input-container > .border > .date-picker-input-container > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .DateInput > #date_input')
    .type('01/11/2022');
};
const clicaMarca = (position) => {
  cy.get('.MuiList-root').children().children().children().eq(position)
    .children()
    .eq(0)
    .should('be.visible')
    .click({force: true});
};

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
      statusCode: 200,
      fixture: 'gestaoTestDrivePedidos',
    });
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir os menus da parte de test drive e selecionar os pedidos', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible').children()
      .as('menuLateral')
      .eq(0)
      .should('have.text', 'Ofertas');
    cy.get('@menuLateral').eq(1).should('have.text', 'Pedidos');
    cy.get('@menuLateral').eq(2).should('have.text', 'Veículos');
    cy.get('@menuLateral').eq(3).should('have.text', 'Gestão de taxas');
    cy.get('@menuLateral').eq(4).should('have.text', 'Parâmetros');
    cy.get('@menuLateral').eq(1).click();
  });

  it('Deve exibir a página de pedidos e testar os filtros', () => {
    cy.wait(3000);
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Pedidos');
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(0)
      .should('have.text', 'Gestão de Test Drive');
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(2)
      .should('have.text', 'Pedidos');
    cy.get('[data-cy=pedidos-page-filters]').children().as('filtersPedidos');
    cy.get('.common__btn__content')
      .should('be.visible')
      .and('have.text', 'Filtrar')
      .should('not.be.enabled');
      cy.get('.makeStyles-container-11 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Teste');
    cy.get('@filtersPedidos').eq(0).find('svg').should('be.visible');
    cy.get('.common__btn__content').should('have.text', 'Filtrar').and('not.be.disabled');
    cy.get('@filtersPedidos').eq(1).should('be.visible').children()
      .children()
      .children()
      .eq(0)
      .and('have.text', 'Data do Pedido');
    digitaData();
    cy.get('@filtersPedidos').eq(1).find('svg').should('be.visible');
    cy.get('.pedidos__select-data__xicon').should('be.visible').children().click();
    digitaData();
    cy.get('@filtersPedidos').eq(2).should('be.visible').children()
      .children()
      .children()
      .eq(0)
      .and('have.text', 'Data de Faturamento');
    cy.get('@filtersPedidos').eq(2).find('input').type('15/11/2022');
    cy.get('@filtersPedidos').eq(2).find('svg').should('be.visible');
    cy.get('@filtersPedidos').eq(2).find('.pedidos__select-data__xicon').should('be.visible')
      .children()
      .click();
    cy.get('@filtersPedidos').eq(2).find('input').type('15/11/2022');
    cy.get('@filtersPedidos').eq(4).should('be.visible').children()
      .children()
      .eq(0)
      .should('have.text', 'Produto');
    cy.get('[data-cy="seletor-produto"] > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select')
      .should('have.text', 'Todos os produtos')
      .click()
    clicaMarca(0);
    clicaMarca(1);
    clicaMarca(2);
    cy.get('body').type('{esc}');
    cy.get('[data-cy="regioes"]').get('.label-new-select').eq(1).should('have.text', 'Regional');
    cy.get('[data-cy="regioes"]').get('.placeholder-new-select').eq(1).should('have.text', 'Todas as regionais');
    cy.get('[data-cy="regioes"] > .MuiFormControl-root > .MuiInputBase-root').click();
    cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').type('Belo Horizonte');
    cy.get('[data-cy="1 - Belo Horizonte"]').should('have.text','1 - Belo Horizonte');
    cy.get('[data-cy="1 - Belo Horizonte"]').click();
    cy.get('body').type('{esc}');
    cy.get('@filtersPedidos').eq(6).should('be.visible').children()
      .children()
      .eq(0)
      .should('have.text', 'Brand');
    cy.get('@filtersPedidos').eq(6).should('be.visible').children()
      .children()
      .eq(1)
      .contains('Todas as brands')
      .click();
      clicaMarca(0);
      clicaMarca(1);
      clicaMarca(2);
    cy.get('body').type('{esc}');
    cy.get('@filtersPedidos').eq(7).should('be.visible').children()
      .children()
      .eq(0)
      .should('have.text', 'Modalidade');
      cy.get('[data-cy="seletor-modalidade"] > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select > .placeholder-select')
      .should('have.text', 'Todas as modalidades').click()
      clicaMarca(0);
      clicaMarca(1);
      clicaMarca(2);
    cy.get('body').type('{esc}');
    cy.get('[data-cy="status"]').get('.label-new-select').eq(0).should('have.text', 'Status');
    cy.get('[data-cy="status"]').get('.placeholder-new-select').eq(0).should('have.text', 'Todos os status');
    cy.get('[data-cy="status"] > .MuiFormControl-root > .MuiInputBase-root').click();
    cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').type('Análise comercial');
    cy.get('[data-cy="Análise Comercial Reprovada"] > .all-item-new-select').should('have.text','Análise Comercial Reprovada');
    cy.get('[data-cy="Análise Comercial Reprovada"]').click();
    cy.get('body').type('{esc}');
    cy.get('.common__btn__content').click();
    cy.get('.common__btn__content').should('not.be.enabled');
  });
});
