import React from 'react';
import PropTypes from 'prop-types';
import InputAlfanumerico from 'common/controls/inputAlfanumerico';

const InputRevestimento = ({
  revestimento, updateDetalheProperty, camposEditaveis,
}) => {
  const canEdit = camposEditaveis?.includes('DetalhesVeiculo')
    || camposEditaveis?.includes('DetalhesPedido');
  const disabled = !canEdit;

  const handleChange = (value) => {
    updateDetalheProperty('revestimento', value);
  };

  return (
    <InputAlfanumerico
      label="Revestimento"
      labelFontSize="11px"
      labelColor="#595669"
      value={revestimento}
      onChange={handleChange}
      disabled={disabled}
      maxLength={10}
      errorMessage="Máximo de 10 caracteres"
    />
  );
};

InputRevestimento.propTypes = {
  revestimento: PropTypes.string,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputRevestimento.defaultProps = {
  revestimento: '',
  updateDetalheProperty: () => {},
  camposEditaveis: null,
};

export default InputRevestimento;
