/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Page, Title, Section } from '../../storiesHelpers';

import LineChart from './lineChart';

import { injectColorsLineChart } from '../formatting/format';

import * as chartColors from '../formatting/colors';

const sampleData = {
  labels: [1, 2, 3, 3, 4, 5, 6],
  datasets: [{
    label: 'My First dataset',
    data: [
      20,
      20,
      20,
      20,
      20,
      20,
      9,
    ],
  }, {
    label: 'My Second dataset',
    data: [
      100,
      100,
      110,
      100,
      120,
      130,
      100,
    ],
  }, {
    label: 'My third dataset',
    data: [
      230,
      240,
      230,
      200,
      210,
      190,
      230,
    ],
  },
  ],
};

storiesOf('charts/LineChart', module)
  .add('LineChart', () => (<LineChartStory />));

const LineChartStory = () => (
  <Page>
    <Title>
      {'<LineChart />'}
    </Title>
    <Section title="LineChart">
      <div style={{ width: '800px' }}>
        <LineChart data={injectColorsLineChart(sampleData, chartColors.allColors)} />
      </div>
    </Section>
  </Page>
);
