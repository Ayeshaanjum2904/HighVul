/* eslint-disable*/
import { setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
import { selectValue } from '../../../utils/functions';

const defaultTest = () => {
	  cy.get('[data-cy=cadastro-taxa-seletores]').should('be.visible')
	  cy.get('[data-cy=cadastro-taxa-adicionar]').children().should('be.disabled')
      .should('have.text', "Adicionar nova taxa");
	  cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_COM_FUNDO]').click();
    cy.get('.caption').should('have.text', 'Selecione um período');
    cy.get('.inputs').should('be.visible');
    cy.get('.input-left > input').type('12/03/2022');
    cy.get('.input-right > input').type('22/03/2022');
    cy.get('.input-left > input').should('have.value', '12/03/2022');
    cy.get('.input-right > input').should('have.value', '22/03/2022');
    cy.get('[data-cy=cadastro-taxa-adicionar]').children().should('not.be.disabled')
      .should('have.text', "Adicionar nova taxa");
};

const defaultTestAfterCloseModal = () => {
  cy.get('[data-cy=cadastro-taxa-brand]').contains('FIAT COM FUNDO');
  cy.get('.icon-button').should('be.visible');
  cy.get('.input-left > input').should('have.value', '12/03/2022');
  cy.get('.icon-button').should('be.visible');
  cy.get('.input-right > input').should('have.value', '22/03/2022');
  cy.get('[data-cy=cadastro-taxa-adicionar]').children().should('not.be.disabled')
    .should('have.text', "Adicionar nova taxa");
}

const openModal = () => {
    defaultTest();
    cy.get('[data-cy=page-header]').children().eq(1).find('svg').should('be.visible').click();
    cy.get('.common__modal__content').should('be.visible');
    cy.get('[data-cy=taxas-modal-container]').children().eq(0).find('svg').should('be.visible')
    cy.get('[data-cy=taxas-modal-container]').children().eq(0).find('span').should('have.text',
      'Deseja sair de cadastro de nova taxa?');
    cy.get('[data-cy=taxas-modal-container]').children().eq(1).should('have.text',
      'As modificações de novo cadastro de taxa serão perdidas caso não sejam salvas.');
    cy.get('.common__close-modal__button-content').should('be.visible').and('have.text', 'Fechar');
    cy.get('[data-cy=taxas-modal-container]').children().eq(2).as("buttons").should('be.visible');
    cy.get('@buttons').children().eq(0).should('have.text', 'Cancelar');
    cy.get('@buttons').children().eq(1).should('have.text', 'Sair');
}

const insertTaxasHeader = () => {
  cy.get('.input-left > input').type('12/03/2022');
  cy.get('.input-right > input').type('22/03/2022');
  cy.get('[data-cy="cadastro-taxa-adicionar"]').click();
}

