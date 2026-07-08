import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputConsultorJeep = ({
  consultor,
}) => (
  <FormInput
    type="text"
    label="Consultor Comercial Jeep Bank"
    value={consultor}
    disabled
  />
);

InputConsultorJeep.propTypes = {
  consultor: PropTypes.string,
};

InputConsultorJeep.defaultProps = {
  consultor: '',
};

export default InputConsultorJeep;
