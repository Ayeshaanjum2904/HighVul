import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SingleDatePicker from 'common/controls/inputSingleDatePicker';
import moment from 'moment';
import { OPEN_UP } from 'react-dates/constants';

const DatepickerPrazo = ({
  getFeriadosList, feriadosList, isDisabled, data, setData,
}) => {
  useEffect(() => {
    if (feriadosList.length === 0) getFeriadosList();
  }, []);

  const isOutsideRange = () => {
    const today = moment().startOf('day');

    const isDiaUtil = (date) => {
      const day = date.day();
      const isWeekend = day === 0 || day === 6;
      const dateString = date.format('YYYY-MM-DD');
      const isFeriado = feriadosList?.feriados?.some((feriado) => feriado?.data === dateString);
      return !isWeekend && !isFeriado;
    };

    const minDate = today.clone().add(1, 'days');
    let businessDaysCount = 0;

    while (businessDaysCount < 7) {
      if (isDiaUtil(minDate)) {
        businessDaysCount += 1;
      }
      if (businessDaysCount < 7) {
        minDate.add(1, 'days');
      }
    }

    return (date) => date.isBefore(today, 'day')
      || date.isBefore(minDate, 'day')
      || !isDiaUtil(date);
  };

  return (
    <SingleDatePicker
      width="100%"
      title="Prazo de reversão"
      placeholder="dd/mm/aaaa"
      disabled={isDisabled || !feriadosList}
      isOutsideRange={isOutsideRange()}
      appendToBody
      openDirection={OPEN_UP}
      onDateChange={setData}
      date={data}
      readOnly
    />
  );
};

DatepickerPrazo.propTypes = {
  getFeriadosList: PropTypes.func.isRequired,
  feriadosList: PropTypes.object,
  isDisabled: PropTypes.bool,
  data: PropTypes.object,
  setData: PropTypes.func,

};

DatepickerPrazo.defaultProps = {
  feriadosList: [],
  isDisabled: false,
  setData: () => { },
  data: null,
};

export default DatepickerPrazo;
