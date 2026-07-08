import actions from './actions';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action = { type: '@@dashboardPedidos/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_PEDIDOS:
      return {
        ...action.payload.pedidos,
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
