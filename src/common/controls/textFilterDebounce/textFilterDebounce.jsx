import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/material';
import colors from 'assets/styles/colors';
import TextField from '../input/textField';
import TooltipMessage from '../tooltipMessage';

const useStyles = makeStyles(() => ({
  input: {
    '&::placeholder': {
      opacity: 1,
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  root: {
    height: '40px',
  },
  container: {
    marginTop: '1px',
    minWidth: 200,
  },
}));

const TextFilterDebounce = ({
  value,
  setValue,
  label,
  placeholder,
  showSearchIcon,
  disabled,
  showTooltip,
  tooltipProps,
  dataCy,
  endAdornment,
}) => {
  const classes = useStyles();
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);

  const textFieldRef = useRef(null);

  useEffect(() => {
    if (isTextFieldFocused) {
      textFieldRef.current.focus();
    }
  }, [isTextFieldFocused]);

  const handleTextFieldFocus = () => {
    setIsTextFieldFocused(true);
  };

  const handleTextFieldBlur = () => {
    setIsTextFieldFocused(false);
  };

  const renderInput = () => (
    <Box className={classes.container}>
      <TextField
        inputRef={textFieldRef}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment,
          startAdornment:
        showSearchIcon
          ? <SearchIcon style={{ fill: colors.secundary_color_700, color: colors.secundary_color_700, marginRight: '8px' }} />
          : null,
          classes: { input: classes.input, root: classes.root },
        }}
        label={label}
        placeholder={isTextFieldFocused ? '' : placeholder}
        value={value}
        onChange={(text) => {
          setValue(_.isEmpty(text) ? null : text);
        }}
        disabled={disabled}
        onFocus={handleTextFieldFocus}
        onBlur={handleTextFieldBlur}
        dataCy={dataCy}
      />
    </Box>
  );

  const renderItem = () => {
    if (isTextFieldFocused || !showTooltip) {
      return renderInput();
    }
    return (
      <TooltipMessage {...tooltipProps} title={placeholder}>
        <div>
          {renderInput()}
        </div>
      </TooltipMessage>
    );
  };

  return (renderItem());
};

TextFilterDebounce.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  showSearchIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  showTooltip: PropTypes.bool,
  dataCy: PropTypes.string,
  tooltipProps: PropTypes.object,
  endAdornment: PropTypes.node,
};

TextFilterDebounce.defaultProps = {
  value: '',
  setValue: () => {},
  label: null,
  placeholder: null,
  showSearchIcon: false,
  disabled: false,
  showTooltip: false,
  dataCy: null,
  tooltipProps: {},
  endAdornment: null,
};

export default TextFilterDebounce;
