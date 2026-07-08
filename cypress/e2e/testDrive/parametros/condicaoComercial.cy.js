/* eslint-disable*/
import { mockLogin } from '../../../utils/cyConstants';
import { inputValue, selectValue, clearInput, inputNewValue } from '../../../utils/functions';
import { siteBaseUrl, setMediumViewport } from '../../../utils/mocks';
import { PATH_GESTAO_TEST_DRIVE } from '../../../../src/routes/paths';

const setup = () => {
  setMediumViewport();
  cy.session('LoginClienteCondicaoComecial', () => {
    cy.login('teste', 'senha');
  });
  cy.intercept('POST', '**/authorize/refresh', {
    statusCode: 200,
    body: mockLogin,
  });
  cy.intercept('GET','**/td-gestao-ofertas/ofertas*', {
    fixture: 'gestaoTestDriveOfertas'
  });
  cy.intercept('GET','**/produtos*', {
    fixture: 'gestaoTestDriveProdutos'
  }); 
}

beforeEach(() => {
  setup();
  cy.intercept('GET', '**/td-gestao-ofertas/condicoes-comerciais*', {
    fixture: 'gestaoTestDriveCondicoesComerciais'
  });
  cy.intercept('GET', '**/td-gestao-ofertas/condicoes-comerciais/*', {
    fixture: 'gestaoTestDriveCondicaoComercial'
  });
  cy.intercept('DELETE','**/td-gestao-ofertas/condicoes-comerciais/*', {
    statusCode: 200,
    body: []
  });
  cy.intercept('POST', '**/td-gestao-ofertas/condicoes-comerciais', {
    statusCode: 200,
    body: true
  });
  cy.intercept('PUT','**/td-gestao-ofertas/condicoes-comerciais/*', {
    statusCode: 200,
    body: true
  });
  cy.intercept('GET', '**/veiculos/filter?marca=Fiat', {
    fixture: 'veiculosFiat'
  });
  cy.intercept('GET', '**/veiculos/filter?marca=Jeep', {
    fixture: 'veiculosJeep'
  });
  cy.intercept('GET', '**/veiculos/filter', {
    body: [],
  });

  cy.visit(`${siteBaseUrl}${PATH_GESTAO_TEST_DRIVE}`);
});

const goToCondicoesComerciais = () => {
  cy.get('[data-cy="DropDownSubmenu"]').click();
  cy.get(':nth-child(3) > [data-cy="MenuParametros"]').click();
}

const goToCadastroCondicoesComerciais = () => {
  goToCondicoesComerciais();
  cy.get('[data-cy="cadastrarCondicaoComercial"]').click();
}

const goToEdicaoCondicoesComerciais = () => {
  goToCondicoesComerciais();
  cy.get('[data-id="64"] > [data-field="vigenciaInicio"]').click();
}

const closeModalAndFillSingleRow = () => {
  cy.get('.condicoes-details__modal__body__selector').find('div.MuiAutocomplete-endAdornment  > button').click();
  cy.get('.condicoes-details__modal__footer > button').click();
  inputValue('.mvs-list-row__input-desconto', 1);
  inputValue('.mvs-list-row__input-parcelas', 1);
  inputValue('.mvs-list-row__input-taxa', 1);
  inputValue('.mvs-list-row__input-prazo', 1);
  inputValue('.mvs-list-row__input-coeficiente', 1);
}

describe('Navegação para parâmetros de condições comerciais', () => {
  it('Deve navegar o menu lateral e selecionar o parâmetro de condição comercial', () => {
    cy.get('[data-cy="DropDownSubmenu"]').contains('Parâmetros');
    cy.get('[data-cy="DropDownSubmenu"]').click();
    cy.get(':nth-child(3) > [data-cy="MenuParametros"]').should('have.text', 'Condições comerciais');
    cy.get(':nth-child(3) > [data-cy="MenuParametros"]').click();
  });

  it('Deve renderizar o cabeçalho com breadcrumb', () => {
    goToCondicoesComerciais();
    cy.get('[data-cy="page-header"]').should('be.visible').children().as('tituloBreadcrumb');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(0).should('have.text', 'Gestão de Test Drive');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(2).should('have.text', 'Parâmetros');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(4).should('have.text', 'Condições Comerciais');
    cy.get('@tituloBreadcrumb').eq(1).should('have.text', 'Condições Comerciais');
  });
});

