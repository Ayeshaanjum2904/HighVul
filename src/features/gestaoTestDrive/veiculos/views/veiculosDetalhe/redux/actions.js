const PREFIX_GET_DETALHE_VEICULO = 'veiculosDetalhe/GET_DETALHE_VEICULO';
const GET_DETALHE_VEICULO_START = `${PREFIX_GET_DETALHE_VEICULO}/START`;
const GET_DETALHE_VEICULO_SUCCESS = `${PREFIX_GET_DETALHE_VEICULO}/SUCCESS`;
const GET_DETALHE_VEICULO_ERROR = `${PREFIX_GET_DETALHE_VEICULO}/ERROR`;

const PREFIX_DELETE_VEICULO = 'veiculosDetalhe/DELETE_VEICULO';
const DELETE_VEICULO_START = `${PREFIX_DELETE_VEICULO}/START`;
const DELETE_VEICULO_SUCCESS = `${PREFIX_DELETE_VEICULO}/SUCCESS`;
const DELETE_VEICULO_ERROR = `${PREFIX_DELETE_VEICULO}/ERROR`;

const SET_OPEN = 'veiculosDetalhe/SET_OPEN';
const RESET_STORE = 'veiculosDetalhe/RESET_STORE';
const DISMISS_SNACKBAR = 'veiculosCadastro/DISMISS_SNACKBAR';

const setOpen = (isOpen) => ({
  type: SET_OPEN,
  payload: { isOpen },
});

const getDetalheVeiculoStart = () => ({
  type: GET_DETALHE_VEICULO_START,
});

const getDetalheVeiculoSuccess = (detalheVeiculo) => ({
  type: GET_DETALHE_VEICULO_SUCCESS,
  payload: { detalheVeiculo },
});

const getDetalheVeiculoError = () => ({
  type: GET_DETALHE_VEICULO_ERROR,
});

const deleteVeiculoStart = () => ({
  type: DELETE_VEICULO_START,
});

const deleteVeiculoError = () => ({
  type: DELETE_VEICULO_ERROR,
});

const deleteVeiculoSuccess = () => ({
  type: DELETE_VEICULO_SUCCESS,
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const resetStore = () => ({ type: RESET_STORE });

export default {
  types: {
    SET_OPEN,
    RESET_STORE,
    DISMISS_SNACKBAR,

    PREFIX_GET_DETALHE_VEICULO,
    GET_DETALHE_VEICULO_START,
    GET_DETALHE_VEICULO_SUCCESS,
    GET_DETALHE_VEICULO_ERROR,

    PREFIX_DELETE_VEICULO,
    DELETE_VEICULO_START,
    DELETE_VEICULO_SUCCESS,
    DELETE_VEICULO_ERROR,

  },
  setOpen,
  resetStore,
  dismissSnackbar,

  getDetalheVeiculoStart,
  getDetalheVeiculoSuccess,
  getDetalheVeiculoError,

  deleteVeiculoStart,
  deleteVeiculoError,
  deleteVeiculoSuccess,
};
