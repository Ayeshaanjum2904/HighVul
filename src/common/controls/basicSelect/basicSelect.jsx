import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {
  MenuProps,
  SelectStyle,
  Placeholder,
  LabelContainer,
  SelectContainer,
} from './basicSelect.style';

const BasicSelect = ({
  selectedOption,
  setOption,
  options,
  nameLabel,
  namePlaceholder,
  isLoading,
  dataCy,
  allValues,
}) => {
  const renderPlaceHolder = (select) => {
    if (select !== null && select !== undefined && select !== '') return select;
    return namePlaceholder;
  };

  const renderFirstOption = (value) => (
    <MenuItem
      value={value}
      sx={SelectStyle.menuItem}
      key={value}
    >
      {value}
    </MenuItem>
  );

  const renderItem = (value, index) => (
    <MenuItem
      value={value}
      sx={SelectStyle.menuItem}
      key={value}
      data-cy={dataCy ? `${dataCy}Item_${index}` : null}
    >
      {value}
    </MenuItem>
  );

  return (
    <SelectContainer>
      <LabelContainer>{nameLabel}</LabelContainer>
      <FormControl sx={SelectStyle.FormControl}>
        <Select
          value={selectedOption}
          onChange={(e) => setOption(e.target.value)}
          disabled={isLoading}
          renderValue={(value) => (
            <Placeholder color={value}>
              {renderPlaceHolder(value)}
            </Placeholder>
          )}
          label="selectedOption"
          MenuProps={MenuProps}
          IconComponent={KeyboardArrowDownIcon}
          sx={
            selectedOption !== null
              ? SelectStyle.menuItemSelected
              : SelectStyle.selectOptions
          }
          displayEmpty
          inputProps={{ 'data-cy': dataCy }}
        >
          {allValues && renderFirstOption('Todos os valores')}
          {options.map((value, index) => renderItem(value, index))}
        </Select>
      </FormControl>
    </SelectContainer>
  );
};

BasicSelect.propTypes = {
  setOption: PropTypes.func,
  selectedOption: PropTypes.string,
  options: PropTypes.array,
  nameLabel: PropTypes.string.isRequired,
  namePlaceholder: PropTypes.string,
  isLoading: PropTypes.bool,
  dataCy: PropTypes.string,
  allValues: PropTypes.bool,
};

BasicSelect.defaultProps = {
  setOption: () => {},
  selectedOption: null,
  options: [],
  namePlaceholder: null,
  isLoading: false,
  dataCy: null,
  allValues: false,
};

export default BasicSelect;
