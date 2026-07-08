const PREFIX = 'descontoDetalhe';
const PREFIX_GET_DESCONTO_DETAIL = `${PREFIX}/GET_DESCONTO_DETAIL`;

const SET_PRODUTO = `${PREFIX}/SET_PRODUTO`;
const SET_MARCA = `${PREFIX}/SET_MARCA`;
const SET_DATA_INICIO = `${PREFIX}/SET_DATA_INICIO`;
const SET_DATA_FIM = `${PREFIX}/SET_DATA_FIM`;
const SET_DVE_NUMBER = `${PREFIX}/SET_DVE_NUMBER`;
const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_MVS_LIST = `${PREFIX}/SET_MVS_LIST`;
const SET_SELECTED_MVS = `${PREFIX}/SET_SELECTED_MVS`;
const REMOVE_SELECTED_MVS = `${PREFIX}/REMOVE_SELECTED_MVS`;
const SET_MODAL_OPEN = `${PREFIX}/SET_MODAL_OPEN`;
const SET_MVS_VALUE = `${PREFIX}/SET_MVS_VALUE`;
const CHANGE_DECONTO_MODEL = `${PREFIX}/CHANGE_DESCONTO_MODEL`;
const SET_UPLOAD_LOADING = `${PREFIX}/SET_UPLOAD_LOADING`;
const SET_MODAL_ERROR = `${PREFIX}/SET_MODAL_ERROR`;
const SET_IS_LOADING_MVS_LIST = `${PREFIX}/SET_IS_LOADING_MVS_LIST`;
const SET_SNACKBAR = `${PREFIX}/SET_SNACKBAR`;
const DISMISS_SNACKBAR = `${PREFIX}/DISMISS_SNACKBAR`;
const SET_STATUS = `${PREFIX}/SET_STATUS`;
const SET_DESCONTO_GLOBAL = `${PREFIX}/SET_DESCONTO_GLOBAL`;
const SET_CONCESSIONARIAS_LIST = `${PREFIX}/SET_CONCESSIONARIAS_LIST`;
const SET_SELECTED_CONCESSIONARIAS = `${PREFIX}/SET_SELECTED_CONCESSIONARIAS`;
const REMOVE_SELECTED_CONCESSIONARIA = `${PREFIX}/REMOVE_SELECTED_CONCESSIONARIA`;
const SET_MODAL_CONCESSIONARIA_OPEN = `${PREFIX}/SET_MODAL_CONCESSIONARIA_OPEN`;
const SET_IS_LOADING_CONCESSIONARIAS_LIST = `${PREFIX}/SET_IS_LOADING_CONCESSIONARIAS_LIST`;

const GET_BRAND_INPUTS_START = `${PREFIX}/GET_BRAND_INPUTS_START`;
const GET_BRAND_INPUTS_SUCCESS = `${PREFIX}/GET_BRAND_INPUTS_SUCCESS`;
const GET_BRAND_INPUTS_ERROR = `${PREFIX}/GET_BRAND_INPUTS_ERROR`;
const GET_PRODUTO_INPUTS_START = `${PREFIX}/GET_PRODUTO_INPUTS_START`;
const GET_PRODUTO_INPUTS_SUCCESS = `${PREFIX}/GET_PRODUTO_INPUTS_SUCCESS`;
const GET_PRODUTO_INPUTS_ERROR = `${PREFIX}/GET_PRODUTO_INPUTS_ERROR`;

const GET_DETAIL_START = `${PREFIX_GET_DESCONTO_DETAIL}/GET_DETAIL_START`;
const GET_DETAIL_SUCCESS = `${PREFIX_GET_DESCONTO_DETAIL}/GET_DETAIL_SUCCESS`;
const GET_DETAIL_ERROR = `${PREFIX_GET_DESCONTO_DETAIL}/GET_DETAIL_ERROR`;

const setProduto = (produto) => ({
  type: SET_PRODUTO,
  payload: { produto },
});

const setMarca = (marca) => ({
  type: SET_MARCA,
  payload: { marca },
});

const setDataInicio = (data) => ({
  type: SET_DATA_INICIO,
  payload: { data },
});

const setDataFim = (data) => ({
  type: SET_DATA_FIM,
  payload: { data },
});

const setDveNumber = (dve) => ({
  type: SET_DVE_NUMBER,
  payload: { dve },
});

const resetStore = () => ({
  type: RESET_STORE,
});

const setMvsList = (mvs) => ({
  type: SET_MVS_LIST,
  payload: { mvs },
});

const setSelectedMvs = (mvs) => ({
  type: SET_SELECTED_MVS,
  payload: { mvs },
});

const removeSelectedMvs = (mvs) => ({
  type: REMOVE_SELECTED_MVS,
  payload: { mvs },
});

const setModalOpen = (open) => ({
  type: SET_MODAL_OPEN,
  payload: { open },
});

const setMvsValue = (id, value) => ({
  type: SET_MVS_VALUE,
  payload: { id, value },
});

const changeDescontoModel = (oldId, mvs) => ({
  type: CHANGE_DECONTO_MODEL,
  payload: { oldId, mvs },
});

