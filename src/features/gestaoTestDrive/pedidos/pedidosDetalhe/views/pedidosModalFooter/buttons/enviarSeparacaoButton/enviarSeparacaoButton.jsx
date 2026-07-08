import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const EnviarSeparacaoButton = ({
  isModalSending, isLoadingCancel, sendDetalhePedido,
}) => (
  <Button
    disabled={isLoadingCancel}
    isLoading={isModalSending && !isLoadingCancel}
    onClick={sendDetalhePedido}
    fullWidth
    mixpanelTarget="Enviar para separação"
    mixpanelPage={trackedProperties.pedidosPage}
  >
    Enviar para separação
  </Button>
);

EnviarSeparacaoButton.propTypes = {
  isLoadingCancel: PropTypes.bool.isRequired,
  isModalSending: PropTypes.bool.isRequired,
  sendDetalhePedido: PropTypes.func.isRequired,
};

export default EnviarSeparacaoButton;
