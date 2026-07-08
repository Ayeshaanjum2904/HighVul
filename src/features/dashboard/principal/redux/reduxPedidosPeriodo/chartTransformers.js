import { formatDate } from 'utils/format';

export const transformPedidosPeriodo = (pedidos) => {
  const datasetConvencional = [];
  const datasetExcepcional = [];
  const datasetAdicional = [];

  pedidos.forEach((pedido) => {
    datasetConvencional.push(pedido.totalConvencional);
    datasetExcepcional.push(pedido.totalExcepcional);
    datasetAdicional.push(pedido.totalAdicional);
  });

  return {
    labels: (pedidos.map((p) => formatDate(p?.dataHora, 'DD/MM/YY'))),
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
