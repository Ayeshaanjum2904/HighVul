import { createSelector } from 'reselect';

import { camelFormat } from 'utils/format';

const brandsList = createSelector(
  (state) => state?.contaCorrenteDealer?.concessionariaDados?.brands,
  (brands) => (brands || []).map((item) => ({
    value: item.brandId,
    label: `${camelFormat(item.brand)}`,
  })),
);

export default {
  brandsList,
};
