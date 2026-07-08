import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { ExportarRelatorioContainer, ExportarRelatorioButton } from './exportarRelatorio.style';

const ExportarRelatorio = ({
  isExporting,
  exportarRelatorio,
  isDateRangeInvalid,
  motivoButtonDisabled,
}) => {
  const isDisabled = isExporting || isDateRangeInvalid;
  return (
    <RenderIfPermission requireAny={[...Object.values(permissions.pedidos)]}>
      <ExportarRelatorioContainer>
        {}
        <Tooltip
          title={isDisabled && motivoButtonDisabled ? motivoButtonDisabled : ''}
          arrow
          placement="top"
        >
          {}
          <span>
            <ExportarRelatorioButton
              onClick={exportarRelatorio}
              disabled={isDisabled}
              isLoading={isExporting}
            >
              Exportar relatório
            </ExportarRelatorioButton>
          </span>
        </Tooltip>
      </ExportarRelatorioContainer>
    </RenderIfPermission>
  );
};

ExportarRelatorio.propTypes = {
  isExporting: PropTypes.bool.isRequired,
  exportarRelatorio: PropTypes.func.isRequired,
  isDateRangeInvalid: PropTypes.bool.isRequired,
  motivoButtonDisabled: PropTypes.string,
};

ExportarRelatorio.defaultProps = {
  motivoButtonDisabled: null,
};

export default ExportarRelatorio;
