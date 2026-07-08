import React from 'react';
import PropTypes from 'prop-types';

import { camelFormat } from 'utils/format';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const SelectMarcaVeiculosCadastro = ({
  marca, updateVeiculoProperty, brands, getUrlVeiculosList, getModelos, id,
}) => {
  const disabled = id !== null;
  const formatMarca = camelFormat(marca) || null;
  const mapBrandsToOptions = (b) => b?.map((m) => ({ label: m.text, value: m.value }));

  return (
    <NewBasicSelect
      selectedOption={formatMarca ?? '_default'}
      setOption={(m) => {
        updateVeiculoProperty('marca', m);
        getUrlVeiculosList();
        getModelos();
      }}
      nameLabel="Brand"
      options={mapBrandsToOptions(brands)}
      isLoading={disabled}
      renderAllOptions={false}
      placeholder="Selecione a brand"
    />
  );
};

SelectMarcaVeiculosCadastro.propTypes = {
  marca: PropTypes.string,
  updateVeiculoProperty: PropTypes.func,
  brands: PropTypes.array,
  getUrlVeiculosList: PropTypes.func,
  getModelos: PropTypes.func,
  id: PropTypes.any,
};

SelectMarcaVeiculosCadastro.defaultProps = {
  marca: null,
  updateVeiculoProperty: () => {},
  brands: null,
  getUrlVeiculosList: () => {},
  getModelos: () => {},
  id: null,

};

export default SelectMarcaVeiculosCadastro;
