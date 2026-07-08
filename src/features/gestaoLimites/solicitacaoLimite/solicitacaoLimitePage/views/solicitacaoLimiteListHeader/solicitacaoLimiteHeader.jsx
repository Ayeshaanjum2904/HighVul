import React from 'react';

import './solicitacaoLimiteHeader.scss';

const SolicitacaoLimiteHeader = () => (
  <div className="solicitacoes__solicitacoes-list-header__container">
    <div className="solicitacoes__solicitacoes-list-header__item solicitacoes__solicitacoes-list-header__id">
      ID
    </div>
    <div className="solicitacoes__solicitacoes-list-header__item solicitacoes__solicitacoes-list-header__data">
      DATA
    </div>
    <div className="solicitacoes__solicitacoes-list-header__item solicitacoes__solicitacoes-list-header__solicitante">
      SOLICITANTE
    </div>
    <div className="solicitacoes__solicitacoes-list-header__item solicitacoes__solicitacoes-list-header__concessionaria">
      CONCESSIONÁRIA
    </div>
    <div className="solicitacoes__solicitacoes-list-header__item solicitacoes__solicitacoes-list-header__tipo">
      TIPO DE SOLICITAÇÃO
    </div>
  </div>
);

export default SolicitacaoLimiteHeader;
