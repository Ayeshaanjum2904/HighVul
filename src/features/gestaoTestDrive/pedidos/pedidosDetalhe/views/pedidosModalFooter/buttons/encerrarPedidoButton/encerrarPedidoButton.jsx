import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const EncerrarPedidoButton = ({
  isLoadingCancel, isModalSending, sendDetalhePedido, color, title,
}) => (
  <Button
    disabled={isLoadingCancel}
    isLoading={isModalSending && !isLoadingCancel}
    onClick={sendDetalhePedido}
    color={color}
    fullWidth
    mixpanelTarget={title}
    mixpanelPage={trackedProperties.pedidosPage}
  >
    {title}
  </Button>
);

EncerrarPedidoButton.propTypes = {
  isLoadingCancel: PropTypes.bool.isRequired,
  isModalSending: PropTypes.bool.isRequired,
  sendDetalhePedido: PropTypes.func.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
};

EncerrarPedidoButton.defaultProps = {
  color: 'new-blue',
  title: 'Encerrar pedido',
};

export default EncerrarPedidoButton;
