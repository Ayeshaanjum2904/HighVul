import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';

const InputDescricao = ({
  descricaoModelo, updateModeloProperty,
}) => (
  <FormatInput
    type="text"
    label="Descrição do modelo"
    value={descricaoModelo}
    setValue={(value) => { updateModeloProperty('descricaoModelo', value); }}
  />
);

InputDescricao.propTypes = {
  descricaoModelo: PropTypes.any,
  updateModeloProperty: PropTypes.func,
};

InputDescricao.defaultProps = {
  updateModeloProperty: () => {},
  descricaoModelo: null,
};

export default InputDescricao;
