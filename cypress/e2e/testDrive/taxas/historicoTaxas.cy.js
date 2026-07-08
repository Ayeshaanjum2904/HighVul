/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
import { selectValue } from '../../../utils/functions';

const filterButton = (status) => (
  cy.get('[data-cy="historico-taxa-filter-button"] > .common__btn').should(status).should('have.text', "Filtrar")
);

const listWithHeader = (getData, header, content) => (
  cy.get(getData).children().children().eq(0).should('have.text', header),
  cy.get(getData).children().children().eq(1).should('have.text',content)
);

describe('Historico taxa', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteHistoricoTaxas', () => {
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
    cy.intercept('POST','**/taxas/historico', {
      fixture: 'historicoTaxas'
    }).as('getHistoricoTaxas');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}/taxas/historico`);
  })

  it('Deve renderizar a pagina de historico de taxas e testar textos e paginação', () => {
		cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible').children()
		.as('menuLateral').eq(0).should('have.text', 'Ofertas');
		cy.get('@menuLateral').eq(3).click();
    cy.get('[data-cy=page-title]').should('be.visible'). should('have.text', 'Histórico de taxas');
		cy.get('[data-cy=page-content]').should('be.visible');
		cy.get('[data-cy=page-subtitle]').should('be.visible').children().its('length').should('be.eq', 5);
		cy.get('[data-cy=breadcrumb-fragment]').should('be.visible').eq(0).should('have.text', 'Gestão de Test Drive')
			.should('not.be.disabled')
		cy.get('[data-cy=breadcrumb-fragment]').eq(1).should('have.text', 'Gestão de Taxas').should('be.disabled')
		cy.get('[data-cy=breadcrumb-fragment]').eq(2).should('have.text', 'Histórico de Taxas').should('be.disabled')
		cy.get('[data-cy="ItensPerPage_25"]').should('be.visible').should('have.text', '25');
		cy.get('[data-cy="ItensPerPage_50"]').should('be.visible').should('have.text', '50');
		cy.get('[data-cy="ItensPerPage_75"]').should('be.visible').should('have.text', '75');
		cy.get('[data-cy="PageFoward"]').should('be.visible').click();
		cy.get('[data-cy="PageBack"]').should('be.visible').click();

  });

	it('Deve testar o filtro de data', () => {
		filterButton('be.disabled');
		cy.get('[data-cy=x-icon-data]').should('not.be.visible');
		cy.get('#start_date_input').type('12/06/2022');
		cy.get('#end_date_input').type('14/06/2022');
		cy.get('#start_date_input').should('have.value', '12/06/2022');
		cy.get('#end_date_input').should('have.value', '14/06/2022');
		cy.get('[data-cy=x-icon-data]').should('be.visible');
		filterButton('not.be.disabled').click();
		cy.wait(500);
		filterButton('be.disabled');
		cy.get('[data-cy=x-icon-data]').click();
		cy.get('#start_date_input').should('have.value', '');
		cy.get('#end_date_input').should('have.value', '');
	})

	it("Deve testar o filtro de taxa praticada", () => {
		filterButton('be.visible');
		filterButton('be.disabled');
		cy.get('[data-cy=historico-taxa-select-praticada]').children().eq(0).as('taxaPraticada');
		cy.get('@taxaPraticada').should('have.value', '').click().get("[data-value='a.d.']").click()
			.should('have.text', "Ao dia (a.d.)");
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
		cy.get('@taxaPraticada').click().get("[data-value='a.m.']").click()
			.should('have.text', "Ao mês (a.m.)");
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
		cy.get('@taxaPraticada').click().get("[data-value='all']").click()
			.should('have.text', "Todas as taxas");
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
	})

	it("Deve testar o filtro de brand", () => {
        filterButton('be.disabled');
		selectValue('[data-cy=historico-taxa-select-brand]', 'FIAT_SEM_FUNDO');
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
		selectValue('[data-cy=historico-taxa-select-brand]', 'FIAT_COM_FUNDO');
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
		selectValue('[data-cy=historico-taxa-select-brand]', 'CJDR');
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
		selectValue('[data-cy=historico-taxa-select-brand]', 'all');
		filterButton('not.be.disabled').click();
		filterButton('be.disabled');
	})

	it("Deve testar o header de listagem das taxas", () => {
	cy.get('.MuiDataGrid-main ').children().eq(0).children()
      .children()
      .children()
      .should('be.visible')
      .as('listagemHeader')
      .eq(0)
      .should('have.text', 'Novos');
    cy.get('@listagemHeader').eq(2).should('be.visible').and('have.text', 'Usados');
    cy.get('@listagemHeader').eq(4).should('be.visible').and('have.text', 'Peças');
    cy.get('@listagemHeader').eq(5).should('be.visible').and('have.text', 'Id. Visual');
    cy.get('@listagemHeader').eq(6).should('be.visible').and('have.text', 'Test Drive');
    cy.get('@listagemHeader').eq(7).should('be.visible').and('have.text', 'Vigência');
	})

	it("Deve testar as linhas de listagem das taxas", () => {
		cy.wait(2000);
		listWithHeader('[data-id="1"] > [data-field="novos"]','Floor Plan', '1,11% a.m.');
		listWithHeader('[data-id="1"] > [data-field="novos_second_column"]','Fiat com fundo', 'Não possui');
		listWithHeader('[data-id="1"] > [data-field="usados"]', 'Floor Plan', '1,31% a.m.');
		listWithHeader('[data-id="1"] > [data-field="usados_second_column"]', 'Fiat com fundo', 'Não possui');
		cy.get('[data-id="1"] > [data-field="pecas"]').should('have.text','1,51% a.m.');
		cy.get('[data-id="1"] > [data-field="id. visual"]').should('have.text','1,61% a.m.');
		listWithHeader('[data-id="1"] > [data-field="test drive"]', 'Fiat sem fundo', '1,71% a.m.');
		cy.get('[data-id="1"] > [data-field="vigencia"]').should('have.text', '01/01/2022 à 15/01/2022');
		cy.get('[data-id="1"] > .MuiDataGrid-cell--textRight').should('be.visible');
	})
});
