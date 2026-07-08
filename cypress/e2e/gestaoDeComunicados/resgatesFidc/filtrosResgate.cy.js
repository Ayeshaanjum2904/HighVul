/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const selectDay = (calendar, day) => {
  cy.get(`@${calendar}`).contains('td', day).click();
};

const testCalendar = (calendarName, currentDate) => {
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  cy.get(`[data-cy=${calendarName}Open]`).should('be.enabled').click();
  cy.get(`[data-cy=${calendarName}Calendar]`)
    .find('[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]')
    .as('Calendars');
  cy.get('@Calendars').eq(0).as('StartDateCalendar');
  cy.get('@Calendars').eq(1).as('EndDateCalendar');
  selectDay('StartDateCalendar', 1);
  selectDay('EndDateCalendar', 16);
  cy.get(`[data-cy=${calendarName}StartDate]`)
    .should('have.value', `01/${(`0${month}`).slice(-2)}/${year}`);
  cy.get(`[data-cy=${calendarName}EndDate]`)
    .should('have.value', `16/${(`0${month + 1}`).slice(-2)}/${year}`);
};

const resgateFiltrosIntercept = () => {
  cy.server();
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('POST', '**/fidc/gestao-resgates/mensagens', {
    fixture: 'resgateFidc',
  }).as('getResgates');
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
};

describe('Página de Resgates do FIDC', () => {
  before(() => {
    cy.server();
  });

  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteResgatesFIDC', () => {
      cy.login('teste', 'senha');
    });
    resgateFiltrosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
  });

  it('Deve listar resgate e filtrar pelo titulo', () => {
    const filterResgates = 'Teste 123';
    cy.get('[data-cy=menu-comunicados]').children().eq(1).as('submenu');
    cy.get('@submenu').children().eq(2).should('be.visible')
      .and('have.text', 'Resgate do FIDC')
      .click();
    cy.fixture('resgateFidc').then((resgate) => {
      const list = resgate;
      list.mensagens = resgate.mensagens.filter(
        (value) => value.titulo === filterResgates,
      );
      list.total = list.mensagens.length;
      cy.intercept('POST', '**/fidc/gestao-resgates/mensagens', list).as('getResgates');
    });
    cy.get('[data-cy=FilterApplyButton]').should('be.disabled');
    cy.get('[data-cy=FilterTitulo]').type(filterResgates);
    cy.get('[data-cy=FilterApplyButton]').should('be.enabled').click();
    cy.get('[data-cy=FilterApplyButton]').should('be.disabled');
    cy.get('[data-cy=Resgate_Row_0]').should('have.length', 1);
  });

  it('Deve listar resgate e filtrar pelo status', () => {
    const filterResgates = {
      index: 0,
      type: 'I',
      value: 'Inativo',
    };
    cy.get('[data-cy=menu-comunicados]').children().eq(1).as('submenu');
    cy.get('@submenu').children().eq(2).should('be.visible')
      .and('have.text', 'Resgate do FIDC')
      .click();
    cy.fixture('resgateFidc').then((resgate) => {
      const list = resgate;
      list.mensagens = resgate.mensagens.filter(
        (value) => value.status === filterResgates.type,
      );
      list.total = list.mensagens.length;
      cy.intercept('POST', '**/fidc/gestao-resgates/mensagens', list).as('getResgates');
    });
    cy.get('[data-cy=FilterApplyButton]').should('be.disabled');
    cy.get('[data-cy=FilterStatus]').should('be.empty');
    cy.wait('@getResgates').then(() => {
      cy.get('[data-cy=FilterStatus]').parent().click();
      cy.get(`[data-cy=FilterStatusItem_${filterResgates.index}]`).parent().click();
    });
    cy.get('[data-cy=FilterStatus]').type(filterResgates.value, { force: true });
    cy.get('[data-cy=FilterApplyButton]').should('be.enabled').click();
    cy.get('[data-cy=FilterApplyButton]').should('be.disabled');
    cy.get('[data-cy=Resgate_Row_0]').should('have.length', 1);
  });

  it('Deve listar resgates filtrando pelo período de vigência', () => {
    const date = new Date();
    cy.get('[data-cy=menu-comunicados]').children().eq(1).as('submenu');
    cy.get('@submenu').children().eq(2).should('be.visible')
      .and('have.text', 'Resgate do FIDC')
      .click();
    cy.fixture('resgateFidc').then((resgates) => {
      const list = resgates;
      const resgate = resgates.mensagens[0];
      resgate.dataInicioVigencia = date.toISOString();
      list.mensagens = [resgate];
      list.total = 1;
      cy.intercept('POST', '**/fidc/gestao-resgates/mensagens', list).as('getResgates');
    });
    cy.get('[data-cy=FilterApplyButton]').should('be.disabled');
    testCalendar('FilterPeriodoVigencia', date);
    cy.get('[data-cy=FilterApplyButton]').should('be.enabled').click();
  });
});
