import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';
import { camelFormat } from 'utils/format';

const InputBrand = ({
  brand,
}) => (
  <FormInput
    type="text"
    label="Brand"
    value={camelFormat(brand)}
    disabled
  />
);

InputBrand.propTypes = {
  brand: PropTypes.string,
};

InputBrand.defaultProps = {
  brand: '',
};

export default InputBrand;
