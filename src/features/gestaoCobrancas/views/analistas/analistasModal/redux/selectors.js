import { createSelector } from 'reselect';
import _ from 'lodash';

import { camelFormat } from 'utils/format';

const disableButton = createSelector(
  (state) => state?.analistas?.modal?.analista,
  (analista) => (!analista.nome || !analista.email
              || !analista.regional || !analista.marca),
);

const disableCloseButton = createSelector(
  (state) => state?.analistas?.modal?.deleteAnalistaList,
  (state) => state?.analistas?.modal?.insertAnalista?.isLoading,
  (deleteAnalistaList, isLoading) => (!_.isEmpty(deleteAnalistaList) || isLoading),
);

const marcasList = createSelector(
  (state) => state?.analistas?.modal?.marcas,
  (marcas) => (marcas || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.marca)}`,
  })),
);

const regionaisList = createSelector(
  (state) => state?.analistas?.modal?.regionais,
  (regionais) => (regionais || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.regional, 2)}`,
  })),
);

const listTitle = createSelector(
  (state) => state?.analistas?.modal?.analista,
  (analista) => (!analista.regional || !analista.marca
    ? 'Selecione um regional/brand'
    : 'Nenhum analista associado'),
);

export default {
  disableButton,
  disableCloseButton,
  marcasList,
  regionaisList,
  listTitle,
};
