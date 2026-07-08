/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_COMUNICADOS } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';
import { inputNewValue } from '../../../utils/functions';

const modalEditarIntercept = () => {
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('GET', '**mensagem-rede/list*', {
    fixture: 'alertas',
  });
  cy.intercept('GET', '**mensagem-rede/1*', {
    fixture: 'editarAlertas',
  });
};

const listagemSvg = () => {
  cy.get('[data-id="1"] > [data-colindex="6"]').children().children().eq(0)
    .should('be.visible')
    .find('svg')
    .click();
};

const botaoEditarAlerta = (path, description) => {
  cy.get(path).children().should('be.visible').and('have.text', description)
    .click();
};

describe('Modal de editar', () => {
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteGestaoComunicados', () => {
      cy.login('teste', 'senha');
    });
    modalEditarIntercept();
    cy.visit(`${siteBaseUrl}${PATH_COMUNICADOS}`);
  });

  it('Deve exibir a página de Mensagens e testar o modal de editar', () => {
    listagemSvg();
    cy.get('[data-cy=common__close-modal__button]').should('be.visible').children().eq(1)
      .should('have.text', 'Fechar')
      .click();
    listagemSvg();
    cy.get('[data-cy=alertas-title]').should('be.visible').and('have.text', 'Novo Alerta');
    inputNewValue('.alertas__modal-form__conteudo_titulo', 'testeteste');
    cy.get('.alertas__modal-form__conteudo_mensagem').should('be.visible')
      .contains('Texto da mensagem*');
    cy.get('.alertas__modal-form__conteudo_mensagem').children().children().eq(1)
      .should('be.visible')
      .clear();
    cy.get('.alertas__modal-form__conteudo_mensagem').children().children().eq(1)
      .type('teste1');
    cy.get('.alertas__modal-form__conteudo_anexar').should('be.visible')
      .and('have.text', 'Anexar imagem (opcional)');
    cy.get('.alertas__modal-form__conteudo_anexar').children().children()
      .eq(1)
      .should('be.visible')
      .find('svg');
    cy.get('.alertas__modal-form__periodo_date-picker').children().children().eq(0)
      .should('be.visible')
      .and('have.text', 'Selecione um período');
    cy.get('.DateRangePickerInput_calendarIcon').find('svg').click();
    cy.get(':nth-child(3) > .CalendarMonth').contains('6').click();
    cy.get('.DayPickerNavigation_rightButton__horizontalDefault').click();
    cy.get(':nth-child(3) > .CalendarMonth').contains('6').click();
    cy.get('.alertas__modal-form__alvo_header').should('be.visible').and('have.text', '3. Quem deve receber esse alerta?');
    cy.get('.alertas__modal-form__chip').should('have.text', 'Brands selecionadas:Jeep, Fiat');
    cy.get('.alertas__modal-form__chip_clear').click();
    cy.get('.alertas__modal-form__alvo_brand').should('be.visible').and('have.text', 'Brand');
    cy.get('.alertas__modal-form__alvo_brand').children().children().children()
      .children()
      .eq(0)
      .should('be.visible')
      .type('Fiat{downarrow}{enter}', { force: true });
    botaoEditarAlerta('[data-cy=alertas-footer-button2]', 'Próximo');
    botaoEditarAlerta('[data-cy=alertas-footer-button1]', 'Voltar');
    botaoEditarAlerta('[data-cy=alertas-footer-button2]', 'Próximo');
    cy.get('.alertas__modal-preview__container_header').should('be.visible').and('have.text', 'Confirme os dados do seu alerta e faça a publicação:');
    cy.get('.alertas__modal-preview__container').children().eq(1).should('be.visible')
      .contains('Periodo: 06 Mai 2025 - 06 Mai 2025');
    cy.get('.alertas__modal-preview__container').children().eq(2).should('be.visible')
      .contains('Brand: Fiat');
    botaoEditarAlerta('[data-cy=alertas-footer-button2]', 'Publicar');
  });
});
