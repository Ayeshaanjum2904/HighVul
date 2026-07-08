import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup } from '@mui/material';
import RadioControlButton from 'common/controls/radioControlButton';

const RadioGroupPraticada = ({
  propName, setInputData, inputData, disabled,
}) => {
  const setNewValue = (event) => {
    setInputData(propName, event.target.value);
  };

  const handleClick = (event) => {
    if (event.target.value === inputData[propName]) {
      setInputData(propName, null);
    }
  };

  return (
    <div className="radio-button-container">
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={inputData[propName]}
        onChange={setNewValue}
        onClick={handleClick}
      >
        <RadioControlButton value="a.m." label="ao mês" disabled={disabled} />
        <RadioControlButton value="a.d." label="ao dia" disabled={disabled} />
      </RadioGroup>
    </div>
  );
};

RadioGroupPraticada.propTypes = {
  propName: PropTypes.string,
  inputData: PropTypes.string,
  setInputData: PropTypes.func,
  disabled: PropTypes.bool,
};

RadioGroupPraticada.defaultProps = {
  propName: '',
  inputData: '',
  setInputData: () => {},
  disabled: false,
};
export default RadioGroupPraticada;
