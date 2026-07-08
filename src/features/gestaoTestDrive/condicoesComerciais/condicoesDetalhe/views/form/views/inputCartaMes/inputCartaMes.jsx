import React from 'react';
import PropTypes from 'prop-types';
import TextFilterDebounce from 'common/controls/textFilterDebounce/textFilterDebounce';

const InputCartaMes = ({
  cartaMes, setCartaMes,
}) => (
  <TextFilterDebounce
    dataCy="CartaMes"
    label="Nº da carta do mês"
    placeholder="Digite o número da carta do mês"
    value={cartaMes}
    setValue={setCartaMes}
    showIcon={false}
  />
);

InputCartaMes.propTypes = {
  cartaMes: PropTypes.string,
  setCartaMes: PropTypes.func,
};

InputCartaMes.defaultProps = {
  cartaMes: '',
  setCartaMes: () => {},
};

export default InputCartaMes;
