import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputGerenteJeep = ({
  gerente,
}) => (
  <FormInput
    type="text"
    label="Gerente Regional Jeep Bank"
    value={gerente}
    disabled
  />
);

InputGerenteJeep.propTypes = {
  gerente: PropTypes.string,
};

InputGerenteJeep.defaultProps = {
  gerente: '',
};

export default InputGerenteJeep;
