import actions from './actions';

const INITIAL_STATE = {
  isModalOpen: false,
  historicoDetail: null,
  isLoading: false,
  isError: false,
};

export default (state = INITIAL_STATE, action = { type: '@@historicoDetalhe/INIT' }) => {
  switch (action.type) {
    case actions.types.LOADING_DETALHE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actions.types.LOADING_DETALHE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        historicoDetail: action.payload?.details,
      };
    case actions.types.LOADING_DETALHE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actions.types.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        historicoDetail: {
          idEmail: action.payload.idEmail,
        },
      };
    case actions.types.SET_MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
      };
    case actions.types.RESET_STORE:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
