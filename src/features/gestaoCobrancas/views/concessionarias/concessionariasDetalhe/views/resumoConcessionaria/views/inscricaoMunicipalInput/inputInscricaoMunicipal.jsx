import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputInscricaoMunicipal = ({
  inscricaoMunicipal,
}) => (
  <FormInput
    type="text"
    label="Inscrição municipal"
    value={inscricaoMunicipal?.toUpperCase()}
    disabled
  />
);

InputInscricaoMunicipal.propTypes = {
  inscricaoMunicipal: PropTypes.string,
};

InputInscricaoMunicipal.defaultProps = {
  inscricaoMunicipal: '',
};

export default InputInscricaoMunicipal;
