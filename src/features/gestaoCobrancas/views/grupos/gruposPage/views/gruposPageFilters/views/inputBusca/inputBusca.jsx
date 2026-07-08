import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const InputBusca = ({
  texto, setTexto, isLoading,
}) => (
  <TextFilterDebounce
    label="Grupo"
    placeholder="Buscar grupo"
    value={texto}
    setValue={setTexto}
    disabled={isLoading}
    showSearchIcon
  />
);

InputBusca.propTypes = {
  texto: PropTypes.string,
  setTexto: PropTypes.func,
  isLoading: PropTypes.bool,

};

InputBusca.defaultProps = {
  texto: '',
  setTexto: () => {},
  isLoading: false,

};

export default InputBusca;
