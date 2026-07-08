import { createSelector } from 'reselect';

import * as ChartColors from 'common/charts/formatting/colors';
import { injectColors } from 'common/charts/formatting/format';

import * as ChartTransformers from './chartTransformers';

import { Loader } from '../enums';

const grupoEtapas = createSelector(
  (state) => state?.principal?.pedidosArea?.selectedProduct,
  (state) => state?.principal?.pedidosArea?.pedidosArea,
  (selectedProduct, etapas) => {
    if (selectedProduct === 'convencional') {
      return (etapas || []).map((e) => ({
        label: e.label,
        total: e.totalConvencional,
      }));
    }

    if (selectedProduct === 'adicional') {
      return (etapas || []).map((e) => ({
        label: e.label,
        total: e.totalAdicional,
      }));
    }

    if (selectedProduct === 'excecao') {
      return (etapas || []).map((e) => ({
        label: e.label,
        total: e.totalExcepcional,
      }));
    }

    return (etapas || []).map((e) => ({
      label: e.label,
      total: e.totalConvencional + e.totalAdicional + e.totalExcepcional,
    }));
  },
);

const isLoading = createSelector(
  (state) => state?.principal?.page?.dataLoader,
  (dataLoader) => dataLoader.find((dl) => dl.id === Loader.pedidosArea)?.isLoading || false,
);

const isError = createSelector(
  (state) => state?.principal?.page?.dataLoader,
  (dataLoader) => dataLoader.find((dl) => dl.id === Loader.pedidosArea)?.isError || false,
);

const pedidosAreaChartData = createSelector(
  (state) => state?.principal?.pedidosArea,
  (pedidosArea) => ChartTransformers.transformPedidosArea(
    pedidosArea?.pedidosArea,
    pedidosArea?.selectedProduct,
  ),
);

const tipoPedidos = createSelector(
  (state) => state?.principal?.pedidosArea,
  (pedidosArea) => {
    const datasets = ChartTransformers.transformPedidosArea(pedidosArea?.pedidosArea, null);
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
  pedidosAreaChartData,
  tipoPedidos,
};
