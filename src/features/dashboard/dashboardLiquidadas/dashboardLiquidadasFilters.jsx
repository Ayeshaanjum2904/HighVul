import React, { useMemo } from 'react';
import { Box } from '@material-ui/core';
import { dictonaryConcessionarias, dictonaryRegionais } from 'common/controls/newMultipleSelectComponent/dictionary';
import { CircularProgress } from '@mui/material';
import NewMultipleSelectComponent from 'common/controls/newMultipleSelectComponent/newMultipleSelectComponent';
import InputLoadingContainer from 'common/layout/inputLoadingContainer';
import Datepicker from 'common/controls/newDatePicker/datePicker';
import { useDashboardContext } from './context/dashboard';
import DashboardLiquidadasPeriodos from './dashboardLiquidadasPeriodos';

const DashboardLiquidadasFilters = () => {
  const [
    {
      concessionariasList,
      regionaisList,
      filtrosLoading,
      dashboardFilterStartDate,
      dashboardFilterEndDate,
      dashboardFilterConcesionarias,
      dashboardFilterRegionais,
    },
    {
      setDashboardFilterStartDate,
      setDashboardFilterEndDate,
      setDashboardFilterConcessionarias,
      setDashboardFilterRegionais,
      setIsPeriodButtonActive,
      setIsTouched,
    },
  ] = useDashboardContext();

  const concessionariasOptions = useMemo(() => {
    setDashboardFilterConcessionarias([]);
    const selectedRegionais = dashboardFilterRegionais.length
      ? dashboardFilterRegionais
      : regionaisList;
    const regionais = selectedRegionais.map((regional) => regional.value);
    const options = concessionariasList.filter(
      (concessionaria) => regionais.includes(concessionaria.regionId),
    );
    return options;
  }, [dashboardFilterRegionais, regionaisList, concessionariasList]);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      gap: '16px',
    }}
    >
      <Box width="232px">
        {
        !filtrosLoading
          ? (
            <NewMultipleSelectComponent
              options={concessionariasOptions}
              selectedOption={dashboardFilterConcesionarias}
              setOption={(option) => {
                setDashboardFilterConcessionarias(option);
                setIsTouched(false);
              }}
              label="Concessionária"
              dictionary={dictonaryConcessionarias}
              dataCy="filter-concessionarias-dashboard-liquidadas"
              minWidth={200}
            />
          )
          : (
            <InputLoadingContainer>
              <CircularProgress color="inherit" size="18px" />
            </InputLoadingContainer>
          )
        }
      </Box>
      <Box width="232px">
        {
          !filtrosLoading ? (
            <NewMultipleSelectComponent
              options={regionaisList}
              selectedOption={dashboardFilterRegionais}
              setOption={(option) => {
                setDashboardFilterRegionais(option);
                setIsTouched(false);
              }}
              label="Regional"
              dictionary={dictonaryRegionais}
              dataCy="filter-regionais-dashboard-liquidadas"
              minWidth={200}
            />
          ) : (
            <InputLoadingContainer>
              <CircularProgress color="inherit" size="18px" />
            </InputLoadingContainer>
          )
        }
      </Box>
      <Box width="224px">
        <Datepicker
          title="Período"
          startDate={dashboardFilterStartDate}
          endDate={dashboardFilterEndDate}
          setStartDate={(date) => {
            setDashboardFilterStartDate(date);
            setIsPeriodButtonActive(false);
            setIsTouched(false);
          }}
          setEndDate={(date) => {
            setDashboardFilterEndDate(date);
            setIsPeriodButtonActive(false);
            setIsTouched(false);
          }}
          isOutsideRange={() => false}
          resetState={false}
          setResetState={() => []}
          showErrorMessage={false}
        />
      </Box>
      <DashboardLiquidadasPeriodos />
    </Box>
  );
};

export default DashboardLiquidadasFilters;

DashboardLiquidadasFilters.propTypes = {
};

DashboardLiquidadasFilters.defaultProps = {

};
