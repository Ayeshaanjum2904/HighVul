import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import SortButton from './views/sortButton';
import './pedidosHeader.scss';

const PedidosHeader = ({
  hasSelectedPedidos,
  areAllCurrentPageSelected,
  onToggleSelectAll,
}) => (
  <div
    className="pedidos__pedidos-list-header__container"
    data-cy="pedidos-list-header"
  >
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__checkbox">
      <Checkbox
        checked={areAllCurrentPageSelected}
        indeterminate={hasSelectedPedidos && !areAllCurrentPageSelected}
        onChange={onToggleSelectAll}
        data-cy="select-all-checkbox"
      />
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__ordem">
      ORDEM
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__id">
      ID
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__data">
      <SortButton />
    </div>

    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__status">
      STATUS
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__valor">
      VALOR
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__descricao">
      VEÍCULO
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__concessionaria">
      CONCESSIONÁRIA
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__modalidade">
      MODALIDADE
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__produto">
      PRODUTO
    </div>
    <div className="pedidos__pedidos-list-header__item pedidos__pedidos-list-header__mensagem" />
  </div>
);

PedidosHeader.propTypes = {
  hasSelectedPedidos: PropTypes.bool,
  areAllCurrentPageSelected: PropTypes.bool,
  onToggleSelectAll: PropTypes.func,
};

PedidosHeader.defaultProps = {
  hasSelectedPedidos: false,
  areAllCurrentPageSelected: false,
  onToggleSelectAll: () => { },
};

export default PedidosHeader;
