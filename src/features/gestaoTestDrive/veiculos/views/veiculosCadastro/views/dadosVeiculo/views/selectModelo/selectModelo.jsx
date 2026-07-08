import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from 'common/controls/input/textField';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import ModeloOption from './modeloOption';
import ModeloAdd from './modeloAdd';

import { selectModeloStyles } from './selectModeloStyles';

const useStyles = makeStyles(selectModeloStyles);

const SelectModelo = ({ modelos, codigoModelo, setModelo }) => {
  const classes = useStyles();

  const defaultOption = [{ value: null, text: 'Adicionar novo modelo', urlModelo: null }];
  return (

    <Autocomplete
      value={modelos?.find((m) => m.text.includes(codigoModelo)) || null}
      options={modelos.concat(defaultOption)}
      disableClearable
      classes={{
        root: classes.input,
        listbox: classes.listBox,
        hasClearIcon: classes.clearIcon,
        hasPopupIcon: classes.popupIcon,
      }}
      popupIcon={<KeyboardArrowDownIcon />}
      onChange={(event, newValue) => {
        setModelo(newValue?.value ?? null);
      }}
      getOptionLabel={(option) => option.text}
      renderOption={(option) => (
        option.value !== null
          ? (<ModeloOption modelo={option} />)
          : (<ModeloAdd modelo={option} />)
      )}
      renderInput={(params) => (
        <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Modelo"
          placeholder="Selecione o modelo"
        />
      )}
    />

  );
};

SelectModelo.propTypes = {
  modelos: PropTypes.array,
  codigoModelo: PropTypes.any,
  disabled: PropTypes.bool,
  setModelo: PropTypes.func,
};

SelectModelo.defaultProps = {
  modelos: [],
  codigoModelo: null,
  disabled: false,
  setModelo: () => {},
};

export default SelectModelo;
