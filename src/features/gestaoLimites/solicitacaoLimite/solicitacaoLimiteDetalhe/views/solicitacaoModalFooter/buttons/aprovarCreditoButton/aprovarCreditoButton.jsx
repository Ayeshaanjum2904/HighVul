import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';
import { requestActions } from '../../../../requestActions';

const AprovarCreditoButton = ({
  isLoading, aprovarStatus, action,
}) => (
  <Button
    disabled={isLoading}
    isLoading={isLoading && action === requestActions.aprovarCredito}
    onClick={() => aprovarStatus(requestActions.aprovarCredito)}
    fullWidth
  >
    Aprovar
  </Button>

);

AprovarCreditoButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  aprovarStatus: PropTypes.func.isRequired,
  action: PropTypes.string,
};

AprovarCreditoButton.defaultProps = {
  action: null,
};

export default AprovarCreditoButton;
