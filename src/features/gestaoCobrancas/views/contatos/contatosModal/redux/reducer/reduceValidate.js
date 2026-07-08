import actions from '../actions/actions';

export const INITIAL_STATE_VALIDATE_EMAIL = {
  validateEmail: {
    isLoading: false,
    isError: false,
  },
};

export const INITIAL_STATE_VALIDATE_TELEFONE = {
  validateTelefone: {
    isLoading: false,
    isError: false,
  },
};

export const reduceValidateEmail = (state, action) => {
  switch (action.type) {
    case actions.types.VALIDATE_EMAIL_START:
      return {
        ...state,
        validateEmail: {
          ...state.validateEmail,
          isLoading: true,
          isError: false,
        },
        sendContato: {
          ...state.sendContato,
          errors: state.sendContato.errors.filter(
            (e) => e.propertyName !== 'Email' || e.index !== action.payload.index,
          ),
        },
      };
    case actions.types.VALIDATE_EMAIL_SUCCESS:
      return {
        ...state,
        validateEmail: {
          ...state.validateEmail,
          isLoading: false,
          isError: false,
        },
        contato: {
          ...state.contato,
          emailList: [...state.contato.emailList, action.payload.email],
        },
        contatoInfo: {
          ...state.contatoInfo,
          email: null,
        },
      };
    case actions.types.VALIDATE_EMAIL_ERROR:
      return {
        ...state,
        validateEmail: {
          ...state.validateEmail,
          isLoading: false,
          isError: true,
        },
        sendContato: {
          ...state.sendContato,
          errors: [...state.sendContato.errors, ...action.payload.errors],
        },
      };
    case actions.types.DELETE_EMAIL:
      return {
        ...state,
        contato: {
          ...state.contato,
          emailList: state.contato.emailList.filter((i) => i.email !== action.payload.email.email),
        },
      };
    case actions.types.SET_EMAIL:
      return {
        ...state,
        contatoInfo: {
          ...state.contatoInfo,
          email: action.payload.email,
        },
      };
    case actions.types.SET_EMAIL_LIST:
      return {
        ...state,
        validateEmail: {
          ...state.validateEmail,
          isLoading: false,
          isError: false,
        },
        contato: {
          ...state.contato,
          emailList: state.contato.emailList.map((item, index) => {
            if (index === action.payload.index) return action.payload.email;
            return item;
          }),
        },
      };
    default:
      return state;
  }
};

export const reduceValidateTelefone = (state, action) => {
  switch (action.type) {
    case actions.types.VALIDATE_TELEFONE_START:
      return {
        ...state,
        validateTelefone: {
          ...state.validateTelefone,
          isLoading: true,
          isError: false,
        },
        sendContato: {
          ...state.sendContato,
          errors: state.sendContato.errors.filter((e) => e.propertyName !== 'Telefone'),
        },
      };
    case actions.types.VALIDATE_TELEFONE_SUCCESS:
      return {
        ...state,
        validateTelefone: {
          ...state.validateTelefone,
          isLoading: false,
          isError: false,
        },
        contato: {
          ...state.contato,
          telefoneList: [...state.contato.telefoneList, action.payload.telefone],
        },
        contatoInfo: {
          ...state.contatoInfo,
          telefone: null,
          ramal: null,
        },
      };
    case actions.types.VALIDATE_TELEFONE_ERROR:
      return {
        ...state,
        validateTelefone: {
          ...state.validateTelefone,
          isLoading: false,
          isError: true,
        },
        sendContato: {
          ...state.sendContato,
          errors: [...state.sendContato.errors, ...action.payload.errors],
        },
      };
    case actions.types.DELETE_TELEFONE:
      return {
        ...state,
        contato: {
          ...state.contato,
          telefoneList: state.contato.telefoneList
            .filter((i) => `${i.telefone}${i.ramal ?? ''}` !== action.payload.telefone),
        },
      };
    case actions.types.SET_TELEFONE:
      return {
        ...state,
        contatoInfo: {
          ...state.contatoInfo,
          telefone: action.payload.telefone,
        },
      };
    case actions.types.SET_RAMAL:
      return {
        ...state,
        contatoInfo: {
          ...state.contatoInfo,
          ramal: action.payload.ramal,
        },
      };
    case actions.types.SET_TELEFONE_LIST:
      return {
        ...state,
        validateTelefone: {
          ...state.validateTelefone,
          isLoading: false,
          isError: false,
        },
        contato: {
          ...state.contato,
          telefoneList: state.contato.telefoneList.map((item, index) => {
            if (index === action.payload.index) return action.payload.telefone;
            return item;
          }),
        },
      };
    case actions.types.SET_RAMAL_LIST:
      return {
        ...state,
        contato: {
          ...state.contato,
          telefoneList: state.contato.telefoneList.map((item, index) => {
            if (index === action.payload.index) return { ...item, ramal: action.payload.ramal };
            return item;
          }),
        },
      };
    default:
      return state;
  }
};
