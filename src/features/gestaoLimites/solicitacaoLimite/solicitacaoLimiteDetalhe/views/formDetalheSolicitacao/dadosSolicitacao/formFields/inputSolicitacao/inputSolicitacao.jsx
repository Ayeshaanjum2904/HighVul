import React from 'react';
import PropTypes from 'prop-types';
import FormatNumber from 'common/controls/input/formInput/';

const InputSolicitacao = ({
  solicitacao,
}) => (
  <FormatNumber
    type="text"
    label="Solicitação"
    value={solicitacao}
    disabled
  />
);

InputSolicitacao.propTypes = {
  solicitacao: PropTypes.any,

};

InputSolicitacao.defaultProps = {
  solicitacao: null,
};

export default InputSolicitacao;
