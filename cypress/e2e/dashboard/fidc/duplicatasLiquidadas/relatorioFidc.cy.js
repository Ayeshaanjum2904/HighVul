import moment from 'moment';
import { siteBaseUrl, setMediumViewport } from '../../../../utils/mocks';
import { PATH_DASHBOARD } from '../../../../../src/routes/paths';
import { mockLogin } from '../../../../utils/cyConstants';
import { selectRangeCalendar } from '../../../../utils/functions';

const fillFilters = () => {
  const startDate = new Date();
  const endDate = moment(startDate).add(1, 'months').toDate();

  selectRangeCalendar('filter-data-entrada', startDate, endDate);
  selectRangeCalendar('filter-data-vencimento', startDate, endDate);

  cy.dataCy('filter-concessionarias').click();
  cy.dataCy('filter-concessionarias-input').type('A-TRACAO');
  cy.dataCy('filter-concessionarias-select-all').click();
  cy.get('body').type('{esc}');

  cy.dataCy('filter-regionais').click();
  cy.dataCy('filter-regionais-input').type('SAO PAULO');
  cy.dataCy('filter-regionais-select-all').click();
  cy.get('body').type('{esc}');
};

describe('Relatórios FIDC', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteFidc', () => {
      cy.login('teste', 'senha');
      cy.intercept('POST', '**/authorize/refresh', {
        statusCode: 200, body: mockLogin,
      });
    });
    cy.intercept('POST', '**/authorize/refresh', {
      statusCode: 200,
      body: mockLogin,
    });
    cy.intercept('GET', '**/dashboard/filters/concessionarias', {
      fixture: 'dashboardFiltroConcessionaria',
    });
    cy.intercept('GET', '**/dashboard/filters/regionais', {
      fixture: 'dashboardFiltroRegional',
    });
    cy.intercept('POST', '**/dashboard/liquidadas', {
      fixture: 'liquidadas',
    });
    cy.intercept('POST', '**/fidc/export/relatorio', {
      fixture: 'example.xlsx',
      headers: {
        'content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'content-disposition': "attachment; filename=FIDC_Relatorio_Duplicatas.xlsx; filename*=UTF-8''FIDC_Relatorio_Duplicatas.xlsx",
      },
    });
    cy.visit(`${siteBaseUrl}${PATH_DASHBOARD}/fidc/duplicatas-liquidadas`);
  });

  it('Deve exibir os menus da parte de Dashboard com FIDC', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible');
    cy.get('[data-cy="DropDownSubmenu"]').should('have.text', ' FIDC').click();
    cy.get('[data-cy="MenuFidc"]').should('have.text', 'Duplicatas Liquidadas').click();

    cy.dataCy('page-title').should('be.visible').and('have.text', 'Duplicatas Liquidadas');
  });

  it('Deve testar os filtros e exportar relatório', () => {
    cy.get('[data-cy="relatorioFidcAccordion"]').click();
    cy.dataCy('ButtonClear').should('be.disabled');
    cy.dataCy('ButtonExport').should('be.disabled');

    fillFilters();
    cy.dataCy('ButtonClear').should('be.enabled');
    cy.dataCy('ButtonExport').should('be.enabled').click();

    cy.get('.snackbar-succes__item-container').should('have.text', 'Download realizado com sucesso').click();
    cy.get('[data-cy="relatorioFidcAccordion"]').click();
  });

  it('Deve preencher e limpar filtros', () => {
    cy.get('[data-cy="relatorioFidcAccordion"]').click();
    cy.dataCy('ButtonClear').should('be.disabled');
    fillFilters();
    cy.dataCy('ButtonClear').should('be.enabled').click();

    cy.dataCy('ButtonClear').should('be.disabled');
    cy.dataCy('ButtonExport').should('be.disabled');
    cy.get('[data-cy="relatorioFidcAccordion"]').click();
  });
});
