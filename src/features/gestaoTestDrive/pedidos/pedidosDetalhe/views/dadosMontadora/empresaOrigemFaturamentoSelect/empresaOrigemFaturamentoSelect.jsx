import React from 'react';
import PropTypes from 'prop-types';

import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const EmpresaOrigemFaturamentoSelect = ({
  empresaOrigemFaturamento,
  updateDetalheProperty,
  camposEditaveis,
  options,
}) => {
  const disabled = Array.isArray(camposEditaveis)
    ? !camposEditaveis.includes('DetalhesPedido')
    : false;
  const selectedOption = empresaOrigemFaturamento || '_default';

  const handleSelect = (value) => {
    updateDetalheProperty('empresaOrigemFaturamento', value);
  };

  return (
    <NewBasicSelect
      selectedOption={selectedOption}
      setOption={handleSelect}
      options={options}
      nameLabel="Empresa Origem Faturamento"
      isLoading={disabled}
      hideArrow={disabled}
      renderAllOptions={false}
      placeholder="Selecione a empresa"
    />
  );
};

EmpresaOrigemFaturamentoSelect.propTypes = {
  empresaOrigemFaturamento: PropTypes.any,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.array,
};

EmpresaOrigemFaturamentoSelect.defaultProps = {
  empresaOrigemFaturamento: '',
  updateDetalheProperty: () => {},
  camposEditaveis: [],
  options: [],
};

export default EmpresaOrigemFaturamentoSelect;
