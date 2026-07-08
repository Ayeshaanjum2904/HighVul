import { createSelector } from 'reselect';

import { camelFormat } from 'utils/format';

const marcasList = createSelector(
  (state) => state?.grupos?.modal?.marcas,
  (marcas) => (marcas || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.marca)}`,
  })),
);

const regionaisList = createSelector(
  (state) => state?.grupos?.modal?.regionais,
  (regionais) => (regionais || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.regional, 2)}`,
  })),
);

const isButtonEnabled = createSelector(
  (state) => state?.grupos?.modal?.grupo,
  (grupo) => (!grupo.nomeConta || !grupo.cnpj
             || !grupo.regionalId || !grupo.marcaId),
);

export default {
  marcasList,
  regionaisList,
  isButtonEnabled,
};
