import actions from './actions';

const INITIAL_STATE = {
  selectedProduct: 'all',
  pedidosArea: [],
};

export default (state = INITIAL_STATE, action = { type: '@@dashboardPedidosArea/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_PRODUTO:
      return {
        ...state,
        selectedProduct: action.payload.produto,
      };
    case actions.types.SET_PEDIDOS_AREA:
      return {
        ...state,
        pedidosArea: action.payload.pedidosArea,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
