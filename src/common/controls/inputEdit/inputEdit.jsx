import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import EditBlueIcon from 'assets/icons/edit-blue';
import TrashOutlineIcon from 'assets/icons/trash-outline';
import CheckSquareIcon from 'assets/icons/check-square';
import CancelIcon from 'assets/icons/cancel';
import { StyledTextField } from 'common/controls/input/inputStyles';
import { styled } from '@material-ui/styles';
import { InputAdornment } from '@mui/material';
import ButtonTooltipIcon from '../buttonTooltipIcon';

const CustomTextField = styled(StyledTextField)((props) => ({
  '& .MuiInputBase-input': {
    paddingTop: '8px',
    paddingBottom: '8px',
    width: props.deleteButton ? 'calc(100% - 54px)' : 'calc(100% - 28px)',
    fontFamily: 'CircularStd',
    fontWeight: '400',
    fontSize: '14px',
    color: '#555770',
    WebkitTextFillColor: 'unset',
  },
  '& .MuiInputBase-root.Mui-disabled': {
    background: 'rgba(228, 233, 242, 0.24)',
  },
  '& div.Mui-focused': {
    backgroundColor: 'rgba(85, 87, 112, 0.08)',
  },
  '& .MuiInputBase-adornedEnd': {
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
  },
  '& .MuiFormLabel-root': {
    marginLeft: '8px',
    lineHeight: '16px',
    color: '#7A7C9A',
    fontWeight: '450',
    width: '100%',
    border: '0px !important',
    fontSize: 'unset',
    marginTop: '3px',
  },
  '& .MuiInputAdornment-root': {
    gap: '10px',
    marginTop: '8px',
    marginRight: '4px',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: 'red !important',
    border: '0px !important',
    marginTop: '0px',
    marginLeft: '8px',
  },
}));

const InputEdit = ({
  value, setValue, placeholder, label, deleteButton, deleteAction,
  cancelAction, autoFocus, type, format, error, disabled,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const textInput = useRef(null);

  useEffect(() => {
    if (autoFocus && editMode) textInput.current.focus();
  }, [autoFocus, editMode]);

  useEffect(() => {
    if (!value) setCurrentValue('');
    else setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    if (error) setEditMode(true);
  }, [error]);

  const handleChange = (e) => {
    const localValue = format ? format(e.target.value) : e.target.value;
    setCurrentValue(localValue);
  };

  const getValue = () => {
    if (type === 'number') return currentValue.replace(/[^\d]/g, '');
    return currentValue;
  };

  const renderDefaultActions = () => ([
    <ButtonTooltipIcon title="Editar" buttonAction={() => setEditMode(true)} key={0}>
      <EditBlueIcon />
    </ButtonTooltipIcon>,
    deleteButton && (
      <ButtonTooltipIcon title="Excluir" buttonAction={deleteAction} key={1}>
        <TrashOutlineIcon />
      </ButtonTooltipIcon>
    ),
  ]);

  const renderEditActions = () => ([
    <ButtonTooltipIcon
      title="Salvar"
      buttonAction={
        () => {
          setValue(getValue());
          setEditMode(false);
        }
      }
      key={2}
    >
      <CheckSquareIcon />
    </ButtonTooltipIcon>,
    <ButtonTooltipIcon
      title="Cancelar"
      buttonAction={
        () => {
          setCurrentValue(value);
          setEditMode(false);
          cancelAction();
        }
      }
      key={3}
    >
      <CancelIcon />
    </ButtonTooltipIcon>,
  ]);

  const renderAdornment = () => {
    if (disabled) return null;
    return (
      <InputAdornment position="end">
        {editMode
          ? renderEditActions()
          : renderDefaultActions()}
      </InputAdornment>
    );
  };

  return (
    <CustomTextField
      label={label}
      placeholder={placeholder}
      value={currentValue}
      onChange={(event) => handleChange(event)}
      inputRef={textInput}
      disabled={!editMode}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        style: {
          width: '100%',
          height: '40px',
          marginTop: label ? '22px' : 0,
        },
        endAdornment: renderAdornment(),
      }}
      error={!!error}
      helperText={error}
    />
  );
};

InputEdit.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  deleteButton: PropTypes.bool,
  deleteAction: PropTypes.func,
  cancelAction: PropTypes.func,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  format: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

InputEdit.defaultProps = {
  value: '',
  setValue: () => {},
  placeholder: '',
  label: '',
  deleteButton: true,
  deleteAction: () => {},
  cancelAction: () => {},
  autoFocus: true,
  type: 'text',
  format: null,
  error: '',
  disabled: false,
};

export default InputEdit;
