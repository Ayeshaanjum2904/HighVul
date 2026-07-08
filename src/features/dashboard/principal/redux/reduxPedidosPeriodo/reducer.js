import actions from './actions';

const INITIAL_STATE = {
  pedidosPeriodo: [],
};

export default (state = INITIAL_STATE, action = { type: '@@dashboardPedidosPeriodo/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_PEDIDOS_PERIODO:
      return {
        ...state,
        pedidosPeriodo: action.payload.pedidosPeriodo,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
