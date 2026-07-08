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

const NewMultipleSelectComponentForm = forwardRef(({
  selectedOption, options, setOption, debounced, renderItem, label, dictionary,
  mixpanelPage, mixpanelType, dataCy, minWidth, startWithAllSelected, showSearchInput,
  height, disabled, isError, fieldKey, width,
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

  const defaultAction = () => {
    debounced();
    if (mixpanelPage && mixpanelType) Mixpanel.trackPageFilter(mixpanelPage, mixpanelType);
  };

  const handleChange = (value) => {
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

  const handleClose = () => {
    setSearchText('');
  };

  const handleSelectAll = () => {
    setOption(selectAll ? [] : infoFilter);
    setSelectAll(!selectAll);
    defaultAction();
  };

  useImperativeHandle(ref, () => ({
    clear() {
      setSelectAll(false);
      setOption([]);
    },
  }));

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
      sx={selectAll ? SelectStyle.selectedAll : SelectStyle.menuItem}
      disabled={disable}
      data-cy={`${dataCy}-select-all`}
    >
      {!disable ? (
        <>
          <Checkbox
            icon={<CheckBoxOutlineIcon />}
            checkedIcon={<CheckBoxIcon />}
            checked={selectAll}
          />
          <span className="all-item-new-select">{`Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`}</span>
        </>
      ) : <span className="all-item-new-select">{`${capitalize(dictionary.singular)} não existente`}</span> }
    </MenuItem>
  );

  const renderSearchInput = () => (
    showSearchInput && (
    <ListSubheader>
      <TextFieldComponent
        size="small"
        autoFocus
        placeholder={`Selecione um${renderA()} ou mais ${dictionary.plural}`}
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
        sx={selectedOptions.includes(
          infoFilter[index - 1],
        ) ? SelectStyle.menuItemSelected : SelectStyle.menuItem}
        onClick={() => handleChange(infoFilter[index - 1])}
        data-cy={infoFilter[index - 1].text}
      >
        <Checkbox
          icon={<CheckBoxOutlineIcon />}
          checkedIcon={<CheckBoxIcon />}
          checked={selectedOptions.map(
            (option) => option.value,
          ).includes(infoFilter[index - 1]?.value)}
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
      <FormControl sx={isError ? {
        ...SelectStyle.FormControl,
        border: '1px solid #C31E10',
        borderRadius: '4px',
      } : { ...SelectStyle.FormControl, minWidth, width }}
      >
        <Select
          name={fieldKey}
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
          MenuProps={MenuProps}
          IconComponent={KeyboardArrowDownIcon}
          sx={SelectStyle.selectOptions}
          displayEmpty
        >
          {renderSearchInput()}
          <List
            height={height}
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
      {isError
        ? (<span className="selector-error-message">{`Selecione um${renderA()} ou mais ${dictionary.plural}`}</span>)
        : (<div style={{ height: 24 }} />)}
    </div>
  );
});
NewMultipleSelectComponentForm.propTypes = {
  setOption: PropTypes.func,
  debounced: PropTypes.func,
  options: PropTypes.array,
  selectedOption: PropTypes.array,
  label: PropTypes.string,
  fieldKey: PropTypes.string,
  renderItem: PropTypes.func,
  dictionary: PropTypes.object,
  mixpanelPage: PropTypes.string,
  mixpanelType: PropTypes.string,
  dataCy: PropTypes.string,
  isError: PropTypes.string,
  minWidth: PropTypes.number,
  width: PropTypes.number,
  startWithAllSelected: PropTypes.bool,
  showSearchInput: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
};

NewMultipleSelectComponentForm.defaultProps = {
  setOption: () => {},
  debounced: () => {},
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
  isError: false,
  minWidth: 240,
  width: 240,
  startWithAllSelected: true,
  showSearchInput: true,
  height: 200,
  disabled: false,
  fieldKey: '',
};
export default NewMultipleSelectComponentForm;
