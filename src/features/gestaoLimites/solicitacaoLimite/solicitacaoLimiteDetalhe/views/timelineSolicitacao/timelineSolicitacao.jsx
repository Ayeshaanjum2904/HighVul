import React from 'react';
import PropTypes from 'prop-types';

import Timeline from 'common/views/timeline';

const TimelineSolicitacao = ({
  gruposSolicitacoes, isLoading,
}) => (
  <Timeline
    gruposComentarios={gruposSolicitacoes}
    isLoading={isLoading}
  />
);

TimelineSolicitacao.propTypes = {
  gruposSolicitacoes: PropTypes.array,
  isLoading: PropTypes.bool,
};

TimelineSolicitacao.defaultProps = {
  gruposSolicitacoes: null,
  isLoading: false,
};

export default TimelineSolicitacao;
