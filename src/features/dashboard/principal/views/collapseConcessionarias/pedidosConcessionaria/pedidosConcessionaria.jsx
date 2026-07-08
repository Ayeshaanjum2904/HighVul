import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import DetalhePedidosConcessionaria from './views/detalhePedidosConcessionaria';
import DownloadButton from './views/downloadButton';
import PedidosConcessionariaTabs from './views/pedidosConcessionariaTabs';
import SelectState from './views/selectState';

import { Loader, GroupOrderBy, GroupListType } from '../../../redux/enums';

import CardTitle from '../../../../commonViews/cardTitle';

import './pedidosConcessionaria.scss';

const PedidosConcessionaria = ({
  dateFilter, isLoading, isError,
  data, getPedidosConcessionaria, registerLoader,
}) => {
  useEffect(() => {
    registerLoader(
      Loader.pedidosConcessionaria,
      getPedidosConcessionaria(GroupListType.geral, GroupOrderBy.descending),
    );
  }, [registerLoader, getPedidosConcessionaria]);
  return (
    <div className="dashboard__pedidos-concessionaria__container">
      <div className="dashboard__pedidos-concessionaria__container__header">
        <div className="dashboard__pedidos-concessionaria__container__header_title">
          <CardTitle dateFilter={dateFilter} title="Quantidade de pedidos por Grupos de concessionárias" />
        </div>
        <div
          className="dashboard__pedidos-concessionaria__container__header_button"
          data-cy="download-button-pedidos-concessionaria"
        >
          <DownloadButton />
        </div>
      </div>
      <div className="dashboard__pedidos-concessionaria__container__tabs">
        <PedidosConcessionariaTabs />
      </div>
      <div className="dashboard__pedidos-concessionaria__container__content">
        <SelectState
          isLoading={isLoading}
          isError={isError}
          isEmpty={_.isEmpty(data)}
        >
          <DetalhePedidosConcessionaria />
        </SelectState>
      </div>
    </div>
  );
};

PedidosConcessionaria.propTypes = {
  dateFilter: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  data: PropTypes.array,
  getPedidosConcessionaria: PropTypes.func,
  registerLoader: PropTypes.func,
};

PedidosConcessionaria.defaultProps = {
  dateFilter: '',
  isLoading: false,
  isError: false,
  data: null,
  getPedidosConcessionaria: () => {},
  registerLoader: () => {},
};

export default PedidosConcessionaria;
