import _ from 'lodash';
import { createSelector } from 'reselect';

import { camelFormat } from 'utils/format';

import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';

const hasPermissionTodasBrands = createSelector(
  (state) => state?.user,
  (user) => hasPermission(user, permissions.pedidos.listarTodasBrands),
);

const gruposPedidos = createSelector(
  (pedidosPageState) => pedidosPageState?.pedidosList?.pedidos,
  (pedidos) => {
    const grupos = new Map();

    (pedidos || []).forEach((p) => {
      if (!_.isString(p?.status)) { return; }

      if (grupos.has(p.status)) {
        const pedidosForStatus = grupos.get(p.status);
        pedidosForStatus.push(p);
      } else {
        grupos.set(p.status, [p]);
      }
    });

    const result = [];
    grupos.forEach((pedidosForStatus, status) => {
      result.push({
        label: status,
        pedidos: pedidosForStatus,
      });
    });

    return result;
  },
);

const statusList = createSelector(
  (state) => state?.page?.filters?.statusList,
  (listStatus) => (listStatus || []).map((item) => ({
    value: item.value,
    text: `${camelFormat(item.text)}`,
  })),
);

const regioesList = createSelector(
  (state) => state?.page?.filters?.regioes,
  (listRegioes) => (listRegioes || []).map((item) => ({
    value: item.codigo,
    text: `${item.codigo} - ${camelFormat(item.name)}`,
  })),
);

const brandsList = createSelector(
  (state) => state?.page?.filters?.brands,
  (listBrands) => (listBrands || []).map((item) => ({
    value: item,
    text: camelFormat(item),
  })),
);

const selectedPedidos = createSelector(
  (state) => state?.page?.selectedPedidos,
  (selected) => selected || [],
);

const selectedPedidosCount = createSelector(
  selectedPedidos,
  (selected) => selected.length,
);

const selectedPedidosTotal = createSelector(
  selectedPedidos,
  (selected) => {
    if (!selected || selected.length === 0) {
      return 0;
    }

    return selected.reduce((total, pedido) => {
      const valor = parseFloat(pedido?.valor || 0);
      return total + valor;
    }, 0);
  },
);

const hasSelectedPedidos = createSelector(
  selectedPedidosCount,
  (count) => count > 0,
);

const cancelarPedidosState = createSelector(
  (state) => state?.page?.cancelarPedidos,
  (cancelarPedidos) => cancelarPedidos || { isLoading: false, isError: false, error: null },
);

const isCancelingPedidos = createSelector(
  cancelarPedidosState,
  (cancelarPedidos) => cancelarPedidos.isLoading,
);

const cancelarPedidosError = createSelector(
  cancelarPedidosState,
  (cancelarPedidos) => cancelarPedidos.error,
);

const modalConfirmacaoState = createSelector(
  cancelarPedidosState,
  (cancelarPedidos) => cancelarPedidos.modals?.confirmacao || { open: false },
);

const modalAvisoState = createSelector(
  cancelarPedidosState,
  (cancelarPedidos) => cancelarPedidos.modals?.aviso || { open: false },
);

const modalMistoState = createSelector(
  cancelarPedidosState,
  (cancelarPedidos) => cancelarPedidos.modals?.misto || { open: false },
);

const justificativaCancelamento = createSelector(
  cancelarPedidosState,
  (cancelarPedidos) => cancelarPedidos.justificativa || '',
);

const analiseCreditoPedidosState = createSelector(
  (state) => state?.page?.analiseCreditoPedidos,
  (analiseCreditoPedidos) => analiseCreditoPedidos || {
    isLoading: false, isError: false, error: null,
  },
);

const isAprovandoPedidos = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.isLoading,
);

const isReprovandoPedidos = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.isLoading,
);

const analiseCreditoPedidosError = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.error,
);

const modalAnaliseConfirmacaoState = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.modals?.confirmacao || { open: false },
);

const modalAnaliseAvisoState = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.modals?.aviso || { open: false },
);

const modalAnaliseMistoState = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.modals?.misto || { open: false },
);

const tipoAcaoAnaliseCredito = createSelector(
  analiseCreditoPedidosState,
  (analiseCreditoPedidos) => analiseCreditoPedidos.tipoAcao,
);

export default {
  gruposPedidos,
  statusList,
  regioesList,
  brandsList,
  hasPermissionTodasBrands,
  selectedPedidos,
  selectedPedidosCount,
  selectedPedidosTotal,
  hasSelectedPedidos,
  cancelarPedidosState,
  isCancelingPedidos,
  cancelarPedidosError,
  modalConfirmacaoState,
  modalAvisoState,
  modalMistoState,
  justificativaCancelamento,
  analiseCreditoPedidosState,
  isAprovandoPedidos,
  isReprovandoPedidos,
  analiseCreditoPedidosError,
  modalAnaliseConfirmacaoState,
  modalAnaliseAvisoState,
  modalAnaliseMistoState,
  tipoAcaoAnaliseCredito,
};