const insertTaxasFirstLine = () => {
  insertTaxasHeader();
  cy.get(':nth-child(1) > .input-insert-taxa').type('0.546');
  cy.get(':nth-child(1) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(1) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
  cy.get(':nth-child(2) > .input-insert-taxa').type('0.546');
  cy.get(':nth-child(2) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(2) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
  cy.get(':nth-child(3) > .input-insert-taxa').type('0.546');
  cy.get(':nth-child(3) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(1) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
  cy.get(':nth-child(4) > .input-insert-taxa').type('0.546');
  cy.get(':nth-child(4) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(2) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
}

const insertTaxasSecondLine = () => {
  cy.get(':nth-child(5) > .input-insert-taxa').type('0.546');
  cy.get(':nth-child(5) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(1) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
  cy.get(':nth-child(6) > .input-insert-taxa').type('0.546');
  cy.get(':nth-child(6) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(2) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
}

describe('Cadastro Taxas', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteCadastroTaxas', () => {
      cy.login('teste', 'senha');
    }); 
    cy.intercept('POST', '**/authorize/refresh', {
      statusCode: 200,
			body: mockLogin,
		});
    cy.intercept('POST','**/taxas/historico', {
      fixture: 'historicoTaxasSuccess'
    }).as('getHistoricoTaxas');
    cy.visit(`${PATH_GESTAO_TEST_DRIVE}/taxas/cadastro`);
  });

  it('Deve renderizar a página de cadastro de taxa e testar os textos', () => {
    cy.get('[data-cy=page-subtitle]').eq(0).should('be.visible');
    cy.get('[data-cy=breadcrumb-fragment]').eq(0).should('be.visible').and('have.text', 'Gestão de Test Drive')
      .should('not.be.disabled');
    cy.get('[data-cy=breadcrumb-fragment]').eq(1).should('be.visible').and('have.text', 'Gestão de Taxas')
      .should('be.disabled');
    cy.get('[data-cy=breadcrumb-fragment]').eq(2).should('be.visible').and('have.text', 'Histórico de Taxas')
      .should('not.be.disabled');
    cy.get('[data-cy=breadcrumb-fragment]').eq(3).should('be.visible').and('have.text', 'Cadastro de Nova Taxa')
      .should('be.disabled');
    cy.get('[data-cy=page-header]').should('be.visible').children().eq(1).should('be.visible')
      .and('have.text', 'Cadastro de nova taxa');
    cy.get('[data-cy=page-header]').children().eq(1).find('svg').should('be.visible');
    cy.get('[data-cy=cadastro-taxas-seletores-title]').find("span").eq(0).should('be.visible')
      .and('have.text', 'Dados das taxas');
    cy.get('[data-cy=cadastro-taxas-seletores-title]').children().eq(1).should('be.visible').and('have.text',
      'Informe os dados da marca, início e fim de vigência e em seguida insira uma nova taxa.');
    defaultTest();    
  })

  
  it('Deve testar a inserção da taxa CJDR', () => {
    cy.intercept('POST','**/taxas', {
      fixture: 'fiatSemFundoSuccess',
    }).as('postTaxa');
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=CJDR]').click();
    insertTaxasFirstLine();
    cy.get('.common__btn__new-blue').click();
    cy.wait('@postTaxa');
    cy.get('.snackbar-succes__item-container').should('have.text', 'Taxa cadastrada com sucesso').click();
  })

  it('Deve testar a inserção da taxa Fiat sem fundo', () => {
    cy.intercept('POST','**/taxas', {
      fixture: 'fiatSemFundoSuccess',
    }).as('postTaxa');
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_SEM_FUNDO]').click();
    insertTaxasFirstLine();
    cy.get('.common__btn__new-blue').click();
    cy.wait('@postTaxa');
    cy.get('.snackbar-succes__item-container').should('have.text', 'Taxa cadastrada com sucesso').click();
  })
  
  it('Deve testar a inserção da taxa Fiat sem fundo com conflito', () => {
    cy.intercept('POST','**/taxas', {
      fixture: 'fiatSemFundoError',
      statusCode: 409,
    }).as('postTaxa');
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_SEM_FUNDO]').click();
    insertTaxasFirstLine();
    cy.get('.common__btn__new-blue').click();
    cy.wait('@postTaxa');
    cy.get('.snackbar-error__item-container').should('have.text', 'Erro ao cadastrar taxa').click();
  })

  it('Deve testar a inserção da taxa Fiat com fundo', () => {
    cy.intercept('POST','**/taxas', {
      fixture: 'fiatSemFundoSuccess'
    }).as('postTaxa');
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_COM_FUNDO]').click();
    insertTaxasFirstLine();
    insertTaxasSecondLine();
    cy.get('.common__btn__new-blue').click();
    cy.wait('@postTaxa');
    cy.get('.snackbar-succes__item-container').should('have.text', 'Taxa cadastrada com sucesso').click();
  })

  it('Deve testar a inserção de uma taxa inválida', () => {
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_COM_FUNDO]').click();
    insertTaxasHeader();
    cy.get(':nth-child(1) > .input-insert-taxa').type('0.546');
    cy.get(':nth-child(2) > .radio-button-container > .MuiFormGroup-root-178 > :nth-child(1) > .MuiButtonBase-root-37 > .MuiIconButton-label-36 > .PrivateSwitchBase-input-195').click();
    cy.get('.common__btn__new-blue').click();
    cy.get('.snackbar-error__item-container').should('have.text', 'Verifique o preenchimento dos campos').click();
  })

  it('Deve testar a inserção de uma taxa vazia', () => {
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_COM_FUNDO]').click();
    insertTaxasHeader();
    cy.get('.common__btn__new-blue').click();
    cy.get('.snackbar-error__item-container').should('have.text', 'Verifique o preenchimento dos campos').click();
  })

  it('Deve testar o botão de limpar campos', () => {
    cy.get('[data-cy=cadastro-taxa-brand]').click().get('[data-value=FIAT_COM_FUNDO]').click();
    insertTaxasFirstLine();
    insertTaxasSecondLine();
    cy.get('.common__btn__gray').click();
    cy.get(':nth-child(1) > .input-insert-taxa > .common__form-input__container').should('have.text', '');
  })
  
  it('Deve testar a seta de voltar para a pagina de historico sem filtro selecionado', () => {
      cy.get('[data-cy=page-header]').should('be.visible').children().eq(1).should('be.visible')
        .and('have.text', 'Cadastro de nova taxa');
      cy.get('[data-cy=page-header]').children().eq(1).find('svg').should('be.visible').click();
      cy.url().should('include', '/taxas/historico');
  })

  it('Deve testar a seta de voltar para a pagina de historico com filtro selecionado', () => {
      defaultTest();  
      cy.get('[data-cy=page-header]').children().eq(1).find('svg').should('be.visible').click();
      cy.get('.common__modal__content').should('be.visible');
  })

  it('Deve testar o modal e todos seus elementos', () => {
      openModal();
  })

  it('Deve testar o modal selecionando a opção de sair e voltar para pagina de historico ', () => {
      openModal();
      cy.get('@buttons').children().eq(1).click();
      cy.url().should('include', '/taxas/historico');
  })

  it('Deve testar o modal selecionando o ícone de X e voltar para a pagina de cadastro', () => {
      openModal(); 
      cy.get('.common__close-modal__button-content').should('be.visible').click();
      defaultTestAfterCloseModal();
  })

  it('Deve testar o modal selecionando a opção de cancelar e voltar para a pagina de cadastro', () => {
      openModal(); 
      cy.get('@buttons').children().eq(0).click();
      defaultTestAfterCloseModal();
  })
})
