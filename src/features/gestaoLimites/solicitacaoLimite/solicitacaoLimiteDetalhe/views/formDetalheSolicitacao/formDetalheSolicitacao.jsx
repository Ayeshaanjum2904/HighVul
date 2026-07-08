import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';
import DadosSolicitacao from './dadosSolicitacao';
import DadosConcessionaria from './dadosConcessionaria';
import DadosSolicitante from './dadosSolicitante';

const alteracaoLimTipo = 'Alteração de Limite';
const FormDetalheSolicitacao = ({
  isLoading, isError, detalheSolicitacao,
}) => (
  <List
    isLoading={isLoading}
    isError={isError}
    isEmpty={_.isEmpty(detalheSolicitacao)}
  >
    <ListContent>
      <DadosSolicitacao />
      {detalheSolicitacao?.tipo === alteracaoLimTipo
        ? (
          <DadosConcessionaria
            concessionaria={detalheSolicitacao?.concessionariaOrigem}
            regiao={detalheSolicitacao?.regiaoOrigem}
          />
        )
        : (
          <>
            <DadosConcessionaria
              concessionaria={detalheSolicitacao?.concessionariaOrigem}
              regiao={detalheSolicitacao?.regiaoOrigem}
              produto={detalheSolicitacao?.produtoOrigem}
              title="Dados de origem"
            />
            <DadosConcessionaria
              concessionaria={detalheSolicitacao?.concessionariaDestino}
              regiao={detalheSolicitacao?.regiaoDestino}
              produto={detalheSolicitacao?.produtoDestino}
              title="Dados de destino"
            />
          </>
        )}
      <DadosSolicitante />
    </ListContent>
    <ListContent type="empty">
      <div className="solicitacoes__form-list__message-container">
        Nenhuma solicitação encontrada.
      </div>
    </ListContent>

    <ListContent type="error">
      <div className="solicitacoes__form-list__message-container">
        Ocorreu um erro ao carregar o pedido.
      </div>
    </ListContent>
  </List>

);

FormDetalheSolicitacao.propTypes = {
  detalheSolicitacao: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

FormDetalheSolicitacao.defaultProps = {
  detalheSolicitacao: null,
  isLoading: false,
  isError: false,
};

export default FormDetalheSolicitacao;
