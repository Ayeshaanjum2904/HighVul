import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './buttonFilterAlerta.scss';
import Button from 'common/controls/button';

const ButtonFilterAlerta = ({
  fullWidth,
  dataCy,
  isFilterSelected,
  applyFilter,
  clearFilter,
}) => {
  const textClear = 'Limpar filtros';
  const textApply = 'Filtrar';
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleFilter = () => {
    setIsFilterApplied(!isFilterApplied);
    if (isFilterApplied && !isFilterSelected) {
      setIsFilterApplied(false);
      clearFilter();
    } else {
      setIsFilterApplied(true);
      applyFilter();
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

ButtonFilterAlerta.propTypes = {
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
  isFilterSelected: PropTypes.bool,
  applyFilter: PropTypes.func,
  clearFilter: PropTypes.func,
};

ButtonFilterAlerta.defaultProps = {
  fullWidth: false,
  dataCy: null,
  isFilterSelected: false,
  applyFilter: () => {},
  clearFilter: () => {},
};

export default ButtonFilterAlerta;
