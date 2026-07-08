const PREFIX = 'condicaoDetalhe';
const PREFIX_GET_CONDICAO_DETAIL = `${PREFIX}/GET_CONDICAO_DETAIL`;

const SET_PRODUTO = `${PREFIX}/SET_PRODUTO`;
const SET_MARCA = `${PREFIX}/SET_MARCA`;
const SET_DATA_INICIO = `${PREFIX}/SET_DATA_INICIO`;
const SET_DATA_FIM = `${PREFIX}/SET_DATA_FIM`;
const SET_CARTA_MES = `${PREFIX}/SET_CARTA_MES`;
const SET_CONCESSIONARIAS_LIST = `${PREFIX}/SET_CONCESSIONARIAS_LIST`;
const RESET_STORE = `${PREFIX}/RESET_STORE`;
const SET_MVS_LIST = `${PREFIX}/SET_MVS_LIST`;
const SET_SELECTED_CONCESSIONARIAS = `${PREFIX}/SET_SELECTED_CONCESSIONARIAS`;
const SET_SELECTED_MVS = `${PREFIX}/SET_SELECTED_MVS`;
const REMOVE_SELECTED_CONCESSIONARIA = `${PREFIX}/REMOVE_SELECTED_CONCESSIONARIA`;
const REMOVE_SELECTED_MVS = `${PREFIX}/REMOVE_SELECTED_MVS`;
const SET_MODAL_OPEN = `${PREFIX}/SET_MODAL_OPEN`;
const SET_MODAL_CONCESSIONARIA_OPEN = `${PREFIX}/SET_MODAL_CONCESSIONARIA_OPEN`;
const SET_MVS_DESCONTO = `${PREFIX}/SET_MVS_DESCONTO`;
const SET_MVS_COEFICIENTE = `${PREFIX}/SET_MVS_COEFICIENTE`;
const SET_MVS_PARCELAS = `${PREFIX}/SET_MVS_PARCELAS`;
const SET_MVS_PRAZO = `${PREFIX}/SET_MVS_PRAZO`;
const SET_MVS_TAXA = `${PREFIX}/SET_MVS_TAXA`;
const SET_MVS_CONDICAO_OPERACIONAL = `${PREFIX}/SET_MVS_CONDICAO_OPERACIONAL`;
const CHANGE_CONDICAO_MODEL = `${PREFIX}/CHANGE_CONDICAO_MODEL`;
const SET_UPLOAD_LOADING = `${PREFIX}/SET_UPLOAD_LOADING`;
const SET_MODAL_ERROR = `${PREFIX}/SET_MODAL_ERROR`;
const SET_IS_LOADING_MVS_LIST = `${PREFIX}/SET_IS_LOADING_MVS_LIST`;
const SET_IS_LOADING_CONCESSIONARIAS_LIST = `${PREFIX}/SET_IS_LOADING_CONCESSIONARIAS_LIST`;
const SET_SNACKBAR = `${PREFIX}/SET_SNACKBAR`;
const SET_STATUS = `${PREFIX}/SET_STATUS`;
const DISMISS_SNACKBAR = `${PREFIX}/DISMISS_SNACKBAR`;
const CLEAR_FILTERS = `${PREFIX}/CLEAR_FILTERS`;

const GET_BRAND_INPUTS_START = `${PREFIX}/GET_BRAND_INPUTS_START`;
const GET_BRAND_INPUTS_SUCCESS = `${PREFIX}/GET_BRAND_INPUTS_SUCCESS`;
const GET_BRAND_INPUTS_ERROR = `${PREFIX}/GET_BRAND_INPUTS_ERROR`;
const GET_PRODUTO_INPUTS_START = `${PREFIX}/GET_PRODUTO_INPUTS_START`;
const GET_PRODUTO_INPUTS_SUCCESS = `${PREFIX}/GET_PRODUTO_INPUTS_SUCCESS`;
const GET_PRODUTO_INPUTS_ERROR = `${PREFIX}/GET_PRODUTO_INPUTS_ERROR`;

const GET_DETAIL_START = `${PREFIX_GET_CONDICAO_DETAIL}/GET_DETAIL_START`;
const GET_DETAIL_SUCCESS = `${PREFIX_GET_CONDICAO_DETAIL}/GET_DETAIL_SUCCESS`;
const GET_DETAIL_ERROR = `${PREFIX_GET_CONDICAO_DETAIL}/GET_DETAIL_ERROR`;

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

const setCartaMes = (cartaMes) => ({
  type: SET_CARTA_MES,
  payload: { cartaMes },
});

const resetStore = () => ({
  type: RESET_STORE,
});

const setConcessionariasList = (concessionarias) => ({
  type: SET_CONCESSIONARIAS_LIST,
  payload: { concessionarias },
});

const setMvsList = (mvs) => ({
  type: SET_MVS_LIST,
  payload: { mvs },
});

const setSelectedConcessionarias = (concessionarias) => ({
  type: SET_SELECTED_CONCESSIONARIAS,
  payload: { concessionarias },
});

