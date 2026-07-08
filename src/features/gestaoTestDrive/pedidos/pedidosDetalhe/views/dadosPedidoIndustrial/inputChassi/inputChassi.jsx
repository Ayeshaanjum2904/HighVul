import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput';

const InputChassi = ({
  chassi, updateDetalheProperty, camposEditaveis,
}) => (
  <FormatNumber
    type="text"
    label="Chassi"
    value={chassi}
    setValue={(value) => { updateDetalheProperty('chassi', value); }}
    disabled={!camposEditaveis.includes('Chassi')}
  />
);

InputChassi.propTypes = {
  chassi: PropTypes.string,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputChassi.defaultProps = {
  chassi: '',
  updateDetalheProperty: () => {},
  camposEditaveis: null,
};

export default InputChassi;
