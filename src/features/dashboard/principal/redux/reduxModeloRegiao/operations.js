import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import actions from './actions';
import service from './service';

const getModeloRegiao = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);

    const pedidos = await service.getModeloRegiao({
      ...filters,
      selectedGrupo: selectedGroup,
    });
    dispatch(actions.setModeloRegiao(pedidos));
  } catch (e) {
    dispatch(actions.setModeloRegiao([]));
    logger.error(e);
    throw e;
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getModeloRegiao,
  resetStore,
};
