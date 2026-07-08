import React from 'react';
import PropTypes from 'prop-types';
import { formatBrandName, formatDate } from 'utils/format';
import './headerTaxa.scss';

const HeaderTaxa = ({
  brand, inicioVigencia, fimVigencia, disabled, taxa,
}) => (
  <div className="header-text">
    {`PERÍODO DE VIGÊNCIA ${!disabled ? formatBrandName(brand) : formatBrandName(taxa.brand)}:
      ${formatDate(!disabled ? inicioVigencia : taxa.inicioVigencia, 'DD/MM/YYYY')} À ${formatDate(!disabled ? fimVigencia : taxa.fimVigencia, 'DD/MM/YYYY')}`}
  </div>
);

HeaderTaxa.propTypes = {
  brand: PropTypes.string.isRequired,
  inicioVigencia: PropTypes.object.isRequired,
  fimVigencia: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  taxa: PropTypes.object,
};

HeaderTaxa.defaultProps = {
  disabled: false,
  taxa: {},
};
export default HeaderTaxa;
