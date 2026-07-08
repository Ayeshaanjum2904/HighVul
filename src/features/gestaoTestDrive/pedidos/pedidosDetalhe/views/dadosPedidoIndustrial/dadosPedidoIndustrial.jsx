import React from 'react';
import PropTypes from 'prop-types';

import InputPedidoIndustrial from './inputPedidoIndustrial';
import InputChassi from './inputChassi';

import './dadosPedidoIndustrial.scss';

const DadosPedidoIndustrial = ({
  camposEditaveis, pedidoIndustrial, chassi,
}) => {
  const hasDados = pedidoIndustrial || chassi;
  if (!hasDados && camposEditaveis.length === 0) {
    return null;
  }
  return (
    <div
      className="pedidos__pedido-industrial__container"
      data-cy="pedidos__pedido-industrial__container"
    >
      <div className="pedidos__pedido-industrial__container__header_title">
        Pedido Industrial
      </div>
      <div className="pedidos__pedido-industrial__container__content">
        <div className="pedidos__pedido-industrial__container__content_pedido">
          <InputPedidoIndustrial />
        </div>
        <div className="pedidos__pedido-industrial__container__content_chassi">
          <InputChassi />
        </div>
      </div>
    </div>
  );
};

DadosPedidoIndustrial.propTypes = {
  camposEditaveis: PropTypes.array,
  pedidoIndustrial: PropTypes.string,
  chassi: PropTypes.string,
};

DadosPedidoIndustrial.defaultProps = {
  camposEditaveis: [],
  pedidoIndustrial: '',
  chassi: '',
};

export default DadosPedidoIndustrial;
