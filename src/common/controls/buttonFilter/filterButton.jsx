import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/controls/button';
import './filterButton.scss';

const FilterButton = ({
  onClick,
  isFilterSelected,
  isFirstPageLoad,
  isLoading,
  textApply,
  textSelect,
  error,
  dataCy,
}) => (
  <Button
    className="common_filters_button"
    onClick={() => onClick()}
    disabled={!isFilterSelected || isLoading || error || isFirstPageLoad}
    dataCy={dataCy}
    color="new-gray"
  >
    {isFilterSelected ? textApply : textSelect}
  </Button>
);

FilterButton.propTypes = {
  onClick: PropTypes.func,
  isFilterSelected: PropTypes.bool,
  isFirstPageLoad: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  textApply: PropTypes.string,
  textSelect: PropTypes.string,
  dataCy: PropTypes.string,
};

FilterButton.defaultProps = {
  onClick: () => {},
  isFilterSelected: false,
  isFirstPageLoad: false,
  isLoading: false,
  textApply: 'Filtrar',
  textSelect: 'Filtrar',
  error: false,
  dataCy: null,
};

export default FilterButton;
