import { createSelector } from 'reselect';
import _, { isEmpty } from 'lodash';

import { formatDate } from 'utils/format';
import { DateRange } from '../enums';

const dataLoader = (state) => state?.principal?.page?.dataLoader;

export const hasError = createSelector(
  dataLoader,
  (state) => state?.principal?.pedidosConcessionaria?.downloadStatus?.isError,
  (loader, downloadError) => (!_.isEmpty((loader || []).filter((l) => l?.isError === true))
|| downloadError),
);

export const isLoading = createSelector(
  dataLoader,
  (loader) => (!_.isEmpty((loader || []).filter((l) => l?.isLoading === true))),
);

export const errorParams = createSelector(
  dataLoader,
  (state) => state?.principal?.pedidosConcessionaria?.downloadStatus?.isError,
  (loader, downloadError) => {
    if (!isEmpty((loader || []).filter((l) => l?.isError === true))) {
      return {
        title: 'Ocorreu um erro! Algumas informações não puderam ser carregadas.',
        showButton: true,
      };
    }
    if (downloadError) {
      return {
        title: 'Ocorreu um erro! Não foi possivel exportar o arquivo.',
        showButton: false,
      };
    }

    return null;
  },
);

export const formattedDateFilter = createSelector(
  (state) => state?.principal?.page?.filters?.filterType,
  (state) => state?.principal?.page?.filters?.startDate,
  (state) => state?.principal?.page?.filters?.endDate,
  (filterType, startDate, endDate) => {
    if (filterType === DateRange.today || filterType === DateRange.yesterday) {
      return formatDate(startDate, 'MMMM YYYY');
    }

    if (filterType === DateRange.all) {
      return 'Total';
    }

    const start = formatDate(startDate, 'DD [de] MMM YYYY');
    const end = formatDate(endDate, 'DD [de] MMM YYYY');
    return `${start} - ${end}`;
  },
);

export const formatGrupos = createSelector(
  (state) => state?.principal?.page?.grupos?.filterData,
  (grupos) => (grupos || []).map((e) => ({
    brand: e.brand || '',
    codigoBuc: e.cnpjRaiz || '',
    nome: e.nome || '',
    text: `${e.cnpjRaiz || ''} - ${e.brand || ''} - ${e.nome || ''}`,
    value: `${e.cnpjRaiz || ''} - ${e.brand || ''} - ${e.nome || ''}`,
  })),
);

export const formatModelos = createSelector(
  (state) => state?.principal?.page?.modelos?.filterData,
  (modelos) => (modelos || []).map((e) => ({
    text: e.nome,
    value: e.codigo,
  })),
);
