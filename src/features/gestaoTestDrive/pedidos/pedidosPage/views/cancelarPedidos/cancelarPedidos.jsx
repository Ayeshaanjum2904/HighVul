import React from 'react';
import PropTypes from 'prop-types';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { CancelarPedidosContainer, CancelarPedidosButton } from './cancelarPedidos.style';

const CancelarPedidos = ({
  selectedPedidos,
  isLoading,
  onCancelarClick,
}) => {
  const isDisabled = !selectedPedidos || selectedPedidos.length === 0 || isLoading;

  const handleCancelar = () => {
    if (!isDisabled) {
      onCancelarClick(selectedPedidos);
    }
  };

  return (
    <RenderIfPermission requireAny={[...Object.values(permissions.pedidos)]}>
      <CancelarPedidosContainer>
        <CancelarPedidosButton
          onClick={handleCancelar}
          disabled={isDisabled}
          isLoading={isLoading}
        >
          Cancelar pedidos
        </CancelarPedidosButton>
      </CancelarPedidosContainer>
    </RenderIfPermission>
  );
};

CancelarPedidos.propTypes = {
  selectedPedidos: PropTypes.array,
  isLoading: PropTypes.bool,
  onCancelarClick: PropTypes.func.isRequired,
};

CancelarPedidos.defaultProps = {
  selectedPedidos: [],
  isLoading: false,
};

export default CancelarPedidos;
