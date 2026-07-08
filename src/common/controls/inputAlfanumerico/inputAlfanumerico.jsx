import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  LabelContainer,
  InputWrapper,
  StyledInputField,
  ErrorMessage,
} from './inputAlfanumerico.style';

const InputAlfanumerico = ({
  value,
  onChange,
  label,
  placeholder,
  maxLength,
  disabled,
  errorMessage,
  name,
  onKeyDown,
  onFocus,
  onBlur,
  showValidation,
  internalValidation,
  externalError,
  type,
  inputMode,
  labelColor,
  labelFontSize,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isNumericInput = type === 'tel' || inputMode === 'numeric';

  const errorState = internalValidation ? hasError : externalError;

  useEffect(() => {
    if (!internalValidation) return;
    if (value && value.length > maxLength) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [value, maxLength, internalValidation]);

  const handleChange = (event) => {
    const { value: newValue } = event.target;

    const formattedValue = isNumericInput ? newValue.replace(/\D/g, '') : newValue;

    if (onChange) {
      onChange(formattedValue, name);
    }

    if (!internalValidation) return;

    if (formattedValue && formattedValue.length > maxLength) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <InputContainer>
      {label && (
        <LabelContainer
          errorInput={errorState}
          disabledInput={disabled}
          labelColor={labelColor}
          labelFontSize={labelFontSize}
        >
          {label}
        </LabelContainer>
      )}
      <InputWrapper>
        <StyledInputField
          focusedInput={isFocused}
          errorInput={errorState}
          disabledInput={disabled}
        >
          <input
            type={type}
            inputMode={inputMode}
            value={value || ''}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={placeholder}
            name={name}
          />
        </StyledInputField>
        {showValidation && errorState && errorMessage && (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        )}
      </InputWrapper>
    </InputContainer>
  );
};

InputAlfanumerico.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  showValidation: PropTypes.bool,
  internalValidation: PropTypes.bool,
  externalError: PropTypes.bool,
  type: PropTypes.string,
  inputMode: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.string,
};

InputAlfanumerico.defaultProps = {
  value: '',
  onChange: () => {},
  label: '',
  placeholder: '',
  maxLength: 10,
  disabled: false,
  errorMessage: 'Máximo de 10 caracteres',
  name: '',
  onKeyDown: null,
  onFocus: null,
  onBlur: null,
  showValidation: true,
  internalValidation: true,
  externalError: false,
  type: 'text',
  inputMode: undefined,
  labelColor: '',
  labelFontSize: '',
};

export default InputAlfanumerico;
