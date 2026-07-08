import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputRegionalJeep = ({
  regional,
}) => (
  <FormInput
    type="text"
    label="Regional Jeep Bank"
    value={regional}
    disabled
  />
);

InputRegionalJeep.propTypes = {
  regional: PropTypes.string,
};

InputRegionalJeep.defaultProps = {
  regional: '',
};

export default InputRegionalJeep;
