import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import InputLabelError from 'common/controls/inputLabelError/inputLabelError';

const MaskedInput = ({
  fieldKey, fieldName, isOptional, pattern, mask, requiredMessage,
  validate, register, errors, placeholder,
  type, getValues, onKeyDown, onChange, onBlur, maxLength, width, setValue,
  disabled, errorMessage, clearAction, maskFunction, initialValue,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(
        fieldKey,
        maskFunction(
          initialValue,
        ),
      );
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const clearField = () => {
    if (clearAction) {
      clearAction();
    } else {
      setValue(fieldKey, '');
    }
  };

  const getErrorMessage = () => {
    if (errorMessage) return errorMessage;
    return errors ? errors[fieldKey]?.message : undefined;
  };

  return (
    <InputLabelError
      isDisabled={disabled}
      inputProps={register(fieldKey, {
        required: isOptional ? false : requiredMessage || 'Campo obrigatório',
        pattern: pattern ? { value: pattern, message: `${fieldName} inválido` } : undefined,
        validate,
      })}
      placeholder={placeholder}
      label={fieldName}
      isOptional={isOptional}
      errorMessage={getErrorMessage()}
      mask={mask}
      className={fieldKey}
      type={type || 'text'}
      getValues={getValues}
      onKeyDown={onKeyDown}
      onChange={onChange}
      reference={inputRef}
      onBlur={onBlur}
      maxLength={maxLength}
      fieldName={fieldName}
      width={width}
      clearAction={clearField}
    />
  );
};

MaskedInput.propTypes = {
  fieldKey: PropTypes.string,
  fieldName: PropTypes.string,
  isOptional: PropTypes.bool,
  pattern: PropTypes.instanceOf(RegExp),
  mask: PropTypes.string,
  requiredMessage: PropTypes.string,
  validate: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  getValues: PropTypes.any,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  maxLength: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  clearAction: PropTypes.func,
  maskFunction: PropTypes.func,
  initialValue: PropTypes.string,
};

MaskedInput.defaultProps = {
  fieldKey: '',
  fieldName: '',
  isOptional: false,
  pattern: null,
  mask: '',
  requiredMessage: '',
  validate: () => {},
  register: () => {},
  errors: {},
  placeholder: '',
  type: '',
  getValues: () => {},
  onKeyDown: () => {},
  onChange: () => {},
  onBlur: () => {},
  setValue: () => {},
  maxLength: '',
  width: '100%',
  disabled: false,
  errorMessage: null,
  clearAction: null,
  maskFunction: () => {},
  initialValue: '',
};

export default MaskedInput;
