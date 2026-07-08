import logger from 'utils/logger';
import { saveAs } from 'file-saver';
import actions from './actions';
import service from './service';
import detailsOperation from '../../concessionariasDetalhe/redux/operations';

const mapBrands = (brands) => brands.map((brand) => brand.value);

const mapRegionais = (regionais) => regionais.map((regional) => regional.value);

const getConcessionarias = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getConcessionariasStart());
    const { filters, pageParams } = getState().cobrancas.concessionarias.page;
    const response = await service.getConcessionarias({
      brand: mapBrands(filters.brand),
      regional: mapRegionais(filters.regional),
      query: filters.query,
      codBuc: filters.codBuc,
    }, pageParams);
    dispatch(actions.getConcessionariasSuccess({ response }));
  } catch (error) {
    dispatch(actions.getConcessionariasError());
    logger.error(error);
  }
};

const setConcessionariasPage = (page, concessionaria = null) => (dispatch) => {
  dispatch(actions.setConcessionariasPage(page));
  dispatch(detailsOperation.setConcessionaria(concessionaria));
};

const setFilter = (filterName, value) => (dispatch) => {
  dispatch(actions.setFilter(filterName, value));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const setPage = (page) => (dispatch) => {
  dispatch(actions.setPage(page));
  dispatch(getConcessionarias());
};

const setIpp = (ipp) => (dispatch) => {
  dispatch(actions.setIpp(ipp));
  dispatch(getConcessionarias());
};

const exportarRelatorio = () => async (dispatch, getState) => {
  try {
    dispatch(actions.exportRelatorioStart());
    const { filters } = getState().cobrancas.concessionarias.page;
    const xlsxResponse = await service.exportarRelatorio({
      brand: mapBrands(filters.brand),
      regional: mapRegionais(filters.regional),
    });
    const url = window.URL.createObjectURL(new Blob([xlsxResponse]));
    const today = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
    saveAs(url, `relatorio_concessionarias_${today}.xlsx`);
    dispatch(actions.exportRelatorioSuccess());
  } catch (error) {
    dispatch(actions.exportRelatorioError());
    logger.error(error);
  }
};

export default {
  setConcessionariasPage,
  setFilter,
  getConcessionarias,
  resetStore,
  setPage,
  setIpp,
  exportarRelatorio,
};
