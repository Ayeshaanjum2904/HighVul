import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputCoeficiente = ({
  coeficiente, updateCondicaoProperty, camposEditaveis, negociada,
}) => (
  <FormatNumber
    type="number"
    label="Coeficiente"
    value={coeficiente?.toString()}
    setValue={(value) => { updateCondicaoProperty('coeficiente', value); }}
    // TODO: criar um arquivo de constantes para os nomes dos campos
    disabled={!(camposEditaveis.includes('CondicaoVeiculoId') && negociada)}
  />
);

InputCoeficiente.propTypes = {
  coeficiente: PropTypes.any,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  updateCondicaoProperty: PropTypes.func,
  negociada: PropTypes.bool,
};

InputCoeficiente.defaultProps = {
  updateCondicaoProperty: () => {},
  coeficiente: null,
  camposEditaveis: null,
  negociada: false,
};

export default InputCoeficiente;
