import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import actions from './actions';
import service from './service';

const getPedidosModelo = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);

    const pedidos = await service.getPedidosModelo({
      ...filters,
      selectedGrupo: selectedGroup,
    });
    dispatch(actions.setPedidosModelos(pedidos));
  } catch (e) {
    dispatch(actions.setPedidosModelos([]));
    logger.error(e);
    throw e;
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getPedidosModelo,
  resetStore,
};
