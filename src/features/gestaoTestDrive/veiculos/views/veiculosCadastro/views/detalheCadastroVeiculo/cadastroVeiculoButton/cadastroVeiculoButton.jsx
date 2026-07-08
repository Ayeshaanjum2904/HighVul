import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const CadastroVeiculoButton = ({
  sendVeiculo, disabled, isLoading, buttonTitle,
}) => (
  <Button
    onClick={sendVeiculo}
    disabled={disabled}
    isLoading={isLoading}
    fullWidth
    mixpanelTarget={buttonTitle}
    mixpanelPage={trackedProperties.veiculosPage}
  >
    {buttonTitle}
  </Button>
);

CadastroVeiculoButton.propTypes = {
  sendVeiculo: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  buttonTitle: PropTypes.string,
};

CadastroVeiculoButton.defaultProps = {
  sendVeiculo: () => {},
  disabled: false,
  isLoading: false,
  buttonTitle: null,
};

export default CadastroVeiculoButton;
