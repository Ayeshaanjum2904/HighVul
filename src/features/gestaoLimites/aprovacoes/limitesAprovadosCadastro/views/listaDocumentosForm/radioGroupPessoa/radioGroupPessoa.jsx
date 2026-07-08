import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'common/controls/radioButton';
import { RadioGroup } from '@material-ui/core';
import RagioGroupStyle from './radioGroupPessoa.styles';

const RadioGroupPessoa = ({
  setInputData, inputData, disabled, isError,
}) => {
  const setNewValue = (event) => {
    if (!disabled) {
      setInputData(event.target.value);
    }
  };

  const handleClick = (event) => {
    if (!disabled && event.target.value === inputData) {
      setInputData(null);
    }
  };

  return (
    <RagioGroupStyle isError={isError}>
      <div className="tipo-pessoa">
        <span className="tipo-pessoa_label">Tipo Pessoa</span>
        <RadioGroup
          name="tipoPessoa"
          value={inputData}
          onChange={setNewValue}
          onClick={handleClick}
          style={{ gap: '6px' }}
        >
          <div className="container">
            <RadioButton value={disabled ? 1 : '1'} disabled={disabled} />
            <span className="container_label">Física</span>
            <RadioButton value={disabled ? 2 : '2'} disabled={disabled} />
            <span className="container_label">Jurídica</span>
          </div>
          {isError && <span className="tipo-pessoa_error">Selecione um tipo</span>}
        </RadioGroup>
      </div>
    </RagioGroupStyle>
  );
};

RadioGroupPessoa.propTypes = {
  inputData: PropTypes.string,
  setInputData: PropTypes.func,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
};

RadioGroupPessoa.defaultProps = {
  inputData: '',
  setInputData: () => {},
  disabled: false,
  isError: false,
};

export default RadioGroupPessoa;
