import * as React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import './newMultipleSelectComponent.scss';
import CheckBoxIcon from 'assets/icons/check-box';
import CheckBoxOutlineIcon from 'assets/icons/check-box-outline';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import {
  useMemo, useState, forwardRef, useImperativeHandle, useRef,
} from 'react';
import { InputAdornment, ListSubheader, TextField } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@mui/material/styles';
import { VariableSizeList as List } from 'react-window';
import { Mixpanel } from 'modules';
import { MenuProps, SelectStyle, TextFieldStyle } from './selectStyles';

const TextFieldComponent = styled(TextField)(TextFieldStyle);

const ITEM_HEIGHT = 54;

const NewMultipleSelectComponent = forwardRef(({
  selectedOption, options, setOption, onSelected, debounced, renderItem, label, dictionary,
  mixpanelPage, mixpanelType, dataCy, minWidth, startWithAllSelected, showSearchInput,
  height, disabled, openMenuTop,
}, ref) => {
  const [searchText, setSearchText] = useState('');
  const startWithAllSelectedFlag = useRef(true);

  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    return options.filter((option) => option.text.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options]);

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  const renderA = () => (dictionary.type === 'a' ? 'a' : '');

  const getHeight = () => ITEM_HEIGHT;
  const [selectAll, setSelectAll] = useState(false);

  let previousGroup = null;

  const selectedOptions = useMemo(() => {
    if (startWithAllSelectedFlag.current && startWithAllSelected && options.length) {
      setSelectAll(true);
      startWithAllSelectedFlag.current = false;
      return options;
    }
    return selectedOption;
  }, [startWithAllSelected, selectedOption, options]);

  const isAllSelected = selectAll || options.length === selectedOptions.length;

  const defaultAction = () => {
    debounced();
    if (mixpanelPage && mixpanelType) Mixpanel.trackPageFilter(mixpanelPage, mixpanelType);
  };

  const handleChange = (value) => {
    onSelected(false);
    if (selectAll) {
      setSelectAll(false);
    }
    const exist = selectedOption.some((option) => option.value === value.value);
    if (exist) {
      setOption(selectedOption.filter((val) => val.value !== value.value));
    } else {
      setOption([...selectedOption, value]);
    }
    defaultAction();
  };

  const handleClose = () => {
    setSearchText('');
  };

  const handleSelectAll = () => {
    onSelected(false);
    setOption(isAllSelected ? [] : infoFilter);
    setSelectAll(!isAllSelected);
    defaultAction();
  };

  useImperativeHandle(ref, () => ({
    clear() {
      setSelectAll(false);
      onSelected(false);
      setOption([]);
    },
  }));

  const menuPosition = openMenuTop
    ? {
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      transformOrigin: { vertical: 'bottom', horizontal: 'center' },
    }
    : {
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      transformOrigin: { vertical: 'top', horizontal: 'center' },
    };

  const renderPlaceHolder = (tamanho) => {
    if (tamanho === 1) {
      return `${tamanho} ${dictionary.singular} selecionad${dictionary.type}`;
    }
    if (tamanho === 0) {
      return `Selecione um${renderA()} ou mais ${dictionary.plural}`;
    }
    if (selectedOptions.length === options.length) {
      return `Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`;
    }
    return `${tamanho} ${dictionary.plural} selecionad${dictionary.type}s`;
  };

  const renderFirstOption = (disable) => (
    <MenuItem
      key="select-all"
      onClick={handleSelectAll}
      sx={isAllSelected ? SelectStyle.selectedAll : SelectStyle.menuItem}
      disabled={disable}
      data-cy={`${dataCy}-select-all`}
    >
      {!disable ? (
        <>
          <Checkbox
            icon={<CheckBoxOutlineIcon />}
            checkedIcon={<CheckBoxIcon />}
            checked={isAllSelected}
          />
          <span className="all-item-new-select">{`Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`}</span>
        </>
      ) : <span className="all-item-new-select">{`${capitalize(dictionary.singular)} não existente`}</span>}
    </MenuItem>
  );

  const renderSearchInput = () => (
    showSearchInput && (
      <ListSubheader>
        <TextFieldComponent
          size="small"
          autoFocus
          placeholder={`Buscar um${renderA()} ou mais ${dictionary.plural}`}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
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
    ));

  const renderItemList = (index, style) => {
    const checked = selectedOptions.some((option) => infoFilter[index - 1].value === option.value);
    const renderMap = [
      infoFilter[index - 1]?.group && infoFilter[index - 1]?.group !== previousGroup
        ? (
          <ListSubheader style={style} disableSticky key={`group_${index - 1}`}>
            {infoFilter[index - 1]?.group}
          </ListSubheader>
        )
        : null,
      <MenuItem
        key={infoFilter[index - 1]}
        value={infoFilter[index - 1]}
        style={style}
        sx={checked ? SelectStyle.menuItemSelected : SelectStyle.menuItem}
        onClick={() => handleChange(infoFilter[index - 1])}
        data-cy={infoFilter[index - 1].text}
      >
        <Checkbox
          icon={<CheckBoxOutlineIcon />}
          checkedIcon={<CheckBoxIcon />}
          checked={checked}
        />
        {renderItem(infoFilter[index - 1])}
      </MenuItem>,
    ];
    previousGroup = infoFilter[index - 1]?.group;
    return renderMap;
  };

  return (
    <div className="select-container" data-cy={dataCy}>
      <span className="label-new-select">{label}</span>
      <FormControl sx={{ ...SelectStyle.FormControl, minWidth }}>
        <Select
          disabled={disabled}
          multiple
          value={selectedOptions}
          onChange={handleChange}
          onClose={() => handleClose()}
          renderValue={(select) => {
            const placeholderText = renderPlaceHolder(select.length);
            return (
              <em className="placeholder-new-select" title={placeholderText}>
                {placeholderText}
              </em>
            );
          }}
          MenuProps={{
            ...MenuProps,
            ...menuPosition,
          }}
          IconComponent={KeyboardArrowDownIcon}
          sx={SelectStyle.selectOptions}
          displayEmpty
        >
          {renderSearchInput()}
          <List
            height={Math.min(height, (infoFilter.length + 1) * ITEM_HEIGHT)}
            width="100%"
            itemCount={infoFilter.length + 1}
            itemSize={getHeight}
          >
            {({ index, style }) => (index === 0
              ? renderFirstOption(infoFilter.length === 0)
              : renderItemList(index, style))}
          </List>
        </Select>
      </FormControl>
    </div>
  );
});
NewMultipleSelectComponent.propTypes = {
  setOption: PropTypes.func,
  onSelected: PropTypes.func,
  debounced: PropTypes.func,
  options: PropTypes.array,
  selectedOption: PropTypes.array,
  label: PropTypes.string,
  renderItem: PropTypes.func,
  dictionary: PropTypes.object,
  mixpanelPage: PropTypes.string,
  mixpanelType: PropTypes.string,
  dataCy: PropTypes.string,
  minWidth: PropTypes.number,
  startWithAllSelected: PropTypes.bool,
  showSearchInput: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  openMenuTop: PropTypes.bool,
};

NewMultipleSelectComponent.defaultProps = {
  setOption: () => { },
  onSelected: () => { },
  debounced: () => { },
  options: [],
  selectedOption: [],
  label: '',
  renderItem: (option) => <span className="all-item-new-select">{option.text}</span>,
  dictionary: {
    singular: 'item',
    plural: 'itens',
    type: 'o',
  },
  mixpanelPage: null,
  mixpanelType: null,
  dataCy: 'seletor',
  minWidth: 252,
  startWithAllSelected: true,
  showSearchInput: true,
  height: 200,
  disabled: false,
  openMenuTop: false,
};
export default NewMultipleSelectComponent;
