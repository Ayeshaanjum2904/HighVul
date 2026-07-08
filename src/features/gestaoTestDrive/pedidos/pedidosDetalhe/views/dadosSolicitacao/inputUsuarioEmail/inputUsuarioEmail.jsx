import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputUsuarioEmail = ({
  usuarioEmail,
}) => (
  <FormatNumber
    type="text"
    label="Email Usuário"
    value={usuarioEmail}
    disabled
  />
);

InputUsuarioEmail.propTypes = {
  usuarioEmail: PropTypes.string,

};

InputUsuarioEmail.defaultProps = {
  usuarioEmail: '',

};

export default InputUsuarioEmail;
