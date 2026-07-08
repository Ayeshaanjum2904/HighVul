import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

import './detalheChart.scss';

import { getPercent } from 'utils/format';

const formatData = (data) => data?.labels.map((label, i) => ({
  label,
  value: data?.datasets?.reduce((sum, b) => (sum + ((b.data.length !== 0) ? b.data[i] : 0)), 0),
}));

const DataRow = ({
  // eslint-disable-next-line react/prop-types
  label, value, percent,
}) => (
  <div className="dashboard__card-bar-chart__detail__data-row">
    <div className="dashboard__card-bar-chart__detail__data-row_label">
      {label}
    </div>
    <div className="dashboard__card-bar-chart__detail__data-row_percent">
      {`${(percent)}%`}
    </div>
    <div className="dashboard__card-bar-chart__detail__data-row_value">
      {value}
    </div>

  </div>
);
const DetalheBarChart = ({ data }) => {
  const formatedData = formatData(data);

  const total = formatedData.reduce((sum, b) => sum + (b?.value || 0), 0);
  return (
    <div className="dashboard__card-bar-chart__detail_content">
      <DataRow
        label="Total"
        value={total}
        percent={100}
      />
      <div className="dashboard__card-bar-chart__detail_line" />
      <Scrollbars>
        {(Array.isArray(formatedData) ? formatedData : []).map((d, i) => (
          <DataRow
            label={d.label}
            value={d.value}
            percent={getPercent(d.value, total)}
            key={i}
          />
        ))}
      </Scrollbars>
    </div>
  );
};

DetalheBarChart.propTypes = {
  data: PropTypes.object,
};

DetalheBarChart.defaultProps = {
  data: [],
};

export default DetalheBarChart;
