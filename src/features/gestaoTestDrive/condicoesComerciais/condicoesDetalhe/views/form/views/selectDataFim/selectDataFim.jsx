import React from 'react';
import PropTypes from 'prop-types';

import SingleDatePicker from 'common/controls/datePickerDialog';
import { Mixpanel, trackedProperties } from 'modules';

import './selectDataFim.scss';

const SelectDataFim = ({
  data, setData,
}) => (
  <div
    className="condicoes-detail__form__select__date-fim"
    data-cy="SelectFimVigencia"
  >
    <SingleDatePicker
      title="Fim de vigência"
      onChange={(date) => {
        setData(date);
        Mixpanel.trackPageFilter(trackedProperties.condicoesPage, 'date end');
      }}
      date={data}
      isOutsideRange={() => false}
    />
  </div>
);

SelectDataFim.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
};

SelectDataFim.defaultProps = {
  data: null,
  setData: () => {},
};

export default SelectDataFim;
