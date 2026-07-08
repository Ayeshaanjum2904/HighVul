import { createSelector } from 'reselect';

import { camelFormat } from 'utils/format';

const marcasList = createSelector(
  (state) => state?.gerentes?.page?.marcas,
  (marcas) => (marcas || []).map((item) => ({
    value: item.id,
    label: `${camelFormat(item.marca)}`,
  })),
);

const regionaisList = createSelector(
  (state) => state?.gerentes?.page?.regionais,
  (regionais) => (regionais || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.regional, 2)}`,
  })),
);

export default {
  marcasList,
  regionaisList,
};
