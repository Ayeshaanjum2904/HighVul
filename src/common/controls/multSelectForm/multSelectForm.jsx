import React, { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
  Checkbox, FormControl, ListSubheader, MenuItem, Select, TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckBoxOutlineIcon from 'assets/icons/check-box-outline';
import CheckBoxIcon from 'assets/icons/check-box';
import { MenuProps, SelectFormStyle, TextFieldStyle } from './multSelectFormStyles';
import MultSelectFormStyle from './multSelectForm.style';

const TextFieldComponent = styled(TextField)(TextFieldStyle);

const MultSelectForm = ({
  name, label, options, control, defaultValue, isError,
  minWidth, width, setValue, selectedDocuments, disableSelectAll,
  disabled, placeholder,
}) => {
  const [searchText, setSearchText] = useState('');
  const isAllSelected = options?.length === selectedDocuments.length;
  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    return options?.filter((option) => option.text.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options]);

  const handleSelectAll = (event) => {
    const { checked } = event.target;
    const valuesToSet = checked ? infoFilter.map((option) => option.value) : [];
    setValue(name, valuesToSet);
  };

  const renderSearchInput = () => (
    <ListSubheader>
      <TextFieldComponent
        size="small"
        autoFocus
        fullWidth
        placeholder={placeholder}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== 'Escape') {
            e.stopPropagation();
          }
        }}
      />
    </ListSubheader>
  );

  const renderFirstOption = () => (
    <MultSelectFormStyle
      isAllSelected={isAllSelected}
    >
      <Checkbox
        icon={<CheckBoxOutlineIcon />}
        checkedIcon={<CheckBoxIcon />}
        checked={isAllSelected}
        onChange={handleSelectAll}
      />
      <span className="all-item-new-select">Todos os documentos</span>
    </MultSelectFormStyle>
  );

  const renderPlaceHolder = (tamanho) => {
    if (tamanho === 1) {
      return '1 documento selecionado';
    }
    if (tamanho === 0) {
      return 'Selecione um ou mais documentos';
    }
    return `${tamanho} documentos selecionados`;
  };

  return (
    <div className="select-container">
      <span className="label-new-select">{label}</span>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <FormControl sx={isError ? {
            ...SelectFormStyle.FormControl,
            border: '1px solid #C31E10',
            borderRadius: '4px',
          } : { ...SelectFormStyle.FormControl, minWidth, width }}
          >
            <Select
              disabled={disabled}
              labelId={`${name}-label`}
              id={name}
              multiple
              MenuProps={MenuProps}
              sx={SelectFormStyle.selectOptions}
              displayEmpty
              renderValue={(select) => {
                const placeholderText = renderPlaceHolder(select.length);
                return (
                  <em className="placeholder-new-select" title={placeholderText}>
                    {placeholderText}
                  </em>
                );
              }}
              {...field}
            >
              {renderSearchInput()}
              {!disableSelectAll && renderFirstOption(field)}
              {infoFilter?.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={
                  field.value.includes(option.value)
                    ? SelectFormStyle.menuItemSelected
                    : SelectFormStyle.menuItem
                }
                >
                  <Checkbox
                    icon={<CheckBoxOutlineIcon />}
                    checkedIcon={<CheckBoxIcon />}
                    checked={field.value.indexOf(option.value) > -1}
                  />
                  <span className="all-item-new-select">{option.text}</span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      {isError
        ? (<span className="selector-error-message">{`Selecione um ou mais ${name}`}</span>)
        : (<div style={{ height: 24 }} />)}
    </div>
  );
};

MultSelectForm.propTypes = {
  control: PropTypes.func,
  setValue: PropTypes.func,
  defaultValue: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  minWidth: PropTypes.string,
  width: PropTypes.string,
  selectedDocuments: PropTypes.array,
  isError: PropTypes.bool,
  disableSelectAll: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

MultSelectForm.defaultProps = {
  control: () => {},
  setValue: () => {},
  defaultValue: [],
  label: '',
  name: '',
  minWidth: 240,
  width: 240,
  isError: false,
  options: [],
  selectedDocuments: [],
  disableSelectAll: false,
  disabled: false,
  placeholder: '',
};

export default MultSelectForm;
