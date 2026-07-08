import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const EnviarIntegracaoButton = ({
  isLoadingIntegracao, onEnviarIntegracao,
}) => (
  <Button
    color="new-blue"
    isLoading={isLoadingIntegracao}
    onClick={onEnviarIntegracao}
    fullWidth
    mixpanelTarget="Enviar para integração"
    mixpanelPage={trackedProperties.pedidosPage}
    data-cy="enviar-integracao-button"
  >
    Enviar para Integração
  </Button>
);

EnviarIntegracaoButton.propTypes = {
  isLoadingIntegracao: PropTypes.bool.isRequired,
  onEnviarIntegracao: PropTypes.func.isRequired,
};

export default EnviarIntegracaoButton;
