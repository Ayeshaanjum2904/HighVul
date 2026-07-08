import { createSelector } from 'reselect';
import _ from 'lodash';

import { getColorByType } from 'common/charts/formatting/format';
import { Loader } from '../enums';

const dataLoader = (state) => state?.principal?.page?.dataLoader;

const isLoading = createSelector(
  (dataLoader),
  (loader) => loader?.find((dl) => dl.id === Loader.modeloRegiao)?.isLoading || false,
);

const isError = createSelector(
  dataLoader,
  (loader) => loader?.find((dl) => dl.id === Loader.modeloRegiao)?.isError || false,
);

const modeloRegiaoChartData = createSelector(
  (state) => state?.principal?.modeloRegiao,
  (modeloRegiao) => {
    if (_.isEmpty(modeloRegiao)) return {};

    return {
      labels: modeloRegiao[0].regioes.map((m) => m.regiao),
      datasets: [...modeloRegiao.map((m, i) => ({
        label: m.modelo,
        data: m.regioes.map((r) => r.total),
        backgroundColor: m.regioes.map((() => getColorByType('all', i))),
      }))],
    };
  },
);

export default {
  isLoading,
  isError,
  modeloRegiaoChartData,
};
