/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const novoAlertaIntercept = () => {
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
};

const clicarModal = () => {
  cy.get('[data-cy=criar-alertas]').children().click();
};

const headerNovoAlerta = (rowPosition, description, background, position, describe) => {
  cy.get('[data-cy=alertar-modal]').children().eq(0).children()
    .as('headerNovoAlerta')
    .eq(1)
    .children()
    .children()
    .children()
    .eq(rowPosition)
    .should('be.visible')
    .and('have.text', description)
    .should('have.css', 'background-color', background);
  cy.get('@headerNovoAlerta').eq(1).children().children()
    .children()
    .eq(position)
    .should('be.visible')
    .and('have.text', describe)
    .should('have.css', 'color', background);
};
const botaoNovoAlerta = (path, description) => {
  cy.get(path).children().should('be.visible').and('have.text', description)
    .click();
};

const svgsAnexo = (position) => {
  cy.get('.alertas__modal-form__conteudo_anexar').children().children()
    .eq(position)
    .should('be.visible')
    .find('svg');
};
const conteudoModal = (path, description) => {
  cy.get(path).should('be.visible').and('have.text', description);
};

describe('Modal de novo alerta na página de mensagens', () => {
  before(() => {
    cy.server();
  });
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteNovoAlerta', () => {
      cy.login('teste', 'senha');
    });
    novoAlertaIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir a página de Mensagens, testar o submenu e header', () => {
    cy.get('[data-cy=menu-aside]').children().children().eq(4)
      .should('be.visible')
      .click();
    clicarModal();
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(1)
      .should('have.text', 'Fechar')
      .click();
    clicarModal();
    conteudoModal('[data-cy=alertas-title]', 'Novo Alerta');
    headerNovoAlerta(0, '1', 'rgb(0, 175, 173)', 1, 'CONTEÚDO');
    headerNovoAlerta(2, '2', 'rgb(143, 155, 179)', 3, 'CONFIRMAÇÃO');
    cy.get('[data-cy=alertas-footer-button2]').children().should('be.visible').and('have.text', 'Próximo')
      .should('be.disabled');
    conteudoModal('.alertas__modal-form__conteudo_header', '1. Preencha o conteúdo que será exibido no alerta:');
    conteudoModal('.alertas__modal-form__conteudo_titulo', 'Título da mensagem*');
    cy.get('.alertas__modal-form__conteudo_titulo').children().children().eq(1)
      .should('be.visible')
      .type('teste');
    cy.get('.alertas__modal-form__conteudo_mensagem').should('be.visible').contains('Texto da mensagem*');
    cy.get('.ql-bold').click();
    cy.get('.alertas__modal-form__conteudo_mensagem').children().children().eq(1)
      .should('be.visible')
      .type('testando input etc');
    conteudoModal('.alertas__modal-form__conteudo_anexar', 'Anexar imagem (opcional)');
    svgsAnexo(1);
    svgsAnexo(3);
    conteudoModal('.alertas__modal-form__periodo_header', '2. Defina o período em que esse alerta ficará no ar:');
    cy.get('.alertas__modal-form__periodo_date-picker').children().children().eq(0)
      .should('be.visible')
      .and('have.text', 'Selecione um período');
    cy.get('.alertas__modal-form__periodo_date-picker').children().children()
      .children()
      .should('be.visible')
      .find('svg')
      .click();
    cy.get('#start_date_input').type('20/03/2025');
    cy.get('#end_date_input').type('30/03/2025');
    conteudoModal('.alertas__modal-form__alvo_header', '3. Quem deve receber esse alerta?');
    conteudoModal('.alertas__modal-form__alvo_brand', 'Brand');
    cy.get('.alertas__modal-form__alvo_brand').children().children().children()
      .children()
      .eq(0)
      .should('be.visible')
      .type('Jeep{downarrow}{enter}', { force: true });
    botaoNovoAlerta('[data-cy=alertas-footer-button2]', 'Próximo');
    botaoNovoAlerta('[data-cy=alertas-footer-button1]', 'Voltar');
    botaoNovoAlerta('[data-cy=alertas-footer-button2]', 'Próximo');
    headerNovoAlerta(2, '2', 'rgb(0, 175, 173)', 3, 'CONFIRMAÇÃO');
    conteudoModal('.alertas__modal-preview__container_header', 'Confirme os dados do seu alerta e faça a publicação:');
    cy.get('.alertas__modal-preview__container').children().eq(1).should('be.visible')
      .contains('Periodo: 20 Mar 2025 - 30 Mar 2025');
    cy.get('.alertas__modal-preview__container').children().eq(2).should('be.visible')
      .contains('Brand: Jeep');
    botaoNovoAlerta('[data-cy=alertas-footer-button2]', 'Publicar');
  });
});
