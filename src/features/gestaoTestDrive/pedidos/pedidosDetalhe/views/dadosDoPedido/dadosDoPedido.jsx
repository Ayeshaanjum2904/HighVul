import React from 'react';
import PropTypes from 'prop-types';

import InputPedidoComercial from './inputPedidoComercial';
import InputPedidoIndustrial from './inputPedidoIndustrial';
import InputChassi from '../dadosPedidoIndustrial/inputChassi';

import './dadosDoPedido.scss';

const DadosDoPedido = ({
  camposEditaveis, pedidoComercial, pedidoIndustrial, chassi,
}) => {
  const hasDados = pedidoComercial || pedidoIndustrial || chassi;
  if (!hasDados && camposEditaveis.length === 0) {
    return null;
  }
  return (
    <div
      className="pedidos__dados-pedido__container"
      data-cy="pedidos__dados-pedido__container"
    >
      <div className="pedidos__dados-pedido__container__header_title">
        Dados do pedido
      </div>
      <div className="pedidos__dados-pedido__container__content">
        <div className="pedidos__dados-pedido__container__content_pedido-comercial">
          <InputPedidoComercial />
        </div>
        <div className="pedidos__dados-pedido__container__content_pedido-industrial">
          <InputPedidoIndustrial />
        </div>
        <div className="pedidos__dados-pedido__container__content_chassi">
          <InputChassi />
        </div>
      </div>
    </div>
  );
};

DadosDoPedido.propTypes = {
  camposEditaveis: PropTypes.array,
  pedidoComercial: PropTypes.string,
  pedidoIndustrial: PropTypes.string,
  chassi: PropTypes.string,
};

DadosDoPedido.defaultProps = {
  camposEditaveis: [],
  pedidoComercial: '',
  pedidoIndustrial: '',
  chassi: '',
};

export default DadosDoPedido;
