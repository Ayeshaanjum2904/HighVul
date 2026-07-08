import { createSelector } from 'reselect';
import _ from 'lodash';

import { camelFormat } from 'utils/format';

const disableButton = createSelector(
  (state) => state?.gerentes?.modal?.gerente,
  (gerente) => (!gerente.nome || !gerente.email
              || !gerente.regional || !gerente.marca),
);

const disableCloseButton = createSelector(
  (state) => state?.gerentes?.modal?.deleteGerenteList,
  (state) => state?.gerentes?.modal?.insertGerente?.isLoading,
  (deleteGerenteList, isLoading) => (!_.isEmpty(deleteGerenteList) || isLoading),
);

const marcasList = createSelector(
  (state) => state?.gerentes?.modal?.marcas,
  (marcas) => (marcas || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.marca)}`,
  })),
);

const regionaisList = createSelector(
  (state) => state?.gerentes?.modal?.regionais,
  (regionais) => (regionais || []).map((item) => ({
    value: item.id,
    text: `${camelFormat(item.regional, 2)}`,
  })),
);

const listTitle = createSelector(
  (state) => state?.gerentes?.modal?.gerente,
  (gerente) => (!gerente.regional || !gerente.marca
    ? 'Selecione um regional/brand'
    : 'Nenhum gerente associado'),
);

export default {
  disableButton,
  disableCloseButton,
  marcasList,
  regionaisList,
  listTitle,
};
