import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckIcon, XIcon } from 'assets/icons';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import BasicInputStyles from '../basicInput/basicInput.styles';

const InputCheckClear = ({
  isError,
  isDisabled,
  label,
  placeholder,
  errorMessage,
  onCheck,
  onCancel,
  setValue,
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
    setValue(event.target.value);
  };

  const handleCheck = () => {
    if (inputValue.trim() !== '') {
      onCheck(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  const handleCancel = () => {
    onCancel();
    setInputValue('');
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
            onKeyDown={handleKeyDown}
          />
          <div className="input-icons">
            <ButtonTooltipIcon title="Salvar" buttonAction={handleCheck} disabled>
              <CheckIcon />
            </ButtonTooltipIcon>
            <ButtonTooltipIcon title="Excluir" buttonAction={handleCancel}>
              <XIcon />
            </ButtonTooltipIcon>
          </div>
        </div>
        {isError && <span className="error">{errorMessage}</span>}
      </div>
    </BasicInputStyles>
  );
};

InputCheckClear.propTypes = {
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  setValue: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
};

InputCheckClear.defaultProps = {
  isError: false,
  isDisabled: false,
  errorMessage: '',
  label: '',
  placeholder: '',
  setValue: () => {},
};

export default InputCheckClear;
