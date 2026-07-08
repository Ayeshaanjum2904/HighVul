import React from 'react';
import PropTypes from 'prop-types';
import { formatBrandName, formatDate } from 'utils/format';
import './headerVigencia.scss';

const HeaderVigencia = ({
  inputDataHistorico,
}) => (
  <div className="header-text">
    {`PERÍODO DE VIGÊNCIA ${formatBrandName(inputDataHistorico.brand)}:
      ${formatDate(inputDataHistorico.inicioVigencia, 'DD/MM/YYYY')} À ${formatDate(inputDataHistorico.fimVigencia, 'DD/MM/YYYY')}`}
  </div>
);

HeaderVigencia.propTypes = {
  inputDataHistorico: PropTypes.object,
};

HeaderVigencia.defaultProps = {
  inputDataHistorico: {},
};
export default HeaderVigencia;
