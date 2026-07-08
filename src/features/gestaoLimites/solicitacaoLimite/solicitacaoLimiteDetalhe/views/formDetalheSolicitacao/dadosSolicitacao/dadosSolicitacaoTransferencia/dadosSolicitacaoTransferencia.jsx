import React from 'react';
import PropTypes from 'prop-types';

import InputValor from '../formFields/inputValor';
import InputTipo from '../formFields/inputTipo';
import InputData from '../formFields/inputData';
import InputHora from '../formFields/inputHora';
import AlteracaoLimiteParcial from '../formFields/alteracaoLimiteParcial';
import Warning from '../formFields/alteracaoLimiteParcial/warning';
import AlterarButton from '../alterarButton';

import './dadosSolicitacaoTransferencia.scss';

const DadosSolicitacaoTransferencia = ({
  isAlteracaoValor, isAnaliseCredito,
}) => (
  <div className="solicitacoes__dados-solicitacao-transferencia__container">
    <div className="solicitacoes__dados-solicitacao-transferencia__container__title">
      Dados Solicitação
    </div>
    <div className="solicitacoes__dados-solicitacao-transferencia__container__content">
      <div className="solicitacoes__dados-solicitacao-transferencia__container__content_data">
        <InputData />
      </div>
      <div className="solicitacoes__dados-solicitacao-transferencia__container__content_hora">
        <InputHora />
      </div>

      <div className="solicitacoes__dados-solicitacao-transferencia__container__content_tipo">
        <InputTipo />
      </div>

    </div>
    <div className="solicitacoes__dados-solicitacao-transferencia__container__valor">
      <div className="solicitacoes__dados-solicitacao-transferencia__container__valor_atual">
        <InputValor />
      </div>
      {isAnaliseCredito ? (
        <div className="solicitacoes__dados-solicitacao-transferencia__container__valor_alterar">
          <AlterarButton />
        </div>
      ) : null}
      <div className="solicitacoes__dados-solicitacao-transferencia__container__valor_novo">
        {isAlteracaoValor && isAnaliseCredito ? (<AlteracaoLimiteParcial />) : null}
      </div>
    </div>
    <div className="solicitacoes__dados-solicitacao-transferencia__container__warning">
      {isAlteracaoValor && isAnaliseCredito ? (<Warning />) : null}

    </div>
  </div>
);

DadosSolicitacaoTransferencia.propTypes = {
  isAlteracaoValor: PropTypes.bool,
  isAnaliseCredito: PropTypes.bool,
};

DadosSolicitacaoTransferencia.defaultProps = {
  isAlteracaoValor: false,
  isAnaliseCredito: false,
};

export default DadosSolicitacaoTransferencia;
