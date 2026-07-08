import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputCodigoSap = ({
  codigoSap,
}) => (
  <FormatNumber
    type="text"
    label="Código SAP"
    value={codigoSap.toString()}
    disabled
  />
);

InputCodigoSap.propTypes = {
  codigoSap: PropTypes.any,
};

InputCodigoSap.defaultProps = {
  codigoSap: '',
};

export default InputCodigoSap;
