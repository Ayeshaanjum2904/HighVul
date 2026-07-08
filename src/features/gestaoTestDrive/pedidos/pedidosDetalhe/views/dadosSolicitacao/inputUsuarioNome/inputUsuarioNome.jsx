import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputUsuarioNome = ({
  usuarioNome,
}) => (
  <FormatNumber
    type="text"
    label="Usuário"
    value={usuarioNome}
    disabled
  />
);

InputUsuarioNome.propTypes = {
  usuarioNome: PropTypes.string,
};

InputUsuarioNome.defaultProps = {
  usuarioNome: '',

};

export default InputUsuarioNome;
