/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
import { inputValue } from '../../../utils/functions';

const cadastroVeiculosIntercept = () => {
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

const infoModalCadastro = (rowPosition, columnPosition, description) => {
  cy.get('@modalCadastroVeiculos').eq(rowPosition).children().children()
    .eq(columnPosition)
    .should('be.visible')
    .and('have.text', description);
};

const filtroInputCadastro = (rowPositionName, columnPositionName, descriptionName,
  rowPositionInput, columnPositionInput, descriptionType) => {
  cy.get('@filtersCadastroVeiculo').eq(rowPositionName).children().children()
    .eq(columnPositionName)
    .scrollIntoView()
    .should('be.visible')
    .and('have.text', descriptionName);
  cy.get('@filtersCadastroVeiculo').eq(rowPositionInput).children().children()
    .eq(columnPositionInput)
    .should('be.visible')
    .type(descriptionType);
};

const filtroSelectCadastro = (rowPosition, columnPosition, description, value) => {
  cy.get('@filtersCadastroVeiculo').eq(rowPosition).children().children()
    .eq(columnPosition)
    .should('have.text', description)
    .click();
  cy.get(value).click();
};

describe('Cadastro de veículos', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteVeiculos', () => {
      cy.login('teste', 'senha');
    });
    cadastroVeiculosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir página de Cadastro de veículos e testá-la', () => {
    cy.intercept('GET', '**/modelos/marcas*', {
      fixture: 'marcas',
    });
    cy.intercept('GET', '**/modelos?marca=FIAT', {
      fixture: 'modelos',
    });
    cy.intercept('GET', '**/list?marca=FIAT', {
      fixture: 'listMarcas',
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
    cy.get('[data-cy="cadastro-veiculo"]').click();
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(0)
      .should('have.text', 'Gestão de Test Drive');
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(2)
      .should('have.text', 'Veiculos');
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(4)
      .should('have.text', 'Cadastro de Veículo');
    cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Cadastro de veículo');
    cy.get('[data-cy=page-title]').should('be.visible').find('svg')
      .children()
      .click();
    cy.get('[data-cy="cadastro-veiculo"]').click();
    cy.get('[data-cy=dados-veiculo-header-title]').should('have.text', 'Dados do veículo');
    cy.get('[data-cy=dados-veiculo-header-subtitle]')
      .should('have.text', 'Informe os dados mestre do veículo, como modelo, versão e outros.');
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
    cy.get('[data-cy="cadastro-veiculo"]').click();
    cy.get('[data-cy=cadastro-veiculos-detalhe-container]').children()
      .as('modalCadastroVeiculos')
      .eq(3)
      .should('be.visible')
      .and('have.text', 'Cadastrar Veículo')
      .should('not.be.enabled');
    cy.get('@modalCadastroVeiculos').eq(1).should('be.visible')
      .and('have.text', 'Insira sua imagem ao lado')
      .find('svg');
    cy.get('[data-cy=dados-veiculo-content]').children().as('filtersCadastroVeiculo')
      .eq(0)
      .children()
      .children()
      .eq(0)
      .should('have.text', 'Brand');
    filtroSelectCadastro(0, 1, 'Selecione a brand', '[data-value="Fiat"]');
    filtroSelectCadastro(1, 0, 'Modelo', '[data-cy="1"]');
    filtroInputCadastro(2, 0, 'Model/Year', 2, 1, '1');
    filtroInputCadastro(3, 0, 'Cód. Versão', 3, 1, '1');
    filtroInputCadastro(4, 0, 'Versão', 4, 1, '1');
    filtroInputCadastro(5, 0, 'Cód. Série', 5, 1, '1');
    filtroInputCadastro(6, 0, 'Série', 6, 1, '1');
    filtroInputCadastro(7, 0, 'Nome Comercial', 7, 1, 'teste');
    cy.get('[data-cy=upload-imagem-veiculos]').children().as('uploadImagemVeiculos')
      .eq(0)
      .children()
      .eq(0)
      .should('be.visible')
      .and('have.text', 'Imagem do veículo');
    cy.get('@uploadImagemVeiculos').eq(0).children().eq(1)
      .should('be.visible')
      .and('have.text', 'Escolha qual imagem será apresentada para os usuários na solicitação do veículo.');
    cy.get('@uploadImagemVeiculos').eq(1).children().eq(0)
      .should('be.visible')
      .and('have.text', 'Arraste ou clique aqui para fazer upload.')
      .find('svg');
    inputValue('[data-cy=inputUrlVeiculos]', 'teste.png');
    cy.get('[data-cy=inputUrlVeiculos]').find('svg').click();
    inputValue('[data-cy=inputUrlVeiculos]', 'teste');
    infoModalCadastro(2, 0, 'Marca:');
    infoModalCadastro(2, 2, 'Modelo:');
    infoModalCadastro(2, 4, 'Model/Year:');
    infoModalCadastro(2, 6, 'Código Versão:');
    infoModalCadastro(2, 8, 'Versão:');
    infoModalCadastro(2, 10, 'Código Série:');
    infoModalCadastro(2, 12, 'Série:');
    infoModalCadastro(2, 14, 'Nome Comercial:');
    cy.get('@modalCadastroVeiculos').eq(3).should('be.visible');
  });
});
