import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';

import {
  formatMvsa, safeConcat, formatDate, formatDescVeiculo,
  formatCodigoConcessionaria, formatNomeConcessionaria, capitalize,
} from 'utils/format';
import ProdutoBadge from 'common/views/logoProduto';
import MessageIcon from 'common/controls/messageIcon';
import MarcaBadge from 'common/views/logoMarca';

import './pedidoRow.scss';

const setModalidade = (isAvista, isRevertido, isSemModalidade) => {
  if (isAvista && !isRevertido && !isSemModalidade) return 'À Vista';
  if (isSemModalidade && !isRevertido && !isAvista) return 'Sem Modalidade';
  if (!isAvista && !isRevertido && !isSemModalidade) return 'Financiado';

  return 'Revertido';
};

const PedidoRow = ({
  pedido, onRowClicked, isSelected, onToggleSelection,
}) => {
  const descricaoVeiculo = capitalize(formatDescVeiculo(safeConcat(pedido?.descricao, ` • ${pedido?.modelYear}`)), 1);
  const nomeConcessionaria = capitalize(formatNomeConcessionaria(pedido?.concessionariaNome), 2);

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    onToggleSelection(pedido, isSelected);
  };

  const formatCurrency = (value) => {
    if (!value) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(value));
  };

  return (
    <div
      className="pedidos__pedidos-list-row__container-outer"
      data-cy="pedidos-list-row"
      onClick={() => onRowClicked(pedido?.id)}
      role="row"
      tabIndex={0}
    >
      <div className="pedidos__pedidos-list-row__container">
        <div
          className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__checkbox"
          role="checkbox"
          aria-checked={isSelected}
          tabIndex={0}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              handleCheckboxClick(e);
            }
          }}
        >
          <Checkbox
            checked={isSelected}
            onClick={handleCheckboxClick}
            data-cy={`pedido-checkbox-${pedido?.id}`}
          />
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__ordem">
          {pedido?.ordemId ? `#${pedido.ordemId}` : '-'}
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__id">
          {safeConcat('#', pedido?.id)}
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__data">
          {formatDate(pedido?.dataPedido, 'DD/MM/YYYY')}
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__status" title={pedido?.status || '-'}>
          <span className="pedidos__pedidos-list-row__status__text">
            {pedido?.status || '-'}
          </span>
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__valor">
          {formatCurrency(pedido?.valor)}
        </div>

        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__descricao">
          <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__descricao__badge">
            <MarcaBadge marca={pedido?.marca} />
          </div>
          <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__descricao__subtitle">
            {formatMvsa(pedido?.modelo, pedido?.versao, pedido?.serie, pedido?.allestimento)}
          </div>
          <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__descricao__title" title={descricaoVeiculo}>
            {descricaoVeiculo}
          </div>
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__concessionaria">
          <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__concessionaria__subtitle">
            {formatCodigoConcessionaria(
              pedido.corretorId !== 0
                ? pedido?.corretorId : pedido.codBuc,
            )}
          </div>
          <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__concessionaria__title" title={nomeConcessionaria}>
            {nomeConcessionaria}
          </div>
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__modalidade">
          {setModalidade(pedido?.isAVista, pedido?.isRevertido, pedido?.isSemModalidade)}
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__produto">
          <ProdutoBadge produto={pedido?.produto} />
        </div>
        <div className="pedidos__pedidos-list-row__item pedidos__pedidos-list-row__mensagem">
          <MessageIcon checked={pedido?.hasComment} />
        </div>
      </div>
    </div>
  );
};

PedidoRow.propTypes = {
  pedido: PropTypes.object,
  onRowClicked: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  onToggleSelection: PropTypes.func,
};

PedidoRow.defaultProps = {
  pedido: {},
  isSelected: false,
  onToggleSelection: () => { },
};

export default PedidoRow;
