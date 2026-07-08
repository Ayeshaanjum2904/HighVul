import _ from 'lodash';

import { getColorByType } from 'common/charts/formatting/format';

const fluxtoToDonut = (fluxo) => {
  if (!_.isArray(fluxo?.data)) return null;
  if (fluxo.data[0].value === 0 && fluxo.data[1].value === 0) return null;

  const labels = [];
  const data = [];
  const backgroundColor = [];

  fluxo.data.forEach((d, i) => {
    labels.push(d.label);
    data.push(d.value);
    backgroundColor.push(getColorByType(d.colorType, i));
  });

  return {
    labels,
    datasets: [{
      data,
      backgroundColor,
    }],
  };
};

export default fluxtoToDonut;
