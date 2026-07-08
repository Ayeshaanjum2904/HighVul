const SET_PRODUTO = 'dashboardPedidosArea/SET_PRODUTO';
const SET_PEDIDOS_AREA = 'dashboardPedidosArea/SET_PEDIDOS_AREA';
const RESET_STORE = 'dashboardPedidosArea/RESET_STORE';

const setProduto = (produto) => ({
  type: SET_PRODUTO,
  payload: { produto },
});

const setPedidosArea = (pedidosArea) => ({
  type: SET_PEDIDOS_AREA,
  payload: { pedidosArea },
});

const resetStore = () => ({
  type: RESET_STORE,
});

export default {
  types: {
    SET_PRODUTO,
    SET_PEDIDOS_AREA,
    RESET_STORE,
  },
  setProduto,
  setPedidosArea,
  resetStore,
};
