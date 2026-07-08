import { createSelector } from 'reselect';
import _ from 'lodash';

import { formatDate } from 'utils/format';
import { status } from '../../status';

const condicaoSelecionadaId = (state) => state?.details?.modal?.condicaoSelecionadaId;
const isCondicaoNegociada = (state) => state?.details?.modal?.isCondicaoNegociada;

const condicaoSelecionada = createSelector(
  condicaoSelecionadaId,
  isCondicaoNegociada,
  (state) => state?.details?.modal?.detalhePedido?.condicoes,
  (id, negociada, condicoes) => (condicoes?.find((c) => (c.id === id && c.negociada === negociada)
                                                     || (c.id == null && id === 'null'))),
);

const isLoadingUpdateStatus = (state) => state?.details?.updateStatusPedido?.isLoading;
const isLoadingSendDetalhePedido = (state) => state?.details?.sendDetalhePedido?.isLoading;
const isLoadingCancelPedido = (state) => state?.details?.cancelPedido?.isLoading;
const isLoadingSendDadosMontadora = (state) => (
  state?.details?.sendDadosMontadora?.isLoading
);

const isModalSending = createSelector(
  isLoadingUpdateStatus,
  isLoadingSendDetalhePedido,
  isLoadingCancelPedido,
  isLoadingSendDadosMontadora,
  (loadingUpdateStatus, loadingSendDetalhe, loadingCancel, loadingSendDadosMontadora) => (
    loadingUpdateStatus || loadingSendDetalhe || loadingCancel || loadingSendDadosMontadora
  ),
);

const isErrorUpdateStatus = (state) => state?.details?.updateStatusPedido?.isError;
const isErrorSendDetalhePedido = (state) => state?.details?.sendDetalhePedido?.isError;
const isErrorCancelPedido = (state) => state?.details?.cancelPedido?.isError;
const isErrorSendDadosMontadora = (state) => (
  state?.details?.sendDadosMontadora?.isError
);

const isModalSendingError = createSelector(
  isErrorUpdateStatus,
  isErrorSendDetalhePedido,
  isErrorCancelPedido,
  isErrorSendDadosMontadora,
  (
    isErrorUpdate,
    isErrorSendDetalhe,
    isErrorCancel,
    isErrorSendDados,
  ) => (isErrorUpdate || isErrorSendDetalhe || isErrorCancel || isErrorSendDados),
);

const isLoadingUploadFaturaPedido = (state) => state?.details?.uploadFaturaPedido?.isLoading;
const pedidoStatus = (state) => state?.details?.modal?.detalhePedido?.status;
const pedidoModalidade = (state) => state?.details?.modal?.detalhePedido?.isAVista;

const isUploadDisabled = createSelector(
  isLoadingUploadFaturaPedido,
  pedidoStatus,
  (isLoading, currentStatus) => (isLoading || currentStatus !== status.prontoParaFaturamento),
);

const isPreviewDisabled = createSelector(
  isLoadingUploadFaturaPedido,
  (isLoading) => isLoading,
);

const gruposPedidos = createSelector(
  (state) => state?.details?.modal?.detalhePedido?.comentarios,
  (comentarios) => {
    const grupos = new Map();
    (comentarios || []).forEach((p) => {
      if (!_.isDate(p?.data)) { return; }

      const date = formatDate(p.data, 'DD MMM YYYY');
      if (grupos.has(date)) {
        const comentariosForDate = grupos.get(date);
        comentariosForDate.push(p);
      } else {
        grupos.set(date, [p]);
      }
    });

    const result = [];
    grupos.forEach((comentariosForDate, date) => {
      result.push({
        label: date,
        comentarios: comentariosForDate,
      });
    });
    return result;
  },
);

const isLoadingUploadContrato = (state) => state?.details?.uploadContrato?.isLoading;
const urlContratoOperacoes = (state) => state?.details?.modal?.detalhePedido?.urlContrato;

const isPreviewContratoDisabled = createSelector(
  isLoadingUploadContrato,
  urlContratoOperacoes,
  (isLoading, urlContrato) => (isLoading || urlContrato == null),
);

const isUploadContratoDisabled = createSelector(
  isLoadingUploadContrato,
  pedidoStatus,
  (isLoading, currentStatus) => (isLoading
      || (currentStatus !== status.faturado && currentStatus !== status.faturadoMontadora)),
);

const isFaturamento = createSelector(
  pedidoStatus,
  (currentStatus) => (currentStatus === status.prontoParaFaturamento
                   || currentStatus === status.faturado
                   || currentStatus === status.contratoAnexado
                   || currentStatus === status.contratoPago
                   || currentStatus === status.faturadoMontadora
  ),
);

const detalhePedidoProduto = (state) => state?.details?.modal?.detalhePedido?.produto;
const detalhePedidoProdutoId = (state) => state?.details?.modal?.detalhePedido?.produtoId;

const isTdExcecao = createSelector(
  detalhePedidoProduto,
  detalhePedidoProdutoId,
  (produto, produtoId) => (produto === 'Test Drive de Exceção' || produtoId === 4),
);

const isContrato = createSelector(
  pedidoStatus,
  pedidoModalidade,
  (currentStatus, isAVista) => (
    (currentStatus === status.faturado && isAVista === false)
      || (currentStatus === status.faturadoMontadora && isAVista === false)
      || currentStatus === status.contratoAnexado
      || currentStatus === status.contratoPago),
);

