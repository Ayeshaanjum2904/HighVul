import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import 'chartjs-plugin-datalabels';
import { Line, defaults } from 'react-chartjs-2';

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

const axesOptions = (grid, padding = 0) => ({
  gridLines: {
    drawBorder: true,
    drawOnChartArea: grid,
  },
  fontSize: 10,
  ticks: {
    autoSkip: true,
    maxTicksLimit: 8,
    padding,
  },
});

const LineChart = ({
  data,
}) => (
  <Line
    data={injectFormatting(data, {
      fill: false,
      pointRadius: 2,
      borderWidth: 2,
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
        xAxes: [axesOptions(false, 6)],
        yAxes: [axesOptions(true)],
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
LineChart.propTypes = {
  data: PropTypes.object,
};

LineChart.defaultProps = {
  data: null,
};

export default LineChart;
