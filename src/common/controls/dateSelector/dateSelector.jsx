/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import 'moment/locale/pt-br';
import omit from 'lodash/omit';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import OutsideClickHandler from 'react-outside-click-handler';
import NewCalendarIcon from 'assets/icons/new-calendar';
import ArrowContainer from './arrowContainer/arrowContainer';
import {
  utilizeFocus,
  getColorSelectedLabel,
  getDateFromEvent,
  getMessageError,
} from './helper';
import NewDatepickerStyles, {
  Button,
  ButtonContainer,
  ContainerDate,
  VerticalLine,
  InputError,
  Title,
  FieldContainer,
  InputDate,
  ButtonCalendar,
  Input,
  InputContainer,
} from './dateSelector.style';
import './dateRangePicker.scss';

const invalidDate = (
  invalidStartDate,
  invalidEndDate,
  setInvalidDate,
  startDate,
  endDate,
  focusedInput,
  invalidTwelveMonths,
) => {
  const invalid = invalidStartDate || invalidEndDate || invalidTwelveMonths;
  if (invalid !== undefined) {
    setInvalidDate(invalid);
  }
  if (((startDate && !endDate) || (!startDate && endDate)) && !focusedInput) {
    setInvalidDate(true);
    return true;
  }

  return invalid;
};

class DateSelector extends React.Component {
  inputFocus;

