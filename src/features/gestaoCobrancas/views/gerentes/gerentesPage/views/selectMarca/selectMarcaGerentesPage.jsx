import React from 'react';
import PropTypes from 'prop-types';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const SelectMarcaGerentesPage = ({
  selectedMarca, setMarca, marcas, isLoading,
}) => (

  <NewBasicSelect
    options={marcas}
    setOption={setMarca}
    selectedOption={selectedMarca ?? 'all'}
    nameLabel="Brand"
    dataCy="FilterMarca"
    labelAll="Todas as brands"
    renderAllOptions
    isLoading={isLoading}
  />
);

SelectMarcaGerentesPage.propTypes = {
  selectedMarca: PropTypes.number,
  setMarca: PropTypes.func,
  marcas: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaGerentesPage.defaultProps = {
  selectedMarca: null,
  setMarca: () => {},
  marcas: null,
  isLoading: false,
};

export default SelectMarcaGerentesPage;
