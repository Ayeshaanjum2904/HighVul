import { saveAs } from 'file-saver';
import logger from 'utils/logger';
import SnackbarOperations from 'modules/snackbar/redux/operations';
import { convertExcelToJson } from '../utils/excelConverter';
import service from './service';
import actions from './actions';

const inserirAnexo = (file) => async (dispatch) => {
  try {
    dispatch(actions.inserirAnexoStart());

    const result = await convertExcelToJson(file);

    if (!result.success) {
      dispatch(actions.inserirAnexoError(
        new Error(result.error),
        result.error,
      ));
      return;
    }

    dispatch(actions.inserirAnexoSuccess(result.data));
  } catch (e) {
    dispatch(actions.inserirAnexoError(
      e,
      'Erro inesperado ao processar arquivo',
    ));
    logger.error(e);
    throw e;
  }
};

const getConfiguracaoTaxasAtuais = () => async (dispatch) => {
  try {
    dispatch(actions.getConfiguracaoStart());

    const configuracao = await service.getConfiguracaoTaxasAtuais();
    dispatch(actions.getConfiguracaoSuccess(configuracao));
  } catch (e) {
    dispatch(actions.getConfiguracaoError(e.message));
    logger.error(e);
  }
};

const salvarTaxas = () => async (dispatch, getState) => {
  try {
    dispatch(actions.salvarTaxasStart());

    const { simulador } = getState();
    const { dadosConvertidos } = simulador.anexo;

    if (!dadosConvertidos) {
      throw new Error('Nenhum arquivo foi processado');
    }

    await service.salvarTaxas(dadosConvertidos);
    dispatch(actions.salvarTaxasSuccess());

    dispatch(SnackbarOperations.addSnackbar(
      'Taxas e tarifas atualizadas com sucesso',
      'success',
    ));

    dispatch(getConfiguracaoTaxasAtuais());
  } catch (e) {
    dispatch(actions.salvarTaxasError(e.message));
    logger.error(e);

    if (e.response && e.response.status === 400) {
      dispatch(SnackbarOperations.addSnackbar('Arquivo inválido', 'error'));
    } else {
      dispatch(SnackbarOperations.addSnackbar('Erro ao salvar taxas', 'error'));
    }

    throw e;
  }
};

const exportarTaxas = () => async (dispatch, getState) => {
  try {
    dispatch(actions.exportTaxasStart());

    const { simulador } = getState();
    const { temDados } = simulador.configuracao;

    const xlsxResponse = await service.exportarTaxas();
    const url = window.URL.createObjectURL(new Blob([xlsxResponse]));

    const fileName = temDados
      ? `Taxas_Vigentes_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '_')}.xlsx`
      : `Planilha_Modelo_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '_')}.xlsx`;

    saveAs(url, fileName);
    dispatch(actions.exportTaxasSuccess());
  } catch (e) {
    dispatch(actions.exportTaxasError(e.message));
    logger.error(e);
    dispatch(SnackbarOperations.addSnackbar('Erro ao exportar taxas', 'error'));
  }
};

const limparAnexoTaxas = () => (dispatch) => {
  dispatch(actions.limparAnexoTaxas());
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  inserirAnexo,
  salvarTaxas,
  getConfiguracaoTaxasAtuais,
  exportarTaxas,
  limparAnexoTaxas,
  resetStore,
};
