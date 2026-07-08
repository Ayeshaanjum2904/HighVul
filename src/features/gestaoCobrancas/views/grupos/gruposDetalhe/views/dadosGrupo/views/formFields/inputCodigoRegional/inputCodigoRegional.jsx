import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputCodigoRegional = ({ regionalId }) => (
  <FormInput
    type="number"
    label="Código da Regional"
    value={regionalId}
    disabled
  />
);

InputCodigoRegional.propTypes = {
  regionalId: PropTypes.number,
};

InputCodigoRegional.defaultProps = {
  regionalId: null,
};

export default InputCodigoRegional;
