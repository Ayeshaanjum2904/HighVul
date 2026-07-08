import React from 'react';
import PropTypes from 'prop-types';

import CardDonut from '../../../../commonViews/cardDonut';

const DonutAprovacaoCredito = ({
  isLoading, isError, dateFilter, data,
}) => (

  <CardDonut
    title="Aprovação Crédito %"
    dateFilter={dateFilter}
    data={data}
    isLoading={isLoading}
    isError={isError}
    isEmpty={data?.labels?.length <= 0}
    isHorizontal
  />

);

DonutAprovacaoCredito.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  dateFilter: PropTypes.string,
  data: PropTypes.object,
};

DonutAprovacaoCredito.defaultProps = {
  isLoading: false,
  isError: false,
  dateFilter: '',
  data: null,
};

export default DonutAprovacaoCredito;
