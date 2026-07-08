import React from 'react';
import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION } from 'react-dates/lib/constants';
import 'moment/locale/pt-br';

import CalendarIcon from '@material-ui/icons/Today';
import './datePickerDialog.scss';

export const ID_INPUT_DATE = 'date_input';

export class DatePickerDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  onDatesChange = (date) => {
    const { onChange } = this.props;
    onChange(date);
  };

  // clear = () => {
  //   const { onChange } = this.props;
  //   this.setState({
  //     focused: false,
  //   });
  //   onChange(null);
  // };

  datePicker = () => {
    const { state } = this;
    const { date, isOutsideRange, disabled } = this.props;
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
        onDateChange={(value) => this.onDatesChange(value)}
        onFocusChange={({ focused }) => this.setState({ focused })}
        focused={state.focused}
        isOutsideRange={isOutsideRange}
        disabled={disabled}
      />
    );
  };

  render() {
    const { title, isError, errorMessage } = this.props;
    return (
      <div className="date-picker-container">
        { title ? (
          <div className="date-picker-tittle">
            {title}
          </div>
        ) : <div className="date-picker-tittle-space" /> }
        <div
          className={`date-picker-x-and-input-container ${isError ? 'date-picker-error' : ''}`}
        >
          <div
            className="border"
            role="presentation"
            style={{ width: '100%' }}
          >
            <div className="date-picker-input-container">
              { this.datePicker() }
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

DatePickerDialog.defaultProps = {
  date: null,
  title: '',
  onChange: () => {},
  isOutsideRange: undefined,
  isError: false,
  errorMessage: '',
  disabled: false,
};

DatePickerDialog.propTypes = {
  onChange: PropTypes.func,
  date: PropTypes.object,
  title: PropTypes.string,
  isOutsideRange: PropTypes.func,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
};

export default DatePickerDialog;
