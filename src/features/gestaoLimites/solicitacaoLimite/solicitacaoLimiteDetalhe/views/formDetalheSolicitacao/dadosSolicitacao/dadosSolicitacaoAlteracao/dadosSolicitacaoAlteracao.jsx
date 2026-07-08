import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';
import InputValor from '../formFields/inputValor';
import InputTipo from '../formFields/inputTipo';
import InputSolicitacao from '../formFields/inputSolicitacao';
import InputData from '../formFields/inputData';
import InputHora from '../formFields/inputHora';
import InputMotivo from '../formFields/inputMotivo';
import InputProduto from '../formFields/inputProduto';
import AlteracaoLimiteParcial from '../formFields/alteracaoLimiteParcial';
import Warning from '../formFields/alteracaoLimiteParcial/warning';
import AlterarButton from '../alterarButton';

import './dadosSolicitacaoAlteracao.scss';

const DadosSolicitacaoAlteracao = ({ isAnaliseCredito, isAlteracaoValor }) => (
  <div className="solicitacoes__dados-solicitacao-alteracao__container">
    <div className="solicitacoes__dados-solicitacao-alteracao__container__title">
      Dados Solicitação
    </div>
    <div className="solicitacoes__dados-solicitacao-alteracao__container__content">
      <div className="solicitacoes__dados-solicitacao-alteracao__container__content_data">
        <InputData />
      </div>
      <div className="solicitacoes__dados-solicitacao-alteracao__container__content_hora">
        <InputHora />
      </div>
      <div className="solicitacoes__dados-solicitacao-alteracao__container__content_produto">
        <InputProduto />
      </div>
      <div className="solicitacoes__dados-solicitacao-alteracao__container__content_tipo">
        <InputTipo />
      </div>
      <div className="solicitacoes__dados-solicitacao-alteracao__container__content_solicitacao">
        <InputSolicitacao />
      </div>
    </div>
    <div className="solicitacoes__dados-solicitacao-alteracao__container__valor">
      <div className="solicitacoes__dados-solicitacao-alteracao__container__valor_atual">
        <InputValor />
      </div>
      {isAnaliseCredito ? (
        <div className="solicitacoes__dados-solicitacao-alteracao__container__valor_alterar">
          <AlterarButton />
        </div>
      ) : null}
      {isAlteracaoValor && isAnaliseCredito ? (<AlteracaoLimiteParcial />) : null}
    </div>

    {isAlteracaoValor && isAnaliseCredito ? (
      <div className="solicitacoes__dados-solicitacao-alteracao__container__warning">
        <Warning />
      </div>
    ) : null}

    <div className="solicitacoes__dados-solicitacao-alteracao__container__motivo">
      <p className="solicitacoes__dados-solicitacao-alteracao__container__motivo__span">Motivo</p>
      <Scrollbars>
        <InputMotivo />
      </Scrollbars>
    </div>
  </div>
);

DadosSolicitacaoAlteracao.propTypes = {
  isAlteracaoValor: PropTypes.bool,
  isAnaliseCredito: PropTypes.bool,
};

DadosSolicitacaoAlteracao.defaultProps = {
  isAlteracaoValor: false,
  isAnaliseCredito: false,
};

export default DadosSolicitacaoAlteracao;
