import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFilterButton } from './buttonFilterPedidos.style';

const ButtonFilterPedidos = ({
  fullWidth,
  dataCy,
  isFilterSelected,
  isLoading,
  isInvalidDate,
  applyFilter,
  clearFilter,
}) => {
  const textClear = 'Limpar filtros';
  const textApply = 'Filtrar';
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleFilter = () => {
    if (isFilterApplied && !isFilterSelected) {
      setIsFilterApplied(false);
      clearFilter();
    } else {
      setIsFilterApplied(true);
      applyFilter();
    }
  };

  return (
    <StyledFilterButton
      onClick={() => handleFilter()}
      fullWidth={fullWidth}
      dataCy={dataCy}
      color="new-gray"
      disabled={(!isFilterSelected && !isFilterApplied) || isLoading || isInvalidDate}
    >
      {!isFilterSelected && isFilterApplied ? textClear : textApply}
    </StyledFilterButton>
  );
};

ButtonFilterPedidos.propTypes = {
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
  isFilterSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalidDate: PropTypes.bool,
  applyFilter: PropTypes.func,
  clearFilter: PropTypes.func,
};

ButtonFilterPedidos.defaultProps = {
  fullWidth: false,
  dataCy: null,
  isFilterSelected: false,
  isLoading: false,
  isInvalidDate: false,
  applyFilter: () => {},
  clearFilter: () => {},
};

export default ButtonFilterPedidos;
