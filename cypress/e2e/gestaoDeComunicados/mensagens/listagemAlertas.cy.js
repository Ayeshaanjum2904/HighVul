/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const mensagensListagemIntercept = () => {
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
};

const listagemAlertas = (field, description) => {
  cy.get(`[data-id="1"] > [data-field=${field}]`).should('be.visible').and('have.text', description);
};

const headerName = (eq, text) => {
  cy.get('.MuiDataGrid-columnHeaderTitleContainerContent').eq(eq).should('be.visible').and('have.text', text);
};

const defaultMensagens = (description) => {
  cy.get('.MuiDataGrid-footerContainer').should('be.visible');
  cy.get('[data-cy=ItensPerPage_25]').should('have.text', '25');
  cy.get('[data-cy=ItensPerPage_50]').should('have.text', '50');
  cy.get('[data-cy=ItensPerPage_75]').should('have.text', '75');
  cy.get('[data-cy="IndicadorPagina"]').should('have.text', description);
  cy.get('[data-cy="PageNumber"]').should('have.text', '1');
};
describe('Listagem de criação de alertas', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteGestaoComunicados', () => {
      cy.login('teste', 'senha');
    });
    mensagensListagemIntercept();
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
  });

  it('Deve exibir a página de Mensagens, testar a listagem e footer', () => {
    headerName(0, 'Id');
    headerName(1, 'Data da criação');
    headerName(2, 'Título');
    headerName(3, 'Período');
    headerName(4, 'Brand');
    headerName(5, 'Status');
    listagemAlertas('id', '#1');
    listagemAlertas('dataCriacao', '13/09/2021');
    listagemAlertas('titulo', 'Teste');
    listagemAlertas('periodo', '18/09/2021 - 17/09/2021');
    listagemAlertas('brand', 'Jeep, Fiat');
    listagemAlertas('status', 'Finalizado');
    cy.get('[data-id="1"] > [data-colindex="6"]').should('be.visible').find('svg');
    defaultMensagens('1 - 6 de 6');
  });
});

describe('Página criação de alertas erro', () => {
  it('Deve exibir mensagem de erro ao acessar a página de Criação de alertas', () => {
    mensagensListagemIntercept();
    cy.intercept('GET', '**mensagem-rede/list*',
      { forceNetworkError: true })
      .as('getNetworkFailure');
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
    cy.get('.alertas__page__list').should('be.visible')
      .and('have.text', 'Ocorreu um erro ao carregar os alertas.');
  });
});

describe('Página mensagens vazia', () => {
  it('Deve exibir mensagem de listagem vazia ao acessar a página de Mensagens', () => {
    mensagensListagemIntercept();
    cy.intercept('GET', '**mensagem-rede/list*', {
      fixture: 'alertasListagemVazia',
    });
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
    headerName(0, 'Id');
    headerName(1, 'Data da criação');
    headerName(2, 'Título');
    headerName(3, 'Período');
    headerName(4, 'Brand');
    headerName(5, 'Status');
    cy.get('[data-cy=AlertaMensagemContainerSimPag]').should('be.visible');
    cy.get('.alerta-mensagem__container__breakLine').should('be.visible')
      .and('have.text', 'Nenhum alerta foi encontrado.\nCrie um alerta clicando no botão “Criar novo alerta”');
    defaultMensagens('Mostrando 1 - 0 de 0');
  });
});
