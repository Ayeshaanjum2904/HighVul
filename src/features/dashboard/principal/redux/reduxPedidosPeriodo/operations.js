import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import actions from './actions';
import service from './service';

const getPedidosPeriodo = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);

    const pedidos = await service.getPedidosPeriodo({
      ...filters,
      selectedGrupo: selectedGroup,
    });
    dispatch(actions.setPedidosPeriodo(pedidos));
  } catch (e) {
    dispatch(actions.setPedidosPeriodo([]));
    logger.error(e);
    throw e;
  }
};
const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getPedidosPeriodo,
  resetStore,
};
