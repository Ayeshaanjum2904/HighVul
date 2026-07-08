import { createSelector } from 'reselect';

import { camelFormat } from '../../../../../../utils/format';

const regionalList = createSelector(
  (state) => state.concessionarias.page.selectors.regional,
  (regionais) => (regionais || []).map((regional) => ({
    value: regional.id,
    text: camelFormat(regional.regional, 2),
  })),
);

const brandList = createSelector(
  (state) => state.concessionarias.page.selectors.brand,
  (brands) => (brands || []).map((brand) => ({
    value: brand.id,
    text: camelFormat(brand.marca),
  })),
);

export default {
  brandList,
  regionalList,
};
