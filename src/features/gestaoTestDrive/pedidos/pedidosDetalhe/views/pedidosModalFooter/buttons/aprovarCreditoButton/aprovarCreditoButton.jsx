import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const AprovarCreditoButton = ({
  isLoadingCancel, isModalSending, aprovarCredito,
}) => (
  <Button
    disabled={isLoadingCancel}
    isLoading={isModalSending}
    onClick={() => aprovarCredito()}
    fullWidth
    mixpanelTarget="Aprovar análise de crédito"
    mixpanelPage={trackedProperties.pedidosPage}
  >
    Aprovar análise de crédito
  </Button>
);

AprovarCreditoButton.propTypes = {
  isLoadingCancel: PropTypes.bool.isRequired,
  isModalSending: PropTypes.bool.isRequired,
  aprovarCredito: PropTypes.func.isRequired,
};

export default AprovarCreditoButton;
