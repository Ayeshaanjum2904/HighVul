const SET_MODELO_REGIAO = 'dashboardModeloRegiao/SET_PEDIDOS';
const RESET_STORE = 'dashboardModeloRegiao/RESET_STORE';

const setModeloRegiao = (modeloRegiao) => ({
  type: SET_MODELO_REGIAO,
  payload: { modeloRegiao },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_MODELO_REGIAO,
    RESET_STORE,
  },
  setModeloRegiao,
  resetStore,
};
