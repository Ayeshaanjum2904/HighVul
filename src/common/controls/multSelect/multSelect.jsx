import * as React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import './multSelect.scss';
import CheckBoxIcon from 'assets/icons/check-box';
import CheckBoxOutlineIcon from 'assets/icons/check-box-outline';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { useState, useEffect } from 'react';
import { ListSubheader } from '@mui/material';
import { VariableSizeList as List } from 'react-window';
import { Mixpanel } from 'modules';
import { MenuProps, SelectStyle } from './multSelectStyles';

const ITEM_HEIGHT = 54;

const MultSelect = ({
  selectedOption, options, setOption, onSelected, debounced, renderItem, label, dictionary,
  mixpanelPage, mixpanelType, dataCy, minWidth, disabled,
}) => {
  const renderA = () => (dictionary.type === 'a' ? 'a' : '');

  const getHeight = () => ITEM_HEIGHT;
  const [selectAll, setSelectAll] = useState(true);

  let previousGroup = null;

  useEffect(() => {
    if (selectAll) {
      setOption(options);
    }
    if (options?.length > 0 && selectedOption.length === options?.length) {
      setSelectAll(true);
    }
  }, [selectAll, setOption, options, selectedOption, options?.length]);

  const defaultAction = () => {
    debounced();
    if (mixpanelPage && mixpanelType) Mixpanel.trackPageFilter(mixpanelPage, mixpanelType);
  };

  const handleChange = (value) => {
    onSelected(false);
    if (selectAll) {
      setSelectAll(false);
    }
    if (selectedOption.includes(value)) {
      setOption(selectedOption.filter((val) => val !== value));
    } else {
      setOption([...selectedOption, value]);
    }
    defaultAction();
  };

  const handleSelectAll = () => {
    onSelected(false);
    if (selectAll) {
      setOption([]);
    } else {
      setOption(options);
    }
    setSelectAll(!selectAll);
    defaultAction();
  };

  const renderPlaceHolder = (tamanho) => {
    if (tamanho === 1) {
      return `${tamanho} ${dictionary.singular} selecionad${dictionary.type}`;
    }
    if (tamanho === 0) {
      return `Selecione um${renderA()} ou mais ${dictionary.plural}`;
    }
    if (selectedOption.length === options.length) {
      return `Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`;
    }
    return `${tamanho} ${dictionary.plural} selecionad${dictionary.type}s`;
  };

  const renderFirstOption = (disable) => (
    <MenuItem
      key="select-all"
      onClick={handleSelectAll}
      sx={selectAll ? SelectStyle.selectedAll : SelectStyle.menuItem}
      disabled={disable}
    >
      <Checkbox
        icon={<CheckBoxOutlineIcon />}
        checkedIcon={<CheckBoxIcon />}
        checked={selectAll}
      />
      <span className="all-item">{`Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`}</span>
    </MenuItem>
  );

  const renderItemList = (index, style) => {
    const renderMap = [
      options[index - 1]?.group && options[index - 1]?.group !== previousGroup
        ? (
          <ListSubheader style={style} disableSticky key={`group_${index - 1}`} sx={SelectStyle.groupTitle}>
            {options[index - 1]?.group}
          </ListSubheader>
        )
        : null,
      <MenuItem
        key={options[index - 1]}
        value={options[index - 1]}
        style={style}
        sx={selectedOption.includes(
          options[index - 1],
        ) ? SelectStyle.menuItemSelected : SelectStyle.menuItem}
        onClick={() => handleChange(options[index - 1])}
        data-cy={options[index - 1].text}
      >
        <Checkbox
          icon={<CheckBoxOutlineIcon />}
          checkedIcon={<CheckBoxIcon />}
          checked={selectedOption.indexOf(options[index - 1]) > -1}
        />
        {renderItem(options[index - 1])}
      </MenuItem>,
    ];
    previousGroup = options[index - 1]?.group;
    return renderMap;
  };

  return (
    <div className="select-container" data-cy={dataCy}>
      <span className="label-select">{label}</span>
      <FormControl sx={{ ...SelectStyle.FormControl, minWidth }}>
        <Select
          disabled={disabled}
          multiple
          value={selectedOption}
          onChange={handleChange}
          renderValue={(select) => (
            <em className="placeholder-select">
              {renderPlaceHolder(select.length)}
            </em>
          )}
          MenuProps={MenuProps}
          IconComponent={KeyboardArrowDownIcon}
          sx={SelectStyle.selectOptions}
          displayEmpty
        >
          <List
            height={Math.min(((options?.length || 0) + 1) * ITEM_HEIGHT, 200)}
            width="100%"
            itemCount={(options?.length || 0) + 1}
            itemSize={getHeight}
          >
            {({ index, style }) => (index === 0
              ? renderFirstOption(options?.length === 0)
              : renderItemList(index, style))}
          </List>
        </Select>
      </FormControl>
    </div>
  );
};
MultSelect.propTypes = {
  setOption: PropTypes.func,
  onSelected: PropTypes.func,
  debounced: PropTypes.func,
  dataCy: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.array,
  label: PropTypes.string,
  renderItem: PropTypes.func,
  dictionary: PropTypes.object,
  mixpanelPage: PropTypes.string,
  mixpanelType: PropTypes.string,
  minWidth: PropTypes.number,
  disabled: PropTypes.bool,
};

MultSelect.defaultProps = {
  setOption: () => {},
  onSelected: () => {},
  debounced: () => {},
  dataCy: '',
  options: [],
  selectedOption: [],
  label: '',
  renderItem: (option) => <span className="all-item">{option.text}</span>,
  dictionary: {
    singular: 'item',
    plural: 'itens',
    type: 'o',
  },
  mixpanelPage: null,
  mixpanelType: null,
  minWidth: 252,
  disabled: false,
};
export default MultSelect;
