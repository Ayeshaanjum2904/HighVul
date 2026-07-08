import { createSelector } from 'reselect';

import { Loader } from '../enums';
import fluxoToDonut from './fluxoToDonut';

const getLoader = createSelector(
  (dashboard) => dashboard?.principal?.page?.dataLoader,
  (dataLoaders) => dataLoaders?.find((l) => l.id === Loader.fluxo),
);

export const isError = createSelector(
  getLoader,
  (loader) => loader?.isError === true,
);

export const isLoading = createSelector(
  getLoader,
  (loader) => loader?.isLoading === true,
);

const createGetFluxoSelector = (id) => createSelector(
  (dashboard) => dashboard?.principal?.fluxo,
  (fluxo) => fluxo?.find((f) => f.id === id),
);

export const donutData = {
  aprovacaoComercial: createSelector(
    createGetFluxoSelector('analise_comercial'),
    (fluxo) => fluxoToDonut(fluxo),
  ),
  analiseCredito: createSelector(
    createGetFluxoSelector('analise_credito'),
    (fluxo) => fluxoToDonut(fluxo),
  ),
  modalidade: createSelector(
    createGetFluxoSelector('reversao'),
    (fluxo) => fluxoToDonut(fluxo),
  ),
  pedidoIndusrial: createSelector(
    createGetFluxoSelector('separacao'),
    (fluxo) => fluxoToDonut(fluxo),
  ),
  prontoParaFaturamento: createSelector(
    createGetFluxoSelector('pronto_para_faturamento'),
    (fluxo) => fluxoToDonut(fluxo),
  ),
};
