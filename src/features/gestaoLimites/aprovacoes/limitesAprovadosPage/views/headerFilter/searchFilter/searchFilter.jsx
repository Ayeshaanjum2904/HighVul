import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const SearchFilter = ({
  texto, setTexto,
}) => (
  <div className="pedidos__input-busca__container">
    <TextFilterDebounce
      label="ID Aprovação"
      placeholder="Buscar ID aprovação"
      value={texto}
      setValue={setTexto}
      showSearchIcon
      showTooltip
    />
  </div>
);

SearchFilter.propTypes = {
  texto: PropTypes.string,
  setTexto: PropTypes.func,
};

SearchFilter.defaultProps = {
  texto: '',
  setTexto: () => {},
};

export default SearchFilter;
