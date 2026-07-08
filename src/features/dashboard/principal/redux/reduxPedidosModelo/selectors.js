import { getColorByType } from 'common/charts/formatting/format';
import { createSelector } from 'reselect';
import { camelFormat } from 'utils/format';
import { Loader } from '../enums';

const dataLoader = (state) => state?.principal?.page?.dataLoader;

const getDonutData = createSelector(
  (state) => state?.principal?.pedidosModelo?.veiculos,
  (veiculos) => {
    const data = (veiculos || []).map((v) => (v.total));
    const backgroundColors = (veiculos || []).map((v, i) => getColorByType(v.colorType, i));
    const labels = (veiculos || []).map((v) => camelFormat(v.modelo));

    return {
      labels,
      datasets: [{
        data,
        backgroundColor: backgroundColors,
      }],
    };
  },
);

const isLoading = createSelector(
  dataLoader,
  (loader) => loader?.find((dl) => dl.id === Loader.pedidosModelo)?.isLoading || false,
);

const isError = createSelector(
  dataLoader,
  (loader) => loader?.find((dl) => dl.id === Loader.pedidosModelo)?.isError || false,
);

export default {
  getDonutData,
  isLoading,
  isError,
};
