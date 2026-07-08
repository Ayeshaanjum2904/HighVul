import React from 'react';
import PropTypes from 'prop-types';

import CardDonut from '../../../../commonViews/cardDonut';

const DonutPedidosFaturados = ({
  isLoading, isError, dateFilter, data,
}) => (
  <CardDonut
    title="Pedidos Faturados %"
    dateFilter={dateFilter}
    data={data}
    isLoading={isLoading}
    isError={isError}
    isEmpty={data?.labels?.length <= 0}
    isHorizontal
  />
);

DonutPedidosFaturados.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  dateFilter: PropTypes.string,
  data: PropTypes.object,
};

DonutPedidosFaturados.defaultProps = {
  isLoading: false,
  isError: false,
  dateFilter: '',
  data: null,
};

export default DonutPedidosFaturados;
