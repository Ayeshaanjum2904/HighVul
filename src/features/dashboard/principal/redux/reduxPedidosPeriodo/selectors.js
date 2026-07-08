import { createSelector } from 'reselect';

import * as ChartColors from 'common/charts/formatting/colors';
import { injectColors } from 'common/charts/formatting/format';

import * as ChartTransformers from './chartTransformers';

import { Loader } from '../enums';

const grupoEtapas = createSelector(
  (state) => state?.pedidosPeriodo?.pedidosPeriodo,
  (etapas) => (etapas || []).map((e) => ({
    label: e.label,
    total: e.totalConvencional + e.totalAdicional + e.totalExcepcional,
  })),
);

const isLoading = createSelector(
  (state) => state?.page?.dataLoader,
  (dataLoader) => dataLoader.find((dl) => dl.id === Loader.pedidosPeriodo)?.isLoading || false,
);

const isError = createSelector(
  (state) => state?.page?.dataLoader,
  (dataLoader) => dataLoader.find((dl) => dl.id === Loader.pedidosPeriodo)?.isError || false,
);

const pedidosPeriodoChartData = createSelector(
  (state) => state?.pedidosPeriodo,
  (pedidosPeriodo) => ChartTransformers.transformPedidosPeriodo(
    pedidosPeriodo?.pedidosPeriodo,
  ),
);

const tipoPedidos = createSelector(
  (state) => state?.principal?.pedidosPeriodo,
  (pedidosPeriodo) => {
    const datasets = ChartTransformers.transformPedidosPeriodo(
      pedidosPeriodo?.pedidosPeriodo,
      null,
    );
    const formatedData = injectColors(datasets, ChartColors.fidisColors);

    if (formatedData?.labels?.length <= 0) return null;

    const dataset = formatedData.datasets;
    const labels = dataset.map((ds) => ds.label);
    const data = dataset.map((ds) => ds.data.reduce((sum, b) => sum + b, 0) || 0);
    const backgroundColor = dataset.map((ds) => ds.backgroundColor);

    return {
      labels,
      datasets: [{
        data,
        backgroundColor,
      }],
    };
  },
);

export default {
  grupoEtapas,
  isLoading,
  isError,
  pedidosPeriodoChartData,
  tipoPedidos,
};
