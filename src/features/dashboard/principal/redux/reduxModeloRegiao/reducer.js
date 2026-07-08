import actions from './actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action = { type: '@@dashboardModeloRegiao/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_MODELO_REGIAO:
      return [
        ...action.payload.modeloRegiao,
      ];
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
