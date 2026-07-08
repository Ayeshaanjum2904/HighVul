import React from 'react';
import PropTypes from 'prop-types';
import { StyledExportButton } from './buttonExport.style';

const ButtonExport = ({
  exportarRelatorio,
  textApply,
  fullWidth,
  dataCy,
  isLoading,
}) => (
  <StyledExportButton
    className="common__filters__botao-exportar-relatorio"
    onClick={exportarRelatorio}
    fullWidth={fullWidth}
    dataCy={dataCy}
    isLoading={isLoading}
    disabled={isLoading}
  >
    {textApply}
  </StyledExportButton>
);

ButtonExport.propTypes = {
  exportarRelatorio: PropTypes.func,
  textApply: PropTypes.string,
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
  isLoading: PropTypes.bool,
};

ButtonExport.defaultProps = {
  exportarRelatorio: () => {},
  textApply: 'Exportar relatório',
  fullWidth: false,
  dataCy: null,
  isLoading: false,
};

export default ButtonExport;
