import React from 'react';
import PropTypes from 'prop-types';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';

const dictionary = () => ({
  singular: 'brand',
  plural: 'brands',
  type: 'a',
});

const SelectMarcaFilters = ({
  marca, setMarca, marcasList, isLoading,
}) => (
  <NewMultipleSelectComponent
    options={marcasList}
    setOption={setMarca}
    selectedOption={marca}
    label="Brand"
    disabled={isLoading}
    dictionary={dictionary()}
    dataCy="brand"
    minWidth={200}
  />
);

SelectMarcaFilters.propTypes = {
  marca: PropTypes.string,
  setMarca: PropTypes.func,
  marcasList: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

SelectMarcaFilters.defaultProps = {
  marca: null,
  setMarca: () => {},
  marcasList: [],
  isLoading: false,
};

export default SelectMarcaFilters;
