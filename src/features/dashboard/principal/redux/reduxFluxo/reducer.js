import actions from './actions';

const INITIAL_STATE = [
];

export default (state = INITIAL_STATE, action = { type: '@@dashboardFluxo/INIT' }) => {
  switch (action.type) {
    case actions.types.SET_FLUXO:
      return [
        ...action.payload.fluxo,
      ];
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
