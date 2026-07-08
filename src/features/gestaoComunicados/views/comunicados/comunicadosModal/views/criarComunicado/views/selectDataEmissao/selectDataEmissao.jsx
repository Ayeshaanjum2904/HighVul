import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { isInclusivelyBeforeDay } from 'react-dates';

import SingleDatePicker from 'common/controls/datePickerDialog';

import { Mixpanel, trackedProperties } from 'modules';

import './selectDataEmissao.scss';

const SelectDataEmissao = ({
  dataEmissao, setDataEmissao,
}) => (
  <div className="comunicados__modal__select-data-emissao">
    <SingleDatePicker
      title="Data de divulgação*:"
      onChange={(date) => {
        setDataEmissao(date);
        Mixpanel.trackPageFilter(trackedProperties.comunicadosPage, 'dataEmissao');
      }}
      date={dataEmissao}
      isOutsideRange={(day) => !isInclusivelyBeforeDay(day, moment())}
    />
  </div>
);

SelectDataEmissao.propTypes = {
  dataEmissao: PropTypes.object,
  setDataEmissao: PropTypes.func,
};

SelectDataEmissao.defaultProps = {
  dataEmissao: null,
  setDataEmissao: () => {},
};

export default SelectDataEmissao;
