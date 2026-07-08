import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputNome = ({
  usuarioNome,
}) => (
  <FormatNumber
    type="text"
    label="Usuário"
    value={usuarioNome}
    disabled
  />
);

InputNome.propTypes = {
  usuarioNome: PropTypes.string,
};

InputNome.defaultProps = {
  usuarioNome: '',

};

export default InputNome;
