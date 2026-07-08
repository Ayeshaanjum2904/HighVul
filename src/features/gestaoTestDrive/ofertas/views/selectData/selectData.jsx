import React from 'react';
import PropTypes from 'prop-types';

import SingleDatePicker from 'common/controls/datePickerDialog';
import X from 'assets/icons/x';

import './selectData.scss';
import { Mixpanel, trackedProperties } from 'modules';

const SelectData = ({
  data, setData, isLoading,
}) => (
  <div className="ofertas-select-data__date-picker">
    <SingleDatePicker
      title="Data"
      onChange={(d) => {
        Mixpanel.trackPageFilter(trackedProperties.ofertasPage, 'date');
        setData(d);
      }}
      disabled={isLoading}
      date={data}
      isOutsideRange={() => false}
    />
    <div className="ofertas-select-data__xicon">
      {data === null || isLoading
        ? (null)
        : (<X style={{ color: '#8f9bb3', cursor: 'pointer' }} onClick={() => setData(null)} />)}
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
  isLoading: false,
  setData: () => {},
};

export default SelectData;
