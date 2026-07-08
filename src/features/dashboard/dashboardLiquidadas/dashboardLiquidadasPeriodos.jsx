import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import DashboardLiquidadasPeriodoButton from './dashboardLiquidadasPeriodoButton';
import { useDashboardContext } from './context/dashboard';

const options = {
  days30: '30 dias',
  days90: '90 dias',
  days180: '180 dias',
};

const isSelected = (selected, option, isPeriodButtonActive) => option === selected
  && isPeriodButtonActive;

const DashboardLiquidadasPeriodos = () => {
  const [{
    selectedPeriod,
    isPeriodButtonActive,
  }, {
    setSelectedPeriod,
    setIsPeriodButtonActive,
    setDashboardFilterStartDate,
    setDashboardFilterEndDate,
    setIsTouched,
  }] = useDashboardContext();

  const yesterday = moment().subtract(1, 'day');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <Typography
        fontSize="12px"
        paddingLeft="12px"
      >
        Outros períodos
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <DashboardLiquidadasPeriodoButton
          onClick={() => {
            setSelectedPeriod(options.days30);
            setIsPeriodButtonActive(true);
            setDashboardFilterStartDate(moment(yesterday).subtract(30, 'days'));
            setDashboardFilterEndDate(yesterday);
            setIsTouched(false);
          }}
          text={options.days30}
          selected={isSelected(selectedPeriod, options.days30, isPeriodButtonActive)}
        />
        <DashboardLiquidadasPeriodoButton
          onClick={() => {
            setSelectedPeriod(options.days90);
            setIsPeriodButtonActive(true);
            setDashboardFilterStartDate(moment(yesterday).subtract(90, 'days'));
            setDashboardFilterEndDate(yesterday);
            setIsTouched(false);
          }}
          text={options.days90}
          selected={isSelected(selectedPeriod, options.days90, isPeriodButtonActive)}
        />
        <DashboardLiquidadasPeriodoButton
          onClick={() => {
            setSelectedPeriod(options.days180);
            setIsPeriodButtonActive(true);
            setDashboardFilterStartDate(moment(yesterday).subtract(180, 'days'));
            setDashboardFilterEndDate(yesterday);
            setIsTouched(false);
          }}
          text={options.days180}
          selected={isSelected(selectedPeriod, options.days180, isPeriodButtonActive)}
        />
      </Box>
    </Box>
  );
};

export default DashboardLiquidadasPeriodos;

DashboardLiquidadasPeriodos.propTypes = {
};

DashboardLiquidadasPeriodos.defaultProps = {

};
