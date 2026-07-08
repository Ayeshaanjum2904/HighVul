/* eslint-disable*/
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';


const dadosSolicitacaoInfo = (groupPosition, rowPosition, description) => {
  cy.get('@dadosSolicitacao').eq(1).children().eq(groupPosition).children().children().eq(rowPosition)
    .should('have.text', description);
}

const infoConcessionaria = (groupPosition, rowPosition, description) => {
  cy.get('@infoConcessionaria').eq(2).children().children().eq(groupPosition).children().eq(rowPosition)
      .should('have.text', description);
}

const infoCondicaoComercial = (groupPosition, rowPosition, description) => {
  cy.get('@condicaoComercial').eq(2).children().eq(groupPosition).children().children().eq(rowPosition)
    .should('have.text', description);
}

const infoDadosVeiculoTest = (rowPosition, columnPosition, positionRowGroup, description) => {
  cy.get('@dadosVeiculo').eq(rowPosition).children().eq(columnPosition).children().children().eq(positionRowGroup)
    .should('have.text', description);
}

const pedidoIndustrialInfo = (Columnposition, Rowposition, description) => {
  cy.get('@pedidoIndustrial').eq(1).children().eq(Columnposition).children().children().eq(Rowposition)
    .should('have.text', description);
}

const cardResumoConcessionariaInfo = (positionRow, positionColumn, description) => {
  cy.get('@cardResumo').eq(1).children().eq(positionRow).children().eq(positionColumn).should('have.text', description);
}

const defaultTestModalHeader = (pedidoId) => {
  cy.get('[data-cy=pedidos-modal-header]').should('be.visible').children().as('modalHeader').eq(0)
    .should('have.text', 'Pedidos');
  cy.get('@modalHeader').eq(1).should('have.text', `Pedido #${pedidoId}`);
}

