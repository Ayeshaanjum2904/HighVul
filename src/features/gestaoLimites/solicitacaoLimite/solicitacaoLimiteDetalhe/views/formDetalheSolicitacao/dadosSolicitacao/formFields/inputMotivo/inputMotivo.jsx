import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputMotivo = ({
  motivo,
}) => (
  <FormatNumber
    type="text"
    value={motivo}
    rows={3}
    multiline
    disabled
  />
);

InputMotivo.propTypes = {
  motivo: PropTypes.string,
};

InputMotivo.defaultProps = {
  motivo: '',
};

export default InputMotivo;
