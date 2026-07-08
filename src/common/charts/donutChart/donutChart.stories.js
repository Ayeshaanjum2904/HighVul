/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { Page, Title, Section } from '../../storiesHelpers';

import DonutChart from './donutChart';
import DonutChartLegend from './donutChartLegend/donutChartLegend';
import { injectDonutColors } from '../formatting/format';

import * as chartColors from '../formatting/colors';

const sampleDataSmall = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [{
    data: [10, 20, 70],
  }],
};

const sampleDataLarge = {
  labels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'],
  datasets: [{
    data: [10, 10, 10, 10, 10, 10, 10, 10, 15, 5],
  }],
};

storiesOf('charts/DonutChart', module)
  .add('DonutChart', () => (<DonutChartStory />));

const DonutChartStory = () => (
  <Page>
    <Title>
      {'<DonutChart />'}
    </Title>
    <Section title="Poucas Fatias">
      <div style={{ width: '300px', height: '200px' }}>
        <DonutChart data={injectDonutColors(sampleDataSmall, chartColors.fidisColors)} />
      </div>
    </Section>
    <Section title="Legenda">
      <div style={{ width: '280px', height: '100px' }}>
        <DonutChartLegend data={injectDonutColors(sampleDataSmall, chartColors.fidisColors)} />
      </div>
    </Section>
    <Section title="Muitas Fatias">
      <div style={{ width: '600px', height: '300px' }}>
        <DonutChart data={injectDonutColors(sampleDataLarge, chartColors.allColors)} />
      </div>

    </Section>
  </Page>
);
