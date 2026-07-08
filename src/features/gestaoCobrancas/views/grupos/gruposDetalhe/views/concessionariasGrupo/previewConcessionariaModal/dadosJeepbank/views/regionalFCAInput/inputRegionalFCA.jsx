import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRegionalFCA = ({
  regional,
}) => (
  <FormInput
    type="text"
    label="Descrição Regional FCA"
    value={regional}
    disabled
  />
);

InputRegionalFCA.propTypes = {
  regional: PropTypes.string,
};

InputRegionalFCA.defaultProps = {
  regional: '',
};

export default InputRegionalFCA;
