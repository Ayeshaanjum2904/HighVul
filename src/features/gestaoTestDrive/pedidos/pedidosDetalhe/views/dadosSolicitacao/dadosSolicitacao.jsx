import React from 'react';

import InputUsuarioNome from './inputUsuarioNome';
import InputUsuarioEmail from './inputUsuarioEmail';
import InputData from './inputData';
import InputHora from './inputHora';
import InputObservacao from './inputObservacao';

import './dadosSolicitacao.scss';

const DadosSolicitacao = () => (
  <div
    className="pedidos__solicitacao__container"
    data-cy="pedidos-solicitacao-container"
  >
    <div className="pedidos__solicitacao__container__header_title">
      Dados Solicitação
    </div>
    <div className="pedidos__solicitacao__container__content">
      <div className="pedidos__solicitacao__container__content_data">
        <InputData />
      </div>
      <div className="pedidos__solicitacao__container__content_hora">
        <InputHora />
      </div>
      <div className="pedidos__solicitacao__container__content_usuario">
        <InputUsuarioNome />
      </div>
    </div>
    <div className="pedidos__solicitacao__container_email">
      <InputUsuarioEmail />
    </div>
    <div className="pedidos__solicitacao__container_observacao">
      <InputObservacao />
    </div>
  </div>
);

DadosSolicitacao.propTypes = {

};

DadosSolicitacao.defaultProps = {

};

export default DadosSolicitacao;
