/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_DASHBOARD } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

describe('Relatórios Test Drive', () => {
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
            });
        });
        cy.intercept('POST', '**/authorize/refresh', {
            statusCode: 200,
            body: mockLogin,
        });
        cy.intercept('GET', '**/td-gestao-ofertas/ofertas*', {
            fixture: 'gestaoTestDriveOfertas',
        });
        cy.intercept('GET', '**/dashboard/filters/marcas', {
            fixture: 'dashboardFiltroBrand',
        });
        cy.intercept('GET', '**/dashboard/filters/regionais', {
            fixture: 'dashboardFiltroRegional',
        });
        cy.intercept('GET', '**/dashboard/filters/modelos', {
            fixture: 'dashboardFiltroModelo',
        });
        cy.intercept('GET', '**/dashboard/filters/grupo', {
            fixture: 'dashboardFiltroGrupo',
        });
        cy.intercept('GET', '**/dashboard/filters/pontos-venda', {
            fixture: 'dashboardFiltroPontoVenda',
        });
        cy.intercept('POST', '**/dashboard/pedidos', {
            fixture: 'dashboardPedidos',
        });
        cy.intercept('POST', '**/dashboard/pedidos/pedidos-area', {
            fixture: 'dashboardPedidosArea',
        });
        cy.intercept('POST', '**/dashboard/pedidos/pedidos-concessionaria', {
            fixture: 'dashboardPedidosConcessionaria',
        });
        cy.intercept('POST', '**/dashboard/pedidos/pedidos-modelo', {
            fixture: 'dashboardPedidosModelo',
        });
        cy.intercept('POST', '/dashboard/pedidos/modelo-regiao', {
            fixture: 'dashboardPedidosModeloRegiao',
        });
        cy.intercept('POST', '**/dashboard/pedidos/pedidos-periodo', {
            fixture: 'dashboardPedidosPeriodo',
        });
        cy.intercept('POST', '**/dashboard/pedidos/pedidos-regiao', {
            fixture: 'dashboardPedidosRegiao',
        });
        cy.intercept('POST', '**/dashboard/pedidos/resumo-fluxo', {
            fixture: 'dashboardPedidosResumoFluxo',
        });
        cy.visit(`${siteBaseUrl}${PATH_DASHBOARD}`);
    });

    it('Deve exibir os menus da parte de Dashboard e selecionar os Relatórios Test Drive', () => {
        cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible').children()
          .as('menuLateral')
          .eq(0)
          .should('have.text', 'Test Drive');
        cy.get('@menuLateral').eq(1).should('have.text', 'Pedidos');
        cy.get('@menuLateral').eq(0).click();
    });

    it('Deve exibir a página de Relatórios de Test Drive e testar os filtros', () => {
        cy.wait(3000);
        cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Test Drive');
        cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(0)
        .should('have.text', 'Dashboards');
        cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(2)
        .should('have.text', 'Test Drive');
        cy.get('[data-cy=dashboard-page-filters]').children().eq(0).as('filtersDashboard');
        cy.get('.common__btn__content')
        .should('be.visible')
        .and('have.text', 'Filtrar')
        .should('not.be.enabled');
        cy.get('@filtersDashboard').eq(0).find('svg').should('be.visible');
        cy.get('.common__btn__content').should('have.text', 'Filtrar').and('not.be.disabled');
        
        cy.get('.date-range-picker__tittle').should('have.text', 'Selecione um período');
        cy.get('#start_date_input').type('13/07/2023');
        cy.get('#end_date_input').type('20/07/2023');
        cy.get('.DateRangePickerInput_calendarIcon').click();
        cy.get('.calendar-info__container__content_filter-today').click();
        cy.get('.DateRangePickerInput_calendarIcon').click();
        cy.get('.calendar-info__container__content_filter-yesterday').click();
        cy.get('.DateRangePickerInput_calendarIcon').click();
        cy.get('.calendar-info__container__content_filter-week').click();
        cy.get('.DateRangePickerInput_calendarIcon').click();
        cy.get('.calendar-info__container__content_filter-month').click();
        cy.get('.calendar-info__container__content_footer > .common__btn').click();

        cy.get('[data-cy="seletor-dashboard-brand"]').get('.label-select').eq(0).should('have.text', 'Brand');
        cy.get('[data-cy="seletor-dashboard-brand"]').get('.placeholder-select').eq(0).should('have.text', 'Todas as brands');
        cy.get('[data-cy="seletor-dashboard-brand"]').click();
        cy.get('[data-cy="Fiat"]').click();
        cy.get('body').type('{esc}');

        cy.get('[data-cy="seletor-dashboard-modelo"]').get('.label-select').eq(1).should('have.text', 'Modelo');
        cy.get('[data-cy="seletor-dashboard-modelo"]').get('.placeholder-select').eq(1).should('have.text', 'Todos os modelos');
				cy.wait(2000);
        cy.get('[data-cy="seletor-dashboard-modelo"]').click();
        cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').type('Compas');
        cy.get('[data-cy="Compass"]').should('have.text','Compass');
        cy.get('[data-cy="Compass"]').click();
        cy.get('body').type('{esc}');

        cy.get('[data-cy="seletor-dashboard-regional"]').get('.label-select').eq(2).should('have.text', 'Regional');
        cy.get('[data-cy="seletor-dashboard-regional"]').get('.placeholder-select').eq(2).should('have.text', 'Todas as regionais');
        cy.get('[data-cy="seletor-dashboard-regional"]').click();
        cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').type('Belo Horizonte');
        cy.get('[data-cy="1 - Belo Horizonte"]').should('have.text','1 - Belo Horizonte');
        cy.get('[data-cy="1 - Belo Horizonte"]').click();
        cy.get('[data-cy="seletor-dashboard-regional-select-all"]').click();
        cy.get('body').type('{esc}');

        cy.get('[data-cy="seletor-dashboard-grupo"]').get('.label-select').eq(3).should('have.text', 'Grupo');
        cy.get('[data-cy="seletor-dashboard-grupo"]').get('.placeholder-select').eq(3).should('have.text', 'Todos os grupos');
        cy.get('[data-cy="seletor-dashboard-grupo"]').click();
        cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').type('All Veiculos');
        cy.get('[data-cy="23029795 - Jeep - All Veiculos Ltda"]').contains('All Veiculos Ltda');
        cy.get('[data-cy="23029795 - Jeep - All Veiculos Ltda"]').click();
        cy.get('[data-cy="seletor-dashboard-grupo-select-all"]').click();
        cy.get('body').type('{esc}');

        cy.get('[data-cy="seletor-dashboard-ponto-venda"]').get('.label-select').eq(4).should('have.text', 'Pontos de venda');
        cy.get('[data-cy="seletor-dashboard-ponto-venda"]').get('.placeholder-select').eq(4).should('have.text', 'Todos os pontos de venda');
        cy.get('[data-cy="seletor-dashboard-ponto-venda"]').click();
        cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').type('907030');
        cy.get('.MuiList-root > .Mui-selected').should('have.text','907030 - All Veiculos Ltda');
        cy.get('.MuiList-root > .Mui-selected').click();
        cy.get('body').type('{esc}');
    });

    it('Deve exibir a página de Relatórios de Test Drive e testar os botões para download dos gráficos', () => {
        
        cy.get('[data-cy="download-button-chart"]').eq(0).click();
        
        cy.get('.MuiSelect-root').click();
        cy.get('.MuiList-root > .Mui-selected').should('have.text', 'Todos os pedidos');
        cy.get('[data-value="convencional"]').click();
        cy.get('[data-cy="download-button-chart"]').eq(1).click();
        cy.get('body').type('{esc}');

        cy.get('[data-cy="download-button-donut"]').eq(0).click();
        cy.get('[data-cy="download-button-donut"]').eq(1).click();
        cy.get('[data-cy="download-button-donut"]').eq(2).click();
        cy.get('[data-cy="download-button-donut"]').eq(3).click();
        cy.get('[data-cy="download-button-donut"]').eq(4).click();
        cy.get('[data-cy="download-button-donut"]').eq(5).click();
        cy.get('[data-cy="download-button-donut"]').eq(6).click();
    });

    it('Deve exibir a página de Relatórios de Test Drive e testar a expansão da parte de Números dos Regionais', () => {
    
        cy.get('[data-cy="collapse"]').eq(0).click();
        cy.get('[data-cy="download-button-chart"]').eq(2).click();
        cy.get('[data-cy="download-button-chart"]').eq(3).click();
        cy.get('[data-cy="download-button-chart"]').eq(4).click();
        cy.get('[data-cy="download-button-chart"]').eq(5).click();
    });

    it('Deve exibir a página de Relatórios de Test Drive e testar a expansão da parte de Números das Concessionárias', () => {

        cy.get('[data-cy="collapse"]').eq(1).click();
        cy.get('[data-cy="download-button-pedidos-concessionaria"]').click();
    });

})
