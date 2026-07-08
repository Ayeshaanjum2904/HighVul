import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputMotivo = ({
  motivo, updateMotivo,
}) => (
  <FormatNumber
    type="text"
    label="Motivo Alteração"
    value={motivo}
    setValue={(value) => { updateMotivo(value); }}
  />
);

InputMotivo.propTypes = {
  motivo: PropTypes.any,
  updateMotivo: PropTypes.func,

};

InputMotivo.defaultProps = {
  motivo: null,
  updateMotivo: () => {},
};

export default InputMotivo;
