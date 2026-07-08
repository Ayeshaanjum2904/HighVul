import { createSelector } from 'reselect';

const produtoList = createSelector(
  (state) => state?.produtosList || [],
  (listProdutos) => listProdutos.map((item) => ({
    value: item.Id,
    text: item.Nome,
  })),
);

const statusLabelsMap = {
  finalizado: 'Finalizado',
  cancelado: 'Cancelado',
  aguardando_condicoes_e_analise_do_credito: 'Aguardando condições e análise do crédito',
};
const statusList = createSelector(
  (state) => state?.statusList || [],
  (listStatus) => listStatus.map((item) => {
    const fallback = item.replace(/_/g, ' ')
      .charAt(0).toUpperCase() + item.replace(/_/g, ' ').slice(1).toLowerCase();
    return {
      value: item,
      text: statusLabelsMap[item] || fallback,
    };
  }),
);

const getTemplateLoadingStatus = (state) => state?.template?.isLoading;

const getCriacaoOrdemLoadingStatus = (state) => state?.novaOrdem?.isLoading;

const feriadosList = (state) => state?.feriadosList;

const isModalOrdemOpen = (state) => state?.modalOrdem.open;

const getSelectedOrdem = (state) => state?.modalOrdem.selectedOrdem;

const isModalVincularCondicaoOpen = (state) => state?.modalVincularCondicao.open;

const getSelectedOrdemVincular = (state) => state?.modalVincularCondicao.selectedOrdem;

const getCondicoes = (state) => state?.modalVincularCondicao?.condicoes || [];

const isCondicoesLoading = (state) => state?.modalVincularCondicao.isLoading;

const isCondicoesError = (state) => state?.modalVincularCondicao.isError;

const getCondicoesErrorMessage = (state) => state?.modalVincularCondicao.errorMessage;

const getLoadingCondicoes = (state) => state?.modalVincularCondicao.loadingCondicoes || {};

const isModalVincularCondicaoAVistaOpen = (state) => state?.modalVincularCondicaoAVista.open;

const getSelectedOrdemVincularAVista = (state) => state?.modalVincularCondicaoAVista.selectedOrdem;

const getCondicoesAVista = (state) => state?.modalVincularCondicaoAVista?.condicoes || [];

const isCondicoesAVistaLoading = (state) => state?.modalVincularCondicaoAVista.isLoading;

const isCondicoesAVistaError = (state) => state?.modalVincularCondicaoAVista.isError;

const getCondicoesAVistaErrorMessage = (state) => state?.modalVincularCondicaoAVista.errorMessage;

const getLoadingCondicoesAVista = (state) => (
  state?.modalVincularCondicaoAVista.loadingCondicoes || {}
);

const isCondicaoLoading = (state, condicaoId) => (
  state?.modalVincularCondicao.loadingCondicoes?.[condicaoId] || false
);

const isCondicaoAVistaLoading = (state, descontoId) => (
  state?.modalVincularCondicaoAVista.loadingCondicoes?.[descontoId] || false
);

const getVeiculosSemCondicaoComercial = (state) => (
  state?.modalVincularCondicao?.veiculosSemCondicao || []
);

const isVeiculosSemCondicaoComercialLoading = (state) => (
  state?.modalVincularCondicao?.isLoadingVeiculosSemCondicao || false
);

const isListaVeiculosComercialVisible = (state) => (
  state?.modalVincularCondicao?.isListaVeiculosVisible || false
);

const getVeiculosSemCondicaoAVista = (state) => (
  state?.modalVincularCondicaoAVista?.veiculosSemCondicao || []
);

const isVeiculosSemCondicaoAVistaLoading = (state) => (
  state?.modalVincularCondicaoAVista?.isLoadingVeiculosSemCondicao || false
);

const isListaVeiculosAVistaVisible = (state) => (
  state?.modalVincularCondicaoAVista?.isListaVeiculosVisible || false
);

export default {
  produtoList,
  statusList,
  getTemplateLoadingStatus,
  feriadosList,
  getCriacaoOrdemLoadingStatus,
  isModalOrdemOpen,
  getSelectedOrdem,
  isModalVincularCondicaoOpen,
  getSelectedOrdemVincular,
  getCondicoes,
  isCondicoesLoading,
  isCondicoesError,
  getCondicoesErrorMessage,
  getLoadingCondicoes,
  isCondicaoLoading,
  isModalVincularCondicaoAVistaOpen,
  getSelectedOrdemVincularAVista,
  getCondicoesAVista,
  isCondicoesAVistaLoading,
  isCondicoesAVistaError,
  getCondicoesAVistaErrorMessage,
  getLoadingCondicoesAVista,
  isCondicaoAVistaLoading,
  getVeiculosSemCondicaoComercial,
  isVeiculosSemCondicaoComercialLoading,
  isListaVeiculosComercialVisible,
  getVeiculosSemCondicaoAVista,
  isVeiculosSemCondicaoAVistaLoading,
  isListaVeiculosAVistaVisible,
};
