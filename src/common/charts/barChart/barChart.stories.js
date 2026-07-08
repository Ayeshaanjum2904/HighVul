/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Page, Title, Section } from '../../storiesHelpers';

import HorizontalBarChart from './horizontalBarChart';
import VerticalBarChart from './verticalBarChart';

import { injectColors } from '../formatting/format';

import * as chartColors from '../formatting/colors';

const sampleDataSmall = {
  labels: ['Label 1', 'Label 2'],
  datasets: [{
    label: 'Dataset 1', data: [30, 16],
  }, {
    label: 'Dataset 2', data: [10, 3],
  }, {
    label: 'Dataset 4', data: [15, 25],
  }, {
    label: 'Dataset 5', data: [42, 62],
  }, {
    label: 'Dataset 6', data: [12, 27],
  }, {
    label: 'Dataset 7', data: [24, 45],
  }, {
    label: 'Dataset 8', data: [45, 25],
  }],
};

const sampleDataLarge = {
  labels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'],
  datasets: [{
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    label: 'Dataset 1',
  }, {
    data: [20, 10, 20, 10, 20, 10, 20, 10, 20, 10],
    label: 'Dataset 2',
  }, {
    data: [10, 20, 10, 20, 10, 20, 10, 20, 10, 20],
    label: 'Dataset 3',
  }],
};

storiesOf('charts/BarChart', module)
  .add('BarChart', () => (<BarChartStory />));

const BarChartStory = () => (
  <Page>
    <Title>
      {'<BarChart />'}
    </Title>
    <Section title="Poucas Barras">
      <div style={{ width: '800px' }}>
        <HorizontalBarChart data={injectColors(sampleDataSmall, chartColors.fidisColors)} />
      </div>
    </Section>
    <Section title="Muitas Barras">
      <div style={{ width: '800px' }}>
        <VerticalBarChart data={injectColors(sampleDataLarge, chartColors.allColors)} />
      </div>
    </Section>
  </Page>
);
