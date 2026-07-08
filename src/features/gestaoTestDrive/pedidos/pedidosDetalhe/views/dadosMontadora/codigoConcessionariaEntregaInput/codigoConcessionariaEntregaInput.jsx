import React from 'react';
import PropTypes from 'prop-types';

import InputAlfanumerico from 'common/controls/inputAlfanumerico';

const CodigoConcessionariaEntregaInput = ({
  codigoConcessionariaEntrega,
  updateDetalheProperty,
  camposEditaveis,
}) => {
  const disabled = !camposEditaveis?.includes('DetalhesPedido');

  const handleChange = (value) => {
    updateDetalheProperty('codigoConcessionariaEntrega', value);
  };

  return (
    <InputAlfanumerico
      label="Código Concessionária Entrega"
      labelFontSize="11px"
      labelColor="#595669"
      value={codigoConcessionariaEntrega}
      onChange={handleChange}
      disabled={disabled}
      maxLength={10}
      errorMessage="Máximo de 10 dígitos"
      type="tel"
      inputMode="numeric"
    />
  );
};

CodigoConcessionariaEntregaInput.propTypes = {
  codigoConcessionariaEntrega: PropTypes.string,
  updateDetalheProperty: PropTypes.func,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
};

CodigoConcessionariaEntregaInput.defaultProps = {
  codigoConcessionariaEntrega: '',
  updateDetalheProperty: () => {},
  camposEditaveis: [],
};

export default CodigoConcessionariaEntregaInput;
