import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import { trackedProperties } from 'modules';

const SalvarAlteracoesVeiculoButton = ({
  isLoading, saveDetalhesVeiculo, color, title, isFormValido, isDirty,
}) => (
  <Button
    disabled={isLoading || !isFormValido || !isDirty}
    isLoading={isLoading}
    onClick={saveDetalhesVeiculo}
    color={color}
    fullWidth
    mixpanelTarget={title}
    mixpanelPage={trackedProperties.pedidosPage}
  >
    {title}
  </Button>
);

SalvarAlteracoesVeiculoButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  saveDetalhesVeiculo: PropTypes.func.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  isFormValido: PropTypes.bool,
  isDirty: PropTypes.bool,
};

SalvarAlteracoesVeiculoButton.defaultProps = {
  color: 'new-blue',
  title: 'Salvar',
  isFormValido: false,
  isDirty: false,
};

export default SalvarAlteracoesVeiculoButton;
