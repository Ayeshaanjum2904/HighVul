import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';

import DadosSolicitacao from '../dadosSolicitacao';
import DadosConcessionaria from '../dadosConcessionaria';
import DadosCondicaoComercial from '../dadosCondicaoComercial';
import DadosVeiculo from '../dadosVeiculo';
import DadosMontadora from '../dadosMontadora';
import DadosPedidoIndustrial from '../dadosPedidoIndustrial';
import DadosDoPedido from '../dadosDoPedido';
import DadosFaturamento from '../dadosFaturamento';
import DadosPedidoExcecao from '../dadosPedidoExcecao';
import DadosContrato from '../dadosContrato';

import './formDetalhePedido.scss';

const FormDetalhePedido = ({
  detalhePedido, isLoading, isError, isOrdem,
}) => {
  const isPeugeotOuCitroen = detalhePedido?.marca.includes('PEUGEOT') || detalhePedido?.marca.includes('CITROEN') || detalhePedido?.fluxoAntigo;

  return (
    <div className="pedidos__form__detalhe-pedido">
      <List
        isLoading={isLoading}
        isError={isError}
        isEmpty={_.isEmpty(detalhePedido)}
      >
        <ListContent>
          <DadosSolicitacao />
          <DadosPedidoExcecao />
          <DadosConcessionaria />
          <DadosCondicaoComercial />
          <DadosVeiculo isPeugeotOuCitroen={isPeugeotOuCitroen} />
          {!isPeugeotOuCitroen && <DadosMontadora />}
          {isOrdem ? <DadosDoPedido /> : <DadosPedidoIndustrial />}
          <DadosFaturamento />
          <DadosContrato />
        </ListContent>
        <ListContent type="empty">
          <div className="pedidos__form-list__message-container">
            Nenhum pedido encontrado.
          </div>
        </ListContent>

        <ListContent type="error">
          <div className="pedidos__form-list__message-container">
            Ocorreu um erro ao carregar o pedido.
          </div>
        </ListContent>
      </List>
    </div>
  );
};

FormDetalhePedido.propTypes = {
  detalhePedido: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  isOrdem: PropTypes.bool,
};

FormDetalhePedido.defaultProps = {
  detalhePedido: '',
  isLoading: false,
  isError: false,
  isOrdem: false,
};

export default FormDetalhePedido;
