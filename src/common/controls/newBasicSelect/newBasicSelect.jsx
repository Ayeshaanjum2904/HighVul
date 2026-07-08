import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {
  MenuProps,
  SelectStyle,
  LabelContainer,
  SelectContainer,
  SpanColor,
} from './newBasicSelectStyle';

const EmptyIcon = () => null;

const NewBasicSelect = ({
  selectedOption,
  setOption,
  options,
  nameLabel,
  isLoading,
  dataCy,
  tracking,
  required,
  renderAllOptions,
  labelAll,
  defaultValue,
  placeholder,
  hideArrow,
}) => {
  const firstOption = useMemo(() => ({
    value: defaultValue,
    label: labelAll,
  }), [defaultValue, labelAll]);

  useEffect(() => {
    if (!selectedOption) {
      setOption(firstOption);
    }
  }, []);
  const renderFirstOption = () => (
    <MenuItem
      value={firstOption.value}
      sx={SelectStyle.menuItem}
      key={firstOption.label}
    >
      {labelAll}
    </MenuItem>
  );

  const renderItem = (value, index) => (
    <MenuItem
      value={value.value}
      sx={SelectStyle.menuItem}
      key={value.label}
      data-cy={dataCy ? `${dataCy}Item_${index}` : null}
    >
      {value.label}
    </MenuItem>
  );

  return (
    <SelectContainer>
      <LabelContainer>
        {required ? (
          <>
            {`${nameLabel} (obrigatório)`}
            <SpanColor color="red"> *</SpanColor>
          </>
        ) : (
          nameLabel
        )}
      </LabelContainer>
      <FormControl sx={SelectStyle.FormControl}>
        <Select
          value={selectedOption || firstOption?.value}
          onChange={(e) => {
            setOption(e.target.value);
            tracking();
          }}
          disabled={isLoading}
          label="selectedOption"
          MenuProps={MenuProps}
          IconComponent={hideArrow ? EmptyIcon : KeyboardArrowDownIcon}
          sx={
            selectedOption
              ? SelectStyle.menuItemSelected
              : SelectStyle.selectOptions
          }
          inputProps={{ 'data-cy': dataCy }}
        >
          {placeholder
            ? (
              <MenuItem disabled value="_default">
                {placeholder}
              </MenuItem>
            ) : null }
          {renderAllOptions && renderFirstOption()}
          {options.map((value, index) => renderItem(value, index))}
        </Select>
      </FormControl>
    </SelectContainer>
  );
};

NewBasicSelect.propTypes = {
  setOption: PropTypes.func,
  selectedOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  options: PropTypes.array,
  nameLabel: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  dataCy: PropTypes.string,
  tracking: PropTypes.func,
  required: PropTypes.bool,
  renderAllOptions: PropTypes.bool,
  labelAll: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  placeholder: PropTypes.string,
  hideArrow: PropTypes.bool,
};

NewBasicSelect.defaultProps = {
  setOption: () => {},
  tracking: () => {},
  selectedOption: null,
  options: [],
  isLoading: false,
  dataCy: null,
  required: false,
  renderAllOptions: true,
  labelAll: 'Todos os valores',
  defaultValue: 'all',
  placeholder: '',
  hideArrow: false,
};

export default NewBasicSelect;
