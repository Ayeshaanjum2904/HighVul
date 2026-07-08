import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputObservacao = ({
  observacao,
}) => (
  <FormatNumber
    type="text"
    label="Observação"
    value={observacao}
    rows={3}
    multiline
    disabled
  />
);

InputObservacao.propTypes = {
  observacao: PropTypes.string,
};

InputObservacao.defaultProps = {
  observacao: '',
};

export default InputObservacao;
