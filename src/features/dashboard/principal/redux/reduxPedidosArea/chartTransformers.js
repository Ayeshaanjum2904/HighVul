export const transformPedidosArea = (pedidos, produto) => {
  const datasetConvencional = [];
  const datasetExcepcional = [];
  const datasetAdicional = [];

  pedidos.forEach((pedido) => {
    if (produto === 'convencional') {
      datasetConvencional.push(pedido.totalConvencional);
    } else
      if (produto === 'adicional') {
        datasetAdicional.push(pedido.totalAdicional);
      } else if (produto === 'excecao') {
        datasetExcepcional.push(pedido.totalExcepcional);
      } else {
        datasetConvencional.push(pedido.totalConvencional);
        datasetExcepcional.push(pedido.totalExcepcional);
        datasetAdicional.push(pedido.totalAdicional);
      }
  });

  return {
    labels: (pedidos.map((p) => p.label)),
    datasets: [{
      label: 'Convencional',
      data: datasetConvencional,
    },
    {
      label: 'Exceção',
      data: datasetExcepcional,
    },
    {
      label: 'Adicional',
      data: datasetAdicional,
    }],
  };
};
