import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import colors from 'assets/styles/colors';

import { VariableSizeList } from 'react-window';

import { Box, Stack, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';

import DeleteDialog from './deleteDialog/deleteDialog';
import SearchInput from './searchInput/searchInput';
import MenuItemCreate from './menuItemCreate/menuItemCreate';
import MenuItemContent from './menuItemContent/menuItemContent';
import MenuItemSelectAll from './menuItemSelectAll/menuItemSelectAll';
import { FormControlStyle, MenuProps, SelectStyle } from './selectMultiAction.style';
import createDictionary from './dictionary';

const SelectMultiAction = ({
  items, value, onChange, onCreate, onDelete, width, label,
  hideCheckbox, disableSearch, disableCreate, disableDelete, disableAllOption,
  dictionary, loading, error, disabled, itemHeight,
}) => {
  const [searchText, setSearchText] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentDeleteItem, setCurrentDeleteItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const searchItems = useMemo(() => {
    const normalizeText = searchText.toLowerCase().normalize('NFD').trim();
    return items.filter((option) => option?.text?.toLowerCase().normalize('NFD').includes(normalizeText));
  }, [searchText, items]);

  const isArray = Array.isArray(value);
  const skipFirstItem = (!isArray || disableAllOption);
  const emptySearch = searchItems?.length === 0;

  const isAllSelected = isArray && (
    items.length === value?.length
    || (searchItems.map((s) => s?.value).every((v) => value.includes(v)))
  );

  const dictionaryList = useMemo(
    () => createDictionary(dictionary, isArray, disableCreate),
    [dictionary, isArray, disableCreate],
  );

  useEffect(() => {
    if (!isOpen) setSearchText('');
  }, [isOpen]);

  const handleSelectAll = () => {
    if (isArray) onChange(isAllSelected ? [] : searchItems.map((i) => i?.value));
  };

  const handleChange = (item, checked) => {
    if (checked) {
      onChange(isArray ? value.filter((v) => v !== item?.value) : '');
    } else {
      onChange(isArray ? [...value, item?.value] : item?.value);
    }
    if (!isArray) setIsOpen(false);
  };

  const getItemByValue = (itemValue) => items.find((i) => i?.value === itemValue);

  const handleDelete = (event, itemValue) => {
    event.stopPropagation();
    setCurrentDeleteItem(getItemByValue(itemValue));
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialog = (deleteItem) => {
    if (isArray) {
      if (value?.includes(deleteItem)) onChange(value.filter((v) => v !== deleteItem));
    } else if (deleteItem === value) onChange('');
    onDelete(deleteItem);
    setIsOpen(false);
  };

  const handleCreate = (trimmedText) => {
    onCreate(trimmedText);
    setIsOpen(false);
  };

  const getRenderItemCount = () => {
    if (emptySearch) return 1;
    return searchItems.length + ((!isArray || disableAllOption) ? 0 : 1);
  };

  const renderEmptyOption = () => (
    <Stack color={colors.primary_color_600} height={128} gap="8px" alignItems="center" padding="24px 0px">
      <FileCopyRoundedIcon color="inherit" />
      <Box component="span" fontWeight={700} lineHeight="24px" fontSize="14px" textAlign="center">
        {dictionaryList?.emptyText[0]}
        <br />
        {dictionaryList?.emptyText[1]}
      </Box>
    </Stack>
  );

  const renderCreateOption = () => {
    const trimmedText = searchText.trim();
    return (
      <MenuItemCreate
        width={width}
        itemName={trimmedText}
        dictionary={dictionaryList}
        onClick={() => handleCreate(trimmedText)}
      />
    );
  };

  const renderSelectAllOption = () => (
    <MenuItemSelectAll
      onClick={handleSelectAll}
      checked={isAllSelected}
      hideCheckbox={hideCheckbox}
      text={dictionaryList?.selectAllText}
      itemHeight={itemHeight}
    />
  );

  const renderSearchInput = () => (
    !disableSearch && (
      <SearchInput
        placeholder={dictionaryList?.searchPlaceholder}
        onChange={setSearchText}
        text={searchText}
      />
    ));

  const renderItem = (index, style) => {
    const item = searchItems[index - (skipFirstItem ? 0 : 1)];
    const checked = isArray
      ? value.some((v) => item?.value === v)
      : item?.value === value;

    return (
      <MenuItemContent
        item={item}
        style={style}
        checked={checked}
        hideCheckbox={hideCheckbox}
        handleChange={handleChange}
        handleDelete={handleDelete}
        disableDelete={disableDelete}
      />
    );
  };

  const renderRow = ({ index, style }) => {
    if (emptySearch) {
      return (searchText?.length < 2 || disableCreate)
        ? renderEmptyOption()
        : renderCreateOption();
    }
    if (index === 0) return skipFirstItem ? renderItem(index, style) : renderSelectAllOption();

    return renderItem(index, style);
  };

  const renderValue = () => {
    let text = dictionaryList?.placeholder;
    if (isArray) {
      const length = value?.length || 0;
      if (length > 0) {
        const itemText = length === 1 ? dictionary?.singular : dictionary?.plural;
        const selectedText = length === 1 ? 'selecionado' : 'selecionados';
        text = `${length} ${itemText} ${selectedText}`;
      }
    } else if (value) text = getItemByValue(value)?.text || '';

    const isEmpty = isArray ? value?.length === 0 : !value;
    const textColor = isEmpty ? colors.secundary_color_400 : colors.secundary_color_700;
    return (
      <Typography
        variant="14_regular"
        sx={{ color: error ? colors.error_color_200 : textColor }}
        title={text}
      >
        {text}
      </Typography>
    );
  };

  const getListMinHeight = () => {
    if ((emptySearch && searchText?.length < 2) || disableCreate) return 128;
    return itemHeight;
  };

  return (
    <>
      <Stack width={width} rowGap="8px">
        {label && (<Typography variant="12_regular" lineHeight="16px">{label}</Typography>)}
        <FormControl sx={FormControlStyle(error)}>
          <Select
            multiple={isArray}
            value={value}
            renderValue={renderValue}
            MenuProps={MenuProps}
            IconComponent={(props) => (<KeyboardArrowDownRoundedIcon {...props} />)}
            sx={SelectStyle}
            displayEmpty
            disabled={disabled || loading}
            open={isOpen}
            onClick={() => {
              if (!disabled && !loading) {
                setIsOpen(!isOpen);
              }
            }}
          >
            {renderSearchInput()}
            <VariableSizeList
              style={{ maxHeight: 168, height: 'unset', minHeight: getListMinHeight() }}
              height={168}
              width="100%"
              itemCount={getRenderItemCount()}
              itemSize={() => itemHeight}
            >
              {renderRow}
            </VariableSizeList>
          </Select>
        </FormControl>
      </Stack>
      <DeleteDialog
        item={currentDeleteItem}
        onDelete={handleDeleteDialog}
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        dictionary={dictionaryList}
      />
    </>
  );
};

SelectMultiAction.propTypes = {
  items: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onCreate: PropTypes.func,
  onDelete: PropTypes.func,
  width: PropTypes.number,
  label: PropTypes.string,
  hideCheckbox: PropTypes.bool,
  disableSearch: PropTypes.bool,
  disableCreate: PropTypes.bool,
  disableDelete: PropTypes.bool,
  disableAllOption: PropTypes.bool,
  dictionary: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  itemHeight: PropTypes.number,
};

SelectMultiAction.defaultProps = {
  items: [],
  value: null,
  onChange: () => { },
  onCreate: () => { },
  onDelete: () => { },
  width: 556,
  label: 'Itens',
  hideCheckbox: false,
  disableSearch: false,
  disableCreate: false,
  disableDelete: false,
  disableAllOption: false,
  loading: false,
  error: false,
  disabled: false,
  dictionary: {
    singular: 'item',
    plural: 'itens',
    type: 'o',
  },
  itemHeight: 40,
};

export default SelectMultiAction;
