import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BasicInputStyles from './basicInput.styles';

const BasicInput = ({
  isError, isDisabled, label, placeholder, errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <BasicInputStyles focusedInput={isFocused} errorInput={isError} disabledInput={isDisabled}>
      <div className="basic-input-container">
        <span className="label">{label}</span>
        <div className="basic-input-style">
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isDisabled}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        {isError && <span className="error">{errorMessage}</span>}
      </div>
    </BasicInputStyles>
  );
};

BasicInput.propTypes = {
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

BasicInput.defaultProps = {
  isError: false,
  isDisabled: false,
  errorMessage: 'erro',
  label: 'Label',
  placeholder: 'Placeholder',
};

export default BasicInput;
