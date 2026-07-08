import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DateSelector from 'common/controls/dateSelector/dateSelector';

const PeriodoFilter = ({
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
      dataCy="periodo-alerta"
      title="Período"
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      numberOfMonths={2}
      ref={dateAprovRef}
    />
  );
};

PeriodoFilter.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  cleaned: PropTypes.bool,
};

PeriodoFilter.defaultProps = {
  startDate: null,
  endDate: null,
  setStartDate: () => {},
  setEndDate: () => {},
  cleaned: false,
};

export default PeriodoFilter;
