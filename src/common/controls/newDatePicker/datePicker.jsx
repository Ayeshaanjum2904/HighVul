import React, {
  useState, useRef, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  DayPickerRangeController,
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import OutsideClickHandler from 'react-outside-click-handler';
import NewCalendarIcon from 'assets/icons/new-calendar';
import { Typography } from '@mui/material';
import colors from 'assets/styles/colors';
import DatepickerStyles from './datePicker.styles';

const renderDay = (day) => (
  <div style={{ fontWeight: 700 }}>
    <span>{day.format('D')}</span>
  </div>
);

const utilizeFocus = () => {
  const ref = useRef(null);
  const setFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return { setFocus, ref };
};

const getDateFromEvent = (date) => {
  const dateFormat = moment(date, 'DD/MM/YYYY', true);
  const isValid = dateFormat.isValid();
  return {
    isValid,
    date: isValid ? dateFormat : date,
  };
};
const Datepicker = ({
  startDate,
  endDate,
  showInputs,
  setStartDate,
  setEndDate,
  disabled,
  isOutsideRange,
  showErrorMessage,
  title,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [invalidStartDate, setInvalidStartDate] = useState(false);
  const [invalidEndDate, setInvalidEndDate] = useState(false);
  const inputFocus = utilizeFocus();

  const { isValid: isValidStartDate } = getDateFromEvent(startDate);
  const { isValid: isValidEndDate } = getDateFromEvent(endDate);

  const startDateString = useMemo(() => (isValidStartDate ? startDate?.format('DD/MM/YYYY') : startDate), [startDate]);
  const endDateString = useMemo(() => (isValidEndDate ? endDate?.format('DD/MM/YYYY') : endDate), [endDate]);

  const validateStartDate = (dateInput) => {
    const { isValid } = getDateFromEvent(dateInput);
    setInvalidStartDate(!isValid);
  };

  const validateEndDate = (dateInput) => {
    const { date, isValid } = getDateFromEvent(dateInput);
    let validator = isValid;
    if (isValid) {
      validator = moment(date).startOf('day').isBefore(moment(startDate).startOf('day'));
    }
    setInvalidEndDate(validator);
  };

  const onDatesChange = ({ startDateValue, endDateValue }) => {
    setStartDate(startDateValue);
    setEndDate(endDateValue);
    setFocusedInput(null);
  };

  const onFocusChange = (focusedInputRef) => {
    setFocusedInput(focusedInputRef);
  };

  const onStartDateChange = (event) => {
    const { date } = getDateFromEvent(event.target.value);
    setStartDate(date || '');
    setFocusedInput(date ? 'endDate' : 'startDate');
    if (date) inputFocus.setFocus();
  };

  const onEndDateChange = (event) => {
    const { date } = getDateFromEvent(event.target.value);
    setEndDate(date || '');
    setFocusedInput(null);
  };

  return (
    <DatepickerStyles
      focusedInput={focusedInput}
      invalidStartDate={invalidStartDate}
      invalidEndDate={invalidEndDate}
      aria-label="Seletor de data"
    >
      <OutsideClickHandler onOutsideClick={() => setFocusedInput(null)}>
        {showInputs && (
          <div>
            <Typography
              component="span"
              sx={{
                margin: 0,
                fontSize: '12px',
                lineHeight: '16px',
                color: invalidStartDate || invalidEndDate ? '#DE1932' : colors.secondary_color_700,
                flexGrow: 0,
                flexBasis: '50%',
                marginLeft: '12px',
              }}
            >
              {title}
            </Typography>
            <div className="inputs" aria-label="Entradas de data">
              <div className="input-left" aria-label="Entrada de data inicial">
                <input
                  onFocus={() => onFocusChange('startDate')}
                  type="text"
                  name="start date"
                  value={startDateString}
                  placeholder="dd/mm/aaaa"
                  onChange={(e) => onStartDateChange(e)}
                  onBlur={(event) => validateStartDate(event.target.value)}
                />
              </div>
              <span aria-label="Divisor das datas"> - </span>
              <div className="input-right" aria-label="Entrada de data final">
                <input
                  ref={inputFocus.ref}
                  onFocus={() => onFocusChange('endDate')}
                  type="text"
                  name="end date"
                  value={endDateString}
                  placeholder="dd/mm/aaaa"
                  onChange={(e) => onEndDateChange(e)}
                  onBlur={(event) => validateEndDate(event.target.value)}
                />
              </div>
              <button type="button" className="icon-button" onClick={() => onFocusChange('startDate')} aria-label="Botão de abrir calendário">
                <NewCalendarIcon />
              </button>
            </div>
          </div>
        )}
        {showErrorMessage && !focusedInput && (invalidStartDate || invalidEndDate) && <p className="input-error">Data inválida. Tente novamente.</p>}
        {focusedInput && (
          <div className="container-date" aria-label="Container da data">
            <DayPickerRangeController
              onDatesChange={(arg) => onDatesChange({
                startDateValue: arg.startDate,
                endDateValue: arg.endDate,
              })}
              onFocusChange={onFocusChange}
              focusedInput={focusedInput}
              startDate={isValidStartDate ? startDate : undefined}
              endDate={isValidEndDate ? endDate : undefined}
              renderDayContents={(day) => (day.day() % 7 === 6 || day.day() % 7 === 0 ? renderDay(day) : day.format('D'))}
              initialVisibleMonth={null}
              disabled={disabled}
              isOutsideRange={isOutsideRange}
            />
          </div>
        )}
      </OutsideClickHandler>
    </DatepickerStyles>
  );
};

Datepicker.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  showInputs: PropTypes.bool,
  title: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  disabled: PropTypes.bool,
  isOutsideRange: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
};

Datepicker.defaultProps = {
  startDate: null,
  endDate: null,
  showInputs: true,
  title: '',
  setEndDate: () => {},
  setStartDate: () => {},
  disabled: false,
  isOutsideRange: false,
  showErrorMessage: true,
};

export default Datepicker;
