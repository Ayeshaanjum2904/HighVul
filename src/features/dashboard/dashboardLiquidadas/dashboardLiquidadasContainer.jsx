import React from 'react';
import { SnackbarProvider } from './context/snackbar';
import DashboardLiquidadasPage from './dashboardLiquidadasPage';
import { DashboardProvider } from './context/dashboard';
import { RelatorioProvider } from './context/relatorio';

const DashboardLiquidadasContainer = () => (
  <SnackbarProvider>
    <DashboardProvider>
      <RelatorioProvider>
        <DashboardLiquidadasPage />
      </RelatorioProvider>
    </DashboardProvider>
  </SnackbarProvider>
);

DashboardLiquidadasContainer.propTypes = {
};

DashboardLiquidadasContainer.defaultProps = {
};

export default DashboardLiquidadasContainer;
