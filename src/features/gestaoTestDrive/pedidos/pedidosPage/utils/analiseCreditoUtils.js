const VALID_ANALISE_CREDITO_STATUS = [
  'Aguardando análise de crédito',
  'Aguardando carta do mês e análise de crédito',
];

export const isValidAnaliseCreditoStatus = (status) => {
  if (!status || typeof status !== 'string') {
    return false;
  }
  return VALID_ANALISE_CREDITO_STATUS.includes(status.trim());
};

export const categorizarPedidosPorStatusAnaliseCredito = (pedidos) => {
  if (!Array.isArray(pedidos)) {
    return {
      pedidosValidos: [],
      pedidosInvalidos: [],
    };
  }

  const pedidosValidos = [];
  const pedidosInvalidos = [];

  pedidos.forEach((pedido) => {
    if (isValidAnaliseCreditoStatus(pedido.status)) {
      pedidosValidos.push(pedido);
    } else {
      pedidosInvalidos.push(pedido);
    }
  });

  return {
    pedidosValidos,
    pedidosInvalidos,
  };
};

export const MODAL_TYPES = {
  CONFIRMACAO: 'confirmacao',
  AVISO: 'aviso',
  MISTO: 'misto',
};

export const determinarTipoModalAnaliseCredito = (pedidosSelecionados) => {
  if (!Array.isArray(pedidosSelecionados) || pedidosSelecionados.length === 0) {
    return null;
  }

  const { pedidosValidos, pedidosInvalidos } = categorizarPedidosPorStatusAnaliseCredito(
    pedidosSelecionados,
  );

  if (pedidosValidos.length > 0 && pedidosInvalidos.length === 0) {
    return MODAL_TYPES.CONFIRMACAO;
  }

  if (pedidosValidos.length === 0 && pedidosInvalidos.length > 0) {
    return MODAL_TYPES.AVISO;
  }

  if (pedidosValidos.length > 0 && pedidosInvalidos.length > 0) {
    return MODAL_TYPES.MISTO;
  }

  return null;
};
