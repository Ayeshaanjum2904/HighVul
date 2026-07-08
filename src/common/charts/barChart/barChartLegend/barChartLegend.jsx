/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './barChartLegend.scss';

const BarChartLegendItem = ({
  dataset,
}) => (
  <div className="dashboard__graphic__legend">
    <div className="dashboard__graphic__legend_circle" style={{ backgroundColor: dataset?.backgroundColor }} />
    <div className="dashboard__graphic__legend_text">
      {dataset?.label}
    </div>
  </div>
);

const BarChartLegend = ({ data }) => (
  <>
    {(Array.isArray(data?.datasets) ? (data?.datasets || []) : []).map((ds, i) => (
      <BarChartLegendItem dataset={ds} key={i} index={i} />
    ))}
  </>
);

BarChartLegend.propTypes = {
  data: PropTypes.object,
};

BarChartLegend.defaultProps = {
  data: null,
};

export default BarChartLegend;
