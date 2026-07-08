import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import 'chartjs-plugin-datalabels';
import { Bar, defaults } from 'react-chartjs-2';

import { injectFormatting } from '../formatting/format';

import { customTooltip } from '../tooltip/tooltip';

merge(defaults, {
  global: {
    defaultFontColor: 'rgba(122, 124, 154, 1)',
    defaultFontFamily: 'CircularStd',
    layout: {
      padding: 8,
    },
  },
});

const axesOptions = (grid) => ([{
  gridLines: {
    drawBorder: true,
    drawOnChartArea: grid,
  },
  fontSize: 10,
}]);

const percentOptions = (percentage) => ([{
  ...axesOptions(true),
  ticks: {
    callback(value) {
      return percentage ? `${value}%` : value;
    },
    autoSkip: true,
    maxTicksLimit: 6,
    beginAtZero: true,
    suggestedMin: percentage ? 0 : null,
    suggestedMax: percentage ? 100 : null,
  },
}]);

const VerticalBarChart = ({
  data, percentage,
}) => (
  <Bar
    data={injectFormatting(data, {
      barPercentage: 0.35,
      maxBarThickness: 8,
    })}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: axesOptions(false),
        yAxes: percentOptions(percentage),
      },
      tooltips: {
        enabled: false,
        custom: customTooltip,
      },
      plugins: {
        datalabels: {
          display: false,
        },
      },
    }}
  />
);

VerticalBarChart.propTypes = {
  data: PropTypes.object,
  percentage: PropTypes.bool,
};

VerticalBarChart.defaultProps = {
  data: null,
  percentage: false,
};

export default VerticalBarChart;
