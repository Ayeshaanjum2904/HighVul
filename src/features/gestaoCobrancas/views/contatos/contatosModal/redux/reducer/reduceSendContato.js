import actions from '../actions/actions';

export const INITIAL_STATE_SEND_CONTATO = {
  sendContato: {
    isLoading: false,
    isError: false,
    errors: [],
  },
  contatoInfo: {
    email: null,
    telefone: null,
    ramal: '',
  },
  contato: {
    id: null,
    nome: null,
    telefoneList: [],
    emailList: [],
    papel: { id: null, descricao: null },
  },
};

export const reduceSendContato = (state, action) => {
  switch (action.type) {
    case actions.types.SEND_CONTATO_START:
      return {
        ...state,
        sendContato: {
          ...state.sendContato,
          isLoading: true,
          isError: false,
          errors: [],
        },
      };
    case actions.types.SEND_CONTATO_SUCCESS:
      return {
        ...state,
        sendContato: {
          ...state.sendContato,
          isLoading: false,
          isError: false,
          errors: [],
        },
        contato: INITIAL_STATE_SEND_CONTATO.contato,
        isOpen: false,
      };
    case actions.types.SEND_CONTATO_ERROR:
      return {
        ...state,
        sendContato: {
          ...state.sendContato,
          isLoading: false,
          isError: true,
          errors: action.payload.errors,
        },
      };
    case actions.types.REMOVE_ERROR:
      return {
        ...state,
        sendContato: {
          ...state.sendContato,
          errors: state.sendContato.errors.filter(
            (e) => e.propertyName !== action.payload.name || e.index !== action.payload.index,
          ),
        },
      };
    default:
      return state;
  }
};
