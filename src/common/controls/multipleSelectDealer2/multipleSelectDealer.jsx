/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {
  formatCnpj, formatCodigoConcessionaria,
  formatNomeConcessionaria, camelFormat,
} from 'utils/format';
import TextField from '../input/textField';
import MarcaBadge from '../../views/logoMarca';

import { multipleSelect } from './multipleSelectDealerStyles';

const useStyles = makeStyles(multipleSelect);

const MultipleSelectDealer = ({
  items, value, onSelect, placeholder,
  allItemsText, isActive, showAllItems, showSearchIcon, className,
  allTagsText, disabled, label,
}) => {
  const classes = useStyles({ isActive });
  const allItemsObject = { value: null, text: allItemsText, group: '' };

  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [options, setOptions] = useState(items.slice(0, 100));
  const [hasMore, setHasMore] = useState(true);

  const renderTags = (tags) => {
    if (tags === 1) return formatNomeConcessionaria(value[0]?.text);
    if (tags === items.length) return allItemsObject.text;
    return `${tags} ${allTagsText}`;
  };

  const paginateItens = () => {
    if (hasMore) {
      const paginatedItems = items.slice((100 * page), (100 * (page + 1)));
      setPage(page + 1);
      setOptions([...options, ...paginatedItems]);
    }
    setHasMore(page < Math.ceil(items.length / 100));
  };

  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option) => option.text,
    ignoreCase: true,
    ignoreAccents: true,
    limit: 100,
  });

  const onClose = () => {
    setPage(1);
    setOptions(items.slice(0, 100));
    setHasMore(page < Math.ceil(items.length / 100));
  };

  return (
    <Autocomplete
      filterOptions={filterOptions}
      className={className}
      value={!_.isEmpty(value) ? items?.filter((i) => value
        .some((v) => v.value === i.value)) : []}
      multiple
      classes={{
        root: classes.root,
        listbox: classes.listBox,
        hasClearIcon: classes.clearIcon,
        hasPopupIcon: classes.popupIcon,
        inputRoot: classes.input,
        tag: classes.tag,
      }}
      limitTags={0}
      disableClearable
      options={showAllItems ? [allItemsObject, ...items].sort((a, b) => a.text - b.text)
        : items.map(() => items(0 + Math.ceil(Math.random() * 20)))
          .sort((a, b) => a.text - b.text)}
      groupBy={(option) => option.text}
      disableCloseOnSelect
      disabled={disabled}
      popupIcon={<KeyboardArrowDownIcon />}
      getLimitTagsText={renderTags}
      onChange={(e, selectedItems) => {
        const isAllSelected = selectedItems?.filter((i) => i.value === null).length > 0;
        if (isAllSelected && value.length === items.length) onSelect([]);
        else if (isAllSelected) onSelect(items?.filter((i) => i.value !== null));
        else onSelect(selectedItems);
      }}
      onClose={onClose}
      inputValue={inputValue}
      // eslint-disable-next-line no-shadow
      onInputChange={(event, value, reason) => {
        if (reason !== 'reset') {
          setInputValue(value);
        }
      }}
      ListboxProps={{
        onScroll: (event) => {
          const listboxNode = event.currentTarget;
          if (listboxNode.scrollTop + listboxNode.clientHeight === listboxNode.scrollHeight) {
            paginateItens();
          }
        },
      }}
      getOptionLabel={(option) => option.text}
      renderOption={(option, state) => {
        if (value.length === items.length) {
          // eslint-disable-next-line no-param-reassign
          state.selected = true;
        }
        return (
        // eslint-disable-next-line react/jsx-props-no-spreading
          <li {...state}>
            <div className={classes.container}>
              <div className={classes.content}>
                <Checkbox
                  className={classes.checkbox}
                  style={{ marginRight: 8 }}
                  checked={state.selected}
                />
                {option.marca ? (
                  <div className={classes.icon}>
                    <MarcaBadge marca={option.marca} />
                  </div>
                ) : null}
                <div className={classes.text}>
                  <span className={classes.nome}>
                    {option.buc && option.cnpj
                      ? formatNomeConcessionaria(option.text)
                      : camelFormat(option.text, 2) }
                  </span>
                  {option.buc && option.cnpj ? (
                    <span className={classes.dados}>
                      {`${formatCodigoConcessionaria(option.buc)} • ${formatCnpj(option.cnpj)}`}
                    </span>
                  ) : null}
                </div>
              </div>
              {option.group === null ? <div className={classes.line} /> : null}
            </div>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label={label}
          placeholder={value.length === 0 ? placeholder : ''}
          onChange={() => {
            setPage(Math.ceil(items.length / 100));
            setOptions(items);
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment:
  <>
    {showSearchIcon ? <SearchIcon style={{ fill: '#8f9bb3', color: '#8f9bb3' }} /> : null}
    {params.InputProps.startAdornment}
  </>,
          }}
        />
      )}
    />
  );
};

MultipleSelectDealer.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.any,
  items: PropTypes.array,
  placeholder: PropTypes.string,
  allItemsText: PropTypes.string,
  isActive: PropTypes.bool,
  showAllItems: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
  allTagsText: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

MultipleSelectDealer.defaultProps = {
  className: '',
  onSelect: null,
  value: '',
  items: [],
  placeholder: 'Selecione uma concessionária',
  label: '',
  allItemsText: 'Todos os filtros',
  isActive: false,
  showAllItems: false,
  showSearchIcon: false,
  allTagsText: 'Filtros selecionados',
  disabled: false,
};

export default MultipleSelectDealer;
