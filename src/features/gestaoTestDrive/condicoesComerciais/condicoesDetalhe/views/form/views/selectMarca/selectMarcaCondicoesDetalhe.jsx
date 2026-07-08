import React from 'react';
import PropTypes from 'prop-types';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const SelectMarcaCondicoesDetalhe = ({
  marca, setMarca, marcas, isLoading,
}) => (
  <NewBasicSelect
    nameLabel="Brand"
    placeholder="Selecione a brand"
    dataCy="filter-brand"
    options={marcas}
    selectedOption={marca}
    setOption={setMarca}
    renderAllOptions={false}
    isLoading={isLoading}
  />
);

SelectMarcaCondicoesDetalhe.propTypes = {
  marca: PropTypes.string,
  setMarca: PropTypes.func,
  marcas: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaCondicoesDetalhe.defaultProps = {
  marca: '_default',
  setMarca: () => {},
  marcas: [],
  isLoading: false,
};

export default SelectMarcaCondicoesDetalhe;
