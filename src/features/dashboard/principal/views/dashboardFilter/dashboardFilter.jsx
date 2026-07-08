import React from 'react';
import PropTypes from 'prop-types';

import DateRangePicker from 'common/controls/dateRangePickerDialog';
import { makeStyles } from '@material-ui/core';
import GrupoSelector from './filters/grupoSelector';
import BrandSelector from './filters/brandSelector';
import ModeloSelector from './filters/modeloSelector';
import RegionalSelector from './filters/regionalSelector';
import FilterButton from './filterButton';
import PontoVendaSelector from './filters/pontoVendaSelector';

import CalendarInfo from './calendarInfo';
import { DateRange } from '../../redux/enums';

import './dashboardFilter.scss';

const Filters = () => (
  <>
    <div className="dashboard__page__filter__content_brand ">
      <BrandSelector />
    </div>
    <div className="dashboard__page__filter__content_modelo">
      <ModeloSelector />
    </div>
    <div className="dashboard__page__filter__content_regional">
      <RegionalSelector />
    </div>
    <div className="dashboard__page__filter__content_grupo">
      <GrupoSelector />
    </div>
    <div className="dashboard__page__filter__content_buk">
      <PontoVendaSelector />
    </div>
  </>
);

const DatePicker = ({
  startDate, endDate, setStartDate,
  setEndDate, isLoading, filterType,
}) => {
  const useStyles = makeStyles({
    container: {
      '& .DateRangePickerInput': {
        width: '282px',
        border: '0',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '8px',
      },
    },
  });
  const classes = useStyles();
  return (
    <DateRangePicker
      className={classes.container}
      title="Selecione um período"
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      disabled={isLoading}
      CalendarInfo={CalendarInfo}
      numberOfMonths={2}
      isActive={filterType !== DateRange.all}
    />
  );
};

class DashboardFilter extends React.Component {
  async componentDidMount() {
    const {
      getModelos, getGrupos, forceReload, getBrands, getRegionais,
      getPontos, disableFilterButton,
    } = this.props;
    await Promise.all([getBrands(), getRegionais(), getModelos(), getGrupos(), getPontos()]);
    forceReload();
    disableFilterButton();
  }

  setEndDateAndFilter = (value) => {
    const { setFilterType, setEndDate } = this.props;
    setFilterType(DateRange.custom);
    setEndDate(value);
  };

  render() {
    const {
      startDate, endDate, setStartDate, isLoading, filterType,
    } = this.props;
    return (
      <div className="dashboard-container">
        <div className="dashboard__page__filter__content">
          <div className="dashboard__page__filter__content_date">
            <DatePicker
              title="Selecione um período"
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={this.setEndDateAndFilter}
              disabled={isLoading}
              isLoading={isLoading}
              CalendarInfo={CalendarInfo}
              numberOfMonths={2}
              isActive={filterType !== DateRange.all}
            />
          </div>
          <Filters />
        </div>
        <div className="dashboard-container-button">
          <FilterButton
            textApply="Filtrar"
            textSelect="Filtrar"
            isLoading={isLoading}
          />
        </div>
      </div>
    );
  }
}

DashboardFilter.propTypes = {
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  setFilterType: PropTypes.func,
  forceReload: PropTypes.func,

  endDate: PropTypes.object,
  startDate: PropTypes.object,
  isLoading: PropTypes.bool,
  filterType: PropTypes.string,

  getModelos: PropTypes.func,
  getGrupos: PropTypes.func,
  getBrands: PropTypes.func,
  getRegionais: PropTypes.func,
  getPontos: PropTypes.func.isRequired,

  disableFilterButton: PropTypes.func,
};

DashboardFilter.defaultProps = {
  setEndDate: () => {},
  setFilterType: () => {},
  forceReload: () => {},
  setStartDate: () => {},

  startDate: '',
  endDate: '',
  isLoading: false,
  filterType: '',

  getModelos: () => {},
  getGrupos: () => {},
  getBrands: () => {},
  getRegionais: () => {},

  disableFilterButton: () => {},
};

DatePicker.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  isLoading: PropTypes.bool,
  filterType: PropTypes.string,
};

DatePicker.defaultProps = {
  startDate: '',
  endDate: '',
  setStartDate: () => {},
  setEndDate: () => {},
  isLoading: false,
  filterType: '',
};

export default DashboardFilter;
