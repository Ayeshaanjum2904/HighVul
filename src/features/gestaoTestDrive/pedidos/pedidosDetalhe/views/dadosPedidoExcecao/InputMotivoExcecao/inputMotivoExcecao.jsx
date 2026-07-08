import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputMotivoExcecao = ({
  motivo,
}) => (
  <FormatNumber
    type="text"
    label="Motivo"
    value={motivo}
    disabled
  />
);

InputMotivoExcecao.propTypes = {
  motivo: PropTypes.string,
};

InputMotivoExcecao.defaultProps = {
  motivo: '',

};

export default InputMotivoExcecao;
