import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';

const InputSerie = ({
  serie,
}) => (
  <FormatNumber
    type="text"
    label="Cód. Série"
    value={serie}
    disabled
  />
);

InputSerie.propTypes = {
  serie: PropTypes.any,
};

InputSerie.defaultProps = {
  serie: '',

};

export default InputSerie;