describe('Filtros e ações da página de condições comerciais', () => {
  it('Deve testar as funcionalidades dos filtros', () => {
    const numeroCartaDoMes = '1';
    const marca = 'Fiat';
    const produto = { text: 'Service Car', value: 2 };

    goToCondicoesComerciais();
    cy.fixture('gestaoTestDriveCondicoesComerciais').then((resposta) => {
      resposta.condicoes = resposta.condicoes.filter((condicao) => 
        condicao.numeroCartaDoMes === numeroCartaDoMes && 
        condicao.marca === marca &&  condicao.produto === produto.text);
      resposta.itensTotais = resposta.condicoes.length;
      cy.intercept('GET','**/td-gestao-ofertas/condicoes-comerciais*', resposta);
    });
    cy.get('[data-cy="filterButton"]').as('filterButton').should('be.disabled').and('have.text', 'Filtrar');
    inputValue('[data-cy="inputBusca"]', numeroCartaDoMes);
    selectValue('[data-cy="SelectProduto"]', produto.value);
    selectValue('[data-cy="SelectMarca"]', marca);
    inputValue('[data-cy="select_date-inicio"]', '01/01/2023');
    inputValue('[data-cy="select_date-fim"]', '31/12/2024');
    cy.get('@filterButton').should('be.enabled').and('have.text', 'Filtrar');
    cy.get('@filterButton').click();
  });

  it('Deve testar a exclusão de uma carta da lista', () => {
    goToCondicoesComerciais();
    cy.fixture('gestaoTestDriveCondicoesComerciais').then((resposta) => {
      resposta.itensTotais--;
      resposta.condicoes.shift();
      cy.intercept('GET','**/td-gestao-ofertas/condicoes-comerciais*', resposta);
    });
    cy.get('[data-id="65"] > [data-field="excluir"] > .MuiButtonBase-root').click();
    cy.get('.modal-footer > :nth-child(2)').click();
    cy.get('.snackbar-succes__item-container').should('have.text', 'Condição excluída com sucesso').click();
  });
});

describe('Cadastro de condições comerciais', () => {
  it('Deve renderizar o cabeçalho com breadcrumb', () => {
    goToCadastroCondicoesComerciais();
    cy.get('[data-cy="page-header"]').should('be.visible').children().as('tituloBreadcrumb');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(0).should('have.text', 'Gestão de Test Drive');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(2).should('have.text', 'Parâmetros');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(4).should('have.text', 'Condicões Comerciais');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(6).should('have.text', 'Cadastrar Condição Comercial');
    cy.get('@tituloBreadcrumb').eq(1).should('have.text', 'Cadastrar condição comercial');    
  });

  it('Deve selecionar marcas e testar lista de veículos', () => {
    goToCadastroCondicoesComerciais();
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click();
    cy.get('[data-value="Fiat"]').click();
    cy.get('.condicao-list__container__button > button').click();
    inputValue('.condicoes-details__modal__body__selector', 'Ducato').type('{downarrow}{downarrow}{downarrow}{enter}', { force: true });
    cy.get('.MuiAutocomplete-option').eq(3).click();
    inputValue('.condicoes-details__modal__body__selector', 'Cronos');
    cy.get('.MuiAutocomplete-option').eq(1).click();
    inputValue('.condicoes-details__modal__body__selector', 'Nova');
    cy.get('.MuiAutocomplete-option').eq(2).click();
    cy.get('.condicoes-details__modal__body__selector').find('div.MuiAutocomplete-endAdornment  > button').click();
    cy.get('button.common__close-modal__button').click();
    cy.get('.list__inner-div').children().as('listVeiculos');
    cy.get('@listVeiculos').eq(1).find('div.mvs-list-row__remove > button').click();
    cy.get('@listVeiculos').eq(0).find('div.mvs-list-row__select').find('input').type('Argo');
    cy.get('.MuiAutocomplete-option').eq(0).click();
    selectValue('.condicoes-detail__form__content__inputs__marca', 'Jeep');
  });

  it('Deve preencher e enviar o formulário de cadastro com erro', () => {
    goToCadastroCondicoesComerciais();
    cy.intercept('POST', '**/td-gestao-ofertas/condicoes-comerciais', {
      statusCode: 400,
      body: {}
    });
    cy.get('.condicoes-details__footer > button').as('submitButton');
    cy.get('@submitButton').should('be.disabled').should('have.text', 'Cadastrar condição comercial');
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click()
    .get(`[data-value="Fiat"]`)
    .click();
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').click()
    .get(`[data-value=2]`)
    .click();   
    inputValue('[data-cy="SelectInicioVigencia"]', '01/01/2023'); 
    inputValue('[data-cy="SelectFimVigencia"] ', '29/03/2024'); 
    inputValue('[data-cy="CartaMes"]', '1'); 
    cy.get('.condicao-list__container__button > button').click();
    inputValue('.condicoes-details__modal__body__selector', 'Ducato');
    cy.get('#mui-option-3').click();
    closeModalAndFillSingleRow();
    clearInput('.mvs-list-row__input-desconto');
    cy.get('@submitButton').should('be.enabled').click();
    cy.get('.snackbar-error__item-container').should('have.text', 'Erro ao criar condição').click();
  });

  it('Deve preencher e enviar o formulário de cadastro com sucesso', () => {
    const condicao = {
      "id": 67,
      "produto": "Service Car",
      "produtoId": null,
      "marca": "Jeep",
      "numeroCartaDoMes": "1",
      "vigenciaInicio": "2023-01-01T00:00:00",
      "vigenciaFim": "2024-03-29T00:00:00",
      "condicaoVeiculos": null
    };
    goToCadastroCondicoesComerciais();
    cy.fixture('gestaoTestDriveCondicoesComerciais').then((resposta) => {
      resposta.itensTotais++;
      resposta.condicoes.push(condicao);
      cy.intercept('GET','**/td-gestao-ofertas/condicoes-comerciais*', resposta);
    });
    cy.get('.condicoes-details__footer > button').as('submitButton');
    cy.get('@submitButton').should('be.disabled').should('have.text', 'Cadastro de condição comercial');
    selectValue('.condicoes-detail__form__content__inputs__marca', condicao.marca);
    selectValue('.condicoes-detail__form__content__inputs__produto', 2);    
    inputValue('.condicoes-detail__form__content__inputs__inicio-vigencia', '01/01/2023'); 
    inputValue('.condicoes-detail__form__content__inputs__fim-vigencia', '29/03/2024'); 
    inputValue('.condicoes-detail__form__content__inputs__carta-mes', condicao.numeroCartaDoMes); 
    cy.get('.condicao-list__container__button > button').click();
    inputValue('.condicoes-details__modal__body__selector', 'Wrangler');
    cy.get('.MuiAutocomplete-option').eq(1).click();
    closeModalAndFillSingleRow();
    cy.get('@submitButton').should('be.enabled').click();
    cy.get('.snackbar-succes__item-container').should('have.text', 'Condição criada com sucesso').click();
  });
});

