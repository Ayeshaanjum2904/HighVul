import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputDesconto = ({
  value, setValue,
}) => (
  <FormInput
    type="percent"
    label="Desconto (%)"
    value={value}
    setValue={(v) => {
      setValue(v);
    }}
    disabled={false}
  />
);

InputDesconto.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
};

InputDesconto.defaultProps = {
  value: 0,
  setValue: () => {},
};

export default InputDesconto;
