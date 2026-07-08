import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputValor = ({
  value, setValue, id,
}) => (
  <FormInput
    type="percent"
    label="Desconto à vista (%)"
    value={value}
    setValue={(v) => {
      setValue(id, v);
    }}
    disabled={false}
  />
);

InputValor.propTypes = {
  value: PropTypes.number,
  id: PropTypes.string,
  setValue: PropTypes.func,
};

InputValor.defaultProps = {
  value: 0,
  id: null,
  setValue: () => {},
};

export default InputValor;
