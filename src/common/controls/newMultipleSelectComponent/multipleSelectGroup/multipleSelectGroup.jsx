import * as React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import '../newMultipleSelectComponent.scss';
import SvgCheckBox from 'assets/icons/check-box';
import SvgCheckBoxOutline from 'assets/icons/check-box-outline';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import {
  useMemo, useState, useEffect, useRef,
} from 'react';
import { InputAdornment, ListSubheader, TextField } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@mui/material/styles';
import { Mixpanel } from 'modules';
import { MenuProps, SelectStyleGroup, TextFieldStyle } from './multipleSelectGroupStyles';
import { SelectStyle } from '../selectStyles';

const TextFieldComponent = styled(TextField)(TextFieldStyle);

const NewMultipleSelectComponent = ({
  selectedOption, options, setOption, debounced, renderItem, label, dictionary,
  mixpanelPage, mixpanelType, dataCy,
}) => {
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    return options.filter((option) => option.text.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options]);

  const [selectAll, setSelectAll] = useState(true);

  const defaultAction = () => {
    debounced();
    if (mixpanelPage && mixpanelType) Mixpanel.trackPageFilter(mixpanelPage, mixpanelType);
  };

  useEffect(() => {
    if (selectAll) {
      setOption(infoFilter);
    }
    if (options.length > 0 && selectedOption.length === options.length) {
      setSelectAll(true);
    }
  }, [selectAll, setOption, infoFilter, selectedOption, options.length]);

  const handleChange = (event) => {
    const { value } = event.target;

    if (value[value.length - 1] === 'all') {
      setOption(selectedOption.length === options.length ? [] : options);
      setSelectAll(!selectAll);
    } else {
      setOption(value);
      setSelectAll(false);
    }

    defaultAction();
  };

  const handleClose = () => {
    setSearchText('');
  };

  const handleSelectAll = () => {
    setOption(selectAll ? [] : infoFilter);
    defaultAction();
    setSelectAll(!selectAll);
  };

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const renderA = () => (dictionary.type === 'a' ? 'a' : '');

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
      value="all"
      key="all"
      sx={selectAll ? SelectStyle.selectedAll : SelectStyleGroup.menuItem}
      disabled={disable}
      onClick={handleSelectAll}
    >
      {!disable ? (
        <>
          <Checkbox
            icon={<SvgCheckBoxOutline />}
            checkedIcon={<SvgCheckBox />}
            checked={selectAll}
          />
          <span className="all-item">{`Tod${dictionary.type}s ${dictionary.type}s ${dictionary.plural}`}</span>
        </>
      ) : <span className="all-item">{`${capitalize(dictionary.singular)} não existente`}</span> }
    </MenuItem>
  );

  const renderSearchInput = () => (
    <ListSubheader>
      <TextFieldComponent
        size="small"
        autoFocus
        placeholder={`Buscar um${renderA()} ou mais ${dictionary.plural}`}
        fullWidth
        inputRef={searchInputRef}
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
      />
    </ListSubheader>
  );

  const renderItemList = () => {
    let previousGroup = null;
    return infoFilter.map((option, i) => {
      const renderMap = [
        option?.group && option?.group !== previousGroup
          ? <ListSubheader disableSticky key={`group_${i}`} sx={SelectStyleGroup.groupTitle}>{option?.group}</ListSubheader>
          : null,
        <MenuItem
          key={i}
          value={option}
          sx={SelectStyleGroup.menuItem}
        >
          <Checkbox
            icon={<SvgCheckBoxOutline />}
            checkedIcon={<SvgCheckBox />}
            checked={selectedOption.indexOf(option) > -1}
          />
          {renderItem(option)}
        </MenuItem>,
      ];
      previousGroup = option?.group;
      return renderMap;
    });
  };

  return (
    <div
      className="select-container"
      data-cy={dataCy}
    >
      <span className="label-select">{label}</span>
      <FormControl sx={SelectStyle.FormControl}>
        <Select
          multiple
          value={selectedOption}
          onChange={handleChange}
          onClose={() => handleClose()}
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
          {renderSearchInput()}
          {renderFirstOption(infoFilter.length === 0)}
          {renderItemList()}
        </Select>
      </FormControl>
    </div>
  );
};
NewMultipleSelectComponent.propTypes = {
  setOption: PropTypes.func,
  debounced: PropTypes.func,
  options: PropTypes.array,
  selectedOption: PropTypes.array,
  label: PropTypes.string,
  renderItem: PropTypes.func,
  dictionary: PropTypes.object,
  mixpanelPage: PropTypes.string,
  mixpanelType: PropTypes.string,
  dataCy: PropTypes.string,
};

NewMultipleSelectComponent.defaultProps = {
  setOption: () => {},
  debounced: () => {},
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
  dataCy: 'multiple-select',
};
export default NewMultipleSelectComponent;
