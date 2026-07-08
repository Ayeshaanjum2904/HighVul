import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const SelectPapel = ({
  papel, setPapel, papeis, errors,
}) => (
  <FormInput
    type="select"
    placeholder="Selecione o papel"
    label="Papel"
    items={papeis}
    value={papel?.id}
    setValue={(value) => {
      setPapel(value);
    }}
    error={errors.some((e) => e.propertyName === 'Papel')}
    errorMessage={errors.find((e) => e.propertyName === 'Papel')?.message}
  />
);

SelectPapel.propTypes = {
  papel: PropTypes.object,
  setPapel: PropTypes.func,
  papeis: PropTypes.array,
  errors: PropTypes.array,
};

SelectPapel.defaultProps = {
  papel: null,
  setPapel: () => {},
  papeis: null,
  errors: [],
};

export default SelectPapel;
