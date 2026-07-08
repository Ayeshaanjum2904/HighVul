import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';
import SolicitacaoLimiteHeader from '../solicitacaoLimiteListHeader/solicitacaoLimiteHeader';
import SolicitacaoLimiteGroup from '../solicitacaoLimiteListGroup/solicitacaoLimiteGroup';

import './solicitacaoLimiteList.scss';

const SolicitacaoLimiteList = ({
  gruposSolicitacoes, isLoading, isError,
}) => (
  <div className="solicitacoes__solicitacoes-list__container">
    <div className="solicitacoes__solicitacoes-list__header">
      <SolicitacaoLimiteHeader />
    </div>
    <List
      isLoading={isLoading}
      isError={isError}
      isEmpty={_.isEmpty(gruposSolicitacoes)}
    >
      <ListContent>
        {(Array.isArray(gruposSolicitacoes) ? gruposSolicitacoes : []).map((gs, i) => (
          <SolicitacaoLimiteGroup grupoSolicitacoes={gs} key={i} />
        ))}
      </ListContent>

      <ListContent type="empty">
        <div className="solicitacoes__solicitacoes-list__message-container">
          Nenhuma solicitação encontrada.
        </div>
      </ListContent>

      <ListContent type="error">
        <div className="solicitacoes__solicitacoes-list__message-container">
          Ocorreu um erro ao carregar as solicitacões.
        </div>
      </ListContent>
    </List>
  </div>
);

SolicitacaoLimiteList.propTypes = {
  gruposSolicitacoes: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

SolicitacaoLimiteList.defaultProps = {
  gruposSolicitacoes: null,
  isLoading: false,
  isError: false,
};

export default SolicitacaoLimiteList;
