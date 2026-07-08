import React from 'react';
import PropTypes from 'prop-types';

import ArquivosExcecao from './arquivosExcecaoList';
import InputMotivoExcecao from './InputMotivoExcecao';

import './dadosPedidoExcecao.scss';

const DadosPedidoExcecao = ({ arquivosExcecao, isTdExcecao }) => (
  isTdExcecao ? (
    <div
      className="pedidos__excecao__container"
      data-cy="pedidos-excecao-container"
    >
      <div className="pedidos__excecao__container__header_title">
        Documentações do pedido em exceção
      </div>
      <div className="pedidos__excecao__container__header_excecao">
        <InputMotivoExcecao />
      </div>
      <div className="pedidos__excecao__container__content">
        {arquivosExcecao.length > 0
          ? (
            <ArquivosExcecao
              arquivosExcecao={arquivosExcecao}
            />
          )
          : null}
      </div>
    </div>
  ) : null
);

DadosPedidoExcecao.propTypes = {
  arquivosExcecao: PropTypes.array,
  isTdExcecao: PropTypes.bool,
};

DadosPedidoExcecao.defaultProps = {
  arquivosExcecao: [],
  isTdExcecao: false,
};

export default DadosPedidoExcecao;
