import React from 'react';
import PropTypes from 'prop-types';

import SingleDatePicker from 'common/controls/datePickerDialog';
import X from 'assets/icons/x';

import { Mixpanel, trackedProperties } from 'modules';

import './selectDataFaturamento.scss';

const SelectDataFaturamento = ({
  dataFaturamento, setDataFaturamento, isLoading,
}) => (
  <div className="pedidos__select-data__date-picker">
    <SingleDatePicker
      key={dataFaturamento === null ? 'empty' : 'filled'}
      title="Data de Faturamento"
      onChange={(date) => {
        setDataFaturamento(date);
        Mixpanel.trackPageFilter(trackedProperties.pedidosPage, 'dataFaturamento');
      }}
      date={dataFaturamento}
      isOutsideRange={() => false}
      disabled={isLoading}
    />
    <div className="pedidos__select-data__xicon">
      {dataFaturamento === null || isLoading
        ? (null)
        : (<X style={{ color: '#8f9bb3', cursor: 'pointer' }} onClick={() => setDataFaturamento(null)} />)}
    </div>
  </div>
);

SelectDataFaturamento.propTypes = {
  dataFaturamento: PropTypes.object,
  setDataFaturamento: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectDataFaturamento.defaultProps = {
  dataFaturamento: null,
  setDataFaturamento: () => {},
  isLoading: false,
};

export default SelectDataFaturamento;
