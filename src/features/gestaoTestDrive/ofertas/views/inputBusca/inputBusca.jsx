import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const InputBusca = ({
  texto, setTexto, isLoading,
}) => (
  <TextFilterDebounce
    label=""
    placeholder="Buscar veículo por descrição ou código MVS"
    value={texto}
    setValue={setTexto}
    showSearchIcon
    showTooltip
    tooltipProps={{
      maxWidth: '300px', placement: 'bottom-start',
    }}
    disabled={isLoading}
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
