import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/layout/modal';
import ItemSelector from './views/itemSelector';
import AddedList from './views/addedList';
import AddButton from './views/addButton';
import { ITEM_TYPES_CONFIG } from './config';
import './itemSelectorModal.scss';

const ItemSelectorModal = ({
  closeModal,
  selectedItems,
  itemsList,
  onSelectItem,
  itemType,
  baseClassName,
}) => {
  const [pendingItems, setPendingItems] = useState(selectedItems || []);

  const handleSelectItem = useCallback((items) => {
    setPendingItems(items);
  }, []);

  const handleRemoveItem = useCallback((value) => {
    setPendingItems((prev) => prev.filter((item) => item.value !== value));
  }, []);

  const handleConfirm = useCallback(() => {
    onSelectItem(pendingItems);
    closeModal();
  }, [pendingItems, onSelectItem, closeModal]);

  return (
    <Modal
      closeModal={closeModal}
      width="884px"
      height="432px"
    >
      <div className="itemSelectorModal__content">
        <div className="itemSelector__modal__header">
          <div className="itemSelector__modal__header_title">
            {ITEM_TYPES_CONFIG[itemType].title}
          </div>
          <div className="itemSelector__modal__header_subtitle">
            {ITEM_TYPES_CONFIG[itemType].subtitle}
          </div>
        </div>
        <div className="itemSelector__modal__body">
          <div className="itemSelector__modal__body__selector">
            <ItemSelector
              items={itemsList}
              selectedItems={pendingItems}
              selectItems={handleSelectItem}
              placeholder={ITEM_TYPES_CONFIG[itemType].placeholder}
              allItemsText={ITEM_TYPES_CONFIG[itemType].allItemsText}
              allTagsText={ITEM_TYPES_CONFIG[itemType].allTagsText}
              label={ITEM_TYPES_CONFIG[itemType].label}
              showIcon={ITEM_TYPES_CONFIG[itemType].showIcon}
              showBrand={ITEM_TYPES_CONFIG[itemType].showBrand}
            />
          </div>
          <div className="itemSelector__modal__body__list">
            <AddedList
              itemsList={itemsList}
              selectedItems={pendingItems}
              onRemoveItems={handleRemoveItem}
            />
          </div>
        </div>

        <div className="itemSelector__modal__footer">
          <AddButton
            onConfirm={handleConfirm}
            pageName={baseClassName}
            textoBotao={ITEM_TYPES_CONFIG[itemType].title}
          />
        </div>
      </div>
    </Modal>
  );
};

ItemSelectorModal.propTypes = {
  closeModal: PropTypes.func,
  selectedItems: PropTypes.array,
  itemsList: PropTypes.array,
  onSelectItem: PropTypes.func,
  itemType: PropTypes.string,
  baseClassName: PropTypes.string,
};

ItemSelectorModal.defaultProps = {
  closeModal: () => {},
  selectedItems: [],
  itemsList: [],
  onSelectItem: () => {},
  itemType: 'veiculos',
  baseClassName: '',
};

export default ItemSelectorModal;
