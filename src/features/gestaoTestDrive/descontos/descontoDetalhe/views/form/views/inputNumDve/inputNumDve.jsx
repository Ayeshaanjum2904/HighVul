import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputNumDve = ({
  numeroDve, setNumeroDve,
}) => (
  <FormInput
    type="text"
    label="Nº carta do mês"
    value={numeroDve}
    setValue={(v) => {
      setNumeroDve(v);
    }}
    disabled={false}
  />
);

InputNumDve.propTypes = {
  numeroDve: PropTypes.string,
  setNumeroDve: PropTypes.func,
};

InputNumDve.defaultProps = {
  numeroDve: '',
  setNumeroDve: () => {},
};

export default InputNumDve;
