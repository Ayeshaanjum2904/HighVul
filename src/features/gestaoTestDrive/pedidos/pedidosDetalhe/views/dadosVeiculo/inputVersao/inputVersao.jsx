import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputVersao = ({
  versao,
}) => (
  <FormatNumber
    type="text"
    label="Cód. Versão"
    value={versao}
    disabled
  />
);

InputVersao.propTypes = {
  versao: PropTypes.any,

};

InputVersao.defaultProps = {
  versao: '',

};

export default InputVersao;
