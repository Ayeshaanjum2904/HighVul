import React from 'react';
import PropTypes from 'prop-types';
import InputAlfanumerico from 'common/controls/inputAlfanumerico';

const InputCorExterna = ({
  corExterna, updateDetalheProperty, camposEditaveis,
}) => {
  const canEdit = camposEditaveis?.includes('DetalhesVeiculo')
    || camposEditaveis?.includes('DetalhesPedido');
  const disabled = !canEdit;

  const handleChange = (value) => {
    updateDetalheProperty('corExterna', value);
  };

  return (
    <InputAlfanumerico
      label="Cor Externa"
      labelFontSize="11px"
      labelColor="#595669"
      value={corExterna}
      onChange={handleChange}
      disabled={disabled}
      maxLength={10}
      errorMessage="Máximo de 10 caracteres"
    />
  );
};

InputCorExterna.propTypes = {
  corExterna: PropTypes.string,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputCorExterna.defaultProps = {
  corExterna: '',
  updateDetalheProperty: () => { },
  camposEditaveis: null,
};

export default InputCorExterna;
