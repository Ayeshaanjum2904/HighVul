import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CardDonut from '../../../../commonViews/cardDonut';
import { Loader } from '../../../redux/enums';

const DonutModelo = ({
  isLoading, isError, registerLoader, getPedidosModelo, dateFilter, dataset,
}) => {
  useEffect(() => {
    registerLoader(Loader.pedidosModelo, getPedidosModelo());
  }, [registerLoader, getPedidosModelo]);
  return (
    <CardDonut
      title="Pedidos por modelo %"
      dateFilter={dateFilter}
      data={dataset}
      isLoading={isLoading}
      isError={isError}
      isEmpty={_.isEmpty(dataset.datasets[0].data)}
      isHorizontal
    />
  );
};

DonutModelo.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  getPedidosModelo: PropTypes.func,
  registerLoader: PropTypes.func,
  dataset: PropTypes.object,
};

DonutModelo.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  getPedidosModelo: () => {},
  registerLoader: () => {},
  dataset: [],
};

export default DonutModelo;
