/* eslint-disable no-undef */
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';
import { mockLogin } from '../../../utils/cyConstants';

const cadastroComunicadosIntercept = () => {
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
  cy.intercept('GET', '**central-comunicados/brand*', {
    fixture: 'comunicadosBrand',
  });
  cy.intercept('POST', '**central-comunicados/insert*', {
    fixture: 'criarComunicado',
  });
  cy.intercept('DELETE', '**/central-comunicados/delete?idArquivo=*', {
    fixture: 'deleteCentralComunicados',
  });
  cy.intercept('GET', '**/central-comunicados/urlFile?fileType=*&idArquivo=*', {
    fixture: 'urlFile',
  });
  cy.intercept('PUT', '**', {
    fixture: 'urlFile',
  });
};

const clickBotaoCadastro = () => {
  cy.get('[data-cy=botao-cadastro]').children().should('be.visible').and('have.text', 'Cadastrar novo comunicado')
    .click();
};

const botaoProximoCadastro = () => {
  cy.get('[data-cy=comunicados-footer]').children().should('be.visible').click();
};

const botaoCadastroComunicados = (position, description) => {
  cy.get('[data-cy=comunicados-footer]').children().eq(position).should('be.visible')
    .and('have.text', description)
    .click();
};
const confirmacaoComunicados = (position, description) => {
  cy.get('.comunicados__modal-preview__container').children().eq(position).children()
    .should('be.visible')
    .contains(description);
};
describe('Modal de cadastro de comunicados', () => {
  before(() => {
    cy.server();
  });
  beforeEach(() => {
    setMediumViewport();
    cy.session('LoginClienteCentralComunicados', () => {
      cy.login('teste', 'senha');
    });
    cadastroComunicadosIntercept();
    cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
  });

  it('Deve exibir modal de cadastro de comunicados e testá-lo', () => {
    cy.get('[data-cy=menu-aside]').children().children().eq(4)
      .should('be.visible')
      .click();
    cy.get('[data-cy=menu-comunicados]').children().eq(1).children()
      .eq(1)
      .should('be.visible')
      .click();
    clickBotaoCadastro();
    cy.get('[data-cy="common__close-modal__button"]').should('be.visible').children()
      .click();
    clickBotaoCadastro();
    cy.get('.comunicados__modal__content__header_title').should('be.visible').and('have.text', 'Novo Comunicado');
    cy.get('[data-cy=comunicados-footer]').children().should('be.visible').and('have.text', 'Próximo')
      .should('not.be.enabled');
    cy.get('[data-cy=comunicado-subtitle]').should('be.visible').and('have.text', '1. Preencha as informações sobre o comunicado:');
    cy.get('[data-cy=titulo-documento]').type('teste');
    cy.get('[data-cy=comunicado-selectors]').children().eq(1).children()
      .children()
      .as('dataVigencia')
      .contains('Data de divulgação*:');
    cy.get('@dataVigencia').children().eq(1).find('input')
      .type('04/04/2024');
    cy.get('[data-cy=comunicado-input-file]').children().contains('Anexar arquivo*:');
    cy.get('[data-cy=comunicado-input-file]').children().children().should('be.visible');
    cy.get('.comunicados__modal__input-file-container__input').get('input[type="file"]')
      .selectFile('cypress/fixtures/example.xlsx', { force: true });
    cy.get('[data-cy=comunicado-dealer-infos]').children().eq(0).should('be.visible')
      .and('have.text', '2. Selecione quem receberá esse comunicado:');
    cy.get('[data-cy=comunicado-dealer-infos]').children().eq(1).children()
      .should('be.visible')
      .click();
    cy.get('[data-value="1"]').click();
    botaoProximoCadastro();
    botaoCadastroComunicados(0, 'Voltar');
    botaoProximoCadastro();
    cy.get('.comunicados__modal-preview__container').contains('3. Confirme os dados do seu comunicado e faça a publicação:');
    confirmacaoComunicados(0, 'Titulo:');
    confirmacaoComunicados(1, 'Data de emissão:');
    confirmacaoComunicados(2, 'Brand:');
    botaoCadastroComunicados(1, 'Publicar');
  });
});
