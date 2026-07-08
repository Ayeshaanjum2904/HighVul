import React from 'react';
import PropTypes from 'prop-types';

import DadosSolicitacaoAlteracao from './dadosSolicitacaoAlteracao';
import DadosSolicitacaoTransferencia from './dadosSolicitacaoTransferencia';

const alteracaoLimTipo = 'Alteração de Limite';

const DadosSolicitacao = ({ tipo }) => (
  tipo === alteracaoLimTipo
    ? <DadosSolicitacaoAlteracao />
    : <DadosSolicitacaoTransferencia />

);

DadosSolicitacao.propTypes = {
  tipo: PropTypes.string,
};

DadosSolicitacao.defaultProps = {
  tipo: '',
};

export default DadosSolicitacao;
