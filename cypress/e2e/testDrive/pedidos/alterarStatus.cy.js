/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';


const alterarStatusIntercept = () => {
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
}

const defaultTestModalHeader = (pedidoId) => {
  cy.get('[data-cy=pedidos-modal-header]').should('be.visible').children().as('modalHeader').eq(0)
    .should('have.text', 'Pedidos');
  cy.get('@modalHeader').eq(1).should('have.text', `Pedido #${pedidoId}`);
}

const abrirModalBase = () => {
    cy.intercept('**/pedidos/**', {
        fixture: 'pedidoDetalheAnaliseComercial'
      });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
}

const abrirSelectESelecionarStatus = (status) => {
    cy.get('#summary-select').click();
    cy.get(`[value="${status}"]`).click();
}

const abrirModalAlterar = () => {
  cy.get('[data-cy="pedidos__modal-footer__container"] > :nth-child(2) > .common__btn').click({ force: true });
    cy.get('.card-modal-footer > :nth-child(2) > .common__btn').should('be.disabled');
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
    alterarStatusIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir o modal do pedido e em seguida exibir o modal de alterar status', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    abrirModalAlterar();
  })

  it('Deve abrir o modal abrir o select, pesquisar e selecionar um status', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    cy.intercept('GET','**/pedidos/regressaoStatus?status=analise_comercial', {
      fixture: 'etapaRegressao',
    });
    abrirModalAlterar();
    cy.get('#summary-select').click();
    cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root').should('be.visible').type('Em Separação');
    cy.get('[style="position: relative; height: 252px; width: 100%; overflow: auto; will-change: transform; direction: ltr;"] > div > .MuiButtonBase-root').click();
  })

  it('Deve exibir o modal do pedido selecionar um status e confirmar a alteração', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    cy.intercept('GET','**/pedidos/regressaoStatus?status=analise_comercial', {
      fixture: 'etapaRegressao',
    });
    abrirModalAlterar();
    abrirSelectESelecionarStatus('Em Separação');
    cy.get('.card-modal-footer > :nth-child(2) > .common__btn').click();
    cy.get('.snackbar-succes__item-container').should('be.visible');
  })

  it('Deve exibir o modal do pedido selecionar um status e confirmar a alteração porém com erro', () => {
    abrirModalBase();
    cy.intercept('**/pedidos/**/reset-status**', {
        statusCode: 404
      });
    defaultTestModalHeader('4225');
    cy.intercept('GET','**/pedidos/regressaoStatus?status=analise_comercial', {
      fixture: 'etapaRegressao',
    });
    abrirModalAlterar();
    abrirSelectESelecionarStatus('Em Separação');
    cy.get('.card-modal-footer > :nth-child(2) > .common__btn').click();
    cy.get(':nth-child(7) > .snackbar-items__container > .snackbar-error__item-container').should('be.visible');
  })

  it('Deve exibir um modal do pedido e clicar em voltar e exibir modal de alerta', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    cy.intercept('GET','**/pedidos/regressaoStatus?status=analise_comercial', {
      fixture: 'etapaRegressao',
    });
    abrirModalAlterar();
    abrirSelectESelecionarStatus('Em Separação');
    cy.get('.return-button > .common__btn').click();
    cy.get('.modal').should('be.visible');
    cy.get('.title').should('be.visible').and('have.text', 'Deseja sair de alterar etapa do pedido?');
    cy.get('.subtitle').should('be.visible').and('have.text', 'A alteração selecionada não foi confirmada. Caso queira confirmar, clique em voltar e confirme a seleção.');
    cy.get('.modal-footer > :nth-child(2) > .common__btn').click();
  })

  it('Deve exibir um modal do pedido e clicar em fechar e exibir modal de alerta', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    cy.intercept('GET','**/pedidos/regressaoStatus?status=analise_comercial', {
      fixture: 'etapaRegressao',
    });
    abrirModalAlterar();
    abrirSelectESelecionarStatus('Em Separação');
    cy.get('.card-close-button').click();
    cy.get('.modal').should('be.visible');
    cy.get('.title').should('be.visible').and('have.text', 'Deseja sair de alterar etapa do pedido?');
    cy.get('.subtitle').should('be.visible').and('have.text', 'A alteração selecionada não foi confirmada. Caso queira confirmar, clique em voltar e confirme a seleção.');
    cy.get('.modal-footer > :nth-child(2) > .common__btn').click();
  })

  it('Deve exibir um modal do pedido e clicar em voltar', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    abrirModalAlterar();
    cy.get('.return-button > .common__btn').click();
    cy.get('.modal').should('not.exist');
  })

  it('Deve exibir um modal do pedido e clicar em fechar', () => {
    abrirModalBase();
    defaultTestModalHeader('4225');
    abrirModalAlterar();
    cy.get('.card-close-button').click();
    cy.get('.modal').should('not.exist');
  })
});
describe('Modal de regressão com erro', () => {
  it('Deve exibir o modal de regressão porém com erro', () => {
  cy.server();
  alterarStatusIntercept();
  setMediumViewport();
  cy.login('teste', 'senha');
  cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  abrirModalBase();
  defaultTestModalHeader('4225');
  cy.intercept('GET', '**/pedidos/regressaoStatus?status=analise_comercial',{
    statusCode: 400,
  });
  abrirModalAlterar();
  cy.get('.error-message').should('be.visible').and('have.text', 'Ocorreu um erro ao carregar sua lista de status. Por favor, recarregue a página e tente novamente.');
  })
});
