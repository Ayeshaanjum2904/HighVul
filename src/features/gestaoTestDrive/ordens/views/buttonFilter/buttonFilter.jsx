import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';
import { ButtonContainer } from './buttonFilter.style';

const ButtonFilter = ({
  fullWidth,
  dataCy,
  isFilterSelected,
  loadingStatus,
  loadingProdutos,
  onApply,
  onClear,
}) => {
  const textClear = 'Limpar filtros';
  const textApply = 'Filtrar';
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    if (isFilterApplied && isFilterSelected) {
      setIsFilterApplied(false);
    }
  }, [isFilterSelected]);

  const handleFilter = () => {
    if (isFilterApplied) {
      setIsFilterApplied(false);
      onClear();
    } else {
      setIsFilterApplied(true);
      onApply();
    }
  };

  const disabledFilter = (
    loadingStatus
    || loadingProdutos
    || (!isFilterSelected && !isFilterApplied)
  );
  return (
    <ButtonContainer isFilterApplied={isFilterApplied}>
      <Button
        className="button"
        onClick={handleFilter}
        fullWidth={fullWidth}
        dataCy={dataCy}
        color="new-gray"
        disabled={disabledFilter}
      >
        {isFilterApplied ? textClear : textApply}
      </Button>
    </ButtonContainer>
  );
};

ButtonFilter.propTypes = {
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
  isFilterSelected: PropTypes.bool,
  loadingStatus: PropTypes.bool,
  loadingProdutos: PropTypes.bool,
  onApply: PropTypes.func,
  onClear: PropTypes.func,
};

ButtonFilter.defaultProps = {
  fullWidth: false,
  dataCy: null,
  isFilterSelected: false,
  loadingStatus: false,
  loadingProdutos: false,
  onApply: () => {},
  onClear: () => {},
};

export default ButtonFilter;
