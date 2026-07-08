import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const InputBusca = ({
  texto, setTextoContato, isLoading,
}) => (
  <TextFilterDebounce
    label="Contato"
    placeholder="Buscar contato"
    value={texto}
    setValue={setTextoContato}
    showSearchIcon
    disabled={isLoading}
  />
);

InputBusca.propTypes = {
  texto: PropTypes.string,
  setTextoContato: PropTypes.func,
  isLoading: PropTypes.bool,
};

InputBusca.defaultProps = {
  texto: '',
  setTextoContato: () => {},
  isLoading: false,
};

export default InputBusca;
