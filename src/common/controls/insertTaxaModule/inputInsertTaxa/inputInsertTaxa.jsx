import React from 'react';
import PropTypes from 'prop-types';
import './inputInsertTaxa.scss';
import FormInput from 'common/controls/input/formInput';

import { textField } from 'common/controls/input/inputStyles';
import {
  makeStyles,
} from '@material-ui/core';

const InputInsertTaxa = ({
  inputData, propName, setInputData, titleName, disabled,
}) => {
  const useStyles = makeStyles({
    ...textField,
    root: {
      ...textField.root,
      width: '108px !important',
      height: '40px !important',
      marginTop: '6px !important',
      marginLeft: '0 !important',
      '& .MuiInputBase-root': {
        margin: '0 !important',
        backgroundColor: 'rgba(228, 233, 242, 0.24)',
      },
      '& .Mui-focused': {
        backgroundColor: 'rgba(228, 233, 242, 0.44)',
      },
    },
  });

  const classes = useStyles();

  const setValue = (value) => {
    const formatedValue = value.replace('%', '').replace('a.m.', '').replace('a.d.', '').trim();
    setInputData(propName, formatedValue);
  };

  return (
    <div className="input-insert-taxa">
      <span className="input-insert-taxa_label">{titleName || <div className="input-insert-taxa_no-label" />}</span>
      <FormInput
        type="percent"
        value={inputData[propName]}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        suffix={inputData[propName.concat('Praticada')] ? `% ${inputData[propName.concat('Praticada')]}` : ''}
        allowNegative={false}
        disabled={disabled}
        decimalScale="5"
        className={classes.root}
        isTaxa
      />
    </div>
  );
};

InputInsertTaxa.propTypes = {
  inputData: PropTypes.object,
  propName: PropTypes.string,
  setInputData: PropTypes.func,
  titleName: PropTypes.string,
  disabled: PropTypes.bool,
};

InputInsertTaxa.defaultProps = {
  inputData: {},
  propName: PropTypes.string,
  setInputData: () => {},
  titleName: '',
  disabled: false,
};

export default InputInsertTaxa;
