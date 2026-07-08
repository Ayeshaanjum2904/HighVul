import React from 'react';
import PropTypes from 'prop-types';
import { Mixpanel, trackedProperties } from 'modules';
import SingleDatePicker from 'common/controls/datePickerDialog';
import X from 'assets/icons/x';

import './selectData.scss';

const SelectData = ({
  data, setData, isLoading,
}) => (
  <div className="historico__select-data__date-picker">
    <SingleDatePicker
      title="Data"
      onChange={(date) => {
        setData(date);
        Mixpanel.trackPageFilter(trackedProperties.historicoPage, 'date');
      }}
      disabled={isLoading}
      date={data}
      isOutsideRange={() => false}
    />
    <div className="historico__select-data__xicon">
      {data === null || isLoading ? (null) : (<X style={{ color: '#8f9bb3', cursor: 'pointer' }} onClick={() => { setData(null); }} />)}
    </div>
  </div>
);

SelectData.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  isLoading: PropTypes.bool,
};

SelectData.defaultProps = {
  data: null,
  setData: () => {},
  isLoading: false,
};

export default SelectData;
