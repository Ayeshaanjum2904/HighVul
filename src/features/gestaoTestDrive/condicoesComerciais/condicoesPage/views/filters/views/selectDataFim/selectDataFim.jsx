import React from 'react';
import PropTypes from 'prop-types';

import SingleDatePicker from 'common/controls/datePickerDialog';
import X from 'assets/icons/x';
import { Mixpanel, trackedProperties } from 'modules';

import './selectDataFim.scss';

const SelectDataFim = ({
  data, setData, isLoading,
}) => (
  <div
    className="condicoes-page__filters__select__date-fim"
    data-cy="select_date-fim"
  >
    <SingleDatePicker
      title="Fim de vigência"
      onChange={(date) => {
        setData(date);
        Mixpanel.trackPageFilter(trackedProperties.condicoesPage, 'date end');
      }}
      date={data}
      isOutsideRange={() => false}
      disabled={isLoading}
    />
    <div className="descontos-page__filters__select__date-fim__xicon">
      {data === null || isLoading ? (null) : (
        <X
          style={{ color: '#8f9bb3', cursor: 'pointer' }}
          onClick={() => { setData(null); }}
        />
      )}
    </div>
  </div>
);

SelectDataFim.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectDataFim.defaultProps = {
  data: null,
  setData: () => {},
  isLoading: false,
};

export default SelectDataFim;
