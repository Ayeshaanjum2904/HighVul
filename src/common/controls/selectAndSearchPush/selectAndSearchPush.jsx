/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';

import { InputAdornment, ListSubheader, TextField } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { styled } from '@mui/material/styles';
import { VariableSizeList as List } from 'react-window';
import colors from 'assets/styles/colors';
import { SelectStyle } from './selectAndSearchPushStyles';

import './selectAndSearchPush.scss';

const TextFieldStyle = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(228, 233, 242, 0.24)',
    marginTop: '8px',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: '#C5CEE0',
    },
    '&.Mui-focused fieldset': {
      borderColor: `1px solid ${colors.secundary_color_100_56}`,
      backgroundColor: colors.primary_color_100_36,
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

const SelectAndSearchPush = ({
  options, label, option, setOption, itemHeight, height, placeHolder, searchPlaceHolder,
  singleOption,
}) => {
  const [searchText, setSearchText] = useState('');
  const getHeight = () => itemHeight;
  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    if (singleOption) {
      return singleOption;
    }
    return options?.filter((op) => op?.label?.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options, singleOption]);

  const checkSingle = (index) => (
    infoFilter[index]
  );
  const renderItem = (text) => <span className="all-item">{text}</span>;

  const handleClick = (selectedOption) => {
    setOption(selectedOption);
    const details = document.getElementById('details-select');
    if (details) {
      details.removeAttribute('open');
    }
    setSearchText('');
  };

  const handleSummary = () => {
    setSearchText('');
  };

  const renderSearchInput = () => (
    <ListSubheader>
      <TextFieldStyle
        size="small"
        autoFocus
        placeholder={searchPlaceHolder}
        fullWidth
        value={searchText}
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
        key={checkSingle(index)?.label}
        value={checkSingle(index)?.label}
        style={style}
        sx={
          option?.label === checkSingle(index)?.label
            ? SelectStyle.menuItemSelected : SelectStyle.menuItem
        }
        onClick={() => handleClick(checkSingle(index))}
      >
        {renderItem(checkSingle(index)?.label)}
      </MenuItem>,
    ];
    return renderMap;
  };

  return (
    <div className="select-container">
      <span className="label-select">
        {label}
      </span>
      <details id="details-select">
        <summary
          id="summary-select"
          onClick={handleSummary}
        >
          <div>
            <span className="placeholder-summary">
              {option?.label || placeHolder }
            </span>
          </div>
        </summary>

        <div>
          {renderSearchInput()}
          <List
            height={height}
            width="100%"
            itemCount={singleOption ? 1 : infoFilter.length}
            itemSize={getHeight}
          >
            {({ index, style }) => (renderItemList(index, style))}
          </List>
        </div>
      </details>
    </div>
  );
};

SelectAndSearchPush.propTypes = {
  setOption: PropTypes.func,
  options: PropTypes.array,
  option: PropTypes.array,
  singleOption: PropTypes.object,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  searchPlaceHolder: PropTypes.string,
  itemHeight: PropTypes.number,
  height: PropTypes.number,
};

SelectAndSearchPush.defaultProps = {
  setOption: () => {},
  options: {},
  option: [],
  singleOption: {},
  label: '',
  placeHolder: '',
  searchPlaceHolder: '',
  itemHeight: 36,
  height: 252,
};

export default SelectAndSearchPush;
