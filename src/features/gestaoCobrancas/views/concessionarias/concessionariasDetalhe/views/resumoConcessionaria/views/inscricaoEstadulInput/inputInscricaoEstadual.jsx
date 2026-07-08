import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputInscricaoEstadual = ({
  inscricaoEstadual,
}) => (
  <FormInput
    type="text"
    label="Inscrição estadual"
    value={inscricaoEstadual?.toUpperCase()}
    disabled
  />
);

InputInscricaoEstadual.propTypes = {
  inscricaoEstadual: PropTypes.string,
};

InputInscricaoEstadual.defaultProps = {
  inscricaoEstadual: '',
};

export default InputInscricaoEstadual;
