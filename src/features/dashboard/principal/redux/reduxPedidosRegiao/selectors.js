import { createSelector } from 'reselect';
import _ from 'lodash';

import {
  transformModalidadeRegiao,
  transformCreditoRegiao,
} from './chartTransformers';

import { Loader } from '../enums';

const isDisabled = createSelector(
  (state) => state?.principal?.page?.filters?.selectedRegional,
  (state) => state?.principal?.page?.filters?.codigoBuc,
  (selectedRegional, codigoBuc) => selectedRegional?.length <= 1 || codigoBuc !== null,
);

const selectSubtitle = createSelector(
  isDisabled,
  (state) => state?.principal?.page?.isCollapseRegionaisOpen,
  (disabled, isCollapseOpen) => {
    if (isCollapseOpen) return null;
    if (disabled) return 'Não é possível exibir dados ao filtrar apenas um ponto de venda. Remova o filtro para exibir os dados de regionais.';
    return 'Clique para ver em detalhes os números separados por regional.';
  },
);

const pedidosRegiaoChartData = createSelector(
  (state) => state?.principal?.pedidosRegiao,
  (pedidosRegiao) => ({
    labels: (pedidosRegiao.map((pr) => pr.regiao)),
    datasets: [{
      data: pedidosRegiao.map((pr) => pr.modalidade.reduce((sum, b) => sum + (b?.value || 0), 0)),
    }],
  }),
);

const modalidadeRegiaoChartData = createSelector(
  (state) => state?.principal?.pedidosRegiao,
  (pedidosRegiao) => transformModalidadeRegiao(pedidosRegiao),

);

const creditoRegiaoChartData = createSelector(
  (state) => state?.principal?.pedidosRegiao,
  (pedidosRegiao) => transformCreditoRegiao(pedidosRegiao),
);

const isLoading = createSelector(
  (state) => state?.principal?.page?.dataLoader,
  (dataLoader) => dataLoader.find((dl) => dl.id === Loader.pedidosRegiao)?.isLoading || false,
);

const isError = createSelector(
  (state) => state?.principal?.page?.dataLoader,
  (dataLoader) => dataLoader.find((dl) => dl.id === Loader.pedidosRegiao)?.isError || false,
);

const isCreditoRegiaoEmpty = createSelector(
  (state) => state?.principal?.pedidosRegiao,
  (pedidosRegiao) => {
    const data = transformCreditoRegiao(pedidosRegiao);

    let isEmpty = true;
    if (_.isEmpty(data)) return isEmpty;

    data.datasets.forEach((dt) => {
      if (dt.data.some((p) => p !== 0)) {
        isEmpty = false;
      }
    });

    return isEmpty;
  },
);

const isModalidadeRegiaoEmpty = createSelector(
  (state) => state?.principal?.pedidosRegiao,
  (pedidosRegiao) => {
    const data = transformModalidadeRegiao(pedidosRegiao);

    let isEmpty = true;
    if (_.isEmpty(data)) return isEmpty;

    data.datasets.forEach((dt) => {
      if (dt.data.some((p) => p !== 0)) {
        isEmpty = false;
      }
    });

    return isEmpty;
  },
);

export default {
  isDisabled,
  selectSubtitle,
  pedidosRegiaoChartData,
  modalidadeRegiaoChartData,
  isLoading,
  isError,
  creditoRegiaoChartData,
  isCreditoRegiaoEmpty,
  isModalidadeRegiaoEmpty,
};
