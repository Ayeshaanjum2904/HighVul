import React from 'react';
import PropTypes from 'prop-types';

import TextFilterDebounce from 'common/controls/textFilterDebounce';

const TextFilter = ({
  texto, setTexto, isLoading,
}) => (
  <TextFilterDebounce
    label="Concessionária/Solicitação"
    placeholder="Buscar concessionária ou tipo de solicitação"
    value={texto}
    setValue={setTexto}
    disabled={isLoading}
    showSearchIcon
    showTooltip
    tooltipProps={{
      maxWidth: '300px', placement: 'bottom-start',
    }}
  />
);

TextFilter.propTypes = {
  texto: PropTypes.string,
  setTexto: PropTypes.func,
  isLoading: PropTypes.func,
};

TextFilter.defaultProps = {
  texto: '',
  setTexto: () => {},
  isLoading: false,
};

export default TextFilter;
