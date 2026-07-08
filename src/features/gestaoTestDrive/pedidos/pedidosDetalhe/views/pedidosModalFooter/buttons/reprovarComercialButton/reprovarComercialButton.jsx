import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const ReprovarComercialButton = ({
  isLoadingCancel, isModalSending, reprovarAdicional,
}) => (
  <Button
    disabled={isModalSending}
    isLoading={isLoadingCancel}
    onClick={() => reprovarAdicional()}
    color="new-gray"
    fullWidth
    mixpanelTarget="Reprovar análise comercial"
    mixpanelPage={trackedProperties.pedidosPage}
  >
    Reprovar análise comercial
  </Button>
);

ReprovarComercialButton.propTypes = {
  isLoadingCancel: PropTypes.bool.isRequired,
  isModalSending: PropTypes.bool.isRequired,
  reprovarAdicional: PropTypes.func.isRequired,
};

export default ReprovarComercialButton;
