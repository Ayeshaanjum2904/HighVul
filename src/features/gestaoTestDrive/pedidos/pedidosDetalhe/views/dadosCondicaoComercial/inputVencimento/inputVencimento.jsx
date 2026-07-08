import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputVencimento = ({
  vencimento, updateCondicaoProperty, camposEditaveis, negociada,
}) => (
  <FormatNumber
    type="number"
    label="Prazo"
    value={vencimento?.toString()}
    setValue={(value) => { updateCondicaoProperty('vencimento', value); }}
    disabled={!((camposEditaveis.includes('CondicaoVeiculoId')) && negociada)}
  />
);

InputVencimento.propTypes = {
  vencimento: PropTypes.any,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  updateCondicaoProperty: PropTypes.func,
  negociada: PropTypes.bool,
};

InputVencimento.defaultProps = {
  updateCondicaoProperty: () => {},
  vencimento: null,
  camposEditaveis: null,
  negociada: false,
};

export default InputVencimento;
