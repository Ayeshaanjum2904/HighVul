import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';

import CardDetalheVeiculo from './views/cardDetalheVeiculo';
import VeiculosDetalheFooter from './views/veiculosDetalheFooter';

import './veiculosDetalhe.scss';

const VeiculosDetalhe = ({
  resetStore, isLoading, isError, detalheVeiculo,
}) => {
  useEffect(() => () => {
    resetStore();
  });
  return (
    <div
      className="veiculos__modal__sidebar"
      data-cy="veiculos-modal-sidebar"
    >
      <List
        isLoading={isLoading}
        isError={isError}
        isEmpty={_.isEmpty(detalheVeiculo)}
      >
        <ListContent>
          <div className="veiculos__modal__detalhes">
            <CardDetalheVeiculo />
          </div>
          <div className="veiculos__modal__footer">
            <VeiculosDetalheFooter />
          </div>
        </ListContent>

        <ListContent type="empty">
          Nenhum veículo foi encontrado.
        </ListContent>

        <ListContent type="error">
          Ocorreu um erro ao carregar o detalhe do veículo.
        </ListContent>
      </List>
    </div>
  );
};

VeiculosDetalhe.propTypes = {
  resetStore: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  detalheVeiculo: PropTypes.object,
};

VeiculosDetalhe.defaultProps = {
  resetStore: () => {},
  isLoading: false,
  isError: false,
  detalheVeiculo: null,
};

export default VeiculosDetalhe;
