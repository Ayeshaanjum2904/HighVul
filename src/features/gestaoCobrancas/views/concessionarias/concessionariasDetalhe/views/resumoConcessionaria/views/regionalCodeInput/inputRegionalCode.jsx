import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRegionalCode = ({
  regionalCode,
}) => (
  <FormInput
    type="number"
    label="Código da Regional"
    value={regionalCode}
    disabled
  />
);

InputRegionalCode.propTypes = {
  regionalCode: PropTypes.number,
};

InputRegionalCode.defaultProps = {
  regionalCode: null,
};

export default InputRegionalCode;
