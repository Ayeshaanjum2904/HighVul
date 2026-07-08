import React from 'react';
import PropTypes from 'prop-types';
import MultipleSelect from 'common/controls/multipleSelect/multipleSelect';
import { makeStyles } from '@material-ui/styles';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

const useStyles = makeStyles({
  container: {
    marginTop: ({ hasLabel }) => (hasLabel ? '0px' : '-23px'),
  },
});

const MvsSelector = ({
  items, selectedItems, selectItems, placeholder, allItemsText, allTagsText,
  label, showIcon, showBrand,
}) => {
  const classes = useStyles({ hasLabel: !!label });
  return (
    <MultipleSelect
      className={classes.container}
      value={selectedItems || []}
      onSelect={(b) => { selectItems(b); }}
      items={items}
      placeholder={placeholder}
      label={label}
      showIcon={showIcon}
      icone={<DriveEtaIcon />}
      allItemsText={allItemsText}
      allTagsText={allTagsText}
      showBrand={showBrand}
    />

  );
};
MvsSelector.propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.array,
  selectItems: PropTypes.func,
  placeholder: PropTypes.string,
  allItemsText: PropTypes.string,
  allTagsText: PropTypes.string,
  label: PropTypes.string,
  showIcon: PropTypes.bool,
  showBrand: PropTypes.bool,
};

MvsSelector.defaultProps = {
  items: null,
  selectedItems: null,
  selectItems: () => {},
  placeholder: null,
  allItemsText: null,
  allTagsText: null,
  label: null,
  showIcon: true,
  showBrand: true,
};

export default MvsSelector;
