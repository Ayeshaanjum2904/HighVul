/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const modalExclusaoComunicadosIntercept = () => {
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
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
  cy.intercept('GET', '**documentos?brands=fiat&brands=cjdr&page=0&itensPorPage=25&isFundao=1*', {
    fixture: 'comunicados',
  });
  cy.intercept('DELETE', '**central-comunicados/delete-comunicado/**', {
    fixture: 'deletarComunicado',
  });
};

const clickIconLixeira = () => {
  cy.get('.list__inner-div > :nth-child(1)').children().eq(3).should('be.visible')
    .find('svg')
    .click();
};

describe('Modal exclusão comunicados', () => {
  before(() => {
    cy.server();
  });
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteModalExclusao', () => {
      cy.login('teste', 'senha');
    });
    modalExclusaoComunicadosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir modal de exclusão de comunicados e testar botões', () => {
    cy.get('[data-cy=menu-aside]').children().children().eq(4)
      .find('svg')
      .click();
    cy.get('[data-cy=menu-comunicados]').children().eq(1).children()
      .eq(1)
      .should('be.visible')
      .and('have.text', 'Central de comunicados')
      .find('svg')
      .click();
    clickIconLixeira();
    cy.get('.close-button').should('be.visible').children().eq(1)
      .should('have.text', 'Fechar')
      .click();
    clickIconLixeira();
    cy.get('.header').should('be.visible').and('have.text', 'Deseja excluir esse comunicado?').find('svg');
    cy.get('.subtitle').should('be.visible').and('have.text', 'Ele será excluído de todos e as concessionárias não terão mais acesso, mas você poderá criá-lo novamente se desejar.');
    cy.get('.modal-footer').children().eq(0).should('be.visible')
      .and('have.text', 'Voltar')
      .click();
    clickIconLixeira();
    cy.get('.modal-footer').children().eq(1).should('be.visible')
      .and('have.text', 'Excluir Comunicado')
      .click();
  });
});
