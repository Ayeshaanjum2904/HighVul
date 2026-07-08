import React, { useState, useMemo } from 'react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { VariableSizeList as List } from 'react-window';
import {
  AllItem, CustomListSubheader,
  MenuCustomComponent, MenuItemCustomComponent, TextFieldComponent,
} from './menuDropdown.style';
import { IconButtonTooltip } from '../iconButtonTooltip/iconButtonTooltip';

const ITEM_HEIGHT = 36;
const ITENS_PER_PAGE = 7;

const MenuDropdown = ({
  options, iconSize, disabledMenu, color, direction,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [searchText, setSearchText] = useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onCloseMenu = () => {
    setAnchorEl(null);
    setSearchText('');
  };
  const onClickAction = (item) => {
    item?.action();
    onCloseMenu();
  };

  const getHeight = () => ITEM_HEIGHT;
  const getItensPerPage = () => {
    if (options?.length > ITENS_PER_PAGE) {
      return ITENS_PER_PAGE;
    }
    return options?.length;
  };

  const infoFilter = useMemo(() => {
    const normalizeBusca = searchText.toLowerCase().normalize('NFD');
    return options.filter((option) => option.label.toLowerCase().normalize('NFD').includes(normalizeBusca));
  }, [searchText, options]);

  const renderItemList = ({ index, style }) => (
    <MenuItemCustomComponent
      key={infoFilter[index]?.label}
      onClick={() => onClickAction(infoFilter[index])}
      style={style}
    >
      <AllItem>
        {infoFilter[index]?.label}
      </AllItem>
    </MenuItemCustomComponent>
  );

  const renderSearchInput = () => (
    options?.length > 7
      ? (
        <CustomListSubheader>
          <TextFieldComponent
            autoFocus
            placeholder="Pesquise e selecione uma ação"
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
        </CustomListSubheader>
      )
      : null
  );

  return _.isEmpty(options)
    ? null
    : (
      <div>
        <IconButtonTooltip
          tooltip="Menu"
          onClick={handleClick}
          isActive={open}
          color={color}
          disabled={disabledMenu}
        >
          <MoreVertIcon style={{ fontSize: iconSize }} />
        </IconButtonTooltip>
        <MenuCustomComponent
          disableEnforceFocus
          id="more-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={onCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: direction,
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: direction,
          }}
          slotProps={{
            paper: {
              sx: {
                maxHeight: '380px',
                width: '280px',
              },
            },
          }}
        >
          {renderSearchInput()}
          <List
            height={(ITEM_HEIGHT * getItensPerPage()) + 1}
            width="100%"
            itemCount={infoFilter.length ?? 0}
            itemSize={getHeight}
          >
            {renderItemList}
          </List>
        </MenuCustomComponent>
      </div>
    );
};

MenuDropdown.propTypes = {
  options: PropTypes.array,
  iconSize: PropTypes.number,
  disabledMenu: PropTypes.bool,
  color: PropTypes.string,
  direction: PropTypes.oneOf(['right', 'left', 'center']),
};

MenuDropdown.defaultProps = {
  options: [],
  iconSize: 24,
  disabledMenu: false,
  color: undefined,
  direction: 'right',
};

export default MenuDropdown;
