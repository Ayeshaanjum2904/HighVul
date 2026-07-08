import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

import { formatDate } from 'utils/format';

const InputData = ({
  data,
}) => (
  <FormatNumber
    type="number"
    label="Data"
    value={formatDate(data, 'DD/MM/YYYY')}
    disabled
  />
);

InputData.propTypes = {
  data: PropTypes.any,
};

InputData.defaultProps = {
  data: '',
};

export default InputData;
