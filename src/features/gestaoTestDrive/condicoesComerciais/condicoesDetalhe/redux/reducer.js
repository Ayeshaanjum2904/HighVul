import moment from 'moment';
import actions from './actions';

const INITIAL_STATE = {
  condicao: {
    cartaMes: null,
    brand: '_default',
    produto: '_default',
    dataFim: null,
    dataInicio: null,
    id: null,
    desconto: null,
    parcelas: null,
    taxa: null,
    prazo: null,
    coeficiente: null,
    condicaoOperacional: null,
    condicoes: [],
  },

  originalCondicao: null,

  modalError: {
    isOpen: false,
    errors: [],
  },

  mvsList: [],
  concessionariasList: [],
  concessionariasSelecionadas: [],
  originalConcessionarias: [],

  isModalOpen: false,
  isModalConcessionariaOpen: false,
  isLoadingUpdate: false,
  isLoading: false,
  isLoadingMvsList: false,
  isLoadingConcessionariasList: false,
  isErrorMvsList: false,
  isErrorConcessionariasList: false,

  snackbar: {
    errors: [],
    lastId: 0,
  },

  formInputs: {
    brandInputs: [],
    produtoInputs: [],
    isLoading: false,
    isError: false,
  },
};

const getDetailReduce = (state, action) => {
  switch (action.type) {
    case actions.types.GET_DETAIL_START:
      return {
        ...state,
        isLoading: true,
        condicao: {
          ...state.condicao,
          id: action.payload.id,
        },
      };
    case actions.types.GET_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case actions.types.GET_DETAIL_SUCCESS: {
      const { condicao, isDuplicate } = action.payload;
      const concessionarias = (condicao.codigosConcessionarias || [])
        .map((codigo) => state.concessionariasList.find(
          (c) => Number(c.value) === Number(codigo),
        ))
        .filter(Boolean);
      const condicaoData = {
        ...state.condicao,
        cartaMes: condicao.numeroCartaDoMes,
        dataInicio: isDuplicate ? null : moment(new Date(condicao.vigenciaInicio)),
        dataFim: isDuplicate ? null : moment(new Date(condicao.vigenciaFim)),
        produto: condicao.produtoId,
        brand: condicao.marca,
        desconto: condicao.percentualFinanciado,
        parcelas: condicao.parcelas,
        taxa: condicao.taxa,
        prazo: condicao.prazo,
        coeficiente: condicao.coeficiente,
        condicaoOperacional: condicao.condicaoOperacional,
        condicoes: condicao.condicaoVeiculos.map((cond) => ({
          modelId: cond.modelo,
          versionId: cond.versao,
          serieId: cond.serie,
          marca: cond.marca,
          id: cond.id,
          modelYear: cond.modelYear,
          allestimento: cond.allestimento,
          desconto: cond.percentualFinanciado,
          parcelas: cond.parcelas,
          coeficiente: cond.coeficiente,
          prazo: cond.prazo,
          taxa: cond.taxa,
          value: cond.modelo.concat(cond.versao).concat(cond.serie)
            .concat(cond.modelYear),
        })),
      };

      return {
        ...state,
        isLoading: false,
        isError: false,
        condicao: condicaoData,
        originalCondicao: isDuplicate ? {
          ...condicaoData,
          dataInicio: moment(new Date(condicao.vigenciaInicio)),
          dataFim: moment(new Date(condicao.vigenciaFim)),
        } : state.originalCondicao,
        originalConcessionarias: concessionarias,
        concessionariasSelecionadas: concessionarias,
      };
    }
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@condicaoDetalhe/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_CONDICAO_DETAIL)) {
    return getDetailReduce(state, action);
  }
  switch (action.type) {
    case actions.types.SET_UPLOAD_LOADING:
      return {
        ...state,
        isLoadingUpdate: action.payload.value,
      };
    case actions.types.SET_MARCA:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          brand: action.payload.marca,
          condicoes: [],
        },
      };
    case actions.types.SET_PRODUTO:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          produto: action.payload.produto,
        },
      };
    case actions.types.SET_DATA_FIM:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          dataFim: action.payload.data,
        },
      };
    case actions.types.SET_DATA_INICIO:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          dataInicio: action.payload.data,
        },
      };
    case actions.types.SET_CARTA_MES:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          cartaMes: action.payload.cartaMes,
        },
      };
    case actions.types.SET_CONCESSIONARIAS_LIST:
      return {
        ...state,
        concessionariasList: action.payload.concessionarias,
      };
    case actions.types.SET_MVS_LIST:
      return {
        ...state,
        mvsList: action.payload.mvs,
      };
    case actions.types.SET_SELECTED_CONCESSIONARIAS:
      return {
        ...state,
        concessionariasSelecionadas: action.payload.concessionarias,
      };
    case actions.types.SET_SELECTED_MVS:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          condicoes: Array.isArray(action.payload.mvs)
            ? action.payload.mvs.map((m) => {
              const index = state.condicao.condicoes
                .findIndex((element) => element.value === m.value);
              if (index >= 0) {
                return state.condicao.condicoes[index];
              }
              return m;
            })
            : [action.payload.mvs],
        },
      };
    case actions.types.REMOVE_SELECTED_CONCESSIONARIA:
      return {
        ...state,
        concessionariasSelecionadas: [
          ...state.concessionariasSelecionadas.filter((c) => c.value
           !== action.payload.concessionaria),
        ],
      };
    case actions.types.REMOVE_SELECTED_MVS:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          condicoes: [
            ...state.condicao.condicoes.filter((mvs) => mvs.value !== action.payload.mvs),
          ],
        },
      };
    case actions.types.SET_MODAL_CONCESSIONARIA_OPEN:
      return {
        ...state,
        isModalConcessionariaOpen: action.payload.open,
      };
    case actions.types.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload.open,
      };
    case actions.types.SET_MVS_DESCONTO:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          desconto: action.payload.value,
        },
      };
    case actions.types.SET_STATUS:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          condicoes: [...state.condicao.condicoes.map((d) => {
            if (d.value === action.payload.id) {
              return {
                ...d,
                status: 0,
              };
            }
            return d;
          })],
        },
      };
    case actions.types.SET_MVS_COEFICIENTE:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          coeficiente: action.payload.value,
        },
      };
    case actions.types.SET_MVS_CONDICAO_OPERACIONAL:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          condicaoOperacional: action.payload.value,
        },
      };
    case actions.types.SET_MVS_PARCELAS:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          parcelas: action.payload.value,

        },
      };
    case actions.types.SET_MVS_PRAZO:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          prazo: action.payload.value,

        },
      };
    case actions.types.SET_MVS_TAXA:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          taxa: action.payload.value,
        },
      };
    case actions.types.CHANGE_CONDICAO_MODEL:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          condicoes: [...state.condicao.condicoes.map((d) => {
            if (d.value === action.payload.oldId) {
              return {
                ...action.payload.mvs,
                id: d.id,
                desconto: d.desconto,
                parcelas: d.parcelas,
                coeficiente: d.coeficiente,
                prazo: d.prazo,
                taxa: d.taxa,
              };
            }
            return d;
          })],
        },
      };
    case actions.types.SET_MODAL_ERROR:
      return {
        ...state,
        modalError: {
          isOpen: action.payload.value,
          errors: action.payload.errors,
        },
      };
    case actions.types.SET_IS_LOADING_CONCESSIONARIAS_LIST:
      return {
        ...state,
        isLoadingConcessionariasList: action.payload.isLoading,
        isErrorConcessionariasList: action.payload.isError,
      };
    case actions.types.SET_IS_LOADING_MVS_LIST:
      return {
        ...state,
        isLoadingMvsList: action.payload.isLoading,
        isErrorMvsList: action.payload.isError,
      };
    case actions.types.SET_SNACKBAR:
      return {
        ...state,
        snackbar: {
          errors: [...state.snackbar.errors,
            {
              id: state.snackbar.lastId + 1,
              message: action.payload.message,
              type: action.payload.type,
            },
          ],
          lastId: state.snackbar.lastId + 1,
        },
      };
    case actions.types.DISMISS_SNACKBAR:
      return {
        ...state,
        snackbar: {
          ...state.snackbar,
          errors: state.snackbar.errors.filter((e) => e.id !== action.payload.id),
        },
      };
    case actions.types.CLEAR_FILTERS:
      return {
        ...state,
        condicao: {
          ...state.condicao,
          cartaMes: null,
          brand: '_default',
          produto: '_default',
          dataFim: null,
          dataInicio: null,
        },
      };
    case actions.types.GET_BRAND_INPUTS_START:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_BRAND_INPUTS_SUCCESS:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          brandInputs: action.payload.data,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_BRAND_INPUTS_ERROR:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.GET_PRODUTO_INPUTS_START:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          isLoading: true,
          isError: false,
        },
      };
    case actions.types.GET_PRODUTO_INPUTS_SUCCESS:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          produtoInputs: action.payload.data,
          isLoading: false,
          isError: false,
        },
      };
    case actions.types.GET_PRODUTO_INPUTS_ERROR:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          isLoading: false,
          isError: true,
        },
      };
    case actions.types.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
