const SET_PEDIDOS_PERIODO = 'dashboardPedidosPeriodo/SET_PEDIDOS_PERIODO';
const RESET_STORE = 'dashboardPedidosPeriodo/RESET_STORE';

const setPedidosPeriodo = (pedidosPeriodo) => ({
  type: SET_PEDIDOS_PERIODO,
  payload: { pedidosPeriodo },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_PEDIDOS_PERIODO,
    RESET_STORE,
  },
  setPedidosPeriodo,
  resetStore,
};
