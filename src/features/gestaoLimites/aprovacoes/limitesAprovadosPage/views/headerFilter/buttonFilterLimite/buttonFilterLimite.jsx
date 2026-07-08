import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './buttonFilterLimite.scss';
import Button from 'common/controls/button';

const ButtonFilterLimite = ({
  fullWidth,
  dataCy,
  isFilterSelected,
  applyFilter,
  clearFilter,
  userPermission,
}) => {
  const textClear = 'Limpar filtros';
  const textApply = 'Filtrar';
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleFilter = () => {
    setIsFilterApplied(!isFilterApplied);
    if (isFilterApplied && !isFilterSelected) {
      setIsFilterApplied(false);
      clearFilter(userPermission);
    } else {
      setIsFilterApplied(true);
      applyFilter(userPermission);
    }
  };

  return (
    <Button
      className="common__filters__botao-filtrar"
      onClick={() => handleFilter()}
      fullWidth={fullWidth}
      dataCy={dataCy}
      color="new-gray"
      disabled={!isFilterSelected && !isFilterApplied}
    >
      {!isFilterSelected && isFilterApplied ? textClear : textApply}
    </Button>
  );
};

ButtonFilterLimite.propTypes = {
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
  isFilterSelected: PropTypes.bool,
  applyFilter: PropTypes.func,
  clearFilter: PropTypes.func,
  userPermission: PropTypes.any,
};

ButtonFilterLimite.defaultProps = {
  fullWidth: false,
  dataCy: null,
  isFilterSelected: false,
  applyFilter: () => {},
  clearFilter: () => {},
  userPermission: null,
};

export default ButtonFilterLimite;
