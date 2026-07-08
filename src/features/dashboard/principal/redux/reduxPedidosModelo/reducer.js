import actions from './actions';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action = { type: '@@dashboardPedidosModelo/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_PEDIDOS_MODELO:
      return {
        ...action.payload.pedidosModelo,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
