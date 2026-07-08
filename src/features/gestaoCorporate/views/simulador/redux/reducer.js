import actions from './actions';

const INITIAL_STATE = {
  anexo: {
    isLoading: false,
    error: null,
    errorMessage: null,
    dadosConvertidos: null,
  },
  salvarTaxas: {
    isLoading: false,
    error: null,
    success: false,
  },
  configuracao: {
    isLoading: false,
    error: null,
    ultimaAtualizacao: null,
    usuarioNome: null,
    vigenciaAteTaxas: null,
    vigenciaAteValoresRegistro: null,
    temDados: false,
  },
  exportTaxas: {
    isLoading: false,
    error: null,
  },
};

export default (state = INITIAL_STATE, action = { type: '@@simulador/INIT' }) => {
  switch (action.type) {
    case actions.types.INSERIR_ANEXO_START:
      return {
        ...state,
        anexo: {
          ...state.anexo,
          isLoading: true,
          error: null,
          errorMessage: null,
          dadosConvertidos: null,
        },
        salvarTaxas: {
          ...state.salvarTaxas,
          success: false,
        },
      };

    case actions.types.INSERIR_ANEXO_SUCCESS:
      return {
        ...state,
        anexo: {
          ...state.anexo,
          isLoading: false,
          error: null,
          dadosConvertidos: action.payload.dadosConvertidos,
        },
      };

    case actions.types.INSERIR_ANEXO_ERROR:
      return {
        ...state,
        anexo: {
          ...state.anexo,
          isLoading: false,
          error: action.payload.error,
          errorMessage: action.payload.errorMessage,
          dadosConvertidos: null,
        },
      };

    case actions.types.SALVAR_TAXAS_START:
      return {
        ...state,
        salvarTaxas: {
          ...state.salvarTaxas,
          isLoading: true,
          error: null,
          success: false,
        },
      };

    case actions.types.SALVAR_TAXAS_SUCCESS:
      return {
        ...state,
        salvarTaxas: {
          ...state.salvarTaxas,
          isLoading: false,
          error: null,
          success: true,
        },
      };

    case actions.types.SALVAR_TAXAS_ERROR:
      return {
        ...state,
        salvarTaxas: {
          ...state.salvarTaxas,
          isLoading: false,
          error: action.payload.error,
          success: false,
        },
      };

    case actions.types.GET_CONFIGURACAO_START:
      return {
        ...state,
        configuracao: {
          ...state.configuracao,
          isLoading: true,
          error: null,
        },
      };

    case actions.types.GET_CONFIGURACAO_SUCCESS:
      return {
        ...state,
        configuracao: {
          ...state.configuracao,
          isLoading: false,
          error: null,
          ...action.payload.configuracao,
        },
      };

    case actions.types.GET_CONFIGURACAO_ERROR:
      return {
        ...state,
        configuracao: {
          ...state.configuracao,
          isLoading: false,
          error: action.payload.error,
        },
      };

    case actions.types.EXPORT_TAXAS_START:
      return {
        ...state,
        exportTaxas: {
          ...state.exportTaxas,
          isLoading: true,
          error: null,
        },
      };

    case actions.types.EXPORT_TAXAS_SUCCESS:
      return {
        ...state,
        exportTaxas: {
          ...state.exportTaxas,
          isLoading: false,
          error: null,
        },
      };

    case actions.types.EXPORT_TAXAS_ERROR:
      return {
        ...state,
        exportTaxas: {
          ...state.exportTaxas,
          isLoading: false,
          error: action.payload.error,
        },
      };

    case actions.types.LIMPAR_ANEXO_TAXAS:
      return {
        ...state,
        anexo: INITIAL_STATE.anexo,
        salvarTaxas: INITIAL_STATE.salvarTaxas,
      };

    case actions.types.RESET_STORE:
      return INITIAL_STATE;

    default:
      return state;
  }
};
