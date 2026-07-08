import React from 'react';
import PropTypes from 'prop-types';

import { ReprovarAnaliseCreditoContainer, ReprovarAnaliseCreditoButton } from './reprovarAnaliseCreditoPedidos.style';

const ReprovarAnaliseCreditoPedidos = ({
  selectedPedidos,
  isLoading,
  onReprovarClick,
}) => {
  const isDisabled = !selectedPedidos || selectedPedidos.length === 0 || isLoading;

  const handleReprovar = () => {
    if (!isDisabled) {
      onReprovarClick(selectedPedidos);
    }
  };

  return (
    <div>
      <ReprovarAnaliseCreditoContainer>
        <ReprovarAnaliseCreditoButton
          onClick={handleReprovar}
          disabled={isDisabled}
          isLoading={isLoading}
        >
          Reprovar análise de crédito
        </ReprovarAnaliseCreditoButton>
      </ReprovarAnaliseCreditoContainer>
    </div>
  );
};

ReprovarAnaliseCreditoPedidos.propTypes = {
  selectedPedidos: PropTypes.array,
  isLoading: PropTypes.bool,
  onReprovarClick: PropTypes.func.isRequired,
};

ReprovarAnaliseCreditoPedidos.defaultProps = {
  selectedPedidos: [],
  isLoading: false,
};

export default ReprovarAnaliseCreditoPedidos;
