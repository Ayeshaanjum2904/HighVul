import React from 'react';
import PropTypes from 'prop-types';
import FormatNumber from 'common/controls/input/formInput/';

const InputBrand = ({
  brand,
}) => (
  <div>
    <FormatNumber
      type="text"
      label="Brand"
      value={brand}
      disabled
    />
  </div>
);

InputBrand.propTypes = {
  brand: PropTypes.string,
};

InputBrand.defaultProps = {
  brand: '',
};

export default InputBrand;
