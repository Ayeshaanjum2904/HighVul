import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import actions from './actions';
import service from './service';

const getPedidosArea = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);
    const pedidos = await service.getPedidosArea({
      ...filters,
      selectedGrupo: selectedGroup,
    });
    dispatch(actions.setPedidosArea(pedidos));
  } catch (e) {
    dispatch(actions.setPedidosArea([]));
    logger.error(e);
    throw e;
  }
};

const setProduto = (produto) => (dispatch) => {
  dispatch(actions.setProduto(produto));
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  setProduto,
  getPedidosArea,
  resetStore,
};
