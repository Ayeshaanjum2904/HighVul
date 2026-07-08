import React from 'react';
import PropTypes from 'prop-types';

import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';

const CodigoRegionalSelect = ({
  codigoRegional,
  updateDetalheProperty,
  camposEditaveis,
  options,
}) => {
  const isCampoBloqueado = Array.isArray(camposEditaveis)
    ? !camposEditaveis.includes('DetalhesPedido')
    : false;
  const selectedValue = codigoRegional ?? '';
  const hasSelectedValue = `${selectedValue}`.trim() !== '';

  const hasSelectedInOptions = options.some((item) => (`${item?.value}` === `${selectedValue}`));

  const optionsWithSelected = hasSelectedValue && !hasSelectedInOptions
    ? [...options, { value: selectedValue, label: `${selectedValue}` }]
    : options;

  return (
    <NewBasicSelect
      selectedOption={hasSelectedValue ? selectedValue : '_default'}
      setOption={(value) => updateDetalheProperty('codigoRegional', value)}
      options={optionsWithSelected}
      nameLabel="Código Regional"
      isLoading={isCampoBloqueado}
      hideArrow={isCampoBloqueado}
      renderAllOptions={false}
      placeholder="Selecione o código regional"
    />
  );
};

CodigoRegionalSelect.propTypes = {
  codigoRegional: PropTypes.any,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.array,
};

CodigoRegionalSelect.defaultProps = {
  codigoRegional: '',
  updateDetalheProperty: () => {},
  camposEditaveis: [],
  options: [],
};

export default CodigoRegionalSelect;
