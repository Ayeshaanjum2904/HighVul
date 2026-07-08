/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const modalVeiculosIntercept = () => {
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
  cy.intercept('**/pedidos?ipp=50&tipo=todos&isAscSort=false', {
    fixture: 'gestaoTestDrivePedidos',
  });
  cy.intercept('GET', '**/veiculos**', {
    fixture: 'gestaoTestDriveVeiculos',
  });
};

const clickListagem = () => {
  cy.get('[data-id="1"]').eq(0).click();
};

const headerDetalhesVeiculo = (position, description) => {
  cy.get('[data-cy=veiculos-card-resumo-header]').children().eq(position).should('have.text', description);
};

const infoModal = (rowPosition, columnPosition, description) => {
  cy.get('[data-cy=veiculos-card-resumo-card]').children().eq(rowPosition).children()
    .eq(columnPosition)
    .should('have.text', description);
};

const clickModalExclusao = () => {
  cy.get('[data-cy=veiculos-modal-footer]').children().eq(1).click();
};

const textoModalExclusao = (position, description) => {
  cy.get(position).should('have.text', description);
};

const botoesModalExclusao = (position, description) => {
  cy.get(position)
    .should('have.text', description)
    .click();
};

describe('Modal de detalhes do veículo', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteVeiculos', () => {
      cy.login('teste', 'senha');
    });
    modalVeiculosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir o modal de detalhes do veículo e testar o modal e botão de exclusão', () => {
    cy.intercept('GET', '**/veiculos/**', {
      fixture: 'detalheVeiculo',
    });
    cy.intercept('DELETE', '**/veiculos/**', {
      fixture: 'deletarVeiculo',
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
    clickListagem();
    cy.get('[data-cy=veiculos-modal-sidebar]').eq(0).should('be.visible');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(1)
      .should('have.text', 'Fechar');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(0)
      .click();
    clickListagem();
    headerDetalhesVeiculo(0, 'Fiat');
    headerDetalhesVeiculo(1, 'Doblo');
    headerDetalhesVeiculo(2, 'essence 7 lugares');
    infoModal(0, 0, 'Marca:');
    infoModal(0, 1, 'Fiat');
    infoModal(1, 0, 'Modelo:');
    infoModal(1, 1, '119 • Doblo');
    infoModal(2, 0, 'Model/Year:');
    infoModal(2, 1, '2022');
    infoModal(3, 0, 'Código Versão:');
    infoModal(3, 1, '6GD');
    infoModal(4, 0, 'Versão:');
    infoModal(4, 1, 'essence 7 lugares');
    infoModal(5, 0, 'Código Série:');
    infoModal(5, 1, '1');
    infoModal(6, 0, 'Série:');
    infoModal(6, 1, '1.8 16V flex manual');
    infoModal(7, 0, 'Nome Comercial:');
    infoModal(7, 1, 'doblò essence 7 lugares 1.8 16V flex 4p 2022');
    clickModalExclusao();
    textoModalExclusao('.title', 'Deseja excluir esse veículo?');
    textoModalExclusao('.subtitle', 'Ele será excluído permanentemente.');
    botoesModalExclusao('.return-button > .common__btn', 'Voltar');
    clickModalExclusao();
    cy.get('.close-button').should('have.text', 'Fechar');
    cy.get('.close-button').click();
    clickModalExclusao();
    botoesModalExclusao(':nth-child(2) > .common__btn', 'Excluir Veículo');
  });
});
