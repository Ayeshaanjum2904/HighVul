import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

import { formatDate } from 'utils/format';

const DataEnvioInput = ({
  data,
}) => (
  <FormInput
    type="text"
    label="Data de Envio"
    value={formatDate(data)}
    disabled
  />
);

DataEnvioInput.propTypes = {
  data: PropTypes.object,
};

DataEnvioInput.defaultProps = {
  data: null,
};

export default DataEnvioInput;
