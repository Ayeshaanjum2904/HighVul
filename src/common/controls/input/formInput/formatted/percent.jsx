import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TypeNumber from './numericInputBase';

const Percent = ({
  value, setValue, disabled, className, isTaxa, ...other
}) => (
  <TypeNumber
    className={className}
    value={value}
    disabled={disabled}
    setValue={(event) => {
      setValue(_.isEmpty(event) ? null : event);
    }}
    suffix=" %"
    decimalScale="2"
    isTaxa={isTaxa}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...other}
  />
);

Percent.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  isTaxa: PropTypes.bool,
  className: PropTypes.string,
};

Percent.defaultProps = {
  setValue: () => {},
  value: '',
  disabled: false,
  isTaxa: false,
  className: '',
};

export default Percent;
