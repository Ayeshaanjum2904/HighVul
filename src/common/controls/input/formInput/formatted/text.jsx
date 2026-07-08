import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TypeText from './textInputBase';

const Text = ({
  value, setValue, disabled, className, ...other
}) => (
  <TypeText
    className={className}
    value={value}
    disabled={disabled}
    setValue={(event) => {
      setValue(_.isEmpty(event) ? null : event);
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...other}
  />
);

Text.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Text.defaultProps = {
  setValue: () => {},
  value: '',
  disabled: false,
  className: '',
};

export default Text;
