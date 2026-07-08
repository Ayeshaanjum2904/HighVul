import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';

import {
  ExportarRelatorioContainer,
  ExportarRelatorioStyledButton,
} from './exportarRelatorioButton.style';

const ExportarRelatorioButton = ({ onClick, isExporting }) => (
  <ExportarRelatorioContainer>
    <Tooltip
      title={isExporting ? 'Exportando relatório...' : ''}
      arrow
      placement="top"
    >
      <span>
        <ExportarRelatorioStyledButton
          onClick={onClick}
          disabled={isExporting}
          isLoading={isExporting}
        >
          Exportar relatório
        </ExportarRelatorioStyledButton>
      </span>
    </Tooltip>
  </ExportarRelatorioContainer>
);

ExportarRelatorioButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isExporting: PropTypes.bool.isRequired,
};

export default ExportarRelatorioButton;
