import React from 'react';
import PropTypes from 'prop-types';

import CardChart from '../../../../../commonViews/cardChart';
import DetalheModalidadeRegiao from './detalheModalidadeRegiao';

const ModalidadeRegiao = ({
  dateFilter, isLoading, isError, data, isEmpty,
}) => (
  <CardChart
    title="Modalidade por região %"
    data={data}
    dateFilter={dateFilter}
    isLoading={isLoading}
    isError={isError}
    isEmpty={isEmpty}
    backgroundColor="white"
    percentage
    DetailBarChart={DetalheModalidadeRegiao}
    height={178}
  />
);

ModalidadeRegiao.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  data: PropTypes.object,
  isEmpty: PropTypes.bool,
};

ModalidadeRegiao.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  data: null,
  isEmpty: false,
};

export default ModalidadeRegiao;
