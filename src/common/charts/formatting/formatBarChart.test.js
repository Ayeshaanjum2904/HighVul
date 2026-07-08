/* eslint-env jest */

import { injectFormatting, injectColors } from './format';

const data = {
  labels: ['Label 1', 'Label 2'],
  datasets: [{
    data: [10, 100], label: 'Dataset 1',
  }, {
    data: [20, 200], label: 'Dataset 2',
  }, {
    data: [30, 300], label: 'Dataset 3',
  }, {
    data: [40, 400], label: 'Dataset 4',
  }, {
    data: [50, 500], label: 'Dataset 5',
  }],
};
const colors = ['red', 'blue', 'yellow'];

describe('BarChart', () => {
  it('injectFormatting: doesnt\'t crash', () => {
    const addedProps = { key: 'value' };

    injectFormatting(null, null);
    injectFormatting([], addedProps);
    injectFormatting({}, addedProps);
    injectFormatting({ datasets: [{}, {}] }, addedProps);
    injectFormatting({
      labels: [],
      datasets: [{}, {}, {}],
    }, addedProps);
  });

  it('injectColor: doesnt\'t crash', () => {
    injectColors(null, null);
    injectColors([], colors);
    injectColors({}, colors);
    injectColors({ datasets: [{}, {}] }, null);
    injectColors({
      labels: [],
      datasets: [{}, {}, {}],
    }, colors);
  });

  it('injectFormatting: formatting', () => {
    const result = injectFormatting(data, {
      barPercentage: 0.5,
      maxBarThickness: 18,
    });

    expect(result.datasets).toHaveLength(5);
    expect(result.datasets[0]).toMatchObject({
      data: [10, 100],
      label: 'Dataset 1',
      barPercentage: 0.5,
      maxBarThickness: 18,
    });
    expect(result.datasets[1]).toMatchObject({
      data: [20, 200],
      label: 'Dataset 2',
      barPercentage: 0.5,
      maxBarThickness: 18,
    });
    expect(result.datasets[2]).toMatchObject({
      data: [30, 300],
      label: 'Dataset 3',
      barPercentage: 0.5,
      maxBarThickness: 18,
    });
    expect(result.datasets[3]).toMatchObject({
      data: [40, 400],
      label: 'Dataset 4',
      barPercentage: 0.5,
      maxBarThickness: 18,
    });
    expect(result.datasets[4]).toMatchObject({
      data: [50, 500],
      label: 'Dataset 5',
      barPercentage: 0.5,
      maxBarThickness: 18,
    });
  });

  it('injectColors: styling', () => {
    const result = injectColors(data, colors);

    expect(result.datasets).toHaveLength(5);
    expect(result.datasets[0]).toMatchObject({
      data: [10, 100],
      label: 'Dataset 1',
      backgroundColor: colors[0],
    });
    expect(result.datasets[1]).toMatchObject({
      data: [20, 200],
      label: 'Dataset 2',
      backgroundColor: colors[1],
    });
    expect(result.datasets[2]).toMatchObject({
      data: [30, 300],
      label: 'Dataset 3',
      backgroundColor: colors[2],
    });
    expect(result.datasets[3]).toMatchObject({
      data: [40, 400],
      label: 'Dataset 4',
      backgroundColor: colors[0],
    });
    expect(result.datasets[4]).toMatchObject({
      data: [50, 500],
      label: 'Dataset 5',
      backgroundColor: colors[1],
    });
  });
});
