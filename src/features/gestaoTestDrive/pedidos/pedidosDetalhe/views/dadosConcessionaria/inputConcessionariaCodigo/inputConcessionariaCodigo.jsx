import React from 'react';
import PropTypes from 'prop-types';

import { formatCodigoConcessionaria } from 'utils/format';
import FormatNumber from 'common/controls/input/formInput/';

const InputConcessionariaCodigo = ({
  corretorId,
}) => (
  <FormatNumber
    type="number"
    label="Cód. BUC"
    value={corretorId}
    format={formatCodigoConcessionaria}
    disabled
  />
);

InputConcessionariaCodigo.propTypes = {
  corretorId: PropTypes.number,
};

InputConcessionariaCodigo.defaultProps = {
  corretorId: '',
};

export default InputConcessionariaCodigo;
