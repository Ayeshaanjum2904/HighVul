import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION } from 'react-dates/lib/constants';
import 'moment/locale/pt-br';

import CalendarIcon from '@material-ui/icons/Today';
import './inputSingleDatePicker.scss';
import { OPEN_DOWN, OPEN_UP } from 'react-dates/constants';

export const ID_INPUT_DATE = 'date_input';

const propTypes = {
  autoFocus: PropTypes.bool,
  initialDate: momentPropTypes.momentObj,
  title: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  isOutsideRange: PropTypes.func,
  appendToBody: PropTypes.bool,
  openDirection: PropTypes.oneOf([OPEN_DOWN, OPEN_UP]),
};

const defaultProps = {
  autoFocus: false,
  initialDate: null,
  title: '',
  isError: false,
  errorMessage: '',
  onChange: () => { },
  isOutsideRange: () => { },
  appendToBody: false,
  openDirection: OPEN_DOWN,
};

export class DatePickerDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
    const { onChange } = this.props;
    onChange(date);
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  datePicker = () => {
    const { focused, date } = this.state;
    const {
      isOutsideRange,
      ...singleDatePickerProps
    } = this.props;

    return (
      <SingleDatePicker
        small
        noBorder
        hideKeyboardShortcutsPanel
        numberOfMonths={1}
        inputIconPosition={ICON_AFTER_POSITION}
        customInputIcon={(
          <CalendarIcon
            className="calendar-icon"
          />
        )}
        id={ID_INPUT_DATE}
        placeholder="dd/mm/aaaa"
        date={date}
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        isOutsideRange={isOutsideRange}
        {...singleDatePickerProps}
      />
    );
  };

  render() {
    const { title, isError, errorMessage } = this.props;
    return (
      <div className="date-picker-container">
        {title ? (
          <div className="date-picker-tittle">
            {title}
          </div>
        ) : <div className="date-picker-tittle-space" />}
        <div
          className={`date-picker-x-and-input-container ${isError ? 'date-picker-error' : ''}`}
        >
          <div
            className="border"
            role="presentation"
            style={{ width: '100%' }}
          >
            <div className="date-picker-input-container">
              {this.datePicker()}
            </div>
          </div>
        </div>
        {isError
          ? (
            <span className="date-picker-error-message">
              {errorMessage}
            </span>
          ) : null}
      </div>
    );
  }
}

DatePickerDialog.propTypes = propTypes;
DatePickerDialog.defaultProps = defaultProps;

export default DatePickerDialog;
