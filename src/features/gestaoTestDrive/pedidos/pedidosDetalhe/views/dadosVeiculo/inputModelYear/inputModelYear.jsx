import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputModelYear = ({
  modelYear,
}) => (
  <FormatNumber
    type="number"
    label="Model/Year"
    value={modelYear}
    disabled
  />
);

InputModelYear.propTypes = {
  modelYear: PropTypes.string,

};

InputModelYear.defaultProps = {
  modelYear: '',

};

export default InputModelYear;
