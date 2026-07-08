/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const comunicadosIntercept = () => {
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
};

const clickGestaoComunicados = () => {
  cy.get('[data-cy=menu-aside]').children().children().eq(4)
    .should('be.visible')
    .and('have.text', 'Gestão de Comunicados')
    .find('svg')
    .click();
};

const clickMenuComunicados = () => {
  cy.get('[data-cy=menu-comunicados]').children().eq(1).children()
    .eq(1)
    .should('be.visible')
    .and('have.text', 'Central de comunicados')
    .find('svg')
    .click();
};

const headerListagem = (position, description) => {
  cy.get('[data-cy=list-header]').children().eq(position).should('be.visible')
    .and('have.text', description);
};

const infoListagem = (position, description) => {
  cy.get('.list__inner-div > :nth-child(1)').children().eq(position).should('be.visible')
    .and('have.text', description);
};

const defaultIPP = (position, page) => {
  cy.get('.pagination-footer').children().children().children()
    .eq(0)
    .children()
    .children()
    .eq(position)
    .should('be.visible')
    .and('have.text', page);
};

describe('Página central de comunicados', () => {
  before(() => {
    cy.server();
  });
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteCentralComunicados', () => {
      cy.login('teste', 'senha');
    });
    comunicadosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir header da página de central de comunicados', () => {
    clickGestaoComunicados();
    clickMenuComunicados();
    cy.get('[data-cy=page-subtitle]').children().eq(0).should('be.visible')
      .and('have.text', 'Gestão de Comunicados')
      .click();
    clickMenuComunicados();
    cy.get('[data-cy=page-subtitle]').children().eq(2).should('be.visible')
      .and('have.text', 'Central de Comunicados');
    cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Central De Comunicados');
    cy.get('[data-cy=botao-cadastro]').children().should('be.visible').and('have.text', 'Cadastrar novo comunicado');
  });

  it('Deve exibir listagem e footer da página de central de comunicados', () => {
    clickGestaoComunicados();
    clickMenuComunicados();
    headerListagem(0, 'TÍTULO DO DOCUMENTO');
    headerListagem(1, 'DATA DA DIVULGAÇÂO');
    headerListagem(2, 'BRAND');
    infoListagem(0, 'TesteDocumentoGeral.pdf');
    infoListagem(1, '01/02/2022');
    infoListagem(2, 'Fiat sem Fundo');
    cy.get('.list__inner-div > :nth-child(1)').children().eq(3).should('be.visible')
      .find('svg');
    defaultIPP(0, '25');
    defaultIPP(1, '50');
    defaultIPP(2, '75');
    cy.get('.pagination-footer').children().children().children()
      .as('footerComunicados')
      .eq(1)
      .should('be.visible')
      .and('have.text', 'Itens por página');
    cy.get('@footerComunicados').eq(2).should('be.visible').and('have.text', 'Mostrando 1 - 25 de 35 itens totais');
    cy.get('@footerComunicados').eq(3).should('be.visible').and('have.text', '1');
  });
});
