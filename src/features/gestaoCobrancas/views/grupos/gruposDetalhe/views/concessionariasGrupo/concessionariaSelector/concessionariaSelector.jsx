import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import TextField from 'common/controls/input/textField';
import { makeStyles } from '@material-ui/styles';
import DealerOption from './dealerOption';
import { multipleSelectStyles } from './concessionariasSelectorStyles';

const useStyles = makeStyles(multipleSelectStyles);

const ConcessionariaSelector = ({ dealers, onSelect, placeholder }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  return (
    <Autocomplete
      value={null}
      inputValue={inputValue}
      options={dealers}
      onChange={(e, selectedItem) => {
        onSelect(selectedItem);
        setInputValue('');
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      classes={{
        root: classes.root,
        listbox: classes.listBox,
        hasPopupIcon: classes.popupIcon,
        inputRoot: classes.input,
      }}
      filterOptions={createFilterOptions({
        matchFrom: 'any',
        stringify: (option) => (option?.nome || ' ') + (option?.corretorId || ' ') + (option?.cnpj || ' ') + (option?.codBuc || ' '),
      })}
      disableClearable
      getOptionLabel={(option) => option.nome}
      popupIcon={<KeyboardArrowDownIcon />}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon style={{ fill: '#8f9bb3', color: '#8f9bb3' }} />,
          }}
        />
      )}
      renderOption={(option) => (
        <DealerOption
          concessionaria={option}
        />
      )}
    />
  );
};

ConcessionariaSelector.propTypes = {
  dealers: PropTypes.array,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
};

ConcessionariaSelector.defaultProps = {
  dealers: [],
  onSelect: () => {},
  placeholder: 'Buscar Concessionária',
};

export default ConcessionariaSelector;
