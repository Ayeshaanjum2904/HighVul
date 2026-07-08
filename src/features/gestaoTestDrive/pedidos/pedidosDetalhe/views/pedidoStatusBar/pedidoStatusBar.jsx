/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import StatusLabel from './statusLabel';

const PedidosStatusBar = ({
  statusBar,
}) => (
  <>
    { ((statusBar || []).map((i, index) => (
      <StatusLabel
        numero={index + 1}
        titulo={i?.titulo}
        situacao={i?.situacao}
        key={index}
      />
    ))) }
  </>
);

PedidosStatusBar.propTypes = {
  statusBar: PropTypes.array,
};

PedidosStatusBar.defaultProps = {
  statusBar: null,
};

export default PedidosStatusBar;