const setSelectedMvs = (mvs) => ({
  type: SET_SELECTED_MVS,
  payload: { mvs },
});

const removeSelectedConcessionaria = (concessionaria) => ({
  type: REMOVE_SELECTED_CONCESSIONARIA,
  payload: { concessionaria },
});

const removeSelectedMvs = (mvs) => ({
  type: REMOVE_SELECTED_MVS,
  payload: { mvs },
});

const setModalOpen = (open) => ({
  type: SET_MODAL_OPEN,
  payload: { open },
});

const setModalConcessionariaOpen = (open) => ({
  type: SET_MODAL_CONCESSIONARIA_OPEN,
  payload: { open },
});

const setMvsDesconto = (value) => ({
  type: SET_MVS_DESCONTO,
  payload: { value },
});

const setMvsCoeficiente = (value) => ({
  type: SET_MVS_COEFICIENTE,
  payload: { value },
});

const setMvsParcelas = (value) => ({
  type: SET_MVS_PARCELAS,
  payload: { value },
});

const setMvsPrazo = (value) => ({
  type: SET_MVS_PRAZO,
  payload: { value },
});

const setMvsTaxa = (value) => ({
  type: SET_MVS_TAXA,
  payload: { value },
});

const setMvsCondicaoOperacional = (value) => ({
  type: SET_MVS_CONDICAO_OPERACIONAL,
  payload: { value },
});

const changeCondicaoModel = (oldId, mvs) => ({
  type: CHANGE_CONDICAO_MODEL,
  payload: { oldId, mvs },
});

const getDetailStart = (id) => ({
  type: GET_DETAIL_START,
  payload: { id },
});

const getDetailError = () => ({
  type: GET_DETAIL_ERROR,
});

const getDetailSuccess = (condicao, isDuplicate = false) => ({
  type: GET_DETAIL_SUCCESS,
  payload: { condicao, isDuplicate },
});

const setUploadLoading = (value) => ({
  type: SET_UPLOAD_LOADING,
  payload: { value },
});

const setModalError = (value, errors = []) => ({
  type: SET_MODAL_ERROR,
  payload: { value, errors },
});

const setIsLoadingConcessionariasList = (isLoading, isError) => ({
  type: SET_IS_LOADING_CONCESSIONARIAS_LIST,
  payload: { isLoading, isError },
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

const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

const setStatus = (id) => ({
  type: SET_STATUS,
  payload: { id },
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
    SET_CARTA_MES,
    RESET_STORE,
    SET_CONCESSIONARIAS_LIST,
    SET_MVS_LIST,
    SET_SELECTED_CONCESSIONARIAS,
    SET_SELECTED_MVS,
    REMOVE_SELECTED_CONCESSIONARIA,
    REMOVE_SELECTED_MVS,
    SET_MODAL_OPEN,
    SET_MODAL_CONCESSIONARIA_OPEN,
    SET_MVS_DESCONTO,
    SET_MVS_COEFICIENTE,
    SET_MVS_PARCELAS,
    SET_MVS_PRAZO,
    SET_MVS_TAXA,
    SET_MVS_CONDICAO_OPERACIONAL,
    CHANGE_CONDICAO_MODEL,
    SET_UPLOAD_LOADING,
    SET_MODAL_ERROR,
    SET_IS_LOADING_MVS_LIST,
    SET_IS_LOADING_CONCESSIONARIAS_LIST,
    SET_SNACKBAR,
    SET_STATUS,
    DISMISS_SNACKBAR,
    CLEAR_FILTERS,
    GET_BRAND_INPUTS_START,
    GET_BRAND_INPUTS_SUCCESS,
    GET_BRAND_INPUTS_ERROR,
    GET_PRODUTO_INPUTS_START,
    GET_PRODUTO_INPUTS_SUCCESS,
    GET_PRODUTO_INPUTS_ERROR,

    PREFIX_GET_CONDICAO_DETAIL,
    GET_DETAIL_ERROR,
    GET_DETAIL_START,
    GET_DETAIL_SUCCESS,
  },

  setDataFim,
  setDataInicio,
  setCartaMes,
  setProduto,
  setMarca,
  resetStore,
  setConcessionariasList,
  setMvsList,
  setSelectedConcessionarias,
  setSelectedMvs,
  removeSelectedConcessionaria,
  removeSelectedMvs,
  setModalOpen,
  setModalConcessionariaOpen,
  setMvsDesconto,
  setMvsCoeficiente,
  setMvsParcelas,
  setMvsPrazo,
  setMvsTaxa,
  setMvsCondicaoOperacional,
  changeCondicaoModel,
  getDetailError,
  getDetailStart,
  getDetailSuccess,
  setUploadLoading,
  setModalError,
  setIsLoadingConcessionariasList,
  setIsLoadingMvsList,
  setSnackbar,
  dismissSnackbar,
  clearFilters,
  setStatus,
  getBrandInputsStart,
  getBrandInputsSuccess,
  getBrandInputsError,
  getProdutoInputsStart,
  getProdutoInputsSuccess,
  getProdutoInputsError,
};
