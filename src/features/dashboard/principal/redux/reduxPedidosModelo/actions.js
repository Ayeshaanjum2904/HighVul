const SET_PEDIDOS_MODELO = 'dashboardPedidosModelo/SET_PEDIDOS_MODELO';
const RESET_STORE = 'dashboardPedidosModelo/RESET_STORE';

const setPedidosModelos = (pedidosModelo) => ({
  type: SET_PEDIDOS_MODELO,
  payload: { pedidosModelo },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_PEDIDOS_MODELO,
    RESET_STORE,
  },
  setPedidosModelos,
  resetStore,
};
