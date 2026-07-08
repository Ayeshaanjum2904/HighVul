import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputTaxa = ({
  taxa, updateCondicaoProperty, camposEditaveis, negociada,
}) => (
  <FormatNumber
    type="percent"
    label="Taxa (a.m.)"
    value={taxa?.toString()}
    setValue={(value) => {
      updateCondicaoProperty('taxa', value);
    }}
    disabled={!((camposEditaveis.includes('CondicaoVeiculoId')) && negociada)}
  />
);

InputTaxa.propTypes = {
  taxa: PropTypes.any,
  camposEditaveis: PropTypes.arrayOf(PropTypes.string),
  updateCondicaoProperty: PropTypes.func,
  negociada: PropTypes.bool,
};

InputTaxa.defaultProps = {
  updateCondicaoProperty: () => {},
  taxa: null,
  camposEditaveis: null,
  negociada: false,
};

export default InputTaxa;
