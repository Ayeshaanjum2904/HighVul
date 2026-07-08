import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'common/controls/input/formInput';

const InputTitulo = ({ titulo, setTitulo }) => (
  <FormInput
    type="text"
    label="Título da mensagem*"
    placeholder="Inserir título da mensagem"
    value={titulo}
    setValue={(text) => {
      setTitulo(text);
    }}
    disabled={false}
  />
);

InputTitulo.propTypes = {
  setTitulo: PropTypes.func,
  titulo: PropTypes.string,
};

InputTitulo.defaultProps = {
  setTitulo: () => {},
  titulo: null,
};

export default InputTitulo;
