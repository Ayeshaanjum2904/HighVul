import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';

const CancelarPedidoButton = ({
  openCancelPedidoModal, isModalSending,
}) => (
  <Button
    disabled={isModalSending}
    onClick={() => openCancelPedidoModal()}
    color="dark_blue_border"
    fullWidth
  >
    Cancelar pedido
  </Button>
);

CancelarPedidoButton.propTypes = {
  openCancelPedidoModal: PropTypes.func.isRequired,
  isModalSending: PropTypes.bool.isRequired,
};

export default CancelarPedidoButton;
