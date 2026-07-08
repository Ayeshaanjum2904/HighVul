import React from 'react';
import PropTypes from 'prop-types';

import CardDonut from '../../../../commonViews/cardDonut';

const DonutModalidade = ({
  isLoading, isError, dateFilter, data,
}) => (
  <CardDonut
    title="Modalidade %"
    dateFilter={dateFilter}
    data={data}
    isLoading={isLoading}
    isError={isError}
    isEmpty={!data}
  />
);
DonutModalidade.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  dateFilter: PropTypes.string,
  data: PropTypes.object,
};

DonutModalidade.defaultProps = {
  isLoading: false,
  isError: false,
  dateFilter: '',
  data: null,
};

export default DonutModalidade;
