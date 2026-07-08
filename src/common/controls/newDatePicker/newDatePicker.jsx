import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import 'moment/locale/pt-br';
import omit from 'lodash/omit';
import {
  DayPickerRangeController,
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import OutsideClickHandler from 'react-outside-click-handler';
import NewCalendarIcon from 'assets/icons/new-calendar';
import NewDatepickerStyles from './newDatePicker.styles';

function renderDay(day) {
  return (
    <div style={{ fontWeight: 700 }}>
      <span>{day.format('D')}</span>
    </div>
  );
}

const utilizeFocus = () => {
  const ref = React.createRef();
  const setFocus = () => {
    if (ref.current) {
      (ref).current.focus();
    }
  };

  return { setFocus, ref };
};

const getDateFromEvent = (date) => {
  const dateFormat = moment(date, 'DD/MM/YYYY', true);
  return dateFormat.isValid() ? dateFormat : undefined;
};

class NewDatepicker extends React.Component {
  inputFocus;

  constructor(props) {
    super(props);
    this.inputFocus = utilizeFocus();

    this.state = {
      focusedInput: null,
      startDate: props.initialStartDate,
      endDate: props.enableOutsideUpdate ? props.initialEndDate : null,
      startDateString: props.enableOutsideUpdate ? props.initialStartDate?.format('DD/MM/YYYY') : '',
      endDateString: props.enableOutsideUpdate ? props.initialEndDate?.format('DD/MM/YYYY') : '',
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  componentDidUpdate() {
    const { resetState, setResetState } = this.props;

    if (resetState) {
      setResetState(false);
      this.setState({
        startDateString: '',
        endDateString: '',
        startDate: null,
        endDate: null,
      });
    }
  }

  onDatesChange({ startDate, endDate }) {
    const { setEndDate, setStartDate } = this.props;
    this.setState({
      startDate,
      endDate,
      startDateString: startDate ? startDate.format('DD/MM/YYYY') : '',
      endDateString: endDate ? endDate.format('DD/MM/YYYY') : '',
      invalidStartDate: false,
      invalidEndDate: false,
      focusedInput: null,
    });
    setStartDate(startDate);
    setEndDate(endDate);
  }

  onFocusChange(focusedInput) {
    if (focusedInput) {
      this.setState({
        focusedInput,
      });
    }
  }

  onStartDateChange(event) {
    const { setStartDate } = this.props;
    const date = getDateFromEvent(event.target.value);

    this.setState({
      startDate: date || '',
      startDateString: event.target.value,
      focusedInput: date ? 'endDate' : 'startDate',
    });

    setStartDate(date);

    if (date) this.inputFocus.setFocus();
  }

  onEndDateChange(event) {
    const { setEndDate } = this.props;
    const date = getDateFromEvent(event.target.value);

    this.setState({
      endDate: date || '',
      endDateString: event.target.value,
      focusedInput: null,
    });
    setEndDate(date);
  }

  validateStartDate(dateInput) {
    const date = getDateFromEvent(dateInput);

    let invalidStartDate = false;
    if (!date && (dateInput !== '')) {
      invalidStartDate = true;
    }
    this.setState({
      invalidStartDate,
    });
  }

  validateEndDate(dateInput) {
    const date = getDateFromEvent(dateInput);
    const { startDate } = this.state;
    let invalidEndDate = false;

    if (date < startDate) {
      invalidEndDate = true;
    }

    if (!date && (dateInput !== '')) {
      invalidEndDate = true;
    }

    this.setState({
      invalidEndDate,
    });
  }

  render() {
    const {
      showInputs, title, disabled, isOutsideRange, showErrorMessage,
    } = this.props;
    const {
      focusedInput,
      startDate,
      endDate,
      startDateString,
      endDateString,
      invalidStartDate,
      invalidEndDate,
    } = this.state;

    const props = omit(this.props, [
      'initialStartDate',
      'initialEndDate',
      'showInputs',
    ]);

    moment.locale('pt-br', {
      months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
      weekdaysMin: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    });

    return (
      <NewDatepickerStyles
        focusedInput={focusedInput}
        invalidStartDate={invalidStartDate}
        invalidEndDate={invalidEndDate}
        aria-label="Seletor de data"
      >
        <OutsideClickHandler onOutsideClick={() => this.setState({ focusedInput: null })}>
          {showInputs && (
            <div>
              <p className="caption" aria-label="Título do seletor de data">{title}</p>
              <div className="inputs" aria-label="Entradas de data">
                <div className="input-left" aria-label="Entrada de data inicial">
                  <input
                    onFocus={() => this.onFocusChange('startDate')}
                    type="text"
                    name="start date"
                    value={startDateString}
                    placeholder="dd/mm/aaaa"
                    onChange={(e) => this.onStartDateChange(e)}
                    onBlur={(event) => this.validateStartDate(event.target.value)}
                  />
                </div>
                <span aria-label="Divisor das datas"> - </span>
                <div className="input-right" aria-label="Entrada de data final">
                  <input
                    ref={this.inputFocus.ref}
                    onFocus={() => this.onFocusChange('endDate')}
                    type="text"
                    name="end date"
                    value={endDateString}
                    placeholder="dd/mm/aaaa"
                    onChange={(e) => this.onEndDateChange(e)}
                    onBlur={(event) => this.validateEndDate(event.target.value)}
                  />
                </div>
                <button type="button" className="icon-button" onClick={() => this.onFocusChange('startDate')} aria-label="Botão de abrir calendário">
                  <NewCalendarIcon />
                </button>
              </div>
            </div>
          )}
          {showErrorMessage && !focusedInput && (invalidStartDate || invalidEndDate) && <p className="input-error">Data inválida. Tente novamente.</p>}
          {focusedInput && (
          <div className="container-date" aria-label="Container da data">
            <DayPickerRangeController
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
              renderDayContents={(day) => (day.day() % 7 === 6 || day.day() % 7 === 0 ? renderDay(day) : day.format('D'))}
              initialVisibleMonth={null}
              disabled={disabled}
              isOutsideRange={isOutsideRange}
            />
          </div>
          )}
        </OutsideClickHandler>
      </NewDatepickerStyles>
    );
  }
}

NewDatepicker.propTypes = {
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  showInputs: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  orientation: PropTypes.string,
  monthFormat: PropTypes.string,
  setSelectedDatesFilter: PropTypes.object,
  title: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  disabled: PropTypes.bool,
  isOutsideRange: PropTypes.bool,
  resetState: PropTypes.bool,
  setResetState: PropTypes.func,
  enableOutsideUpdate: PropTypes.bool,
  showErrorMessage: PropTypes.bool,
};

NewDatepicker.defaultProps = {
  initialStartDate: null,
  initialEndDate: null,
  showInputs: true,
  orientation: 'horizontal',
  numberOfMonths: 1,
  monthFormat: 'MMMM YYYY',
  setSelectedDatesFilter: [],
  title: '',
  setEndDate: () => {},
  setStartDate: () => {},
  disabled: false,
  isOutsideRange: false,
  resetState: false,
  setResetState: () => {},
  enableOutsideUpdate: false,
  showErrorMessage: true,
};

export default NewDatepicker;
