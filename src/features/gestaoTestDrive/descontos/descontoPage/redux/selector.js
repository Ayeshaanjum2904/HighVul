import { createSelector } from 'reselect';
import _ from 'lodash';
import { camelFormat } from 'utils/format';

const dataInicio = createSelector(
  (state) => state.page.filters?.dataInicio,
  (data) => (_.isEmpty(data) ? null : data),
);

const dataFim = createSelector(
  (state) => state.page.filters?.dataFim,
  (data) => (_.isEmpty(data) ? null : data),
);

const marcasList = createSelector(
  (state) => state.page.selectors.brands,
  (marcas) => (marcas || []).map((marca) => ({
    text: camelFormat(marca, 2),
    value: marca,
  })),
);

const produtosList = createSelector(
  (state) => state.page.selectors.produtos,
  (produtos) => (produtos || []).map((produto) => ({
    text: camelFormat(produto.descricao, 2),
    value: produto.id,
  })),
);

export default {
  dataInicio,
  dataFim,
  marcasList,
  produtosList,
};
