import { createSelector } from 'reselect';
import { Loader } from '../enums';

const dataLoader = (state) => state?.principal?.page?.dataLoader;

const isLoading = createSelector(
  dataLoader,
  (loader) => loader?.find((dl) => dl.id === Loader.pedidosConcessionaria)?.isLoading || false,
);

const isError = createSelector(
  dataLoader,
  (loader) => loader?.find((dl) => dl.id === Loader.pedidosConcessionaria)?.isError || false,
);

const isDisabled = createSelector(
  (state) => state?.principal?.page?.filters?.selectedGrupo,
  (state) => state?.principal?.page?.filters?.codigoBuc,
  (selectedGrupo, codigoBuc) => selectedGrupo?.length <= 1 || codigoBuc !== null,
);

const selectSubtitle = createSelector(
  isDisabled,
  (state) => state?.principal?.page?.isCollapseConcessionariasOpen,
  (disabled, isCollapseOpen) => {
    if (isCollapseOpen) return null;
    if (disabled) return 'Não é possível exibir dados ao filtrar apenas um ponto de venda. Remova o filtro para exibir os dados de grupos.';
    return 'Clique para ver em detalhes os números separados por grupo.';
  },
);

export default {
  isLoading,
  isError,
  isDisabled,
  selectSubtitle,
};
