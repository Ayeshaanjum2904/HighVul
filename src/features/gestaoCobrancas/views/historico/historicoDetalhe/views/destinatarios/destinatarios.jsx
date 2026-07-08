import React from 'react';
import PropTypes from 'prop-types';

import './destinatarios.scss';

const Destinatarios = ({ destinatarios }) => (
  <div className="historico__destinatarios">
    <div className="historico__destinatarios__label">
      Destinatários
    </div>
    <div className="historico__destinatarios__content">
      <div className="historico__destinatarios__content_destinatario">
        {destinatarios}
      </div>
    </div>
  </div>
);

Destinatarios.propTypes = {
  destinatarios: PropTypes.string,
};

Destinatarios.defaultProps = {
  destinatarios: '',
};

export default Destinatarios;
