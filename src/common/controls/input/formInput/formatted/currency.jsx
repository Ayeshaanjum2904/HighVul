import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TypeNumber from './numericInputBase';

const Currency = ({
  value, setValue, disabled, className, ...other
}) => (
  <TypeNumber
    className={className}
    value={value}
    disabled={disabled}
    setValue={(event) => {
      setValue(_.isEmpty(event) ? null : event);
    }}
    decimalSeparator=","
    thousandSeparator="."
    decimalScale="2"
    prefix="R$ "
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...other}
  />
);

Currency.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Currency.defaultProps = {
  setValue: () => {},
  value: '',
  disabled: false,
  className: '',
};

export default Currency;
