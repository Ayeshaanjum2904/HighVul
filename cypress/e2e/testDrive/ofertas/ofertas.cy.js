/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';

const cabecalhoListagem = () => {
  cy.get('[data-cy=ofertas-list-header-container]').should('be.visible').children().as('listHeader')
    .eq(0).should('have.text', 'MVS');
  cy.get('@listHeader').eq(1).should('have.text', 'M/Y');
  cy.get('@listHeader').eq(2).should('have.text', 'VEÍCULO');
  cy.get('@listHeader').eq(3).should('have.text', 'PRODUTO');
  cy.get('@listHeader').eq(4).should('have.text', 'DESC.');
  cy.get('@listHeader').eq(5).should('have.text', 'PARCELAS');
  cy.get('@listHeader').eq(6).should('have.text', 'TAXA');
  cy.get('@listHeader').eq(7).should('have.text', 'VENC.');
  cy.get('@listHeader').eq(8).should('have.text', 'COEFIC.');
  cy.get('@listHeader').eq(9).should('have.text', 'STATUS');
}

const defaultListagemTeste = (rowPosition, rowName, modelo, ano, veiculo, desconto, parcela, taxa, dia, coeficiente) => {
  cy.get('[data-cy=ofertas-list-row-container]').should('be.visible').eq(rowPosition).as(rowName).children()
    .eq(0).should('have.text', modelo);
  cy.get(`@${rowName}`).children().eq(1).should('have.text', ano);
  cy.get(`@${rowName}`).children().eq(2).children().find('svg').should('be.visible');
  cy.get(`@${rowName}`).children().eq(2).should('have.text', veiculo);
  cy.get(`@${rowName}`).children().eq(3).should('have.text', 'Test Drive');
  cy.get(`@${rowName}`).children().eq(4).should('have.text', desconto);
  cy.get(`@${rowName}`).children().eq(5).should('have.text', parcela);
  cy.get(`@${rowName}`).children().eq(6).should('have.text', taxa);
  cy.get(`@${rowName}`).children().eq(7).should('have.text', dia);
  cy.get(`@${rowName}`).children().eq(8).should('have.text', coeficiente);
}

const defaultTestFooter = (footerText, footerPage) => {
  cy.get('[data-cy=page-footer]').should('be.visible').children().children().children().eq(0)
      .should('have.text', footerText);
  cy.get('[data-cy=page-footer]').should('be.visible').children().children()
    .children().eq(1).should('have.text', footerPage);
}


