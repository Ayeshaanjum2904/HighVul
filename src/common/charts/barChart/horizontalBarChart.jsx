import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';
import 'chartjs-plugin-datalabels';
import { HorizontalBar, defaults } from 'react-chartjs-2';

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

const axesOptions = (grid) => ({
  gridLines: {
    drawBorder: true,
    drawOnChartArea: grid,
  },
  fontSize: 10,
  stacked: true,
});

const minimumLabelValue = 0;

const HorizontalBarChart = ({
  data,
}) => (
  <HorizontalBar
    data={injectFormatting(data, {
      barPercentage: 0.35,
      maxBarThickness: 16,
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
        xAxes: [axesOptions(false)],
        yAxes: [axesOptions(true)],
      },
      tooltips: {
        enabled: false,
        custom: customTooltip,
      },
      plugins: {
        datalabels: {
          display: (context) => context.dataset.data[context.dataIndex] > minimumLabelValue,
          color: 'rgba(85, 87, 112, 1)',
          align: 'top',
        },
      },
    }}
  />
);

HorizontalBarChart.propTypes = {
  data: PropTypes.object,
};

HorizontalBarChart.defaultProps = {
  data: null,
};

export default HorizontalBarChart;
