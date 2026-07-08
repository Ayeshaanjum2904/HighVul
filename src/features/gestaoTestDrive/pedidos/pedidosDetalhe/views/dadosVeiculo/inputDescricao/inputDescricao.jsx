import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputDescricao = ({
  descricao,
}) => (
  <FormatNumber
    type="text"
    label="Descrição"
    value={descricao}
    disabled
  />
);

InputDescricao.propTypes = {
  descricao: PropTypes.string,
};

InputDescricao.defaultProps = {
  descricao: '',
};

export default InputDescricao;
