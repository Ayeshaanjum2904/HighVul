import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Box, InputAdornment, ListSubheader, TextField,
  Typography, MenuItem, FormControl, Select,
  Checkbox,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { VariableSizeList as List } from 'react-window';
import { Mixpanel } from 'modules';
import {
  CheckBox, CheckBoxOutlineBlankOutlined,
  IndeterminateCheckBox, KeyboardArrowDown,
  Search,
} from '@material-ui/icons';
import {
  MenuProps, SelectStyle, TextFieldStyle,
  CheckBoxStyle, CheckBoxOutlineBlankOutlinedStyle,
  IndeterminateCheckBoxStyle,
} from './selectStyles';
import {
  getHeight, getSufix, getPlaceholderText, getFirstOptionText,
} from './multiSelectUtils';

const TextFieldComponent = styled(TextField)(TextFieldStyle);
const CheckBoxIcon = styled(CheckBox)(CheckBoxStyle);
const CheckBoxOutlineBlankOutlinedIcon = styled(
  CheckBoxOutlineBlankOutlined,
)(CheckBoxOutlineBlankOutlinedStyle);
const IndeterminateCheckBoxIcon = styled(IndeterminateCheckBox)(IndeterminateCheckBoxStyle);

const MultiSelect = ({
  selectedOptions, options, setOption, debounced, renderItem, label, dictionary,
  mixpanelPage, mixpanelType, dataCy, minWidth, showSearchInput,
  height, disabled,
}) => {
  const [searchText, setSearchText] = useState('');

  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    return options.filter((option) => option.text.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options]);

  let previousGroup = null;

  const isAllSelected = options.length === selectedOptions.length;

  const defaultAction = () => {
    debounced();
    if (mixpanelPage && mixpanelType) Mixpanel.trackPageFilter(mixpanelPage, mixpanelType);
  };

  const handleChange = (value) => {
    const exist = selectedOptions.some((option) => option.value === value.value);
    if (exist) {
      setOption(selectedOptions.filter((val) => val.value !== value.value));
    } else {
      setOption([...selectedOptions, value]);
    }
    defaultAction();
  };

  const handleClose = () => {
    setSearchText('');
  };

  const handleSelectAll = () => {
    setOption(isAllSelected ? [] : infoFilter);
    defaultAction();
  };

  const renderFirstOption = (disable) => (
    <MenuItem
      key="select-all"
      onClick={handleSelectAll}
      sx={isAllSelected ? SelectStyle.selectedAll : SelectStyle.menuItem}
      disabled={disable}
      data-cy={`${dataCy}-select-all`}
    >
      <>
        {!disable && (
        <Checkbox
          icon={<CheckBoxOutlineBlankOutlinedIcon />}
          checkedIcon={<CheckBoxIcon />}
          indeterminateIcon={<IndeterminateCheckBoxIcon />}
          checked={isAllSelected}
          indeterminate={selectedOptions.length > 0 && selectedOptions.length < options.length}
        />
        )}
        <Typography
          component="span"
          sx={SelectStyle.firstOption}
        >
          {getFirstOptionText(disable, dictionary)}
        </Typography>
      </>
    </MenuItem>
  );

  const renderSearchInput = () => (
    <ListSubheader>
      <TextFieldComponent
        size="small"
        autoFocus
        placeholder={`Selecione um${getSufix(dictionary)} ou mais ${dictionary.plural}`}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== 'Escape') {
            e.stopPropagation();
          }
        }}
        data-cy={`${dataCy}-input`}
      />
    </ListSubheader>
  );

  const renderItemList = (index, style) => {
    const item = infoFilter?.[index - 1];
    const checked = selectedOptions.some((option) => item.value === option.value);
    const renderMap = [
      item?.group && item?.group !== previousGroup
        ? (
          <ListSubheader style={style} disableSticky key={`group_${index - 1}`}>
            {item?.group}
          </ListSubheader>
        )
        : null,
      <MenuItem
        key={item}
        value={item}
        style={style}
        sx={checked ? SelectStyle.menuItemSelected : SelectStyle.menuItem}
        onClick={() => handleChange(item)}
        data-cy={item.text}
      >
        <Checkbox
          icon={<CheckBoxOutlineBlankOutlinedIcon />}
          checkedIcon={<CheckBoxIcon />}
          checked={checked}
        />
        {renderItem(item)}
      </MenuItem>,
    ];
    previousGroup = item?.group;
    return renderMap;
  };

  return (
    <Box data-cy={dataCy}>
      <Typography component="span" sx={SelectStyle.label}>{label}</Typography>
      <FormControl sx={{ ...SelectStyle.FormControl, minWidth }}>
        <Select
          disabled={disabled}
          multiple
          value={selectedOptions}
          onChange={handleChange}
          onClose={() => handleClose()}
          renderValue={(select) => {
            const placeholderText = getPlaceholderText(select.length, select, options, dictionary);
            return (
              <Typography component="em" sx={SelectStyle.placeholder} title={placeholderText}>
                {placeholderText}
              </Typography>
            );
          }}
          MenuProps={MenuProps}
          IconComponent={KeyboardArrowDown}
          sx={SelectStyle.selectOptions}
          displayEmpty
        >
          {showSearchInput && renderSearchInput()}
          <List
            height={height}
            width="100%"
            itemCount={infoFilter.length + 1}
            itemSize={getHeight}
            itemData={infoFilter}
          >
            {({ index, style }) => (index === 0
              ? renderFirstOption(infoFilter.length === 0)
              : renderItemList(index, style))}
          </List>
        </Select>
      </FormControl>
    </Box>
  );
};

MultiSelect.propTypes = {
  setOption: PropTypes.func,
  debounced: PropTypes.func,
  options: PropTypes.array,
  selectedOptions: PropTypes.array,
  label: PropTypes.string,
  renderItem: PropTypes.func,
  dictionary: PropTypes.object,
  mixpanelPage: PropTypes.string,
  mixpanelType: PropTypes.string,
  dataCy: PropTypes.string,
  minWidth: PropTypes.number,
  showSearchInput: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
};

MultiSelect.defaultProps = {
  setOption: () => {},
  debounced: () => {},
  options: [],
  selectedOptions: [],
  label: '',
  renderItem: (option) => <Typography component="span" sx={SelectStyle.firstOption}>{option.text}</Typography>,
  dictionary: {
    singular: 'item',
    plural: 'itens',
    type: 'o',
  },
  mixpanelPage: null,
  mixpanelType: null,
  dataCy: 'seletor',
  minWidth: 252,
  showSearchInput: true,
  height: 200,
  disabled: false,
};
export default MultiSelect;