describe('Pedidos', () => {
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

  it('Deve exibir o modal do pedido e testar os campos', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheAnaliseComercial'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
    defaultTestModalHeader('4225');
  
    cy.get('[data-cy=pedidos__pedido-industrial__container]').children().as('pedidoIndustrial').eq(0)
      .should('have.text', 'Pedido Industrial');
    pedidoIndustrialInfo(0, 0, 'Nº Pedido');
    pedidoIndustrialInfo(0, 1, '123');
    pedidoIndustrialInfo(1, 0, 'Chassi');
    pedidoIndustrialInfo(1, 1, '3132');
    cy.get('[data-cy=pedidos__modal-footer__container]').children().children().as('buttonModal').eq(1)
      .children().should('have.text', 
      'Reprovar análise comercial');
    cy.get('@buttonModal').eq(2).children()
      .should('have.text', 'Aprovar análise comercial');
    cy.get('[data-cy=pedidos__card-resumo__header]').should('be.visible').children().as('cardResumoHeader').eq(0)
      .should('have.text', 'Pedido de Test Drive de Exceção');
    cy.get('@cardResumoHeader').eq(1).should('have.text', 'Realizado em 07 de nov 2022 às 16:09');
    cy.get('[data-cy=pedidos__card-resumo__img]').children().should('be.visible');
    cy.get('[data-cy=pedidos__card-resumo__card]').should('be.visible').children().as('cardResumo').eq(0).children()
      .eq(0).should('have.text', 'argo trekking 1.3 MY2021 1.3 manual flex manual');
    cy.get('@cardResumo').eq(0).children().eq(1).should('have.text', 'Model Year 2021');
    cardResumoConcessionariaInfo(0, 0, 'Concessionária');
    cardResumoConcessionariaInfo(0, 1, '90703-0 • All Veiculos Ltda');
    cardResumoConcessionariaInfo(1, 0, 'CNPJ');
    cardResumoConcessionariaInfo(1, 1, '23.029.795/0001.66');
    cy.get('.list__rendered-content').should('be.visible').children()
      .should('have.text', 'Nenhum comentário encontrado.');
    cy.get('[data-cy=pedidos__modal__mensagem_enviar]').should('be.visible');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(1).should('have.text', 'Fechar');
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(0).click();
  })
  it('Deve exibir o modal do pedido e testar solicitações', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheAnaliseComercial'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
    cy.get('[data-cy=pedidos-solicitacao-container]').should('be.visible').children().as('dadosSolicitacao')
      .eq(0).should('have.text', 'Dados Solicitação');
    dadosSolicitacaoInfo(0, 0, 'Data');
    dadosSolicitacaoInfo(0, 1, '07/11/2022');
    dadosSolicitacaoInfo(1, 0, 'Hora');
    dadosSolicitacaoInfo(1, 1, '16:09');
    dadosSolicitacaoInfo(2, 0, 'Usuário');
    dadosSolicitacaoInfo(2, 1, 'Fulano de Tal');
    cy.get('@dadosSolicitacao').eq(2).children().eq(0).children().eq(0)
    .should('have.text', 'Email Usuário');
    cy.get('@dadosSolicitacao').eq(2).children().eq(0).children().eq(1)
      .should('have.text', 'teste@external.stellantis.com');
    cy.get('@dadosSolicitacao').eq(3).children().should('have.text', 'Observação');
  })

  it('Deve exibir o modal do pedido e testar pedidos em exceção', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheAnaliseComercial'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
    cy.get('[data-cy=pedidos-excecao-container]').scrollIntoView().should('be.visible').children().as('pedidoExcecao')
      .eq(0).should('have.text', 'Documentações do pedido em exceção');
    cy.get('@pedidoExcecao').eq(1).children().children().eq(0).should('have.text', 'Motivo')
      ;
    cy.get('@pedidoExcecao').eq(1).children().children().eq(1)
      .should('have.text', 'Abertura de novo ponto de venda');
    cy.get('@pedidoExcecao').eq(2).children().children().eq(0).should('have.text', 'Documentos Anexados')
      ;
    cy.get('@pedidoExcecao').eq(2).children().children().eq(1).children().eq(0)
      .should('have.text', 'f9xia1-FULL.pdf');
    cy.get('@pedidoExcecao').eq(2).children().children().eq(1).children().eq(1).children()
      .should('be.visible').and('not.be.disabled');
  })

  it('Deve exibir o modal do pedido e testar informação de concessionária', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheAnaliseComercial'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
    cy.get('[data-cy=pedidos-concessionaria-container]').scrollIntoView().should('be.visible').children()
    .as('infoConcessionaria').eq(0).should('have.text', 'Concessionária');
    cy.get('@infoConcessionaria').eq(1).children().children().eq(0).should('have.text', 'Concessionária')
      ;
    cy.get('@infoConcessionaria').eq(1).children().children().eq(1).should('have.text', 'ALL VEICULOS LTDA')
      ;
    infoConcessionaria(0, 0, 'Cód. BUC');
    infoConcessionaria(0, 1, '90703-0');
    infoConcessionaria(1, 0, 'CNPJ');
    infoConcessionaria(1, 1, '23.029.795/0001.66');
    infoConcessionaria(2, 0, 'Cód. Regional');
    infoConcessionaria(2, 1, '4');
    infoConcessionaria(3, 0, 'Regional');
    infoConcessionaria(3, 1, 'RIO DE JANEIRO');
  })

  it('Deve exibir o modal do pedido e testar informação de condição comercial', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheAnaliseComercial'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
    cy.get('[data-cy=pedidos-condicao-comercial-container]').scrollIntoView().children().as('condicaoComercial').eq(0)
      .should('have.text', 'Condição Comercial');
    cy.get('@condicaoComercial').eq(1).children().eq(0).should('have.text', 'Modalidade')
      ;
    cy.get('@condicaoComercial').eq(1).children().eq(1).should('have.text', 'Condição À Vista')
      ;
    infoCondicaoComercial(0, 0, 'Desconto');
    infoCondicaoComercial(0, 1, '10 %');
    infoCondicaoComercial(1, 0, 'Parcelas');
    infoCondicaoComercial(1, 1, '1');
    infoCondicaoComercial(2, 0, 'Prazo');
    infoCondicaoComercial(2, 1, '3');
    infoCondicaoComercial(3, 0, 'Taxa (a.m.)');
    infoCondicaoComercial(3, 1, '2 %');
    infoCondicaoComercial(4, 0, 'Coeficiente');
    infoCondicaoComercial(4, 1, '1');
  })

  it('Deve exibir o modal do pedido e testar informação de veiculos', () => {
    cy.intercept('**/pedidos/**', {
      fixture: 'pedidoDetalheAnaliseComercial'
    });
    cy.get('[data-cy=menu-dashboard-container-content]').children().eq(1).click();
    cy.get('[data-cy=pedidos-list-row]').children().eq(0).should('be.visible').click();
    cy.get('[data-cy=pedidos-dados-veiculo-container]').scrollIntoView().children().as('dadosVeiculo').eq(0)
      .should('have.text', 'Veículo');
    infoDadosVeiculoTest(1, 0, 0, 'Marca');
    infoDadosVeiculoTest(1, 0, 1, 'Fiat');
    infoDadosVeiculoTest(1, 1, 0, 'Descrição');
    infoDadosVeiculoTest(1, 1, 1, 'ARGO TREKKING 1.3 MY2021 1.3 MANUAL FLEX MANUAL');
    infoDadosVeiculoTest(2, 0, 0, 'Cód. Modelo');
    infoDadosVeiculoTest(2, 0, 1, '358');
    infoDadosVeiculoTest(2, 1, 0, 'Cód. Versão');
    infoDadosVeiculoTest(2, 1, 1, 'A7H');
    infoDadosVeiculoTest(2, 2, 0, 'Cód. Série');
    infoDadosVeiculoTest(2, 2, 1, '0');
    infoDadosVeiculoTest(2, 3, 0, 'Model/Year');
    infoDadosVeiculoTest(2, 3, 1, '2021');
    infoDadosVeiculoTest(2, 4, 0, 'Cor');
    infoDadosVeiculoTest(2, 4, 1, 'preto');
  })
});