import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const CadastroModeloButton = ({
  sendModelo, disabled, isLoading, title,
}) => (
  <Button
    onClick={sendModelo}
    disabled={disabled}
    isLoading={isLoading}
    fullWidth
    mixpanelTarget={title}
    mixpanelPage={trackedProperties.veiculosPage}
    color="new-gray"
  >
    {title}
  </Button>
);

CadastroModeloButton.propTypes = {
  sendModelo: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
};

CadastroModeloButton.defaultProps = {
  sendModelo: () => {},
  disabled: false,
  isLoading: false,
  title: null,
};

export default CadastroModeloButton;
