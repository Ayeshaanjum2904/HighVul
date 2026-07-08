import React from 'react';
import PropTypes from 'prop-types';
import TextFilterDebounce from 'common/controls/textFilterDebounce';

const InputOrdem = ({
  ordem, setOrdem,
}) => (
  <TextFilterDebounce
    id="ordem"
    value={ordem || ''}
    setValue={setOrdem}
    placeholder="Buscar por uma ordem"
    label="Ordem"
    showSearchIcon
  />
);

InputOrdem.propTypes = {
  ordem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setOrdem: PropTypes.func.isRequired,
};

InputOrdem.defaultProps = {
  ordem: '',
};

export default InputOrdem;
