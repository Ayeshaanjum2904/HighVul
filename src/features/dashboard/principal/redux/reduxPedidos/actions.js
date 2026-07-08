const SET_PEDIDOS = 'dashboardPedidos/SET_PEDIDOS';
const RESET_STORE = 'dashboardPedidos/RESET_STORE';

const setPedidos = (pedidos) => ({
  type: SET_PEDIDOS,
  payload: { pedidos },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_PEDIDOS,
    RESET_STORE,
  },

  setPedidos,
  resetStore,
};
