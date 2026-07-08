import React from 'react';
import PropTypes from 'prop-types';
import ClearIcon from 'assets/icons/clear';
import ButtonTooltipIcon from '../buttonTooltipIcon';

const TextInput = ({
  inputProps, type, placeholder, clearAction,
  onKeyDown, onChange, reference, onBlur, maxLength, fieldName,
  disabled,
}) => {
  const renderIcon = () => (
    <ButtonTooltipIcon buttonAction={clearAction} title="Excluir">
      <ClearIcon />
    </ButtonTooltipIcon>
  );
  return (
    <div className="basic-input" ref={reference} onBlur={onBlur}>
      <input
        {...inputProps}
        type={type}
        placeholder={placeholder}
        data-for="registerTip"
        autoComplete="nope"
        onKeyDown={onKeyDown}
        onChange={onChange}
        maxLength={maxLength}
        data-cy={fieldName}
        disabled={disabled}
      />
      {renderIcon()}
    </div>
  );
};

TextInput.propTypes = {
  inputProps: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  hasError: PropTypes.bool,
  getValues: PropTypes.func,
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
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  inputProps: null,
  type: null,
  placeholder: null,
  mask: null,
  hasError: false,
  getValues: null,
  onKeyDown: null,
  onChange: null,
  reference: null,
  onBlur: null,
  clearAction: () => {},
  maxLength: null,
  fieldName: null,
  disabled: false,
};

export default TextInput;
