const CANCELLED_STATUS = [
  'Cancelado',
  'Cancelado (ordem)',
  'Pedido cancelado pelo cliente',
  'Contrato cancelado',
];

export const isCancelledStatus = (status) => {
  if (!status || typeof status !== 'string') {
    return false;
  }
  return CANCELLED_STATUS.includes(status.trim());
};

export const categorizarPedidosPorStatus = (pedidos) => {
  if (!Array.isArray(pedidos)) {
    return {
      pedidosValidos: [],
      pedidosCancelados: [],
    };
  }

  const pedidosValidos = [];
  const pedidosCancelados = [];

  pedidos.forEach((pedido) => {
    if (isCancelledStatus(pedido.status)) {
      pedidosCancelados.push(pedido);
    } else {
      pedidosValidos.push(pedido);
    }
  });

  return {
    pedidosValidos,
    pedidosCancelados,
  };
};

export const MODAL_TYPES = {
  CONFIRMACAO: 'confirmacao',
  AVISO: 'aviso',
  MISTO: 'misto',
};

export const determinarTipoModal = (pedidosSelecionados) => {
  if (!Array.isArray(pedidosSelecionados) || pedidosSelecionados.length === 0) {
    return null;
  }

  const { pedidosValidos, pedidosCancelados } = categorizarPedidosPorStatus(pedidosSelecionados);

  if (pedidosValidos.length > 0 && pedidosCancelados.length === 0) {
    return MODAL_TYPES.CONFIRMACAO;
  }

  if (pedidosValidos.length === 0 && pedidosCancelados.length > 0) {
    return MODAL_TYPES.AVISO;
  }

  if (pedidosValidos.length > 0 && pedidosCancelados.length > 0) {
    return MODAL_TYPES.MISTO;
  }

  return null;
};
