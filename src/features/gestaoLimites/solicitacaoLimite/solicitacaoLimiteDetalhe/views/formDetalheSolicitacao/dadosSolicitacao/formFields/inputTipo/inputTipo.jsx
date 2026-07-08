import React from 'react';
import PropTypes from 'prop-types';
import FormatNumber from 'common/controls/input/formInput/';

const InputTipo = ({
  tipo,
}) => (
  <FormatNumber
    type="text"
    label="Tipo"
    value={tipo}
    disabled
  />
);

InputTipo.propTypes = {
  tipo: PropTypes.any,

};

InputTipo.defaultProps = {
  tipo: null,
};

export default InputTipo;
