import React from 'react';
import PropTypes from 'prop-types';

import DateRangePicker from 'common/controls/dateRangePickerDialog';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '256px',
    '& .DateInput_fang': {
      bottom: '60px !important',
    },
    '& .DateRangePicker_picker': {
      marginBottom: '21px',
    },
    '& .DateInput__small': {
      width: '107px',
    },
    '& .DateRangePickerInput_calendarIcon': {
      padding: '10px 0',
    },
  },
});

const SelectPeriodo = ({
  startDate, endDate, setStartDate, setEndDate,
}) => {
  const classes = useStyles();
  return (
    <DateRangePicker
      className={classes.container}
      title="Selecione um período"
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      numberOfMonths={2}
      isOutsideRange
      openDirection="up"
    />

  );
};

SelectPeriodo.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
};

SelectPeriodo.defaultProps = {
  setEndDate: () => {},
  setStartDate: PropTypes.func,
  startDate: null,
  endDate: null,
};

export default SelectPeriodo;
