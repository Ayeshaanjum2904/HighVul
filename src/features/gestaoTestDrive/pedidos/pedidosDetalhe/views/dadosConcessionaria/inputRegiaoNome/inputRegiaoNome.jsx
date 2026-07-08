import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputRegiaoNome = ({
  regiaoNome,
}) => (
  <FormatNumber
    type="text"
    label="Regional"
    value={regiaoNome}
    disabled
  />
);

InputRegiaoNome.propTypes = {
  regiaoNome: PropTypes.string,
};

InputRegiaoNome.defaultProps = {
  regiaoNome: '',
};

export default InputRegiaoNome;
