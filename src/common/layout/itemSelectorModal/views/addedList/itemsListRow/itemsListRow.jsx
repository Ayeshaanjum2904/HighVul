import React from 'react';
import PropTypes from 'prop-types';

import RemoveButton from '../removeButton';

import './itemsListRow.scss';

const ItemsListRow = ({
  items, onRemoveItems, itemsList,
}) => (
  <div className="items-list-row__container">
    <div className="items-list-row__item items-list-row__description">
      {itemsList.filter((list) => list.value === items.value)[0].text}
    </div>
    <div className="items-list-row__item items-list-row__remove">
      <RemoveButton onClick={() => onRemoveItems(items.value)} />
    </div>
  </div>
);

ItemsListRow.propTypes = {
  items: PropTypes.object,
  onRemoveItems: PropTypes.func,
  itemsList: PropTypes.arrayOf(PropTypes.object),
};

ItemsListRow.defaultProps = {
  items: {},
  onRemoveItems: () => {},
  itemsList: [],
};

export default ItemsListRow;
