/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import useCustomFetch from 'hooks/useFetch';

import moment from 'moment';
import service from '../../principal/redux/reduxPage/service';
import dashboardFidcService from '../services/dashboardFidcService';

const DashboardStateContext = createContext(null);
const DashboardActionsContext = createContext(null);

export function useDashboardState() {
  const context = useContext(DashboardStateContext);
  if (!context) throw new Error('DashboardState can\'t be called outside context provider');
  return context;
}

export function useDashboardActions() {
  const context = useContext(DashboardActionsContext);
  if (!context) throw new Error('DashboardActions can\'t be called outside context provider');

  return context;
}

export function useDashboardContext() {
  return [useDashboardState(), useDashboardActions()];
}

export function DashboardProvider({ children }) {
  const [concessionariasList, setConcessionariasList] = useState([]);
  const [regionaisList, setRegionaisList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);

  const [dashboardFilterConcesionarias, setDashboardFilterConcessionarias] = useState([]);
  const [dashboardFilterRegionais, setDashboardFilterRegionais] = useState([]);
  const [dashboardFilterBrands, setDashboardFilterBrands] = useState([]);

  const [dashboardFilterStartDate, setDashboardFilterStartDate] = useState(moment().subtract(1, 'day'));
  const [dashboardFilterEndDate, setDashboardFilterEndDate] = useState(moment().subtract(1, 'day'));
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [isPeriodButtonActive, setIsPeriodButtonActive] = useState(false);

  const [dashboardData, setDashboardData] = useState(null);

  const [isTouched, setIsTouched] = useState(false);

  const [isFiltered, setIsFiltered] = useState(false);

  const [{
    loading: filtrosLoading,
  }] = useCustomFetch(
    () => service.GetFiltros(),
    [],
    true,
    (success, data) => {
      if (success) {
        setConcessionariasList(data.concessionarias);
        setRegionaisList(data.regionais);
        setBrandsList(data.brands);
      }
    },
  );

  const [{
    loading: dashboardLoading,
  }, getDashboard] = useCustomFetch(
    () => dashboardFidcService.getDashboardLiquidadas({
      periodoInicio: dashboardFilterStartDate,
      periodoFim: dashboardFilterEndDate,
      concessionarias: dashboardFilterConcesionarias,
      regionais: dashboardFilterRegionais,
    }),
    [
      dashboardFilterStartDate,
      dashboardFilterEndDate,
      dashboardFilterConcesionarias,
      dashboardFilterRegionais,
    ],
    false,
    (success, res) => {
      if (success) {
        setDashboardData(res);
      }
    },
  );

  useEffect(() => {
    if (!isFiltered) {
      getDashboard();
      setIsFiltered((prev) => !prev);
    }
  }, [isFiltered]);

  const clearAllFilters = () => {
    setDashboardFilterConcessionarias(() => []);
    setDashboardFilterRegionais(() => []);
    setDashboardFilterBrands(() => []);
    setDashboardFilterStartDate(() => moment().subtract(1, 'day'));
    setDashboardFilterEndDate(() => moment().subtract(1, 'day'));
    setSelectedPeriod(() => null);
    setIsPeriodButtonActive(() => false);
    setIsTouched(() => false);
    setIsFiltered(false);
  };

  const state = {
    concessionariasList,
    regionaisList,
    brandsList,
    filtrosLoading,
    dashboardFilterStartDate,
    dashboardFilterEndDate,
    dashboardFilterConcesionarias,
    dashboardFilterRegionais,
    dashboardFilterBrands,
    selectedPeriod,
    isPeriodButtonActive,
    dashboardData,
    dashboardLoading,
    isTouched,
  };
  const actions = {
    setDashboardFilterStartDate,
    setDashboardFilterEndDate,
    setDashboardFilterConcessionarias,
    setDashboardFilterRegionais,
    setDashboardFilterBrands,
    setSelectedPeriod,
    setIsPeriodButtonActive,
    getDashboard,
    setIsTouched,
    clearAllFilters,
  };

  return (
    <DashboardActionsContext.Provider value={actions}>
      <DashboardStateContext.Provider value={state}>
        {children}
      </DashboardStateContext.Provider>
    </DashboardActionsContext.Provider>
  );
}

DashboardProvider.propTypes = {
  children: PropTypes.node,
};

DashboardProvider.defaultProps = {
  children: null,
};
