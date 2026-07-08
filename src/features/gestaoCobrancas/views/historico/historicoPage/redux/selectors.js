import { createSelector } from 'reselect';
import _ from 'lodash';

import { camelFormat } from 'utils/format';

const regionalList = createSelector(
  (state) => state.historico.page.selectors?.regional,
  (regionais) => (regionais || []).map((regional) => ({
    value: regional.id,
    text: camelFormat(regional.regional, 2),
  })),
);

const tipoList = createSelector(
  (state) => state.historico.page.selectors?.tipo,
  (tipos) => (tipos || []).map((tipo) => ({
    value: tipo.id,
    text: camelFormat(tipo.descricao, 2),
  })),
);

const date = createSelector(
  (state) => state.historico.page.filters?.date,
  (data) => (_.isEmpty(data) ? null : data),
);

export default {
  regionalList,
  tipoList,
  date,
};
