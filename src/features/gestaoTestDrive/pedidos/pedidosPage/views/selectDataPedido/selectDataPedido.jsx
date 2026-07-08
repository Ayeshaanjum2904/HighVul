import React from 'react';
import PropTypes from 'prop-types';

import DateSelector from 'common/controls/dateSelector/dateSelector';

import { Mixpanel, trackedProperties } from 'modules';

const SelectDataPedido = ({
  dataInicioPedido, dataFimPedido, setDataInicioPedido, setDataFimPedido, isLoading,
  setInvalidDate,
}) => (
  <DateSelector
    dataCy="data-pedido"
    title="Data do pedido"
    initialStartDate={dataInicioPedido}
    initialEndDate={dataFimPedido}
    startDate={dataInicioPedido}
    setStartDate={(date) => {
      setDataInicioPedido(date);
      Mixpanel.trackPageFilter(trackedProperties.pedidosPage, 'dataInicioPedido');
    }}
    endDate={dataFimPedido}
    setEndDate={(date) => {
      setDataFimPedido(date);
      Mixpanel.trackPageFilter(trackedProperties.pedidosPage, 'dataFimPedido');
    }}
    numberOfMonths={1}
    disabled={isLoading}
    minimumNights={0}
    shouldBeNull={dataInicioPedido === null && dataFimPedido === null}
    setInvalidDate={setInvalidDate}
  />
);

SelectDataPedido.propTypes = {
  dataInicioPedido: PropTypes.any,
  dataFimPedido: PropTypes.any,
  setDataInicioPedido: PropTypes.func,
  setDataFimPedido: PropTypes.func,
  isLoading: PropTypes.bool,
  setInvalidDate: PropTypes.func,
};

SelectDataPedido.defaultProps = {
  dataInicioPedido: null,
  dataFimPedido: null,
  setDataInicioPedido: () => { },
  setDataFimPedido: () => { },
  isLoading: false,
  setInvalidDate: () => { },
};

export default SelectDataPedido;