const selectDescontoFinanciado = createSelector(
  (state) => state.details.modal?.condicaoSelecionadaId,
  (state) => state.details.modal.detalhePedido?.condicoes,
  (condicaoId, condicoes) => (!_.isNull(condicaoId) && !_.isEqual(condicaoId, 'null')
    ? condicoes.filter((c) => c.id === condicaoId)[0].percentualFinanciado
    : null),
);

const selectDescontoNegociado = createSelector(
  (state) => state.details.modal?.condicaoSelecionadaId,
  (state) => state.details.modal.detalhePedido?.condicoes,
  (condicaoId, condicoes) => (!_.isNull(condicaoId) && !_.isEqual(condicaoId, 'null')
    ? condicoes.filter((c) => c.id === condicaoId)[0].percentualDesconto
    : null),
);

const isOrdem = createSelector(
  (state) => state.details.modal.detalhePedido?.ordemId,
  (ordemId) => ordemId != null,
);

const isDetalhesVeiculoValido = createSelector(
  (state) => state?.details?.modal?.detalhePedido?.corExterna,
  (state) => state?.details?.modal?.detalhePedido?.revestimento,
  (state) => state?.details?.modal?.detalhePedido?.grupoOpcionais,
  (state) => state?.details?.modal?.detalhePedido?.opcionais,
  (state) => state?.details?.modal?.taglistHasError,
  (corExterna, revestimento, grupoOpcionais, opcionais, taglistHasError) => {
    const alfanumericoRegex = /^[a-zA-Z0-9\sÀ-ÿ]+$/;

    // Valida se um campo é alfanumérico com no máximo 10 caracteres
    const isValido = (valor) => valor
      && typeof valor === 'string'
      && valor.trim().length > 0
      && valor.trim().length <= 10
      && alfanumericoRegex.test(valor.trim());

    // Valida se opcionais tem pelo menos 1 entrada e nenhum deles tem mais de 10 caracteres
    const isOpcionaisValido = Array.isArray(opcionais)
      && opcionais.length > 0
      && opcionais.every((opcional) => opcional && opcional.toString().trim().length <= 10);

    return isValido(corExterna)
      && isValido(revestimento)
      && isValido(grupoOpcionais)
      && isOpcionaisValido
      && !taglistHasError;
  },
);

const isLoadingIntegracao = (state) => state?.details?.IntegracaoB2B?.isLoading;

const codigoEmpresaRegionalResponseRaw = (state) => (
  state?.details?.codigoEmpresaRegional?.options || {}
);

const empresaOrigFaturamentoRaw = createSelector(
  codigoEmpresaRegionalResponseRaw,
  (response) => (
    Array.isArray(response?.empresaOrigFaturamento)
      ? response.empresaOrigFaturamento
      : []
  ),
);

const codigoRegionalRaw = createSelector(
  codigoEmpresaRegionalResponseRaw,
  (response) => (Array.isArray(response?.codigoRegional) ? response.codigoRegional : []),
);

const marcaPedidoSelecionada = (state) => (
  state?.details?.modal?.detalhePedido?.marca
  || ''
);

const getRegionalKeyFromMarca = (marcaPedido) => {
  const marca = `${marcaPedido || ''}`.trim().toUpperCase();

  if (!marca) return '';
  if (['JEEP', 'DODGE', 'CHRYSLER'].includes(marca)) return 'CJDR';
  if (marca.includes('LEAP')) return 'LEAPMOTOR';
  if (marca.includes('RAM')) return 'RAM';
  if (marca.includes('FIAT')) return 'FIAT';

  return marca;
};

const getCodigosRegionaisByMarca = (items, marcaPedido) => {
  const regionalKey = getRegionalKeyFromMarca(marcaPedido);
  if (!regionalKey) return [];

  const marcasEquivalentes = {
    CJDR: ['CJDR', 'JEEP', 'DODGE', 'CHRYSLER'],
    LEAPMOTOR: ['LEAPMOTOR'],
    RAM: ['RAM'],
    FIAT: ['FIAT'],
  };

  const marcasPermitidas = marcasEquivalentes[regionalKey] || [regionalKey];
  const regionalMarca = items.find((item) => marcasPermitidas.includes(`${item?.marca || ''}`.trim().toUpperCase()));
  return Array.isArray(regionalMarca?.codigos) ? regionalMarca.codigos : [];
};

const empresaOrigemOptions = createSelector(
  empresaOrigFaturamentoRaw,
  (items) => _.uniqBy(
    items
      .map((item) => item?.label)
      .filter(Boolean)
      .map((label) => ({ value: label, label })),
    'value',
  ),
);

const codigoRegionalOptions = createSelector(
  codigoRegionalRaw,
  marcaPedidoSelecionada,
  (items, marcaSelecionada) => {
    const codigos = getCodigosRegionaisByMarca(items, marcaSelecionada);
    return codigos.map((codigo) => ({
      value: codigo,
      label: `${codigo}`,
    }));
  },
);

export default {
  condicaoSelecionada,
  isModalSending,
  isModalSendingError,
  isUploadDisabled,
  isPreviewDisabled,
  gruposPedidos,
  isPreviewContratoDisabled,
  isFaturamento,
  isUploadContratoDisabled,
  isTdExcecao,
  isContrato,
  selectDescontoFinanciado,
  selectDescontoNegociado,
  isOrdem,
  isDetalhesVeiculoValido,
  isLoadingIntegracao,
  marcaPedidoSelecionada,
  empresaOrigemOptions,
  codigoRegionalOptions,
};
