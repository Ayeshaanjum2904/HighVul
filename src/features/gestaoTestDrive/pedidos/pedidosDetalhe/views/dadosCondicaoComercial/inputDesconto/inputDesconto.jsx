import React from 'react';
import PropTypes from 'prop-types';

import FormatNumber from 'common/controls/input/formInput/';
import { status as pedidoStatus } from '../../../../status';

const InputDesconto = ({
  descontoAVista, descontoFinanciado, isAVista,
  isCondicaoNegociada, percentualDesconto, status, onChange,
}) => {
  let value;
  if (isAVista) {
    value = descontoAVista?.toString();
  } else if (isCondicaoNegociada) {
    value = percentualDesconto?.toString();
  } else {
    value = descontoFinanciado?.toString();
  }

  const isDisabled = !(
    isCondicaoNegociada
    && [pedidoStatus.analiseCreditoReprovada, pedidoStatus.financiamentoReversao].includes(status)
  );

  return (
    <FormatNumber
      type="percent"
      label="Desconto"
      value={value}
      disabled={isDisabled}
      setValue={onChange}
    />
  );
};

InputDesconto.propTypes = {
  descontoAVista: PropTypes.any,
  descontoFinanciado: PropTypes.any,
  isAVista: PropTypes.bool.isRequired,
  isCondicaoNegociada: PropTypes.bool,
  percentualDesconto: PropTypes.any,
  status: PropTypes.string,
  onChange: PropTypes.func,
};

InputDesconto.defaultProps = {
  descontoAVista: null,
  descontoFinanciado: null,
  isCondicaoNegociada: false,
  percentualDesconto: null,
  status: null,
  onChange: () => {},
};

export default InputDesconto;
