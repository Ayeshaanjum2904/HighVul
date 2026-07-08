/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
import { inputNewValue, inputValue } from '../../../utils/functions';

const veiculosFiltrosIntercept = () => {
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

const clickmenuLateral = () => {
  cy.get('[data-cy=menu-dashboard-container-content]').children().eq(2).click();
};

describe('Filtros página de Veículos', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteVeiculos', () => {
      cy.login('teste', 'senha');
    });
    veiculosFiltrosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir a página de Veículos e testar os filtros', () => {
    cy.intercept('GET', '**/modelos/marcas*', {
      fixture: 'marcas',
    });
    cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible').children()
      .eq(2)
      .should('have.text', 'Veículos');
    clickmenuLateral();
    cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Veículos');
    cy.get('[data-cy=page-subtitle]').children().eq(0).should('be.visible')
      .and('have.text', 'Gestão de Test Drive')
      .click();
    clickmenuLateral();
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(2)
      .should('have.text', 'Veiculos');
    cy.get('[data-cy=filter-button]').should('be.visible').and('have.text', 'Filtrar')
      .should('not.be.enabled');
    cy.get('[data-cy=input-texto]').find('svg');
    inputValue('[data-cy=input-texto]', 'Teste');
    inputNewValue('[data-cy=input-texto]', 'teste');
    cy.get('[data-cy="seletor-marca"]').click();
    cy.get('[data-cy="seletor-marca-select-all"]').click();
    cy.get('body').type('{esc}');
    cy.get('[data-cy=filter-button]').should('be.visible').and('have.text', 'Filtrar').click();
    cy.get('[data-cy=cadastro-veiculo]').should('be.visible').and('have.text', 'Novo Veículo').click();
  });
});
