import React from 'react';
import PropTypes from 'prop-types';

import SingleDatePicker from 'common/controls/datePickerDialog';
import X from 'assets/icons/x';
import { Mixpanel, trackedProperties } from 'modules';

import './selectDataInicio.scss';

const SelectDataInicio = ({
  data, setData, isLoading,
}) => (
  <div
    className="condicoes-page__filters__select__date-inicio"
    data-cy="select_date-inicio"
  >
    <SingleDatePicker
      title="Início de vigência"
      onChange={(date) => {
        setData(date);
        Mixpanel.trackPageFilter(trackedProperties.condicoesPage, 'date begin');
      }}
      date={data}
      isOutsideRange={() => false}
      disabled={isLoading}
    />
    <div className="condicoes-page__filters__select__date-inicio__xicon">
      {data === null || isLoading
        ? (null)
        : (<X style={{ color: '#8f9bb3', cursor: 'pointer' }} onClick={() => { setData(null); }} />)}
    </div>
  </div>
);

SelectDataInicio.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectDataInicio.defaultProps = {
  data: null,
  setData: () => {},
  isLoading: false,
};

export default SelectDataInicio;
