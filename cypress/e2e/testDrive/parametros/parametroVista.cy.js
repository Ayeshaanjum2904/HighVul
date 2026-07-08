/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

describe('Parâmetros à vista', () => {
  before(() => {
    cy.server();
  });

  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteCondicaoVista', () => {
      cy.login('teste', 'senha');
    });
    cy.intercept('POST', '**/authorize/refresh', {
        statusCode: 200,
		body: mockLogin,
	  });
    cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
      fixture: 'gestaoTestDriveOfertas'
    });
    cy.intercept('GET','**/produtos*', {
      fixture: 'gestaoTestDriveProdutos'
    }); 
    cy.intercept('GET','**/td-gestao-ofertas/descontos*', {
      fixture: 'gestaoTestDriveDescontos'
    });
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  })

  it('Deve exibir os menus da parte de test drive e selecionar os parâmetros, em seguida selecionar os parâmetros a vista', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible').children()
      .as('menuLateral').eq(0).should('have.text', 'Ofertas');
    cy.get('@menuLateral').eq(1).should('have.text', 'Pedidos');
    cy.get('@menuLateral').eq(2).should('have.text', 'Veículos');
    cy.get('@menuLateral').eq(3).should('have.text', 'Gestão de taxas');
    cy.get('@menuLateral').eq(4).should('have.text', 'Parâmetros');
    cy.get('@menuLateral').eq(4).click();
    cy.get('.menu-dashboard__container').should('be.visible').children()
      .as('novoMenuLateral').eq(0).should('have.text', 'Voltar para ofertas');
    cy.get('@novoMenuLateral').eq(1).children().eq(0).should('have.text', 'Condição à Vista');
    cy.get('@novoMenuLateral').eq(1).children().eq(1).should('have.text', 'Condições Comerciais');
    cy.get('@novoMenuLateral').eq(1).children().eq(0).click();
  })

  it('Deve renderizar o cabeçalho com breadcrumb', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(4).click();
    cy.get('.menu-dashboard__container').children().eq(1).children().eq(0).click();
    cy.get('[data-cy="page-header"]').should('be.visible').children()
      .as('tituloBreadcrumb');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(0).should('have.text', 'Gestão de Test Drive');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(2).should('have.text', 'Parâmetros');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(4).should('have.text', 'Condições à Vista');
    cy.get('@tituloBreadcrumb').eq(1).should('have.text', 'Condições à vista');
  })

  it('Deve renderizar todos os filtros e botões, funcionando', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(4).click();
    cy.get('.menu-dashboard__container').children().eq(1).children().eq(0).click();
    cy.get('.descontos-page__filters').should('be.visible');
    cy.get('.makeStyles-container-11 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .click().type('Teste');
    cy.get('.descontos-page__filters__select__produto > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root')
      .click();
    cy.get('[data-value="2"]').click();
    cy.get('.descontos-page__filters__select__marca > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click();
    cy.get('[data-value="Fiat"]').click();
    cy.get('.descontos-page__filters__select__date-inicio > .date-picker-container > .date-picker-x-and-input-container > .border > .date-picker-input-container > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .DateInput > #date_input')
      .click().type('19/03/1997');
    cy.get('.descontos-page__filters__select__date-fim > .date-picker-container > .date-picker-x-and-input-container > .border > .date-picker-input-container > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .DateInput > #date_input')
      .click().type('20/03/1997');
    cy.get('.descontos-page__filters__input__filter-button > .common__btn > .common__btn__content').click();
  })

  it('Deletar uma linha da listagem', () => {
    cy.intercept('DELETE','**/td-gestao-ofertas/descontos/*', {
      status: 200,
      body: []
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(4).click();
    cy.get('.menu-dashboard__container').children().eq(1).children().eq(0).click();
    cy.get('.descontos-page__list-row__delete-button').click();
    cy.intercept('GET','**/td-gestao-ofertas/descontos*', {
      status: 200,
      body: []
    })
    cy.get('.modal-footer > :nth-child(2) > .common__btn').click();
    cy.get('.list__rendered-content').should('have.text', 'Ocorreu um erro ao carregar as condições à vista.');

  })

});

describe('Listagem vazia', () => {
  it('Deve apresentar a mensagem de listagem vazia', () => {
    cy.server();

  setMediumViewport();
  cy.session('LoginClienteCondicaoVista', () => {
    cy.login('teste', 'senha');
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
  cy.intercept('GET','**/td-gestao-ofertas/descontos*', {
    status: 200,
    body: []
  });
  cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);

  cy.get('[data-cy=menu-dashboard-container-content]').children().eq(4).click();
  cy.get('.menu-dashboard__container').children().eq(1).children().eq(0).click();
  cy.get('.list__rendered-content').should('have.text', 'Ocorreu um erro ao carregar as condições à vista.');
  });
});



