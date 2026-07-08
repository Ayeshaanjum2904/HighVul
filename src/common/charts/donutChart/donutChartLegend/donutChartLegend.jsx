/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Scrollbars } from 'react-custom-scrollbars';
import { makeStyles } from '@material-ui/core';
import logger from '../../../../utils/logger';
import { getPercent } from '../../../../utils/format';

import './donutChartLegend.scss';

const useStlyes = makeStyles({
  color: {
    backgroundColor: (props) => props.color,
  },
  label: {
    marginLeft: '-17px',
  },
});

const DonutChartLegendItem = ({
  // eslint-disable-next-line no-unused-vars
  label, value, percent, color,
}) => {
  const classes = useStlyes({ color });
  return (
    <div className="dashboard__doughnut__legend">
      <div className={`dashboard__doughnut__legend_circle ${classes.color}`} />
      <div className={`dashboard__doughnut__legend_text ${!color ? classes.label : ''}`}>
        {label}
      </div>
      <div className="dashboard__doughnut__legend_percent">
        {`${(percent)}%`}
      </div>
      <div className="dashboard__doughnut__legend_value">
        {value}
      </div>
    </div>
  );
};

const DonutChartLegend = ({ data }) => {
  const labels = data?.labels;
  const datasets = data?.datasets;
  let mappedData = [];

  if (_.isArray(labels) && _.isArray(datasets)) {
    mappedData = labels?.map((label, i) => ({
      label,
      color: datasets[0].backgroundColor[i],
      value: datasets[0].data[i],
    }));
  } else {
    logger.error('[DonutChartLegend]: unexpected data format');
  }

  const total = mappedData.reduce((sum, b) => sum + b.value, 0) || 0;
  return (
    <Scrollbars
      renderThumbHorizontal={() => (<div style={{ display: 'none' }} />)}
    >
      <div className="dashboard__doughnut__legend__containter">
        <DonutChartLegendItem
          label="Total"
          value={total}
          percent={100}
        />

        <div className="dashboard__doughnut__legend__containter_line" />

        {mappedData.map((d, i) => (
          <DonutChartLegendItem
            color={d.color}
            label={d.label}
            value={d.value}
            percent={getPercent(d.value, total)}
            key={i}
          />
        ))}

      </div>
    </Scrollbars>
  );
};

DonutChartLegend.propTypes = {
  data: PropTypes.object,
};

DonutChartLegend.defaultProps = {
  data: null,
};

export default DonutChartLegend;
