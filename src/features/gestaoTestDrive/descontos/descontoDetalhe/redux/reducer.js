import moment from 'moment';
import actions from './actions';

const INITIAL_STATE = {
  desconto: {
    dve: null,
    brand: null,
    produto: null,
    dataFim: null,
    dataInicio: null,
    id: null,
    descontos: [],
    descontoGlobal: null,
  },

  originalDesconto: null,

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
        desconto: {
          ...state.desconto,
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
      const { descontos, isDuplicate } = action.payload;
      const concessionarias = (descontos.codigosConcessionarias || [])
        .map((codigo) => state.concessionariasList.find(
          (c) => Number(c.value) === Number(codigo),
        ))
        .filter(Boolean);
      const descontoData = {
        ...state.desconto,
        dve: descontos.dveMkt,
        dataInicio: isDuplicate ? null : moment(new Date(descontos.vigenciaInicio)),
        dataFim: isDuplicate ? null : moment(new Date(descontos.vigenciaFim)),
        produto: descontos.produtoId,
        brand: descontos.marca,
        descontoGlobal: descontos.percentualAVista,
        descontos: descontos.descontoVeiculos.map((desconto) => ({
          modelId: desconto.modelo,
          versionId: desconto.versao,
          serieId: desconto.serie,
          marca: desconto.marca,
          id: desconto.id,
          valor: desconto.percentualAVista,
          modelYear: desconto.modelYear,
          allestimento: desconto.allestimento,
          value: desconto.modelo.concat(desconto.versao).concat(desconto.serie)
            .concat(desconto.modelYear),
        })),
      };

      return {
        ...state,
        isLoading: false,
        isError: false,
        desconto: descontoData,
        originalDesconto: isDuplicate ? {
          ...descontoData,
          dataInicio: moment(new Date(descontos.vigenciaInicio)),
          dataFim: moment(new Date(descontos.vigenciaFim)),
        } : state.originalDesconto,
        originalConcessionarias: concessionarias,
        concessionariasSelecionadas: concessionarias,
      };
    }
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action = { type: '@@descontoDetalhe/INIT' }) => {
  if (action.type.startsWith(actions.types.PREFIX_GET_DESCONTO_DETAIL)) {
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
        desconto: {
          ...state.desconto,
          brand: action.payload.marca,
          descontos: [],
        },
      };
    case actions.types.SET_PRODUTO:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          produto: action.payload.produto,
        },
      };
    case actions.types.SET_DATA_FIM:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          dataFim: action.payload.data,
        },
      };
    case actions.types.SET_DATA_INICIO:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          dataInicio: action.payload.data,
        },
      };
    case actions.types.SET_DVE_NUMBER:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          dve: action.payload.dve,
        },
      };
    case actions.types.SET_MVS_LIST:
      return {
        ...state,
        mvsList: action.payload.mvs,
      };
    case actions.types.SET_CONCESSIONARIAS_LIST:
      return {
        ...state,
        concessionariasList: action.payload.concessionarias,
      };
    case actions.types.SET_SELECTED_CONCESSIONARIAS:
      return {
        ...state,
        concessionariasSelecionadas: action.payload.concessionarias,
      };
    case actions.types.REMOVE_SELECTED_CONCESSIONARIA:
      return {
        ...state,
        concessionariasSelecionadas: [
          ...state.concessionariasSelecionadas.filter((c) => c.value
           !== action.payload.concessionaria),
        ],
      };
    case actions.types.SET_MODAL_CONCESSIONARIA_OPEN:
      return {
        ...state,
        isModalConcessionariaOpen: action.payload.open,
      };
    case actions.types.SET_SELECTED_MVS:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          descontos: Array.isArray(action.payload.mvs)
            ? action.payload.mvs.map((m) => {
              const index = state.desconto.descontos
                .findIndex((element) => element.value === m.value);
              if (index >= 0) {
                return state.desconto.descontos[index];
              }
              return m;
            })
            : [action.payload.mvs],
        },
      };
    case actions.types.REMOVE_SELECTED_MVS:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          descontos: [
            ...state.desconto.descontos.filter((mvs) => mvs.value !== action.payload.mvs),
          ],
        },
      };
    case actions.types.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload.open,
      };
    case actions.types.SET_MVS_VALUE:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          descontos: [...state.desconto.descontos.map((d) => {
            if (d.value === action.payload.id) {
              return {
                ...d,
                valor: action.payload.value,
              };
            }
            return d;
          })],
        },
      };
    case actions.types.CHANGE_DECONTO_MODEL:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          descontos: [...state.desconto.descontos.map((d) => {
            if (d.value === action.payload.oldId) {
              return {
                ...action.payload.mvs,
                id: d.id,
                valor: d.valor,
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
    case actions.types.SET_IS_LOADING_MVS_LIST:
      return {
        ...state,
        isLoadingMvsList: action.payload.isLoading,
        isErrorMvsList: action.payload.isError,
      };
    case actions.types.SET_IS_LOADING_CONCESSIONARIAS_LIST:
      return {
        ...state,
        isLoadingConcessionariasList: action.payload.isLoading,
        isErrorConcessionariasList: action.payload.isError,
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
    case actions.types.SET_STATUS:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          descontos: [...state.desconto.descontos.map((d) => {
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
    case actions.types.SET_DESCONTO_GLOBAL:
      return {
        ...state,
        desconto: {
          ...state.desconto,
          descontoGlobal: action.payload.valor,
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
