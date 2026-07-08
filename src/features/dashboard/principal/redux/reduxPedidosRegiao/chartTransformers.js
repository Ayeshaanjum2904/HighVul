import _ from 'lodash';

import { getColorByType } from 'common/charts/formatting/format';

export const transformModalidadeRegiao = (pedidosRegiao) => {
  if (_.isEmpty(pedidosRegiao)) return {};

  const labels = [];
  const dataLabels = pedidosRegiao[0].modalidade.map((m) => m.label);
  const aVista = [];
  const financiado = [];
  const colorAVista = [];
  const colorFinanciado = [];

  pedidosRegiao.forEach((d) => {
    labels.push(d.regiao);

    const aVistaArray = d.modalidade.find((m) => m.label.includes('Vista'));
    aVista.push(aVistaArray.percentage);
    colorAVista.push(getColorByType(aVistaArray.colorType, 0));

    const financiadoArray = d.modalidade.find((m) => m.label.includes('Financiado'));
    financiado.push(financiadoArray.percentage);
    colorFinanciado.push(getColorByType(financiadoArray.colorType, 0));
  });

  return {
    labels,
    datasets: [
      {
        label: dataLabels[0],
        data: aVista,
        backgroundColor: colorAVista,
      },
      {
        label: dataLabels[1],
        data: financiado,
        backgroundColor: colorFinanciado,
      },
    ],
  };
};

export const transformCreditoRegiao = (pedidosRegiao) => {
  if (_.isEmpty(pedidosRegiao)) return {};

  const labels = [];
  const dataLabels = pedidosRegiao[0].aprovacaoCredito.map((m) => m.label);
  const aVista = [];
  const financiado = [];
  const colorAVista = [];
  const colorFinanciado = [];

  pedidosRegiao.forEach((d) => {
    labels.push(d.regiao);

    const aVistaArray = d.aprovacaoCredito.find((m) => m.label.includes('Aprovado'));
    aVista.push(aVistaArray.percentage);
    colorAVista.push(getColorByType(aVistaArray.colorType, 0));

    const financiadoArray = d.aprovacaoCredito.find((m) => m.label.includes('Reprovado'));
    financiado.push(financiadoArray.percentage);
    colorFinanciado.push(getColorByType(financiadoArray.colorType, 0));
  });

  return {
    labels,
    datasets: [
      {
        label: dataLabels[0],
        data: aVista,
        backgroundColor: colorAVista,
      },
      {
        label: dataLabels[1],
        data: financiado,
        backgroundColor: colorFinanciado,
      },
    ],
  };
};
