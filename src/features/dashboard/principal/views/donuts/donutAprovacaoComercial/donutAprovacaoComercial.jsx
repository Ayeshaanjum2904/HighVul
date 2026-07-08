import React from 'react';
import PropTypes from 'prop-types';

import CardDonut from '../../../../commonViews/cardDonut';

const DonutAprovacaoComercial = ({
  isLoading, isError, dateFilter, data,
}) => (
  <CardDonut
    title="Aprovação Comercial %"
    dateFilter={dateFilter}
    data={data}
    isLoading={isLoading}
    isError={isError}
    isEmpty={data?.labels?.length <= 0}
    isHorizontal
  />
);

DonutAprovacaoComercial.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  dateFilter: PropTypes.string,
  data: PropTypes.object,
};

DonutAprovacaoComercial.defaultProps = {
  isLoading: false,
  isError: false,
  dateFilter: '',
  data: null,
};

export default DonutAprovacaoComercial;
