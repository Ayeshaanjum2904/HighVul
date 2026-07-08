import actions from './actions';

const INITIAL_STATE = [
];

export default (state = INITIAL_STATE, action = { type: '@@dashboardPedidosRegiao/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_PEDIDOS_REGIAO:
      return [
        ...action.payload.pedidosRegiao,
      ];
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
