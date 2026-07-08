import logger from 'utils/logger';
import { saveAs } from 'file-saver';
import { groupFilter } from 'features/dashboard/services/helper';
import actions from './actions';
import service from './service';

const getPedidosConcessionaria = (tipo, orderBy) => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);
    const payload = [{ tipo, orderBy, items: 10 }];

    dispatch(actions.setTypeAndOrderby(tipo, orderBy));
    const pedidosConcessionaria = await service.getPedidosConcessionaria({
      ...filters, selectedGrupo: selectedGroup,
    }, payload);
    dispatch(actions.setPedidosConcessionaria(pedidosConcessionaria));
  } catch (e) {
    dispatch(actions.setPedidosConcessionaria([]));
    logger.error(e);
    throw e;
  }
};

const setSelectedTab = (selectedTab) => (dispatch) => {
  dispatch(actions.setSelectedTab(selectedTab));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

const getPedidosXlsx = (tipo, orderBy) => async (dispatch, getState) => {
  try {
    const payload = [{ tipo, orderBy }];
    const { filters } = getState().dashboard.principal.page;
    dispatch(actions.setLoadingXlsx());
    const xlsxResponse = await service.downloadConcessionariosXlsx(filters, payload);
    const url = window.URL.createObjectURL(new Blob([xlsxResponse]));
    saveAs(url, 'quantidade_de_pedidos_das_concessionarias.xlsx');
    dispatch(actions.setSuccessXlsx());
  } catch (error) {
    dispatch(actions.setErrorOnGetXlsx());
    logger.error(error);
    throw error;
  }
};

export default {
  getPedidosConcessionaria,
  resetStore,
  setSelectedTab,
  getPedidosXlsx,
};
