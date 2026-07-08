import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import _ from 'lodash';

import { Box } from '@mui/material';
import { StyledTextField, textField as styles } from '../../inputStyles';

const useStyles = makeStyles(styles);

export const TypeText = ({
  value, setValue, disabled, className, ...other
}) => {
  const classes = useStyles();
  if (!disabled) {
    return (
      <StyledTextField
        {...other}
        fullWidth
        className={className}
        style={{ marginTop: '-30px', backgroundColor: 'transparent' }}
        value={value || ''}
        variant="standard"
        onChange={(event) => {
          setValue(_.isEmpty(event) ? null : event.target.value);
        }}
      />
    );
  }
  return (
    <Box className={classes.container}>{value}</Box>
  );
};

TypeText.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

TypeText.defaultProps = {
  value: null,
  setValue: () => {},
  disabled: false,
  className: '',
};

export default TypeText;
