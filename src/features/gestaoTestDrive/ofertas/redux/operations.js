import service from './service';
import actions from './actions';

export const getOfertas = () => async (dispatch, getState) => {
  try {
    dispatch(actions.getOfertasStart());
    const {
      texto, data, marcas, produto, pagina, itensPorPagina, status,
    } = getState().ofertas.search;
    let { produtos } = getState().ofertas.search;

    const { gruposOfertas, marcasComOfertas } = await service.getOfertas(
      texto,
      data,
      marcas,
      produto,
      pagina,
      itensPorPagina,
      status,
    );
    if (produtos == null || produtos?.length === 0) produtos = await service.getProdutos();

    dispatch(actions.getOfertasSuccess(gruposOfertas, marcasComOfertas, produtos));
  } catch (e) {
    dispatch(actions.getOfertasError());
  }
};

export const setMarcas = (marcas) => (dispatch) => {
  dispatch(actions.setMarcas(marcas));
};

export const setProduto = (produto) => (dispatch) => {
  dispatch(actions.setProduto(produto));
};

export const setTexto = (texto) => (dispatch) => {
  dispatch(actions.setTexto(texto));
};

export const setData = (data) => (dispatch) => {
  dispatch(actions.setData(data));
};

export const setStatus = (status) => (dispatch) => {
  dispatch(actions.setStatus(status));
};

export const setPagina = (pagina) => (dispatch) => {
  dispatch(actions.setPagina(pagina));
  dispatch(getOfertas());
};

export const resetStore = () => (dispatch) => {
  dispatch(actions.resetStore());
};
