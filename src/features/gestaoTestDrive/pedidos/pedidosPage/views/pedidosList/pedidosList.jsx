import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Scrollbars from 'react-custom-scrollbars';
import List, { ListContent } from 'common/layout/list';
import PedidosHeader from '../pedidosListHeader';
import PedidoRow from '../pedidosListRow';

import './pedidosList.scss';

const PedidosList = ({
  pedidos, isLoading, isError,
}) => (
  <Scrollbars
    style={{ width: '100%', height: '100%' }}
  >
    <div className="pedidos__pedidos-list__container" style={{ minWidth: 'max-content' }}>
      <div className="pedidos__pedidos-list__header">
        <PedidosHeader />
      </div>
      <List
        isLoading={isLoading}
        isError={isError}
        isEmpty={_.isEmpty(pedidos)}
      >
        <ListContent>
          {(Array.isArray(pedidos) ? pedidos : []).map((pedido, i) => (
            <PedidoRow pedido={pedido} key={i} />
          ))}
        </ListContent>

        <ListContent type="empty">
          <div
            className="pedidos__pedidos-list__message-container"
            data-cy="pedidos-list-message-container-vazia"
          >
            Nenhum pedido encontrado.
          </div>
        </ListContent>

        <ListContent type="error">
          <div
            className="pedidos__pedidos-list__message-container"
            data-cy="pedidos-list-message-container-erro"
          >
            Ocorreu um erro ao carregar os pedidos.
          </div>
        </ListContent>
      </List>
    </div>
  </Scrollbars>
);

PedidosList.propTypes = {
  pedidos: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

PedidosList.defaultProps = {
  pedidos: null,
  isLoading: false,
  isError: false,
};

export default PedidosList;
