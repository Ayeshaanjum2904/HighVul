import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Button from 'common/controls/button';
import colors from 'assets/styles/colors';
import { DateRange } from '../../../redux/enums';

import './calendarInfo.scss';

const useStyles = makeStyles({
  button: {
    width: 169,
    height: 40,
  },
  active: {
    background: `${colors.primary_color_100}`,
    border: `1px solid ${colors.primary_color_700}`,
    color: `${colors.primary_color_700}`,
  },
});

const CalendarInfo = ({
  filterType, setFilterType, setFocused,
}) => {
  const classes = useStyles();
  return (
    <div className="calendar-info__container">
      <div className="calendar-info__container__content">
        <div
          className={`calendar-info__filter-base calendar-info__container__content_filter-today 
          ${filterType === DateRange.today ? classes.active : ''}`}
          onClick={() => setFilterType(DateRange.today)}
          role="row"
          tabIndex={0}
        >
          Hoje
        </div>
        <div
          className={`calendar-info__filter-base calendar-info__container__content_filter-yesterday 
          ${filterType === DateRange.yesterday ? classes.active : ''}`}
          onClick={() => setFilterType(DateRange.yesterday)}
          role="row"
          tabIndex={0}
        >
          Ontem
        </div>
        <div
          className={`calendar-info__filter-base calendar-info__container__content_filter-week 
          ${filterType === DateRange.week ? classes.active : ''}`}
          onClick={() => setFilterType(DateRange.week)}
          role="row"
          tabIndex={0}
        >
          Semanal
        </div>
        <div
          className={`calendar-info__filter-base calendar-info__container__content_filter-month 
          ${filterType === DateRange.month ? classes.active : ''}`}
          onClick={() => setFilterType(DateRange.month)}
          role="row"
          tabIndex={0}
        >
          Mensal
        </div>
        <div
          className={`calendar-info__filter-base calendar-info__container__content_filter-all
          ${filterType === DateRange.all ? classes.active : ''}`}
          onClick={() => setFilterType(DateRange.all)}
          role="row"
          tabIndex={0}
        >
          Total
        </div>
        <div className="calendar-info__container__content_footer">
          <Button
            className={classes.button}
            color="new-gray"
            onClick={() => { setFocused(); }}
          >
            Aplicar
          </Button>
        </div>
      </div>
    </div>
  );
};

CalendarInfo.propTypes = {
  filterType: PropTypes.string,
  setFilterType: PropTypes.func,
  setFocused: PropTypes.func,
};
CalendarInfo.defaultProps = {
  filterType: null,
  setFilterType: () => {},
  setFocused: () => {},
};

export default CalendarInfo;
