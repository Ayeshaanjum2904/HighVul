import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const AssuntoInput = ({ assunto, updateEmailProperty }) => (
  <FormInput
    type="text"
    label="Assunto do e-mail *"
    value={assunto}
    setValue={(value) => {
      updateEmailProperty(value);
    }}
    disabled={false}
  />
);

AssuntoInput.propTypes = {
  updateEmailProperty: PropTypes.func,
  assunto: PropTypes.string,
};

AssuntoInput.defaultProps = {
  updateEmailProperty: () => {},
  assunto: null,
};

export default AssuntoInput;
