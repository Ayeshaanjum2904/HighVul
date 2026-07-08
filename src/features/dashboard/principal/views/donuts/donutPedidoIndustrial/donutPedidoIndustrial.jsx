import React from 'react';
import PropTypes from 'prop-types';

import CardDonut from '../../../../commonViews/cardDonut';

const DonutPedidoIndustrial = ({
  isLoading, isError, dateFilter, data,
}) => (
  <CardDonut
    title="Pedido Industrial %"
    dateFilter={dateFilter}
    data={data}
    isLoading={isLoading}
    isError={isError}
    isEmpty={!data}
  />
);

DonutPedidoIndustrial.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  dateFilter: PropTypes.string,
  data: PropTypes.object,
};

DonutPedidoIndustrial.defaultProps = {
  isLoading: false,
  isError: false,
  dateFilter: '',
  data: null,
};

export default DonutPedidoIndustrial;
