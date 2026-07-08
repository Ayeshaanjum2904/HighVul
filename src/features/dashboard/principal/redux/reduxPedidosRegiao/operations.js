import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import actions from './actions';
import service from './service';

const getPedidosRegiao = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);

    const pedidos = await service.getPedidosRegiao({
      ...filters,
      selectedGrupo: selectedGroup,
    });
    dispatch(actions.setPedidosRegiao(pedidos));
  } catch (e) {
    dispatch(actions.setPedidosRegiao([]));
    logger.error(e);
    throw e;
  }
};
const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getPedidosRegiao,
  resetStore,
};
