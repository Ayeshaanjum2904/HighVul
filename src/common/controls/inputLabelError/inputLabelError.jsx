import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../textInput/textInput';
import InputLabelErrorStyle from './inputLabelError.style';

const InputLabelError = ({
  inputProps, type, placeholder, mask, label, clearAction,
  errorMessage, isDisabled, width, getValues,
  onKeyDown, onChange, reference, onBlur, maxLength, fieldName,
}) => (
  <InputLabelErrorStyle
    width={width}
    focusedInput={!onBlur}
    errorInput={errorMessage}
    disabledInput={isDisabled}
  >
    <span className="label">{label}</span>
    <TextInput
      inputProps={inputProps}
      type={type}
      placeholder={placeholder}
      mask={mask || ''}
      hasError={!!errorMessage}
      getValues={getValues}
      onKeyDown={onKeyDown}
      onChange={onChange}
      reference={reference}
      onBlur={onBlur}
      maxLength={maxLength}
      fieldName={fieldName}
      width={width}
      clearAction={clearAction}
      disabled={isDisabled}
    />
    <p className="error caption">{errorMessage}</p>
  </InputLabelErrorStyle>
);

InputLabelError.propTypes = {
  inputProps: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  isDisabled: PropTypes.bool,
  getValues: PropTypes.any,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onBlur: PropTypes.func,
  clearAction: PropTypes.func,
  maxLength: PropTypes.string,
  fieldName: PropTypes.string,
  width: PropTypes.string,
};

InputLabelError.defaultProps = {
  inputProps: {},
  type: '',
  placeholder: '',
  mask: undefined,
  label: '',
  errorMessage: '',
  isDisabled: false,
  getValues: null,
  onKeyDown: null,
  onChange: null,
  reference: null,
  onBlur: null,
  maxLength: '',
  fieldName: '',
  width: '100%',
  clearAction: () => {},
};

export default InputLabelError;
