import React from 'react';
import PropTypes from 'prop-types';

import './buttonExport.scss';
import Button from 'common/controls/button';

const ButtonExport = ({
  exportarRelatorio,
  textApply,
  fullWidth,
  dataCy,
}) => (
  <Button
    className="common__filters__botao-exportar-relatorio"
    onClick={() => exportarRelatorio()}
    fullWidth={fullWidth}
    dataCy={dataCy}
    color="new-blue"
  >
    {textApply}
  </Button>
);

ButtonExport.propTypes = {
  exportarRelatorio: PropTypes.func,
  textApply: PropTypes.string,
  fullWidth: PropTypes.bool,
  dataCy: PropTypes.string,
};

ButtonExport.defaultProps = {
  exportarRelatorio: () => {},
  textApply: 'Exportar relatório',
  fullWidth: false,
  dataCy: null,
};

export default ButtonExport;
