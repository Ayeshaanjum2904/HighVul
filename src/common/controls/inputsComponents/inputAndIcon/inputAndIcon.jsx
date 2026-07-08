import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';
import BasicInputStyles from './inputAndIcon.styles';

const InputAndIcon = ({
  isError, isDisabled, label, placeholder, errorMessage,
  icon, onClickIcon, reference, onBlur, register, fieldKey,
  fieldName, isOptional, pattern, validate, getValues,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // FALTA HOVER NO X

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    getValues(event.target.value);
  };

  function renderIcon() {
    return (
      <button type="submit" onClick={onClickIcon}>
        <Icon>{icon}</Icon>
      </button>
    );
  }

  return (
    <BasicInputStyles focusedInput={isFocused} errorInput={isError} disabledInput={isDisabled}>
      <span className="label">{label}</span>
      <div className="basic-input" ref={reference} onBlur={onBlur}>
        <input
          {...register(
            fieldKey,
            {
              required: isOptional ? false : (errorMessage || 'Campo obrigatório'),
              pattern: (pattern ? { value: pattern, message: `${fieldName} inválido` } : undefined),
              validate,
            },
          )}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isDisabled}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {renderIcon()}
      </div>
      {isError && <span className="error">{errorMessage}</span>}
    </BasicInputStyles>
  );
};

InputAndIcon.propTypes = {
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onBlur: PropTypes.bool,
  isOptional: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fieldKey: PropTypes.string,
  fieldName: PropTypes.string,
  pattern: PropTypes.string,
  icon: PropTypes.element,
  onClickIcon: PropTypes.func,
  reference: PropTypes.element,
  register: PropTypes.func,
  validate: PropTypes.func,
  getValues: PropTypes.func,
};

InputAndIcon.defaultProps = {
  isError: false,
  isDisabled: false,
  onBlur: false,
  isOptional: false,
  errorMessage: 'erro',
  label: 'Label',
  placeholder: 'Placeholder',
  fieldKey: '',
  fieldName: '',
  pattern: '',
  icon: null,
  onClickIcon: () => {},
  register: () => {},
  validate: () => {},
  getValues: () => {},
  reference: null,
};

export default InputAndIcon;
