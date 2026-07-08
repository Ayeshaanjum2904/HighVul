import React from 'react';
import PropTypes from 'prop-types';

import SingleDatePicker from 'common/controls/datePickerDialog';
import { Mixpanel, trackedProperties } from 'modules';

import './selectDataInicio.scss';

const SelectDataInicio = ({
  data, setData, isError,
}) => (
  <div className="descontos-detail__form__select__date-inicio">
    <SingleDatePicker
      title="Início de vigência"
      onChange={(date) => {
        setData(date);
        Mixpanel.trackPageFilter(trackedProperties.descontosPage, 'date begin');
      }}
      date={data}
      isOutsideRange={() => false}
      isError={isError}
      errorMessage="Data de início deve ser anterior a data de fim"
    />
  </div>
);

SelectDataInicio.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  isError: PropTypes.bool,
};

SelectDataInicio.defaultProps = {
  data: null,
  setData: () => {},
  isError: false,
};

export default SelectDataInicio;
