import React from 'react';
import PropTypes from 'prop-types';

import InputAlfanumerico from 'common/controls/inputAlfanumerico';

const CodigoConcessionariaComissaoInput = ({
  codigoConcessionariaComissao,
  updateDetalheProperty,
  camposEditaveis,
}) => {
  const disabled = !camposEditaveis?.includes('DetalhesPedido');

  const handleChange = (value) => {
    updateDetalheProperty('codigoConcessionariaComissao', value);
  };

  return (
    <InputAlfanumerico
      label="Código Concessionária Comissão"
      labelFontSize="11px"
      labelColor="#595669"
      value={codigoConcessionariaComissao}
      onChange={handleChange}
      disabled={disabled}
      maxLength={10}
      errorMessage="Máximo de 10 dígitos"
      type="tel"
      inputMode="numeric"
    />
  );
};

CodigoConcessionariaComissaoInput.propTypes = {
  codigoConcessionariaComissao: PropTypes.string,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

CodigoConcessionariaComissaoInput.defaultProps = {
  codigoConcessionariaComissao: '',
  updateDetalheProperty: () => {},
  camposEditaveis: [],
};

export default CodigoConcessionariaComissaoInput;