const getDetailStart = (id) => ({
  type: GET_DETAIL_START,
  payload: { id },
});

const getDetailError = () => ({
  type: GET_DETAIL_ERROR,
});

const getDetailSuccess = (descontos, isDuplicate = false) => ({
  type: GET_DETAIL_SUCCESS,
  payload: { descontos, isDuplicate },
});

const setUploadLoading = (value) => ({
  type: SET_UPLOAD_LOADING,
  payload: { value },
});

const setModalError = (value, errors = []) => ({
  type: SET_MODAL_ERROR,
  payload: { value, errors },
});

const setIsLoadingMvsList = (isLoading, isError) => ({
  type: SET_IS_LOADING_MVS_LIST,
  payload: { isLoading, isError },
});

const setSnackbar = (type, message) => ({
  type: SET_SNACKBAR,
  payload: { type, message },
});

const dismissSnackbar = (id) => ({
  type: DISMISS_SNACKBAR,
  payload: { id },
});

const setStatus = (id) => ({
  type: SET_STATUS,
  payload: { id },
});

const setDescontoGlobal = (valor) => ({
  type: SET_DESCONTO_GLOBAL,
  payload: { valor },
});

const setConcessionariasList = (concessionarias) => ({
  type: SET_CONCESSIONARIAS_LIST,
  payload: { concessionarias },
});

const setSelectedConcessionarias = (concessionarias) => ({
  type: SET_SELECTED_CONCESSIONARIAS,
  payload: { concessionarias },
});

const removeSelectedConcessionaria = (concessionaria) => ({
  type: REMOVE_SELECTED_CONCESSIONARIA,
  payload: { concessionaria },
});

const setModalConcessionariaOpen = (open) => ({
  type: SET_MODAL_CONCESSIONARIA_OPEN,
  payload: { open },
});

const setIsLoadingConcessionariasList = (isLoading, isError) => ({
  type: SET_IS_LOADING_CONCESSIONARIAS_LIST,
  payload: { isLoading, isError },
});

const getBrandInputsStart = () => ({
  type: GET_BRAND_INPUTS_START,
});

const getBrandInputsSuccess = (data) => ({
  type: GET_BRAND_INPUTS_SUCCESS,
  payload: { data },
});

const getBrandInputsError = () => ({
  type: GET_BRAND_INPUTS_ERROR,
});

const getProdutoInputsStart = () => ({
  type: GET_PRODUTO_INPUTS_START,
});

const getProdutoInputsSuccess = (data) => ({
  type: GET_PRODUTO_INPUTS_SUCCESS,
  payload: { data },
});

const getProdutoInputsError = () => ({
  type: GET_PRODUTO_INPUTS_ERROR,
});

export default {
  types: {
    SET_DATA_FIM,
    SET_DATA_INICIO,
    SET_PRODUTO,
    SET_MARCA,
    SET_DVE_NUMBER,
    RESET_STORE,
    SET_MVS_LIST,
    SET_SELECTED_MVS,
    REMOVE_SELECTED_MVS,
    SET_MODAL_OPEN,
    SET_MVS_VALUE,
    CHANGE_DECONTO_MODEL,
    SET_UPLOAD_LOADING,
    SET_MODAL_ERROR,
    SET_IS_LOADING_MVS_LIST,
    SET_SNACKBAR,
    DISMISS_SNACKBAR,
    SET_STATUS,
    SET_DESCONTO_GLOBAL,
    SET_CONCESSIONARIAS_LIST,
    SET_SELECTED_CONCESSIONARIAS,
    REMOVE_SELECTED_CONCESSIONARIA,
    SET_MODAL_CONCESSIONARIA_OPEN,
    SET_IS_LOADING_CONCESSIONARIAS_LIST,

    GET_BRAND_INPUTS_START,
    GET_BRAND_INPUTS_SUCCESS,
    GET_BRAND_INPUTS_ERROR,
    GET_PRODUTO_INPUTS_START,
    GET_PRODUTO_INPUTS_SUCCESS,
    GET_PRODUTO_INPUTS_ERROR,

    PREFIX_GET_DESCONTO_DETAIL,
    GET_DETAIL_ERROR,
    GET_DETAIL_START,
    GET_DETAIL_SUCCESS,
  },

  setDataFim,
  setDataInicio,
  setDveNumber,
  setProduto,
  setMarca,
  resetStore,
  setMvsList,
  setSelectedMvs,
  removeSelectedMvs,
  setModalOpen,
  setMvsValue,
  changeDescontoModel,
  getDetailError,
  getDetailStart,
  getDetailSuccess,
  setUploadLoading,
  setModalError,
  setIsLoadingMvsList,
  setSnackbar,
  dismissSnackbar,
  setStatus,
  setDescontoGlobal,
  setConcessionariasList,
  setSelectedConcessionarias,
  removeSelectedConcessionaria,
  setModalConcessionariaOpen,
  setIsLoadingConcessionariasList,
  getBrandInputsStart,
  getBrandInputsSuccess,
  getBrandInputsError,
  getProdutoInputsStart,
  getProdutoInputsSuccess,
  getProdutoInputsError,
};
