import React from 'react';
import PropTypes from 'prop-types';

import Select from 'common/controls/select';

const SelectMarcaAnalistasModal = ({
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

SelectMarcaAnalistasModal.propTypes = {
  marca: PropTypes.any,
  setSelectedMarca: PropTypes.func,
  marcasList: PropTypes.array,
};

SelectMarcaAnalistasModal.defaultProps = {
  marca: null,
  setSelectedMarca: () => {},
  marcasList: [],
};

export default SelectMarcaAnalistasModal;
