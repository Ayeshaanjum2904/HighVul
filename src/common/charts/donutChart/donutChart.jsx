import React from 'react';
import PropTypes from 'prop-types';

import 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

import { customTooltip } from '../tooltip/tooltip';

const minimumLabelValue = 3;

const convertValueToPercent = (data) => {
  const total = data?.datasets[0]?.data?.reduce((sum, d) => (sum + (d || 0)), 0);
  return {
    ...data,
    datasets: [{
      ...data?.datasets[0],
      data: data?.datasets[0]?.data?.map((dataPoint) => Math.round(
        total > 0 ? (100 * (dataPoint / total)) : 0,
      )),
    }],
  };
};

const DonutChart = ({ data }) => (
  <Doughnut
    data={convertValueToPercent(data)}
    options={{
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
      tooltips: {
        enabled: false,
        custom: customTooltip,
      },
      plugins: {
        datalabels: {
          display: (context) => context.dataset.data[context.dataIndex] > minimumLabelValue,
          formatter: (context) => `${context}%`,
          color: 'white',
          font: {
            size: 14,
            family: 'CircularStd',
          },
        },
      },
    }}
  />
);

DonutChart.propTypes = {
  data: PropTypes.object,
};

DonutChart.defaultProps = {
  data: null,
};

export default DonutChart;
