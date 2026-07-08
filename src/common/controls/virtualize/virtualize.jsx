/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Checkbox from '@material-ui/core/Checkbox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTheme } from '@material-ui/styles';
import { VariableSizeList } from 'react-window';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import {
  formatCnpj, formatCodigoConcessionaria,
  formatNomeConcessionaria, camelFormat,
} from 'utils/format';
import { makeStyles } from '@material-ui/core';
import MarcaBadge from '../../views/logoMarca';
import { multipleSelect } from './virtualize';
import TextField from '../input/textField';

const LISTBOX_PADDING = 8; // px
function renderRow(props) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING,
    },
  });
}

const OuterElementContext = React.createContext({});
const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});
function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}
// Adapter for react-window
const ListboxComponent = React.forwardRef((
  props,
  ref,
) => {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;
  const getChildSize = (child) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }
    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };
  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const renderGroup = (params) => [
  params.group ? (
    <ListSubheader key={params.key} component="div">
      {params.group}
    </ListSubheader>
  ) : null,
  params.children,
];

const Virtualize = ({
  items, value, onSelect, placeholder,
  allItemsText, isActive, showAllItems, showSearchIcon, className,
  allTagsText, disabled, label, isGrouped, titleSelectAll,
}) => {
  const useStyles = makeStyles(multipleSelect);
  const classes = useStyles({ isActive });
  const allItemsObject = { value: null, text: allItemsText, group: titleSelectAll };
  const [inputValue, setInputValue] = useState('');
  const renderTags = (tags) => {
    if (tags === 1) return formatNomeConcessionaria(value[0]?.text);
    if (tags === items.length) return allItemsObject.text;
    return `${tags} ${allTagsText}`;
  };
  return (
    <Autocomplete
      id="virtualize-demo"
      options={showAllItems ? [allItemsObject, ...items].sort((a, b) => a.text - b.text)
        : items.map(() => items(0 + Math.ceil(crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1) * 20)))
          .sort((a, b) => a.text - b.text)}
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
      groupBy={(option) => (isGrouped ? option.group : null)}
      disableCloseOnSelect
      disabled={disabled}
      popupIcon={<KeyboardArrowDownIcon />}
      disableListWrap
      getLimitTagsText={renderTags}
      onChange={(e, selectedItems) => {
        const isAllSelected = selectedItems?.filter((i) => i.value === null).length > 0;
        if (isAllSelected && value.length === items.length) onSelect([]);
        else if (isAllSelected) onSelect(items?.filter((i) => i.value !== null));
        else onSelect(selectedItems);
      }}
      inputValue={inputValue}
      onInputChange={(event, values, reason) => {
        if (reason !== 'reset') {
          setInputValue(values);
        }
      }}
      ListboxComponent={ListboxComponent}
      getOptionLabel={(option) => option.text}
      renderGroup={renderGroup}
      renderOption={(option, state) => {
        if (value.length === items.length) {
          state.selected = true;
        }
        return (
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

