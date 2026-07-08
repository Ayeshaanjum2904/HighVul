import React from 'react';
import PropTypes from 'prop-types';

import CardChart from '../../../../../commonViews/cardChart';
import DetalheCreditoRegiao from './detalheCreditoRegiao';

const CreditoRegiao = ({
  dateFilter, isLoading, isError, data, isEmpty,
}) => (
  <CardChart
    title="Aprovação de crédito %"
    data={data}
    dateFilter={dateFilter}
    isLoading={isLoading}
    isError={isError}
    isEmpty={isEmpty}
    backgroundColor="white"
    percentage
    DetailBarChart={DetalheCreditoRegiao}
    height={178}
  />
);

CreditoRegiao.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  data: PropTypes.object,
  isEmpty: PropTypes.bool,
};

CreditoRegiao.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  data: null,
  isEmpty: false,
};

export default CreditoRegiao;
