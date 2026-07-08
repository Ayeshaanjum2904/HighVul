import _ from 'lodash';

import * as chartColors from './colors';

export const injectColors = (data, colors) => {
  if (!_.isArray(colors) || colors.length < 1) return data;
  if (!_.isArray(data?.datasets) || data.datasets.length < 1) return data;

  const numColors = colors.length;

  return {
    ...data,
    datasets: data.datasets.map((dataset, i) => ({
      ...dataset,
      backgroundColor: colors[i % numColors],
    })),
  };
};

export const injectColorsLineChart = (data, colors) => {
  if (!_.isArray(colors) || colors.length < 1) return data;
  if (!_.isArray(data?.datasets) || data.datasets.length < 1) return data;

  const numColors = colors.length;
  return {
    ...data,
    datasets: data.datasets.map((dataset, i) => ({
      ...dataset,
      backgroundColor: colors[i % numColors],
      borderColor: colors[i % numColors],
    })),
  };
};

export const injectFormatting = (data, otherProps = {}) => {
  if (!_.isArray(data?.datasets) || data.datasets.length < 1) return data;

  return {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      ...otherProps,
    })),
  };
};

export const injectDonutColors = (data, colors) => {
  if (!_.isArray(colors) || colors.length < 1) return data;
  if (!_.isArray(data?.datasets) || data.datasets.length < 1) return data;

  const numColors = colors.length;

  return {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: dataset?.data?.map((d, i) => colors[i % numColors]),
    })),
  };
};

export const getColorByType = (colorType, index) => {
  const numPositiveColors = chartColors.fidisColors.length;
  const numNegativeColors = chartColors.red.length;
  const numNeutralColors = chartColors.allColors.length;
  const numGrayColors = chartColors.gray.length;

  if (colorType === 'positive') return chartColors.fidisColors[index % numPositiveColors];
  if (colorType === 'negative') return chartColors.red[index % numNegativeColors];
  if (colorType === 'gray' || colorType === 'grey') return chartColors.gray[index % numGrayColors];
  return chartColors.allColors[index % numNeutralColors];
};
