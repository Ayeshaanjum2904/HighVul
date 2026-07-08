import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const AprovarComercialButton = ({
  isLoadingCancel, isModalSending, aprovarExcecao,
}) => (
  <Button
    disabled={isLoadingCancel}
    isLoading={isModalSending && !isLoadingCancel}
    onClick={() => aprovarExcecao()}
    fullWidth
    mixpanelTarget="Aprovar análise comercial"
    mixpanelPage={trackedProperties.pedidosPage}
  >
    Aprovar análise comercial
  </Button>
);

AprovarComercialButton.propTypes = {
  isLoadingCancel: PropTypes.bool.isRequired,
  isModalSending: PropTypes.bool.isRequired,
  aprovarExcecao: PropTypes.func.isRequired,
};

export default AprovarComercialButton;
