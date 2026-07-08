import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

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

const IMaskWrapper = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { value } })}
      overwrite
    />
  );
});

IMaskWrapper.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const TextFilterMasked = ({
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
  mask,
  blocks,
  prepareChar,
}) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const textFieldRef = useRef(null);

  const renderInput = () => (
    <Box className={classes.container}>
      <TextField
        inputRef={textFieldRef}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment,
          startAdornment: showSearchIcon ? (
            <SearchIcon
              style={{
                fill: colors.secundary_color_700,
                color: colors.secundary_color_700,
                marginRight: '8px',
              }}
            />
          ) : null,
          classes: { input: classes.input, root: classes.root },
          inputComponent: IMaskWrapper,
          inputProps: {
            mask,
            blocks,
            prepareChar,
          },
        }}
        label={label}
        placeholder={isFocused ? '' : placeholder}
        value={value}
        onChange={(e) => setValue(e || '')}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        dataCy={dataCy}
      />
    </Box>
  );

  return isFocused || !showTooltip ? (
    renderInput()
  ) : (
    <TooltipMessage {...tooltipProps} title={placeholder}>
      <div>{renderInput()}</div>
    </TooltipMessage>
  );
};

TextFilterMasked.propTypes = {
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
  mask: PropTypes.string.isRequired,
  blocks: PropTypes.object,
  prepareChar: PropTypes.func,
};

TextFilterMasked.defaultProps = {
  value: '',
  setValue: () => { },
  label: null,
  placeholder: null,
  showSearchIcon: false,
  disabled: false,
  showTooltip: false,
  dataCy: null,
  tooltipProps: {},
  endAdornment: null,
  blocks: undefined,
  prepareChar: undefined,
};

export default TextFilterMasked;
