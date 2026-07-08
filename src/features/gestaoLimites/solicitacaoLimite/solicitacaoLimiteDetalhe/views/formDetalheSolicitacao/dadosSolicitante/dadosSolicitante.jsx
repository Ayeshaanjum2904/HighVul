import React from 'react';

import InputNome from './inputNome';
import InputEmail from './inputEmail';

import './dadosSolicitante.scss';

const DadosSolicitante = () => (
  <div className="solicitacoes__dados-usuario__container">
    <div className="solicitacoes__dados-usuario__container__title">
      Dados do solicitante
    </div>
    <div className="solicitacoes__dados-usuario__container__content">
      <div className="solicitacoes__dados-usuario__container__content_nome">
        <InputNome />
      </div>
      <div className="solicitacoes__dados-usuario__container__content_email">
        <InputEmail />
      </div>
    </div>
  </div>
);

DadosSolicitante.propTypes = {

};

DadosSolicitante.defaultProps = {

};

export default DadosSolicitante;
