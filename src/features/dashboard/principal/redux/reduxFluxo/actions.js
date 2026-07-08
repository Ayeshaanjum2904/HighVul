const SET_FLUXO = 'dashboardFluxo/SET_FLUXO';
const RESET_STORE = 'dashboardFluxo/RESET_STORE';

const setFluxo = (fluxo) => ({
  type: SET_FLUXO,
  payload: { fluxo },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_FLUXO,
    RESET_STORE,
  },

  setFluxo,
  resetStore,
};
