import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      fontFamily: 'CircularStd',
      fontSize: '14px',
      padding: '12px 4px 4px 16px;',
      width: '100%',
      alignItems: 'flex-start',
      '& ::-webkit-scrollbar': {
        width: '4px',
      },
      '& fieldset': {
        background: 'rgba(229, 230, 235, 0.24)',
        borderColor: 'rgba(229, 230, 235, 0.24)',
        borderRadius: 4,
      },
      '&:hover fieldset': {
        borderColor: 'rgba(229, 230, 235, 0.56)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(229, 230, 235, 0.56)',
      },
    },
    '& .MuiFormLabel-root': {
      '&.Mui-focused': {
        color: 'rgba(229, 230, 235, 0.24)',
      },
    },
    '& .MuiInputBase-input': {
      '&::placeholder': {
        color: '#505669',
        opacity: 1,
      },
    },
  },
}));

const NewTextField = ({
  label, multiline, numberOfLines, value, onChange, placeholder,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      multiline={multiline}
      rows={numberOfLines}
      className={classes.root}
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

NewTextField.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  numberOfLines: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

NewTextField.defaultProps = {
  label: '',
  multiline: true,
  disabled: false,
  numberOfLines: 4,
  value: '',
  onChange: () => {},
  placeholder: '',
};

export default NewTextField;
