import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import DateSelector from 'common/controls/dateSelector/dateSelector';

const DateFilterAprov = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  cleaned,
}) => {
  const dateAprovRef = useRef(null);

  useEffect(() => {
    if (dateAprovRef.current && cleaned) {
      dateAprovRef.current.resetDate();
    }
  }, [cleaned]);

  return (
    <DateSelector
      dataCy="data-aprovacao"
      title="Data de Aprovação"
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      numberOfMonths={2}
      ref={dateAprovRef}
    />
  );
};

DateFilterAprov.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  cleaned: PropTypes.bool,
};

DateFilterAprov.defaultProps = {
  startDate: null,
  endDate: null,
  setStartDate: () => {},
  setEndDate: () => {},
  cleaned: false,
};

export default DateFilterAprov;
