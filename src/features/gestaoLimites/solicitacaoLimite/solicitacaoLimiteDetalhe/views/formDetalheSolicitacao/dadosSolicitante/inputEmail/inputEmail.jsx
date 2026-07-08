import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputEmail = ({
  usuarioEmail,
}) => (
  <FormatNumber
    type="text"
    label="Email Usuário"
    value={usuarioEmail}
    disabled
  />
);

InputEmail.propTypes = {
  usuarioEmail: PropTypes.string,
};

InputEmail.defaultProps = {
  usuarioEmail: '',
};

export default InputEmail;
