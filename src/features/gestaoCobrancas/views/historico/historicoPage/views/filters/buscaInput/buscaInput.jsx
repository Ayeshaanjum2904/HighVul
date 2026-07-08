import React from 'react';
import PropTypes from 'prop-types';
import TextFilterDebounce from 'common/controls/textFilterDebounce';

const BuscaInput = ({
  busca, setTexto, isLoading,
}) => (
  <TextFilterDebounce
    label="Grupo"
    placeholder="Buscar email ou grupo"
    value={busca}
    setValue={setTexto}
    disabled={isLoading}
    showSearchIcon
  />
);

BuscaInput.propTypes = {
  busca: PropTypes.string,
  setTexto: PropTypes.func,
  isLoading: PropTypes.bool,
};

BuscaInput.defaultProps = {
  busca: '',
  setTexto: () => {},
  isLoading: false,
};

export default BuscaInput;
