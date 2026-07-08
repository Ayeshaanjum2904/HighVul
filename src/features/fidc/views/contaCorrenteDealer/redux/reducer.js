import actions from './actions';

const INITIAL_STATE = {
  pageParams: {
    page: 0,
    ipp: 25,
    totalItems: 0,
  },

  data: {
    contasCorrentes: [],
    isLoading: false,
    isError: false,
  },

  filters: {
    cnpj: '',
  },

  concessionariaDados: {
    brands: [],
    nomeConcessionaria: '',
    codigoConcessionaria: null,
    isLoading: false,
    isError: false,
  },

  modalCadastroForm: {
    id: null,
    brand: '_default',
    brandLabel: '',
    nomeConcessionaria: '',
    codigoConcessionaria: null,
    cnpj: '',
    banco: '',
    agencia: '',
    conta: '',
  },

  cleaned: false,
  isFilterSelected: false,
};

export default (state = INITIAL_STATE, action = { type: 'default' }) => {
  switch (action.type) {
    case actions.types.GET_CONTASCORRENTES_START:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_CONTASCORRENTES_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_CONTASCORRENTES_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: false,
          isError: false,
          contasCorrentes: action.payload.contasCorrentes,
        },
        pageParams: action.payload.pageParams,
        isFilterSelected: false,
        cleaned: false,
      };
    case actions.types.GET_CONCESSIONARIA_DADOS_START:
      return {
        ...state,
        concessionariaDados: {
          ...state.concessionariaDados,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_CONCESSIONARIA_DADOS_SUCCESS:
      return {
        ...state,
        concessionariaDados: {
          ...state.concessionariaDados,
          isLoading: false,
          isError: false,
          ...action.payload.concessionariaDados,
        },
      };
    case actions.types.GET_CONCESSIONARIA_DADOS_ERROR:
      return {
        ...state,
        concessionariaDados: {
          ...state.concessionariaDados,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.SET_CNPJ:
      return {
        ...state,
        filters: {
          ...state.filters,
          cnpj: action.payload.cnpj,
        },
        isFilterSelected: true,
      };
    case actions.types.SET_PAGE: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          page: action.payload.page,
        },
      };
    }
    case actions.types.SET_IPP: {
      return {
        ...state,
        pageParams: {
          ...state.pageParams,
          ipp: action.payload.ipp,
        },
      };
    }
    case actions.types.SET_MODAL_CADASTRO_FORM_FIELD: {
      const { field, value } = action.payload;
      return {
        ...state,
        modalCadastroForm: {
          ...state.modalCadastroForm,
          [field]: value,
        },
      };
    }
    case actions.types.RESET_MODAL_CADASTRO_FORM: {
      return {
        ...state,
        modalCadastroForm: { ...INITIAL_STATE.modalCadastroForm },
        concessionariaDados: { ...INITIAL_STATE.modalCadastroForm },
      };
    }
    case actions.types.RESET_STORE: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
