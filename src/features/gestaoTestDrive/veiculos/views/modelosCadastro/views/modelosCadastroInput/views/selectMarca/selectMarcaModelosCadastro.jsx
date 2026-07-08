import React from 'react';
import PropTypes from 'prop-types';

import { camelFormat } from 'utils/format';
import FormInput from 'common/controls/input/formInput';

const SelectMarcaModelosCadastro = ({
  marca, updateModeloProperty, brands,
}) => {
  const formatMarca = camelFormat(marca) || null;
  return (
    <FormInput
      type="select"
      placeholder="Selecione a brand"
      label="Brand"
      items={brands || []}
      value={formatMarca}
      setValue={(m) => {
        updateModeloProperty('marca', m);
      }}
    />
  );
};

SelectMarcaModelosCadastro.propTypes = {
  marca: PropTypes.string,
  updateModeloProperty: PropTypes.func,
  brands: PropTypes.array,

};

SelectMarcaModelosCadastro.defaultProps = {
  marca: null,
  updateModeloProperty: () => {},
  brands: null,
};

export default SelectMarcaModelosCadastro;
