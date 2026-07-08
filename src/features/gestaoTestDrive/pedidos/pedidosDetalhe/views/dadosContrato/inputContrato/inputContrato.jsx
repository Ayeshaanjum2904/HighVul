import React from 'react';
import PropTypes from 'prop-types';

import FormatInput from 'common/controls/input/formInput';
import { status } from '../../../../status';

const InputContrato = ({
  urlContrato, currentStatus,
}) => (
  <FormatInput
    type="text"
    label="Contrato do pedido"
    value={urlContrato ? 'Contrato Anexado' : null}
    disabled={currentStatus !== status.faturado && currentStatus !== status.faturadoMontadora}
  />
);

InputContrato.propTypes = {
  urlContrato: PropTypes.string,
  currentStatus: PropTypes.string,
};

InputContrato.defaultProps = {
  urlContrato: null,
  currentStatus: null,
};

export default InputContrato;
