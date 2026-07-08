import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputSerie = ({
  descricaoSerie, updateVeiculoProperty,
}) => (
  <FormatInput
    type="text"
    label="Série"
    value={descricaoSerie}
    setValue={(value) => { updateVeiculoProperty('descricaoSerie', value); }}
  />
);

InputSerie.propTypes = {
  descricaoSerie: PropTypes.any,
  updateVeiculoProperty: PropTypes.func,
};

InputSerie.defaultProps = {
  updateVeiculoProperty: () => {},
  descricaoSerie: null,
};

export default InputSerie;
