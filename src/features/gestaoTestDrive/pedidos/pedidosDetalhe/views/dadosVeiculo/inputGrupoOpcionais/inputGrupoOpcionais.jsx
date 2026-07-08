import React from 'react';
import PropTypes from 'prop-types';
import InputAlfanumerico from 'common/controls/inputAlfanumerico';

const InputGrupoOpcionais = ({
  grupoOpcionais, updateDetalheProperty, camposEditaveis,
}) => {
  const disabled = !camposEditaveis?.includes('DetalhesVeiculo');

  const handleChange = (value) => {
    updateDetalheProperty('grupoOpcionais', value);
  };

  return (
    <InputAlfanumerico
      label="Grupo de Opcionais"
      labelFontSize="11px"
      labelColor="#595669"
      value={grupoOpcionais}
      onChange={handleChange}
      disabled={disabled}
      maxLength={10}
      errorMessage="Máximo de 10 caracteres"
    />
  );
};

InputGrupoOpcionais.propTypes = {
  grupoOpcionais: PropTypes.string,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

InputGrupoOpcionais.defaultProps = {
  grupoOpcionais: '',
  updateDetalheProperty: () => {},
  camposEditaveis: null,
};

export default InputGrupoOpcionais;
