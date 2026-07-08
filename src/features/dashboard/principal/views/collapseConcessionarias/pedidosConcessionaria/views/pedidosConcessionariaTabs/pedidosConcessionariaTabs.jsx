import React from 'react';
import PropTypes from 'prop-types';

import Tabs from 'common/controls/tabs';

import {
  Loader, GroupTabs, GroupListType, GroupOrderBy,
} from '../../../../../redux/enums';

const labels = [
  { text: 'Mais pedidos', value: GroupTabs.maisPedidos },
  { text: 'Menos pedidos', value: GroupTabs.menosPedidos },
  { text: 'Mais pedidos à vista', value: GroupTabs.maisPedidosAVista },
  { text: 'Mais pedidos financiados', value: GroupTabs.maisPedidosFinanciado },
];

const PedidosConcessionariaTabs = ({
  registerLoader, selectedTab, setSelectedTab,
  getPedidosConcessionaria, loadData,
}) => {
  const handleChange = (event, newValue) => {
    switch (newValue) {
      case GroupTabs.maisPedidos:
        registerLoader(
          Loader.pedidosConcessionaria,
          getPedidosConcessionaria(GroupListType.geral, GroupOrderBy.descending),
        );
        break;
      case GroupTabs.menosPedidos:
        registerLoader(
          Loader.pedidosConcessionaria,
          getPedidosConcessionaria(GroupListType.geral, GroupOrderBy.ascending),
        );
        break;
      case GroupTabs.maisPedidosAVista:
        registerLoader(
          Loader.pedidosConcessionaria,
          getPedidosConcessionaria(GroupListType.aVista, GroupOrderBy.descending),
        );
        break;
      case GroupTabs.maisPedidosFinanciado:
        registerLoader(
          Loader.pedidosConcessionaria,
          getPedidosConcessionaria(GroupListType.financiado, GroupOrderBy.descending),
        );
        break;
      default:
        break;
    }
    setSelectedTab(newValue);
    loadData();
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      labels={labels}
    />
  );
};

PedidosConcessionariaTabs.propTypes = {
  registerLoader: PropTypes.func,
  setSelectedTab: PropTypes.func,
  getPedidosConcessionaria: PropTypes.func,
  loadData: PropTypes.func,
  selectedTab: PropTypes.string,
};

PedidosConcessionariaTabs.defaultProps = {
  registerLoader: () => {},
  setSelectedTab: () => {},
  getPedidosConcessionaria: () => {},
  loadData: () => {},
  selectedTab: null,
};

export default PedidosConcessionariaTabs;
