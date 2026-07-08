import logger from 'utils/logger';
import { saveAs } from 'file-saver';
import actions from './actions';
import service from './service';

import GruposDetalheOperations from '../../gruposDetalhe/redux/operations/operations';

import { configUpdateAction } from '../../../../redux/enums';

function mapMarca(arrayMarca) {
  return arrayMarca.map((m) => m.value);
}
function mapStatus(arrayStatus) {
  return arrayStatus.map((s) => s.value);
}

function mapRegional(array) {
  return array.map((r) => r.value);
}

const getGrupos = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getGruposStart());
    const { pageParams, filters } = getState().cobrancas.grupos.page;

    const response = await service.getGrupos({
      texto: filters.texto,
      regional: mapRegional(filters.regional),
      marca: mapMarca(filters.marca),
      status: mapStatus(filters.status),
      itensPorPagina: pageParams.ipp,
      pagina: pageParams.page,
    });

    const responsePageParams = {
      page: response.pagina,
      ipp: response.itensPorPagina,
      totalItems: response.itensTotal,
    };

    dispatch(actions.getGruposSuccess(response, responsePageParams));
  } catch (e) {
    logger.error(e);
    dispatch(actions.getGruposError());
  }
};

const updateConfig = (action, grupo) => async (dispatch) => {
  try {
    dispatch(actions.updateConfigStart(action, grupo.id));

    let propertyName;
    if (configUpdateAction.gruposAlterarFp === action) propertyName = 'statusFloorPlan';
    if (configUpdateAction.gruposAlterarVd === action) propertyName = 'statusVendaDireta';
    if (configUpdateAction.gruposAlterarFidc === action) propertyName = 'statusFidc';

    await service.updateConfig({
      action,
      id: grupo.id,
      status: !grupo[propertyName],
    });

    dispatch(actions.updateConfigSuccess(action, propertyName, grupo.id, !grupo[propertyName]));
    dispatch(actions.addSnackbar(`Grupo ${grupo.nomeConta} atualizado com sucesso`, 'success'));
  } catch (e) {
    dispatch(actions.updateConfigError(action, grupo.id));
    dispatch(actions.addSnackbar(`Erro ao atualizar o Grupo ${grupo.nomeConta}`, 'error'));
    logger.error(e);
  }
};

const setGruposPage = (page, grupo = null) => (dispatch) => {
  dispatch(GruposDetalheOperations.setGrupo(grupo));
  dispatch(actions.setGruposPage(page));
};

const updateFiltersProperty = (propertyName, value) => (dispatch) => {
  dispatch(actions.updateFiltersProperty(propertyName, value));
};

const setTexto = (texto) => (dispatch) => {
  dispatch(actions.setTexto(texto));
};

const dismissSnackbar = (id) => (dispatch) => {
  dispatch(actions.dismissSnackbar(id));
};

const addSnackbar = (message, type) => (dispatch) => {
  dispatch(actions.addSnackbar(message, type));
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getGrupos());
};
const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const exportRelatorio = () => async (dispatch, getState) => {
  try {
    dispatch(actions.exportRelatorioStart());

    const { filters } = getState().cobrancas.grupos.page;

    const xlsxResponse = await service.exportRelatorio({
      texto: filters.texto,
      regional: mapRegional(filters.regional),
      marca: mapMarca(filters.marca),
      status: mapStatus(filters.status),
    });
    const url = window.URL.createObjectURL(new Blob([xlsxResponse]));
    const fileName = `Relatorio_Grupos_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '_')}.xlsx`;

    saveAs(url, fileName);
    dispatch(actions.exportRelatorioSuccess());
  } catch (e) {
    logger.error('Erro ao exportar relatório de grupos:', e);
    dispatch(actions.exportRelatorioError());
  }
};

export default {
  getGrupos,
  updateConfig,
  setTexto,
  updateFiltersProperty,

  setGruposPage,
  setIpp,
  setPage,
  addSnackbar,
  dismissSnackbar,
  resetStore,
  exportRelatorio,
};
