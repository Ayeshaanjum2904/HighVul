/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const listVaziaErroIntercept = () => {
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

const acessarCentralDeComunicados = () => {
  cy.get('[data-cy=menu-aside]').children().children().eq(4)
    .should('be.visible')
    .and('have.text', 'Gestão de Comunicados')
    .find('svg')
    .click();
  cy.get('[data-cy=menu-comunicados]').children().eq(1).children()
    .eq(1)
    .should('be.visible')
    .and('have.text', 'Central de comunicados')
    .find('svg')
    .click();
};

const headerListagemErroVazia = (position, description) => {
  cy.get('[data-cy=list-header]').children().eq(position).should('be.visible')
    .and('have.text', description);
};

const footerIPP = (position, page) => {
  cy.get('.pagination-footer').children().children().children()
    .eq(0)
    .children()
    .children()
    .eq(position)
    .should('be.visible')
    .and('have.text', page);
};

const defaultFooter = () => {
  cy.get('.pagination-footer').children().children().children()
    .as('footerComunicados')
    .eq(1)
    .should('be.visible')
    .and('have.text', 'Itens por página');
  cy.get('@footerComunicados').eq(2).should('be.visible').and('have.text', 'Mostrando 1 - 0 de 0 itens totais');
  cy.get('@footerComunicados').eq(3).should('be.visible').and('have.text', '1');
};

const footerHeaderListagem = () => {
  headerListagemErroVazia(0, 'TÍTULO DO DOCUMENTO');
  headerListagemErroVazia(1, 'DATA DA DIVULGAÇÂO');
  headerListagemErroVazia(2, 'BRAND');
  footerIPP(0, '25');
  footerIPP(1, '50');
  footerIPP(2, '75');
  defaultFooter();
};

describe('Página comunicados erro', () => {
  it('Deve exibir mensagem de erro ao acessar a página de central de comunicados', () => {
    cy.server();
    listVaziaErroIntercept();
    cy.intercept('GET', '**documentos?brands=fiat&brands=cjdr&page=0&itensPorPage=25&isFundao=1**',
      { forceNetworkError: true });
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    acessarCentralDeComunicados();
    cy.get('.list__rendered-content').should('be.visible').and('have.text', 'Ocorreu um erro ao carregar os comunicados.');
    footerHeaderListagem();
  });
});

describe('Página comunicados vazia', () => {
  it('Deve exibir listagem vazia ao acessar a página de central de comunicados', () => {
    cy.server();
    listVaziaErroIntercept();
    cy.intercept('GET', '**documentos?brands=fiat&brands=cjdr&page=0&itensPorPage=25&isFundao=1*', {
      fixture: 'comunicadosVazio',
    });
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    acessarCentralDeComunicados();
    footerHeaderListagem();
    cy.get('.list__rendered-content').should('be.visible').and('have.text', 'Nenhum comunicado encontrado.');
  });
});
