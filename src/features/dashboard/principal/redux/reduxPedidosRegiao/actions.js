const SET_PEDIDOS_REGIAO = 'dashboardPedidosRegiao/SET_PEDIDOS_REGIAO';
const RESET_STORE = 'dashboardPedidosRegiao/RESET_STORE';

const setPedidosRegiao = (pedidosRegiao) => ({
  type: SET_PEDIDOS_REGIAO,
  payload: { pedidosRegiao },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_PEDIDOS_REGIAO,
    RESET_STORE,
  },
  setPedidosRegiao,
  resetStore,
};
