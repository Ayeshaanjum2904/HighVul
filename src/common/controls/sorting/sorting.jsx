import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import ButtonIcon from 'common/controls/buttonIcon';

const sortFunction = (a, b) => {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return dateA > dateB ? 1 : -1;
};

const sortData = (isSorted, list, dataVariable) => {
  let orded = list.sort((a, b) => (sortFunction(b[dataVariable], a[dataVariable])));
  if (isSorted) {
    orded = list.sort((a, b) => (sortFunction(a[dataVariable], b[dataVariable])));
    return orded;
  }
  return orded;
};

const Sorting = ({
  text, list, setList, dataVariable,
}) => {
  const [sorting, setSorting] = useState(false);
  return (
    <ButtonIcon onClick={() => {
      const changeSort = !sorting;
      setSorting(changeSort);
      const copyList = sortData(changeSort, list, dataVariable);
      setList([...copyList]);
    }}
    >
      {text}
      {sorting ? (<ArrowUpwardIcon />) : (<ArrowDownwardIcon />)}
    </ButtonIcon>
  );
};

Sorting.propTypes = {
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  setList: PropTypes.func.isRequired,
  dataVariable: PropTypes.string,
};

Sorting.defaultProps = {
  dataVariable: 'data',
};

export default Sorting;
