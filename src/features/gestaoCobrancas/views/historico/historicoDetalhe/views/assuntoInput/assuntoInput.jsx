import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const AssuntoInput = ({
  assunto,
}) => (
  <FormInput
    type="text"
    label="Assunto do email"
    value={assunto}
    disabled
  />
);

AssuntoInput.propTypes = {
  assunto: PropTypes.string,
};

AssuntoInput.defaultProps = {
  assunto: '',
};

export default AssuntoInput;
