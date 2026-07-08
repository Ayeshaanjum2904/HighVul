import React from 'react';
import PropTypes from 'prop-types';

import Timeline from 'common/views/timeline';

const TimelinePedidos = ({
  gruposPedidos, isLoading,
}) => (
  <Timeline
    gruposComentarios={gruposPedidos}
    isLoading={isLoading}
  />
);

TimelinePedidos.propTypes = {
  gruposPedidos: PropTypes.array,
  isLoading: PropTypes.bool,
};

TimelinePedidos.defaultProps = {
  gruposPedidos: null,
  isLoading: false,
};

export default TimelinePedidos;
