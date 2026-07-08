import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputParcelas = ({
  parcelas, updateCondicaoProperty, camposEditaveis, negociada,
}) => (
  <FormatNumber
    type="number"
    label="Parcelas"
    value={parcelas?.toString()}
    setValue={(value) => { updateCondicaoProperty('parcelas', value); }}
    disabled={!((camposEditaveis.includes('CondicaoVeiculoId')) && negociada)}
  />
);

InputParcelas.propTypes = {
  parcelas: PropTypes.any,
  negociada: PropTypes.bool,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  updateCondicaoProperty: PropTypes.func,
};

InputParcelas.defaultProps = {
  updateCondicaoProperty: () => {},
  parcelas: null,
  camposEditaveis: null,
  negociada: false,
};

export default InputParcelas;
