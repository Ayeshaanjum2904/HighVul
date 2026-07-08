import { createSelector } from 'reselect';

const getRegionaisFilter = createSelector(
  (state) => state?.principal?.page?.regionais?.data,
  (regionais) => regionais.map((r) => ({
    value: r.value,
    text: `${r.value} - ${r.text}`,
  })),
);

const getPontosFilter = createSelector(
  (state) => state?.principal?.page?.pontos?.filterData,
  (dealers) => dealers.map((d) => ({
    value: d.value,
    text: d.text,
    group: d.text.substring(8).trim(),
  })),
);

export default {
  getRegionaisFilter,
  getPontosFilter,
};
