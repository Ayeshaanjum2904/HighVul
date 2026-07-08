import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import DateSelector from 'common/controls/dateSelector/dateSelector';

const DateFilterVenc = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  cleaned,
}) => {
  const dateVencRef = useRef(null);

  useEffect(() => {
    if (dateVencRef.current && cleaned) {
      dateVencRef.current.resetDate();
    }
  }, [cleaned]);

  return (
    <DateSelector
      dataCy="data-vencimento"
      title="Data de vencimento"
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      numberOfMonths={2}
      ref={dateVencRef}
    />
  );
};

DateFilterVenc.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  cleaned: PropTypes.bool,
};

DateFilterVenc.defaultProps = {
  startDate: null,
  endDate: null,
  setStartDate: () => {},
  setEndDate: () => {},
  cleaned: false,
};

export default DateFilterVenc;
