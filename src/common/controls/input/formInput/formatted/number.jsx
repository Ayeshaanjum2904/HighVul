import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TypeNumber from './numericInputBase';

const Number = ({
  value, setValue, disabled, className, ...other
}) => (
  <TypeNumber
    className={className}
    disabled={disabled}
    value={value}
    setValue={(event) => {
      setValue(_.isEmpty(event) ? null : event);
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...other}
  />
);

Number.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Number.defaultProps = {
  setValue: () => {},
  value: '',
  disabled: false,
  className: '',
};

export default Number;
