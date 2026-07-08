import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';
import { requestActions } from '../../../../requestActions';

const AprovarAplicacaoButton = ({
  isLoading, aprovarStatus, action,
}) => (
  <Button
    disabled={isLoading}
    isLoading={isLoading && action === requestActions.aprovarAplicacao}
    onClick={() => aprovarStatus(requestActions.aprovarAplicacao)}
    fullWidth
  >
    Efetivar
  </Button>

);

AprovarAplicacaoButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  aprovarStatus: PropTypes.func.isRequired,
  action: PropTypes.string,
};

AprovarAplicacaoButton.defaultProps = {
  action: null,
};

export default AprovarAplicacaoButton;
