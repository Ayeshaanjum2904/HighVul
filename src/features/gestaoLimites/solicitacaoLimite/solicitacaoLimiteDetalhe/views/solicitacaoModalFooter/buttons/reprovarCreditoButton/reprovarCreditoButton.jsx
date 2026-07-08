import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';
import { requestActions } from '../../../../requestActions';

const ReprovarCreditoButton = ({
  isLoading, reprovar, action,
}) => (
  <Button
    disabled={isLoading}
    isLoading={isLoading && action === requestActions.reprovarCredito}
    onClick={() => reprovar(requestActions.reprovarCredito)}
    color="dark_gray_border"
    fullWidth
  >
    Reprovar Solicitação
  </Button>

);

ReprovarCreditoButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  reprovar: PropTypes.func.isRequired,
  action: PropTypes.string,
};

ReprovarCreditoButton.defaultProps = {
  action: null,
};

export default ReprovarCreditoButton;
