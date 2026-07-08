import React from 'react';
import PropTypes from 'prop-types';
import './insertTaxaModule.scss';
import RadioGroupPraticada from './radioGroupPraticada/radioGroupPraticada';
import InputLabel from './inputInsertTaxa/inputInsertTaxa';

const InsertTaxaModule = ({
  propName, titleName, disabled, setInputData, inputData,
}) => (
  <div className="insert-taxa-container">
    <InputLabel
      propName={propName}
      titleName={titleName}
      disabled={disabled}
      inputData={inputData}
      setInputData={setInputData}
    />
    <RadioGroupPraticada
      propName={propName.concat('Praticada')}
      disabled={disabled}
      setInputData={setInputData}
      inputData={inputData}
    />
  </div>
);

InsertTaxaModule.propTypes = {
  propName: PropTypes.string,
  titleName: PropTypes.string,
  disabled: PropTypes.bool,
  inputData: PropTypes.string,
  setInputData: PropTypes.func,
};

InsertTaxaModule.defaultProps = {
  propName: '',
  titleName: '',
  disabled: false,
  inputData: '',
  setInputData: () => {},
};
export default InsertTaxaModule;
