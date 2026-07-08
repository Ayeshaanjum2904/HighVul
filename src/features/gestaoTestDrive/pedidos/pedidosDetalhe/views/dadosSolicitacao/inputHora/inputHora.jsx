import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utils/format';

import FormatNumber from 'common/controls/input/formInput/';

const InputHora = ({
  data,
}) => (
  <FormatNumber
    type="number"
    label="Hora"
    value={formatDate(data, 'HH:mm')}
    disabled
  />
);

InputHora.propTypes = {
  data: PropTypes.any,

};

InputHora.defaultProps = {
  data: null,
};

export default InputHora;