describe('Edição de condições comerciais', () => { 
  it('Deve renderizar o cabeçalho com breadcrumb', () => {
    goToEdicaoCondicoesComerciais();
    cy.get('[data-cy="page-header"]').should('be.visible').children().as('tituloBreadcrumb');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(0).should('have.text', 'Gestão de Test Drive');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(2).should('have.text', 'Parâmetros');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(4).should('have.text', 'Condicões Comerciais');
    cy.get('@tituloBreadcrumb').eq(0).children().eq(6).should('have.text', 'Editar Condição Comercial');
    cy.get('@tituloBreadcrumb').eq(1).should('have.text', 'Editar condição comercial');    
  });

  it('Deve editar e enviar o formulário de edição com erro', () => {
    goToEdicaoCondicoesComerciais();
    cy.intercept('PUT','**/td-gestao-ofertas/condicoes-comerciais/*', {
      statusCode: 400,
      body: []
    });
    cy.get('.condicoes-details__footer > button').as('updateButton');
    cy.get('@updateButton').should('be.enabled').should('have.text', 'Atualizar condição comercial');
    cy.get('.condicoes-detail__form__content__inputs__inicio-vigencia').find('input').clear(); 
    cy.get('@updateButton').should('be.disabled');
    inputValue('.condicoes-detail__form__content__inputs__inicio-vigencia', '01/01/2023'); 
    cy.get('.list__inner-div').children().as('listVeiculos');
    cy.get('@listVeiculos').eq(0).get('.mvs-list-row__input-desconto').first().find('input').clear();
    cy.get('@updateButton').should('be.enabled').click();
    cy.get('.snackbar-error__item-container').should('have.text', 'Erro ao atualizar condição').click();
  });

  it('Deve editar e enviar o formulário de edição com sucesso', () => {
    goToEdicaoCondicoesComerciais();
    cy.get('.condicoes-details__footer > button').as('updateButton');
    cy.get('@updateButton').should('be.enabled').should('have.text', 'Atualizar condição comercial');
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').click()
    .get(`[data-value="Jeep"]`)
    .click();
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').click()
    .get(`[data-value=3]`)
    .click();
    inputNewValue('[data-cy="SelectInicioVigencia"]', '01/02/2024');
    inputNewValue('[data-cy="SelectFimVigencia"]', '01/09/2024');
    inputNewValue('[data-cy="CartaMes"]', 6); 
    cy.get('.condicao-list__container__button > button').click();
    inputValue('.condicoes-details__modal__body__selector', 'Renegade');
    cy.get('.MuiAutocomplete').eq(3).click();
    closeModalAndFillSingleRow();
    cy.get('@updateButton').should('be.enabled').click();
    cy.get('.snackbar-succes__item-container').should('have.text', 'Condição atualizada com sucesso').click();
  });  
});
