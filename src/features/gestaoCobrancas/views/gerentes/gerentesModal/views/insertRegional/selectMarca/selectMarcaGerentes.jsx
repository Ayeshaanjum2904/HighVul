import React from 'react';
import PropTypes from 'prop-types';

import Select from 'common/controls/select';

const SelectMarcaGerentes = ({
  marca, setSelectedMarca, marcasList,
}) => (
  <Select
    items={marcasList}
    label="Brand"
    value={marca || null}
    onSelect={(value) => setSelectedMarca(value)}
    placeholder="Selecione uma brand"
  />
);

SelectMarcaGerentes.propTypes = {
  marca: PropTypes.any,
  setSelectedMarca: PropTypes.func,
  marcasList: PropTypes.array,
};

SelectMarcaGerentes.defaultProps = {
  marca: null,
  setSelectedMarca: () => {},
  marcasList: [],
};

export default SelectMarcaGerentes;
