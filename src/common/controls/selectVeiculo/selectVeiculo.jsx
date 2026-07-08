import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from 'common/controls/input/textField';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import VeiculoOption from './veiculoOption/veiculoOption';

import { selectVeiculoStyles } from './selectVeiculoStyles';

const useStyles = makeStyles(selectVeiculoStyles);

const SelectVeiculo = ({
  mvs, setVeiculo, selectedMvs, selectedMvsList,
}) => {
  const classes = useStyles();
  const filteredMvs = mvs.filter((m) => (selectedMvsList.findIndex((s) => s === m.value) < 0
|| m.value === selectedMvs));
  const options = [{ value: null, text: 'Selecione um mvs', marca: null },
    ...filteredMvs];

  return (
    <Autocomplete
      value={selectedMvs
        ? mvs.filter((m) => selectedMvs === m.value)
        : null}
      options={options}
      disableClearable
      classes={{
        root: classes.input,
        listbox: classes.listBox,
        hasClearIcon: classes.clearIcon,
        hasPopupIcon: classes.popupIcon,
      }}
      popupIcon={<KeyboardArrowDownIcon />}
      onChange={(event, newValue) => {
        setVeiculo(selectedMvs, newValue);
      }}
      getOptionLabel={(option) => (Array.isArray(option) ? option[0]?.text : option?.text)}
      renderOption={(option) => (
        <VeiculoOption
          veiculo={option}
          selectedMvs={selectedMvs}
        />
      )}
      renderInput={(params) => (
        <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="MVSA"
          title={options.filter((op) => op.value === selectedMvs)[0]?.text}
          placeholder="Selecione o mvsa"
        />
      )}
    />

  );
};

SelectVeiculo.propTypes = {
  mvs: PropTypes.array,
  selectedMvs: PropTypes.string,
  setVeiculo: PropTypes.func,
  selectedMvsList: PropTypes.array,
};

SelectVeiculo.defaultProps = {
  mvs: [],
  selectedMvs: null,
  setVeiculo: () => {},
  selectedMvsList: [],
};

export default SelectVeiculo;
