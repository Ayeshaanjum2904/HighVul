/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';


const cabecalhoListHeader = () => {
  cy.get('[data-cy=pedidos-list-header]').should('be.visible').children().as('listHeader')
    .eq(0).should('have.text', 'ID');
  cy.get('@listHeader').eq(1).should('have.text', 'DATA');
  cy.get('@listHeader').eq(2).should('have.text', 'VEÍCULO');
  cy.get('@listHeader').eq(3).should('have.text', 'CONCESSIONÁRIA');
  cy.get('@listHeader').eq(4).should('have.text', 'MODALIDADE');
  cy.get('@listHeader').eq(5).should('have.text', 'PRODUTO');
}

const defaultTestFooter = (description) => {
  cy.get('[data-cy=page-footer]').should('be.visible').children().children().eq(0).children()
      .children().eq(0).children().as('itensPorPagina').eq(0).should('have.text', '25');
    cy.get('@itensPorPagina').eq(1).should('have.text', '50');
    cy.get('@itensPorPagina').eq(2).should('have.text', '75');
    cy.get('[data-cy=page-footer]').children().children().eq(1).children().children().eq(0)
      .should('have.text', description)
    cy.get('[data-cy=page-footer]').children().children().eq(1).children().children().eq(1)
      .should('have.text', '1')
}
const listagemStatusTest = (rowPosition, description) => {
  cy.get('[data-cy=vigencia-span]').eq(rowPosition).scrollIntoView().should('be.visible')
      .and('have.text', description);
}

const listagemRowTest = (rowPosition, rowName, id, data, modelo, veiculo, codConcessionaria, nameConcessionaria, modalidade) => {
  cy.get('[data-cy=pedidos-list-row]').children().eq(rowPosition).should('be.visible').children().as(rowName)
      .eq(0).should('have.text', `#${id}`);
    cy.get(`@${rowName}`).eq(1).should('have.text', data);
    cy.get(`@${rowName}`).eq(2).children().eq(0).find('svg').should('be.visible');
    cy.get(`@${rowName}`).eq(2).children().eq(1).should('have.text', modelo);
    cy.get(`@${rowName}`).eq(2).children().eq(2).should('have.text', veiculo);
    cy.get(`@${rowName}`).eq(3).children().eq(0).should('have.text', codConcessionaria);
    cy.get(`@${rowName}`).eq(3).children().eq(1).should('have.text', nameConcessionaria);
    cy.get(`@${rowName}`).eq(4).should('have.text', modalidade);
}

describe('Ofertas', () => {
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
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir a listagem da página de pedidos Aguardando Análise Comercial', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    listagemStatusTest(0, 'Aguardando Análise Comercial');
    listagemRowTest(0, 'firstRow', '4225', '07/11/2022', '358-A7H-0', 'Argo Trekking 1.3 MY2021 1.3 Manual Flex Manual • 2021', 
      '90703-0', 'All Veiculos Ltda', 'À Vista');
    cy.get('@firstRow').eq(5).should('have.text', 'Test Drive de Exceção').children();
  });
  it('Deve exibir a listagem da página de pedidos Aguardando Contato Com Cliente Para Cancelamento', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    listagemStatusTest(1, 'Aguardando Contato Com Cliente Para Cancelamento');
    listagemRowTest(3, 'fourthRow', '12293', '22/09/2022', '508-31K-0', 'Scudo Cargo 1.5 Td 4p • 2022', 
      '91072-9', 'RG Comercio de Veiculos e Serv', 'Financiado');
    cy.get('@fourthRow').eq(5).should('have.text', 'Test Drive').children();
    cy.get('@fourthRow').eq(6).should('be.visible').children().children();
  });
  it('Deve exibir a listagem da página de pedidos Aguardando Reversão', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    listagemStatusTest(2, 'Aguardando Reversão');
    listagemRowTest(6, 'seventhRow', '13529', '10/11/2022', '671-179-0', 'Commander Overland Td380 4X4 MY23 • 2023', 
      '90615-6', 'Raviera Motors Comercial de Ve', 'À Vista');
    cy.get('@seventhRow').eq(5).should('have.text', 'Backup Car').children();
    cy.get('@seventhRow').eq(6).should('be.visible').children().children();
    
  });
  it('Deve exibir a listagem da página de pedidos Em Separação', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    listagemStatusTest(3, 'Em Separação');
    listagemRowTest(12, 'twelfthRow', '1971', '09/03/2021', '560-3D3-2', 'Ducato Chassi 2.3 Manual Diesel Manual • 2020', 
      '90835-0', 'Rivel Veiculos Ltda', 'Financiado');
    cy.get('@twelfthRow').eq(5).should('have.text', 'Test Drive Adicional').children();
  });
  it('Deve exibir a listagem da página de pedidos Pronto Para Faturamento', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    listagemStatusTest(4, 'Pronto Para Faturamento');
    listagemRowTest(18, 'nineteenthRow', '1855', '05/03/2021', '560-0QK-2', 'Ducato Minibus 2.3 Manual Diesel Manual • 2020', 
    '91799-7', 'Italiana Autom  DO Recife Ltda', 'À Vista');
    cy.get('@nineteenthRow').eq(5).should('have.text', 'Test Drive Adicional').children();
    cy.get('@nineteenthRow').eq(6).should('be.visible').children().children();
  });
  it('Deve exibir a listagem da página de pedidos Faturado', () => {
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cabecalhoListHeader();
    listagemStatusTest(5, 'Faturado');
    listagemRowTest(24, 'twentyFifthRow', '2981', '05/05/2021', '675-1CR-1', 'Renegade Limited 1.8 16V Flex Automático • 2022', 
    '90635-4', 'Viviani Veic  Rio Claro Ltda', 'À Vista');
    cy.get('@twentyFifthRow').eq(5).should('have.text', 'Test Drive').children();
    defaultTestFooter('Mostrando 1 - 25 de 30 itens totais');
  });
});
