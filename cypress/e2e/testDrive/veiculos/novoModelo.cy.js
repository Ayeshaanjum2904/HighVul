/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
import { inputValue, selectValue } from '../../../utils/functions';

const novoModeloIntercept = () => {
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

const clickNovoModelo = () => {
  cy.get('[data-cy=dados-veiculo-content]').children().eq(1)
    .children()
    .children()
    .eq(0)
    .click();
};

describe('Modal de novo modelo', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteVeiculos', () => {
      cy.login('teste', 'senha');
    });
    novoModeloIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir modal de cadastro de modelos e testar filtros', () => {
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
    clickNovoModelo();
    cy.get('[data-cy=novo-modelo]').click();
    cy.get('[data-cy=cadastro-modelo-modal]').children().as('modeloCadastro').eq(2)
      .should('be.visible')
      .and('have.text', 'Cadastrar modelo')
      .should('not.be.enabled');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(1)
      .should('have.text', 'Fechar');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(0)
      .click();
    clickNovoModelo();
    cy.get('[data-cy=novo-modelo]').click();
    cy.get('@modeloCadastro').eq(0).should('be.visible').and('have.text', 'Cadastrar novo modelo');
    selectValue('[data-cy="selectMarca"]', 'Fiat');
    inputValue('[data-cy="inputCodigo"]', '123');
    inputValue('[data-cy="inputDescricao"]', '1234');
    inputValue('[data-cy=inputUrl]', 'teste.png');
    cy.get('[data-cy=inputUrl]').find('svg').click();
    inputValue('[data-cy=inputUrl]', 'teste');
    cy.get('[data-cy="removerImagem"]').should('have.text', 'Remover Imagem').click();
    cy.get('@modeloCadastro').eq(2).should('be.visible');
  });
});
