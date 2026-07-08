import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './selectAndSearchComponent.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { InputAdornment, ListSubheader, TextField } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@mui/material/styles';
import { VariableSizeList as List } from 'react-window';
import { MenuProps, SelectStyle } from './selectAndSearchStyles';

const TextFieldStyle = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: '#C5CEE0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00AFAD',
      backgroundColor: 'rgba(85, 87, 112, 0.08)',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#555770',
  },
});

const getTextFromValue = (value, data) => {
  const foundItem = data?.find((item) => item.value === value);
  return foundItem ? foundItem.text : null;
};

const SelectAndSearchComponent = ({
  options, label, option, setOption, itemHeight, height, placeHolder, searchPlaceHolder,
  isError, fieldKey, width,
}) => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const getHeight = () => itemHeight;

  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    return options?.filter((op) => op.text.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options]);

  const handleChange = (info) => {
    if (info === option) {
      setOption('');
    } else {
      setOption(info);
    }
    setIsOpen(false);
    setSearchText('');
  };

  const handleClose = () => {
    setSearchText('');
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const renderItem = (text) => <span className="all-item">{text.text}</span>;

  const renderSearchInput = () => (
    <ListSubheader>
      <TextFieldStyle
        size="small"
        autoFocus
        placeholder={searchPlaceHolder}
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
      />
    </ListSubheader>
  );

  const renderItemList = (index, style) => {
    const renderMap = [
      <MenuItem
        key={infoFilter[index]}
        value={infoFilter[index]}
        style={style}
        sx={option === infoFilter[index] ? SelectStyle.menuItemSelected : SelectStyle.menuItem}
        onClick={() => handleChange(infoFilter[index].value)}
      >
        {renderItem(infoFilter[index])}
      </MenuItem>,
    ];
    return renderMap;
  };

  return (
    <div className="select-container">
      <span className="label-select">
        {label}
      </span>
      <FormControl sx={isError ? {
        ...SelectStyle.FormControl,
        border: '1px solid #C31E10',
        borderRadius: '4px',
      } : { ...SelectStyle.FormControl, width }}
      >
        <Select
          name={fieldKey}
          value={option}
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={SelectStyle.selectOptions}
          displayEmpty
          IconComponent={KeyboardArrowDownIcon}
          renderValue={() => (
            <span className="placeholder-select">
              {option.length === 0 ? placeHolder : getTextFromValue(option, options)}
            </span>
          )}
          onClose={() => handleClose()}
          open={isOpen}
          onOpen={() => handleOpen()}
        >
          {renderSearchInput()}
          <List
            height={height}
            width="100%"
            itemCount={infoFilter?.length}
            itemSize={getHeight}
          >
            {({ index, style }) => (renderItemList(index, style))}
          </List>
        </Select>
      </FormControl>
      {isError
        ? (<span className="selector-error-message">{`Selecione um ${label.toLowerCase()}`}</span>)
        : (<div style={{ height: 24 }} />)}
    </div>
  );
};

SelectAndSearchComponent.propTypes = {
  setOption: PropTypes.func,
  options: PropTypes.array,
  option: PropTypes.array,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  searchPlaceHolder: PropTypes.string,
  fieldKey: PropTypes.string,
  itemHeight: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  isError: PropTypes.bool,
};

SelectAndSearchComponent.defaultProps = {
  setOption: () => { },
  options: [],
  option: [],
  label: '',
  placeHolder: '',
  searchPlaceHolder: '',
  fieldKey: '',
  itemHeight: 36,
  height: 252,
  width: 252,
  isError: false,
};

export default SelectAndSearchComponent;
