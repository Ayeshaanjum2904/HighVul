import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputRegiaoCodigo = ({
  regiaoCodigo,
}) => (
  <FormatNumber
    type="number"
    label="Cód. Regional"
    value={regiaoCodigo.toString()}
    disabled
  />
);

InputRegiaoCodigo.propTypes = {
  regiaoCodigo: PropTypes.any,

};

InputRegiaoCodigo.defaultProps = {
  regiaoCodigo: '',

};

export default InputRegiaoCodigo;
