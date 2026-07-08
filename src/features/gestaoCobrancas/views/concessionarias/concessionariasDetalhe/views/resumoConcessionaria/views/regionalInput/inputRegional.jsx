import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';
import { camelFormat } from 'utils/format';

const InputRegional = ({
  regional,
}) => (
  <FormInput
    type="text"
    label="Regional"
    value={camelFormat(regional)}
    disabled
  />
);

InputRegional.propTypes = {
  regional: PropTypes.string,
};

InputRegional.defaultProps = {
  regional: '',
};

export default InputRegional;
