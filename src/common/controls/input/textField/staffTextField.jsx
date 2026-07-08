import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { StyledTextField } from '../inputStyles';

const StaffTextField = ({
  value, label, onChange, smallerRoot, disabled, className, dataCy, ...other
}) => (
  <StyledTextField
    {...other}
    fullWidth
    label={label}
    value={value || ''}
    variant="standard"
    onChange={(event) => {
      onChange(_.isEmpty(event) ? null : event.target.value);
    }}
    disabled={disabled}
    data-cy={dataCy}
  />
);

StaffTextField.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func,
  smallerRoot: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dataCy: PropTypes.string,
};

StaffTextField.defaultProps = {
  value: '',
  label: '',
  onChange: () => {},
  smallerRoot: false,
  className: '',
  disabled: false,
  dataCy: null,
};

export default StaffTextField;
