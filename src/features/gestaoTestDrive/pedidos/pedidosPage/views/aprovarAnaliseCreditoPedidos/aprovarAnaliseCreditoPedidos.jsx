import React from 'react';
import PropTypes from 'prop-types';

import { AprovarAnaliseCreditoContainer, AprovarAnaliseCreditoButton } from './aprovarAnaliseCreditoPedidos.style';

const AprovarAnaliseCreditoPedidos = ({
  selectedPedidos,
  isLoading,
  onAprovarClick,
}) => {
  const isDisabled = !selectedPedidos || selectedPedidos.length === 0 || isLoading;

  const handleAprovar = () => {
    if (!isDisabled) {
      onAprovarClick(selectedPedidos);
    }
  };

  return (
    <div>
      <AprovarAnaliseCreditoContainer>
        <AprovarAnaliseCreditoButton
          onClick={handleAprovar}
          disabled={isDisabled}
          isLoading={isLoading}
        >
          Aprovar análise de crédito
        </AprovarAnaliseCreditoButton>
      </AprovarAnaliseCreditoContainer>
    </div>
  );
};

AprovarAnaliseCreditoPedidos.propTypes = {
  selectedPedidos: PropTypes.array,
  isLoading: PropTypes.bool,
  onAprovarClick: PropTypes.func.isRequired,
};

AprovarAnaliseCreditoPedidos.defaultProps = {
  selectedPedidos: [],
  isLoading: false,
};

export default AprovarAnaliseCreditoPedidos;
