import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import { ExportarRelatorioContainer, ExportarRelatorioButton } from './exportarRelatorio.style';

const ExportarRelatorio = ({
  isExporting,
  exportarRelatorio,
}) => {
  const isDisabled = isExporting;
  return (
    <ExportarRelatorioContainer>
      <Tooltip
        title={isDisabled ? 'Exportando relatório...' : ''}
        arrow
        placement="top"
        disableInteractive={false}
      >
        <div>
          <ExportarRelatorioButton
            onClick={exportarRelatorio}
            disabled={isDisabled}
            isLoading={isExporting}
          >
            Exportar relatório
          </ExportarRelatorioButton>
        </div>
      </Tooltip>
    </ExportarRelatorioContainer>
  );
};

ExportarRelatorio.propTypes = {
  isExporting: PropTypes.bool.isRequired,
  exportarRelatorio: PropTypes.func.isRequired,
};

export default ExportarRelatorio;
