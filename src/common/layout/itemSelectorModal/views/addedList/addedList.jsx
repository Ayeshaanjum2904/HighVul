import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MvsListRow from './itemsListRow';

const AddedList = ({ itemsList, selectedItems, onRemoveItems }) => (
  <Box display="flex" flexWrap="wrap">
    {(Array.isArray(selectedItems) ? selectedItems : []).map((m) => (
      <MvsListRow items={m} key={m.value} onRemoveItems={onRemoveItems} itemsList={itemsList} />
    ))}
  </Box>
);

AddedList.propTypes = {
  selectedItems: PropTypes.array,
  onRemoveItems: PropTypes.func,
  itemsList: PropTypes.array,
};

AddedList.defaultProps = {
  selectedItems: [],
  onRemoveItems: () => {},
  itemsList: [],
};

export default AddedList;
