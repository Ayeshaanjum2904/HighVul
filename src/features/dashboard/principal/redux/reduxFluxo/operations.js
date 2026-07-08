import logger from 'utils/logger';
import { groupFilter } from 'features/dashboard/services/helper';
import service from './service';
import actions from './actions';

const getFluxo = () => async (dispatch, filters, brands) => {
  try {
    const selectedGroup = groupFilter(filters.selectedGrupo, 'brand', brands.data);
    const fluxo = await service.getFluxo({
      ...filters,
      selectedGrupo: selectedGroup,
    });

    dispatch(actions.setFluxo(fluxo));
  } catch (e) {
    dispatch(actions.setFluxo([]));
    logger.error(e);
    throw e;
  }
};

const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};

export default {
  getFluxo,
  resetStore,
};
