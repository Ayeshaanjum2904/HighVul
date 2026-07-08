import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const ReprovarCreditoButton = ({
  isLoadingCancel, isModalSending, reprovarCredito,
}) => (
  <Button
    disabled={isModalSending}
    isLoading={isLoadingCancel}
    onClick={() => reprovarCredito()}
    color="new-gray"
    fullWidth
    mixpanelTarget="Reprovar análise de crédito"
    mixpanelPage={trackedProperties.pedidosPage}
  >
    Reprovar análise de crédito
  </Button>
);

ReprovarCreditoButton.propTypes = {
  isLoadingCancel: PropTypes.bool.isRequired,
  isModalSending: PropTypes.bool.isRequired,
  reprovarCredito: PropTypes.func.isRequired,
};

export default ReprovarCreditoButton;
