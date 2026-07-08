import { createSelector } from 'reselect';

import { camelFormat } from 'utils/format';

const marcasList = createSelector(
  (state) => state?.grupos?.page?.marcas,
  (marcas) => (marcas || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.marca)}`,
  })),
);

const regionaisList = createSelector(
  (state) => state?.grupos?.page?.regionais,
  (regionais) => (regionais || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.regional, 2)}`,
  })),
);

const showWarning = createSelector(
  (state) => state?.grupos?.page?.list?.grupos,
  (grupos) => (grupos || []).some((g) => g.statusVendaDireta === false
                                      || g.statusFloorPlan === false),
);

export default {
  marcasList,
  regionaisList,
  showWarning,
};
