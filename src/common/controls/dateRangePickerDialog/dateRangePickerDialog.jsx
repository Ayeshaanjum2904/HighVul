import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { ICON_AFTER_POSITION, OPEN_DOWN } from 'react-dates/lib/constants';
import 'moment/locale/pt-br';

import CalendarIcon from '@material-ui/icons/Today';

import './dateRangePickerDialog.scss';

export const ID_INPUT_START = 'start_date_input';
export const ID_INPUT_END = 'end_date_input';

export class DateRangePickerDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: null,
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { setEndDate, setStartDate } = this.props;
    if (startDate !== null) {
      setStartDate(startDate);
    }
    if (endDate !== null) {
      setEndDate(endDate);
    }
  };

  dateRangePicker = () => {
    const { state } = this;
    const {
      startDate, endDate, disabled, CalendarInfo, numberOfMonths, isActive, isOutsideRange,
      openDirection,
    } = this.props;
    return (
      <DateRangePicker
        small
        noBorder={!isActive}
        hideKeyboardShortcutsPanel
        numberOfMonths={numberOfMonths}
        inputIconPosition={ICON_AFTER_POSITION}
        customInputIcon={
          <CalendarIcon className="date-range-picker__calendar-icon " />
        }
        startDateId={ID_INPUT_START}
        startDatePlaceholderText="dd/mm/aaaa"
        endDateId={ID_INPUT_END}
        endDatePlaceholderText="dd/mm/aaaa"
        isOutsideRange={(day) => (isOutsideRange ? day.isBefore(moment().subtract(1, 'days')) : false)}
        minimumNights={0}
        onDatesChange={this.onDatesChange}
        startDate={startDate}
        endDate={endDate}
        onFocusChange={(focused) => { this.setState({ focused }); }}
        focusedInput={state.focused}
        disabled={disabled}
        calendarInfoPosition="before"
        renderCalendarInfo={() => {
          if (CalendarInfo != null) {
            return (
              <CalendarInfo setFocused={() => this.setState({ focused: null })} />
            );
          }
          return null;
        }}
        openDirection={openDirection}
      />
    );
  };
  render() {
    const { title, className } = this.props;
    return (
      <div className="date-range-picker__container">
        { title ? (
          <div className="date-range-picker__tittle">
            {title}
          </div>
        ) : null }
        <div className="date-range-picker__x-and-input-container">
          <div className="border" role="presentation">
            <div className={`date-range-picker__input-container ${className}`}>
              { this.dateRangePicker() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DateRangePickerDialog.defaultProps = {
  setStartDate: () => {},
  setEndDate: () => {},
  startDate: null,
  endDate: null,
  title: null,
  disabled: false,
  CalendarInfo: null,
  numberOfMonths: 1,
  isActive: false,
  className: '',
  isOutsideRange: false,
  openDirection: OPEN_DOWN,
};

DateRangePickerDialog.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  CalendarInfo: PropTypes.any,
  numberOfMonths: PropTypes.number,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  isOutsideRange: PropTypes.bool,
  openDirection: PropTypes.string,
};

export default (DateRangePickerDialog);
