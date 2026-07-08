import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';

const CancelarContratoButton = ({
  openCancelPedidoModal, isModalSending,
}) => (
  <Button
    disabled={isModalSending}
    onClick={() => openCancelPedidoModal()}
    color="new-gray"
    fullWidth
  >
    Cancelar contrato
  </Button>
);

CancelarContratoButton.propTypes = {
  openCancelPedidoModal: PropTypes.func.isRequired,
  isModalSending: PropTypes.bool.isRequired,
};

export default CancelarContratoButton;