  constructor(props) {
    super(props);
    this.inputFocus = utilizeFocus();

    this.state = {
      focusedInput: null,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      startDateString: props.initialStartDate ? props.initialStartDate.format('DD/MM/YYYY') : '',
      endDateString: props.initialEndDate ? props.initialEndDate.format('DD/MM/YYYY') : '',
      datePickerOpen: false,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { shouldBeNull, initialStartDate, initialEndDate } = this.props;
    if (shouldBeNull !== prevProps.shouldBeNull) {
      this.setState({
        startDate: !shouldBeNull ? initialStartDate : null,
        endDate: !shouldBeNull ? initialEndDate : null,
        startDateString: (initialStartDate && !shouldBeNull) ? initialStartDate.format('DD/MM/YYYY') : '',
        endDateString: (initialEndDate && !shouldBeNull) ? initialEndDate.format('DD/MM/YYYY') : '',
      });
    }
  }

  onDatesChange({
    startDate, endDate,
  }) {
    const { setEndDate, setStartDate, rangeTwelveMonths } = this.props;

    let invalidTwelveMonths = false;

    let adjustedStartDate = startDate;
    if (rangeTwelveMonths && startDate && endDate && startDate?.isBefore(moment(endDate).subtract(12, 'months'))) {
      adjustedStartDate = moment(endDate).subtract(12, 'months');
      invalidTwelveMonths = true;
    }
    this.setState({
      startDate: adjustedStartDate,
      endDate,
      startDateString: startDate ? adjustedStartDate.format('DD/MM/YYYY') : '',
      endDateString: endDate ? endDate.format('DD/MM/YYYY') : '',
      invalidStartDate: false,
      invalidEndDate: false,
      focusedInput: startDate > endDate ? 'endDate' : null,
      isCleared: false,
      invalidTwelveMonths,
      datePickerOpen: !invalidTwelveMonths,
    });

    setStartDate(adjustedStartDate);
    setEndDate(endDate);
  }

  onEndDateChange(event) {
    const { setEndDate, rangeTwelveMonths } = this.props;
    const { startDate } = this.state;
    const date = getDateFromEvent(event.target.value);
    this.setState({
      endDate: date || '',
      endDateString: event.target.value,
      focusedInput: startDate > date ? 'endDate' : null,
      isCleared: false,
    });

    setEndDate(date);

    if (rangeTwelveMonths && startDate && date && startDate?.isBefore(moment(date).subtract(12, 'months'))) {
      this.setState({ invalidTwelveMonths: true });
    } else {
      this.setState({ invalidTwelveMonths: false });
    }
  }

  onStartDateChange(event) {
    const { setStartDate, rangeTwelveMonths } = this.props;
    const { endDate } = this.state;
    const date = getDateFromEvent(event.target.value);
    this.setState({
      startDate: date || '',
      startDateString: event.target.value,
      focusedInput: date ? 'endDate' : 'startDate',
      isCleared: false,
    });

    setStartDate(date);

    if (date) this.inputFocus.setFocus();
    if (rangeTwelveMonths && date && endDate && date?.isBefore(moment(endDate).subtract(12, 'months'))) {
      this.setState({ invalidTwelveMonths: true });
    } else {
      this.setState({ invalidTwelveMonths: false });
    }
  }

  onFocusChange(focusedInput) {
    const { closeDrawer } = this.props;
    if (focusedInput) {
      this.setState({
        focusedInput,
        datePickerOpen: true,
      });
      closeDrawer();
    } else {
      this.setState({
        datePickerOpen: false,
      });
    }
  }

  onOpenDatePicker(focusedInput) {
    const { datePickerOpen } = this.state;
    const { closeDrawer } = this.props;
    this.setState({
      datePickerOpen: !datePickerOpen,
      focusedInput: !datePickerOpen ? focusedInput : null,
    });
    closeDrawer();
  }

  validateStartDate = (dateInput) => {
    const { minDate } = this.props;
    const date = getDateFromEvent(dateInput);
    let invalidStartDate = false;

    if (!date && (dateInput !== '')) {
      invalidStartDate = true;
    }

    if (minDate && date < minDate) invalidStartDate = true;

    this.setState({
      invalidStartDate,
    });
  };

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

  resetDate() {
    const { setStartDate, setEndDate } = this.props;
    this.setState({
      startDateString: undefined,
      endDateString: undefined,
      startDate: undefined,
      endDate: undefined,
      invalidStartDate: false,
      invalidEndDate: false,
      isCleared: true,
    });

    setStartDate(null);
    setEndDate(null);
  }

  render() {
    const {
      showInputs,
      title,
      disabled,
      numberOfMonths,
      isOutsideRange,
      setInvalidDate,
      invalidDateProp,
      dataCy,
      openCopy,
      dateSelectorNullable,
      isOutsideRangeSelect,
      isDayBlocked,
      shouldBeNull,
      minDate,
      positionFixed,
      rangeTwelveMonths,
    } = this.props;
    const {
      focusedInput,
      startDate,
      endDate,
      startDateString,
      endDateString,
      invalidStartDate,
      invalidEndDate,
      isCleared,
      datePickerOpen,
      invalidTwelveMonths,
    } = this.state;
    const props = omit(this.props, [
      'initialStartDate', 'initialEndDate',
      'setStartDate', 'setEndDate',
      'setInvalidDate', 'invalidDateProp',
      'showInputs',
      'dataCy',
      'title',
      'closeDrawer',
    ]);

    moment.locale('pt-br', {
      months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
      weekdaysMin: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    });

    const buttonColor = (startDate !== null && startDate !== undefined)
      || (endDate !== null && endDate !== undefined);

    const inputProps = {
      focusedInput,
      invalidStartDate,
      invalidEndDate,
      startDate,
      endDate,
      dateSelectorNullable,
      invalidDateProp,
      shouldBeNull,
    };

    const selectOutsideRange = (day) => {
      if (minDate) return day < minDate;
      if (isOutsideRangeSelect) return day.isBefore(moment().startOf('day'));
      if (isOutsideRange) return day.isBefore(moment().subtract(1, 'days'));

      return false;
    };

    return (
      <NewDatepickerStyles {...inputProps}>
        <OutsideClickHandler
          onOutsideClick={
            () => this.setState({
              focusedInput: null,
              datePickerOpen: false,
            })
          }
        >
          {showInputs && (
            <FieldContainer>
              <Title
                {...inputProps}
                className="titleDateSelector"
              >
                {title}
              </Title>
              <InputContainer {...inputProps}>
                <InputDate paddingLeft="6px">
                  <Input
                    {...inputProps}
                    onFocus={() => this.onFocusChange('startDate')}
                    type="text"
                    name="start date"
                    disabled={disabled || isOutsideRangeSelect}
                    value={isCleared ? '' : startDateString}
                    placeholder="dd/mm/aaaa"
                    onChange={(e) => this.onStartDateChange(e)}
                    onBlur={(e) => this.validateStartDate(e.target.value)}
                    data-cy={dataCy ? `${dataCy}StartDate` : null}
                  />
                </InputDate>
                <VerticalLine />
                <InputDate paddingLeft={endDate ? '2px' : '1px'}>
                  <Input
                    {...inputProps}
                    ref={this.inputFocus.ref}
                    onFocus={() => this.onFocusChange('endDate')}
                    type="text"
                    name="end date"
                    disabled={disabled || isOutsideRangeSelect}
                    value={isCleared ? '' : endDateString}
                    placeholder="dd/mm/aaaa"
                    onChange={(e) => this.onEndDateChange(e)}
                    onBlur={(e) => this.validateEndDate(e.target.value)}
                    data-cy={dataCy ? `${dataCy}EndDate` : null}
                  />
                </InputDate>
                <ButtonCalendar
                  data-cy={dataCy ? `${dataCy}Open` : null}
                  type="button"
                  onClick={() => this.onOpenDatePicker('startDate')}
                  disabled={disabled}
                >
                  <NewCalendarIcon color={getColorSelectedLabel({ ...inputProps })} />
                </ButtonCalendar>
              </InputContainer>
              {(invalidDate(
                invalidStartDate,
                invalidEndDate,
                setInvalidDate,
                startDate,
                endDate,
                focusedInput,
                invalidTwelveMonths,
              )) && (
                  <InputError>
                    {getMessageError(
                      invalidStartDate,
                      invalidEndDate,
                      startDate,
                      endDate,
                      invalidTwelveMonths,
                    )}
                  </InputError>
                )}
            </FieldContainer>
          )}
          {focusedInput && datePickerOpen && (
            <ContainerDate
              marginTop={(invalidDate)}
              positionFixed={positionFixed}
              data-cy={`${dataCy}Calendar`}
              openCopy={openCopy}
            >
              <DayPickerRangeController
                {...props}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                initialVisibleMonth={null}
                noNavButtons={isOutsideRangeSelect}
                navPrev={
                  !isOutsideRangeSelect
                    ? <ArrowContainer margin="22px" icon />
                    : null
                }
                navNext={
                  !isOutsideRangeSelect
                    ? <ArrowContainer margin={numberOfMonths === 1 ? '81%' : '90%'} />
                    : null
                }
                disabled={disabled}
                numberOfMonths={numberOfMonths}
                isDayBlocked={isDayBlocked}
                isOutsideRange={(day) => selectOutsideRange(day)}
                minDate={minDate}
                rangeTwelveMonths={rangeTwelveMonths}
              />
              <ButtonContainer>
                <Button
                  backgroundColor={buttonColor}
                  onClick={() => this.resetDate()}
                >
                  Limpar
                </Button>
              </ButtonContainer>
            </ContainerDate>
          )}
        </OutsideClickHandler>
      </NewDatepickerStyles>
    );
  }
}

DateSelector.propTypes = {
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  showInputs: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  title: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  disabled: PropTypes.bool,
  isOutsideRange: PropTypes.bool,
  isDayBlocked: PropTypes.func,
  shouldBeNull: PropTypes.bool,
  setInvalidDate: PropTypes.func,
  invalidDateProp: PropTypes.bool,
  closeDrawer: PropTypes.func,
  dataCy: PropTypes.string,
  openCopy: PropTypes.bool,
  dateSelectorNullable: PropTypes.bool,
  isOutsideRangeSelect: PropTypes.bool,
  minDate: momentPropTypes.momentObj,
  positionFixed: PropTypes.bool,
  rangeTwelveMonths: PropTypes.bool,
};

DateSelector.defaultProps = {
  numberOfMonths: 1,
  initialStartDate: null,
  initialEndDate: null,
  dataCy: null,
  title: null,
  invalidDateProp: false,
  showInputs: true,
  isOutsideRangeSelect: false,
  disabled: false,
  isOutsideRange: false,
  openCopy: false,
  dateSelectorNullable: false,
  shouldBeNull: false,
  isDayBlocked: () => { },
  setEndDate: () => { },
  setStartDate: () => { },
  setInvalidDate: () => { },
  closeDrawer: () => { },
  minDate: null,
  positionFixed: false,
  rangeTwelveMonths: false,
};

export default DateSelector;
