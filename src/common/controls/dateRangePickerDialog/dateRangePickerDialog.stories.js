/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import DateRangePicker from './dateRangePickerDialog';

storiesOf('common/controls/dateRangePicker', module)
  .add('dateRangePicker', () => (<DateRangePickerStorie />));

const DateRangePickerStorie = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setendDate}
      numberOfMonths={2}
    />
  );
};