describe('Ofertas', () => {
  before(() => {
    cy.server();
  })
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteOferta', () => {
      cy.login('teste', 'senha');
    }); 
    cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
      fixture: 'gestaoTestDriveOfertas'
    }).as('getOfertas');
    cy.intercept('GET','**/produtos*', {
      fixture: 'gestaoTestDriveProdutos'
    });
    cy.intercept('POST', '**/authorize/refresh', {
      statusCode: 200,
    });
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  })

  it('Deve exibir os menus da parte de test drive', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').should('be.visible').children()
      .as('menuLateral').eq(0).should('have.text', 'Ofertas');
    cy.get('@menuLateral').eq(1).should('have.text', 'Pedidos');
    cy.get('@menuLateral').eq(2).should('have.text', 'Veículos');
    cy.get('@menuLateral').eq(3).should('have.text', 'Gestão de taxas');
    cy.get('@menuLateral').eq(4).should('have.text', 'Parâmetros');
  })

  it('Deve exibir a página de ofertas do test drive e testar todos os filtros', () => {
    cy.get('[data-cy=page-title]').should('be.visible').and('have.text', 'Ofertas');
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(0).
      should('have.text', 'Gestão de Test Drive');
    cy.get('[data-cy=page-subtitle]').should('be.visible').children().eq(2).should('have.text', 'Ofertas');
    cy.get('.common_filters_button').should('be.visible').and('be.disabled');
    cy.get('.makeStyles-container-11 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .should('be.visible')
      .type('teste');
    cy.get('.common_filters_button').should('not.be.disabled');
    cy.get('[data-cy=ofertasPageFilters]').children().eq(1).find('input').as('dateInput');
    cy.get('@dateInput').type('15/11/2022');
    cy.get('[data-cy=ofertasPageFilters]').children().eq(1).find('svg').should('be.visible');
    cy.get('.ofertas-select-data__xicon').should('be.visible').click();
    cy.get('@dateInput').type('15/11/2022');
    cy.get('[data-cy=ofertasPageFilters]').children().eq(2).find('em').should('have.text', 'Todos os produtos').click()
      .dataCy('"Test Drive"').click({force: true});
    cy.get('body').type('{esc}');
    cy.get('[data-cy=ofertasPageFilters]').children().eq(3).find('em').should('have.text', 'Todas as brands').click()
      .dataCy('Fiat').click({force: true});
    cy.get('body').type('{esc}');
    cy.get('[data-cy=ofertasPageFilters]').children().eq(4).contains('Todos os status').click()
      .get('[data-value="True"]').click();
    cy.get('.common_filters_button').click();
    cy.get('.common_filters_button').should('be.disabled');
  })

  it('Deve exibir a página de ofertas do test drive e testar a listagem das ofertas', () => {
    cabecalhoListagem();
    cy.wait('@getOfertas').then(() => {
      cy.get('[data-cy=vigencia-span]').should('be.visible').eq(0)
      .should('have.text', 'Vigência: 07 nov 2022 a 31 dez 2022');
      cy.get('[data-cy=vigencia-span]').should('be.visible').eq(1)
        .should('have.text', 'Vigência: 03 nov 2022 a 30 nov 2022');
      cy.get('[data-cy=vigencia-span]').should('be.visible').eq(2)
        .should('have.text', 'Vigência: 29 out 2022 a 30 nov 2022');
      defaultListagemTeste(0, 'firstRow', '358-A1N-0', '2021', 'argo 1.0 MY2021 1.0 manual flex manual', '0 %', 
        '1 parcelas', '0.00 %', '3 dias', '1');
      cy.get('@firstRow').children().eq(8).should('not.be.disabled');
      defaultListagemTeste(4, 'fifthRow', '611-132-0', '2021', 'renegade limited 1.8 16V flex automático', '23 %', 
        '1 parcelas', '0.79 %', '390 dias', '1.12894');
      cy.get('@fifthRow').children().eq(8).should('not.be.enabled');
      defaultTestFooter('1 - 10 de 10', '1');
    });
  })
});

describe('Página ofertas erro', () => {
  it('Deve exibir mensagem de erro ao acessar a página de ofertas do test drive', () => {
    cy.server();
    cy.intercept(
      'GET', 
      '**/td-gestao-ofertas/ofertas*', 
      { forceNetworkError: true }
    ).as('getNetworkFailure');
    setMediumViewport();
    cy.login('teste', 'senha');
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    
    cabecalhoListagem();
    cy.get('.ofertas__ofertas-list__message-container').should('be.visible')
      .and('have.text', 'Ocorreu um erro ao carregar as ofertas.');
    defaultTestFooter('1 - 0 de 0', '1');
  });
})

describe('Página ofertas listagem vazia', () => {
  it('Deve exibir mensagem de listagem vazia ao acessar a página de ofertas do test drive', () => {
    cy.server();
    cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
      status: 200,
      body: []
    });
    cy.intercept('GET','**/produtos*', {
      status: 200,
      body: []
    });
    setMediumViewport();
    cy.session('LoginCliente', () => {
      cy.login('teste', 'senha');
    });
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
    
    cabecalhoListagem();
    cy.get('.ofertas__ofertas-list__message-container').should('be.visible')
      .and('have.text', 'Nenhuma oferta encontrada.');
    defaultTestFooter('1 - 0 de 0', '1');
  });
})
