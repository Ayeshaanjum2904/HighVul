/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
const getActionButtons = (row) => {
	cy.get(`${row} > .historico-taxas-row__external__container > .historico-taxas-row__acoes > .historico-taxas-row__taxa`).as('actions');
  cy.get('@actions').children().eq(0).as('openEditarModal');
};


describe('Modal Editar taxa', () => {
	before(() => {
    cy.server();
  })
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
      fixture: 'historicoTaxasSuccess'
    }).as('getHistoricoTaxas');

    cy.fixture('historicoTaxasSuccess').then((historico) => {
      historico.taxas[0].criadoEm = (new Date()).toISOString().slice(0, 19);
      cy.intercept('POST','**/taxas/historico', historico).as('getHistoricoTaxas');
    })
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}/taxas/historico`);
  })

	it("Deve testar botão de abrir o modal de edição e voltar do modal de alerta", () => {
    getActionButtons(':nth-child(2)');
		cy.get('@openEditarModal').click();
    cy.get('.card-close-button').click();
    cy.get('.modal-footer > .return-button > .common__btn').click();
    cy.get('.makeStyles-cardTitle-45 > span').should('have.text', 'Editar Taxas');
	})

	it("Deve testar botão de abrir o modal de edição e sair dois modais", () => {
    getActionButtons(':nth-child(2)');
		cy.get('@openEditarModal').click();
    cy.get('.card-close-button').click();
    cy.get('.modal-footer > :nth-child(2) > .common__btn').click();
    cy.get('[data-cy="page-title"]').should('have.text', 'Histórico de taxas');
	})

	it("Deve testar botão de abrir o modal e preencher form e sucesso ao salvar", () => {
    getActionButtons(':nth-child(2)');
		cy.get('@openEditarModal').click();
    cy.intercept('PUT','**/taxas/**', {
      fixture: 'editarTaxaSuccess',
      statusCode: 200,
    }).as('updateTaxa');
    cy.get('.makeStyles-root-148 > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click().get('[data-value=CJDR]').click();
    cy.get(':nth-child(1) > .input-insert-taxa > .common__form-input__container').clear().type('0.98');
    cy.get(':nth-child(2) > .input-insert-taxa > .common__form-input__container').clear().type('0.98');
    cy.get(':nth-child(3) > .input-insert-taxa > .common__form-input__container').clear().type('0.98');
    cy.get(':nth-child(4) > .input-insert-taxa > .common__form-input__container').clear().type('0.98');
    cy.get(':nth-child(2) > .common__btn').click();
    cy.wait('@updateTaxa');
    cy.get('.snackbar-succes__item-container').should('have.text', 'Taxa editada com sucesso').click();
	})

	it("Deve testar botão de abrir o modal e preencher form e erro ao salvar", () => {
    getActionButtons(':nth-child(2)');
		cy.get('@openEditarModal').click();
    cy.intercept('PUT','**/taxas/**', {
      statusCode:409,
    }).as('updateTaxa');
    cy.get('.makeStyles-root-148 > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click().get('[data-value=FIAT_SEM_FUNDO]').click();
    cy.get(':nth-child(2) > .common__btn').click();
    cy.wait('@updateTaxa');
    cy.get('.snackbar-error__item-container').should('have.text', 'Erro ao editar taxa. Por favor, tente novamente.').click();
	})

  it('Deve testar abrir calendário', () => {
    getActionButtons(':nth-child(2)');
		cy.get('@openEditarModal').click();
    cy.get('.card-modal-editar-header > .date-range-picker__container > .date-range-picker__x-and-input-container > .border > .date-range-picker__input-container > .DateRangePicker > :nth-child(1) > .DateRangePickerInput > .DateRangePickerInput_calendarIcon').click();
  })
	
});
