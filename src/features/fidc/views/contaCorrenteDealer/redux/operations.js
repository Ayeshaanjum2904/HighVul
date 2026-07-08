import logger from 'utils/logger';
import { getUnmaskedInput } from 'utils/masks';
import { SnackbarActions } from 'modules/snackbar';
import { saveAs } from 'file-saver';
import actions from './actions';
import service from './service';

const setModalCadastroFormField = (field, value) => (dispatch) => {
  dispatch(actions.setModalCadastroFormField(field, value));
};

const getContasCorrentes = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getContasCorrentesStart());
    const { pageParams, filters } = getState().contaCorrenteDealer;
    const unmaskedCnpj = getUnmaskedInput(filters.cnpj);
    const response = await service.getContasCorrentes(pageParams, unmaskedCnpj);
    const page = {
      ipp: response.itensPerPage,
      page: response.page,
      totalItems: response.total,
    };
    dispatch(actions.getContasCorrentesSuccess(page, response.contasCorrentes));
  } catch (error) {
    logger.error(error);
    dispatch(actions.getContasCorrentesError());
  }
};

const getConcessionariaDados = (cnpj) => async (dispatch) => {
  try {
    dispatch(actions.getConcessionariaDadosStart());

    const result = await service.getConcessionariaDados(cnpj);

    if (result.data === null) {
      dispatch(actions.getConcessionariaDadosError());
      dispatch(SnackbarActions.addSnackbar(
        'CNPJ não encontrado',
        'error',
      ));
      return;
    }

    dispatch(actions.getConcessionariaDadosSuccess(result.data));
  } catch (status) {
    logger.error(status);
    dispatch(actions.getConcessionariaDadosError());
    dispatch(SnackbarActions.addSnackbar(
      'Erro ao buscar dados do cnpj',
      'error',
    ));
  }
};

const createContaCorrente = (form, isEditMode) => async (dispatch, getState) => {
  try {
    dispatch(actions.createContaCorrenteStart());
    const { concessionariaDados } = getState().contaCorrenteDealer;
    const { user } = getState().auth;
    const result = await service.createContaCorrente(
      user.email,
      form,
      concessionariaDados.codigoConcessionaria,
    );
    if (result.status === 200) {
      dispatch(actions.createContaCorrenteSuccess());
      dispatch(SnackbarActions.addSnackbar(isEditMode ? 'Conta alterada com sucesso'
        : 'Conta adicionada com sucesso', 'success'));
      dispatch(getContasCorrentes());
    }
    if (result.status === 409) {
      dispatch(SnackbarActions.addSnackbar('Já existe uma conta cadastrada para este CNPJ e brand', 'info'));
    }
  } catch (error) {
    logger.error(error);
    dispatch(SnackbarActions.addSnackbar('Erro ao criar conta corrente', 'error'));
    dispatch(actions.createContaCorrenteError());
  }
};

const exportContasCorrentes = () => async (dispatch, getState) => {
  try {
    const { filters } = getState().contaCorrenteDealer;
    const unmaskedCnpj = getUnmaskedInput(filters.cnpj);
    const response = await service.exportContasCorrentes(unmaskedCnpj);
    const url = window.URL.createObjectURL(new Blob([response.fileContent]));
    saveAs(url, response.fileName);
  } catch (error) {
    logger.error(error);
    dispatch(SnackbarActions.addSnackbar('Erro ao exportar contas correntes', 'error'));
  }
};

const resetModalCadastroForm = () => (dispatch) => {
  dispatch(actions.resetModalCadastroForm());
};

const setCnpj = (cnpj) => (dispatch) => {
  dispatch(actions.setCnpj(cnpj));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getContasCorrentes());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getContasCorrentes());
};

export default {
  getContasCorrentes,
  setCnpj,
  resetStore,
  setPage,
  setIpp,
  getConcessionariaDados,
  createContaCorrente,
  setModalCadastroFormField,
  resetModalCadastroForm,
  exportContasCorrentes,
};
