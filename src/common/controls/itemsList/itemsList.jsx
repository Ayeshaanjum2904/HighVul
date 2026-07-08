import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@mui/material';
import ClearIcon from 'assets/icons/clear';
import ItemsListStyles from './itemsList.style';
import ButtonTooltipIcon from '../buttonTooltipIcon';

const ItemsList = ({
  items, onRemove, labelValue, isModal,
}) => (
  <ItemsListStyles>
    {labelValue && labelValue.length > 0 && (
    <div className="label">
      {labelValue}
    </div>
    )}
    <div className="items-list">
      {items?.map((item, index) => (
        <>
          <div key={index} className="item">
            <span className="item-value">{isModal ? item : item.text}</span>
            <ButtonTooltipIcon title="Excluir" buttonAction={() => onRemove(index)} className="remove-icon">
              <ClearIcon width="16" />
            </ButtonTooltipIcon>
          </div>
          <Divider />
        </>
      ))}
    </div>
  </ItemsListStyles>
);

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onRemove: PropTypes.func,
  labelValue: PropTypes.string,
  isModal: PropTypes.bool,
};

ItemsList.defaultProps = {
  items: [],
  onRemove: () => { },
  labelValue: '',
  isModal: true,
};

export default ItemsList;
