import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const InputBusca = ({
  texto, setTexto, isLoading,
}) => (
  <div
    className="pedidos__input-busca__container"
  >
    <TextFilterDebounce
      label=""
      placeholder="Buscar por ordem ou pedido"
      value={texto}
      setValue={setTexto}
      disabled={isLoading}
      showSearchIcon
      showTooltip
      tooltipProps={{ maxWidth: '400px', placement: 'bottom' }}
    />
  </div>
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
