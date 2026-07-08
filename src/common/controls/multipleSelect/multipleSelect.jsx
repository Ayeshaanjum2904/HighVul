/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core';
import { Icon, Box } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import colors from 'assets/styles/colors';
import TextField from '../input/textField';
import MarcaBadge from '../../views/logoMarca';
import { createVirtualizedListbox } from '../virtualizedListbox';

import { StyledCheckbox, multipleSelect } from './multipleSelectStyles';

const VirtualizedListbox = createVirtualizedListbox({
  itemHeight: 54,
  maxVisibleItems: 4,
});

const useStyles = makeStyles(multipleSelect);

const MultipleSelect = ({
  items, value, onSelect, placeholder, label,
  allItemsText, isActive, showAllItems, showIcon, className,
  allTagsText, showBrand, icone,
}) => {
  const classes = useStyles({ isActive });
  const allItemsObject = { value: null, text: allItemsText };

  const renderTags = (tags) => {
    if (tags === 1) return value[0]?.text;
    if (tags === items.length) return allItemsObject.text;
    return `${tags} ${allTagsText}`;
  };

  return (
    <Autocomplete
      className={className}
      value={!_.isEmpty(value) ? items?.filter((i) => value
        .some((v) => v.value?.toString().toLowerCase() === i.value?.toString().toLowerCase())) : []}
      multiple
      classes={{
        root: classes.root,
        listbox: classes.listBox,
        hasClearIcon: classes.clearIcon,
        hasPopupIcon: classes.popupIcon,
        inputRoot: classes.input,
        tag: classes.tag,
      }}
      renderTags={(getValue, getTagProps) => (
        getValue.map((option, index) => (
          <Chip
            size="small"
            label={option.text}
            style={{ display: index !== getValue.length - 1 ? 'none' : 'flex' }}
            {...getTagProps({ index })}
          />
        )))}
      limitTags={0}
      disableClearable
      ListboxComponent={VirtualizedListbox}
      options={showAllItems ? [allItemsObject, ...items] : items}
      disableCloseOnSelect
      popupIcon={<KeyboardArrowDownIcon />}
      getLimitTagsText={renderTags}
      onChange={(e, selectedItems) => {
        const isAllSelected = selectedItems?.filter((i) => i.value === null).length > 0;
        if (isAllSelected && value.length === items.length) onSelect([]);
        else if (isAllSelected) onSelect(items?.filter((i) => i.value !== null));
        else onSelect(selectedItems);
      }}
      getOptionLabel={(option) => option.text}
      renderOption={(option, state) => {
        if (value.length === items.length) {
          // eslint-disable-next-line no-param-reassign
          state.selected = true;
        }
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 0px 3px 16px' }}>
              <StyledCheckbox
                style={{ marginRight: 8 }}
                checked={state.selected}
              />
              {showBrand
                ? (
                  <Box sx={{ marginRight: '10px' }}>
                    <MarcaBadge marca={option.marca} />
                  </Box>
                ) : null}
              <Box sx={{ fontSize: '14px', lineHeight: '24px', color: '#555770' }}>
                {option.text}
              </Box>
            </Box>
            {option.value === null ? <Box sx={{ borderBottom: 'solid 1px #8f93a1' }} /> : null}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label={label}
          placeholder={value.length === 0 ? placeholder : ''}
          InputProps={{
            ...params.InputProps,
            startAdornment:
  <>
    {showIcon ? (
      <Icon style={{ alignSelf: 'baseline', color: colors.secundary_color_700, marginRight: '4px' }}>
        {icone}
      </Icon>
    ) : null}
    {params.InputProps.startAdornment}
  </>,
          }}
        />
      )}
    />
  );
};

MultipleSelect.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.any,
  items: PropTypes.array,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  allItemsText: PropTypes.string,
  isActive: PropTypes.bool,
  showAllItems: PropTypes.bool,
  showIcon: PropTypes.bool,
  allTagsText: PropTypes.string,
  showBrand: PropTypes.bool,
  icone: PropTypes.element,
};

MultipleSelect.defaultProps = {
  className: '',
  onSelect: null,
  value: '',
  items: [],
  placeholder: 'Selecione um filtro',
  label: '',
  allItemsText: 'Todos as filtros',
  isActive: false,
  showAllItems: false,
  showIcon: false,
  allTagsText: 'Filtros selecionados',
  showBrand: false,
  icone: <SearchIcon />,
};

export default MultipleSelect;
