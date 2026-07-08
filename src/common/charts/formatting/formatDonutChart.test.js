/* eslint-env jest */

import { injectDonutColors } from './format';

const sampleData = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  datasets: [{
    data: [10, 20, 30, 40, 15],
  }],
};

const colors = ['red', 'blue', 'yellow'];

describe('DonutChart', () => {
  it('injectDonutColors: doesnt\'t crash', () => {
    injectDonutColors(null, null);
    injectDonutColors([], colors);
    injectDonutColors({}, colors);
    injectDonutColors({ datasets: [{}, {}] }, colors);
    injectDonutColors({
      labels: [],
      datasets: [{}],
    }, colors);
  });

  it('injectDonutColors: styling', () => {
    const result = injectDonutColors(sampleData, colors);

    expect(result).toMatchObject({
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [{
        data: [10, 20, 30, 40, 15],
        backgroundColor: [colors[0], colors[1], colors[2], colors[0], colors[1]],
      }],
    });
  });
});
