import React from 'react';
import PropTypes from 'prop-types';

import './pedidosFooter.scss';

const PedidosFooter = ({
  selectedCount,
  selectedTotal,
  hasSelectedPedidos,
}) => {
  if (!hasSelectedPedidos) {
    return null;
  }

  const formatCurrency = (value) => {
    if (!value && value !== 0) return 'R$ 0,00';

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="pedidos-footer">
      <div className="pedidos-footer__container">
        <span className="pedidos-footer__count">
          Pedidos selecionados:
          {' '}
          {selectedCount}
        </span>
        <span className="pedidos-footer__total">
          Valor total:
          {' '}
          {formatCurrency(selectedTotal)}
        </span>
      </div>
    </div>
  );
};

PedidosFooter.propTypes = {
  selectedCount: PropTypes.number.isRequired,
  selectedTotal: PropTypes.number.isRequired,
  hasSelectedPedidos: PropTypes.bool.isRequired,
};

export default PedidosFooter;
