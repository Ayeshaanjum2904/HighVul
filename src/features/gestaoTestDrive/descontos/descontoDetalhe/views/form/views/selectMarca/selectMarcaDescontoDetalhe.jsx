import React from 'react';
import PropTypes from 'prop-types';
import Select from 'common/controls/select';

const SelectMarcaDescontoDetalhe = ({
  marca, setMarca, marcas, isLoading,
}) => (
  <Select
    items={marcas}
    label="Brand"
    value={marca}
    onSelect={setMarca}
    placeholder="Selecione a brand"
    disabled={isLoading}
  />
);

SelectMarcaDescontoDetalhe.propTypes = {
  marca: PropTypes.string,
  setMarca: PropTypes.func,
  marcas: PropTypes.array,
  isLoading: PropTypes.bool,
};

SelectMarcaDescontoDetalhe.defaultProps = {
  marca: null,
  setMarca: () => {},
  marcas: [],
  isLoading: false,
};

export default SelectMarcaDescontoDetalhe;
