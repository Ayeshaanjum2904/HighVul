import React from 'react';
import PropTypes from 'prop-types';

import Select from 'common/controls/select';
import { Mixpanel, trackedProperties } from 'modules';
import { createMenuItems } from '../../../redux/reducerUtils';

import InputSelectDetalhePedido from './inputSelectDetalhePedido';

const SelectCondicao = ({
  detalhePedido, updateCondicaoSelecionada, condicaoSelecionada,
}) => {
  const menuItems = createMenuItems(detalhePedido);
  return (
    <div className="pedidos-select-condicao-comercial__container">
      <Select
        items={menuItems}
        label=""
        value={condicaoSelecionada?.id ?? 'null'}
        onSelect={(p) => {
          updateCondicaoSelecionada(menuItems.find((x) => x.value === p));
          Mixpanel.trackButtonClick('Reversão de pedido', trackedProperties.pedidosPage);
        }}
        placeholder=""
        CustomInput={InputSelectDetalhePedido}
        disabled={!detalhePedido?.camposEditaveis.includes('CondicaoVeiculoId')}
      />
    </div>
  );
};
SelectCondicao.propTypes = {
  condicaoSelecionada: PropTypes.object,
  detalhePedido: PropTypes.object,
  updateCondicaoSelecionada: PropTypes.func,

};

SelectCondicao.defaultProps = {
  condicaoSelecionada: null,
  detalhePedido: null,
  updateCondicaoSelecionada: () => {},
};

export default SelectCondicao;
