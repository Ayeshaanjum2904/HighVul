import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import service from './service';
import actions from './actions';

const getPedidos = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);

    const pedidos = await service.getPedidos({
      ...filters,
      selectedGrupo: selectedGroup,
    });
    dispatch(actions.setPedidos(pedidos));
  } catch (e) {
    dispatch(actions.setPedidos([]));
    logger.error(e);
    throw e;
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getPedidos,
  resetStore,
};
