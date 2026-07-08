import React from 'react';
import PropTypes from 'prop-types';
import './inputValorNF.scss';
import { formatCurrency } from 'utils/format';

const InputValorNF = ({ valorNF }) => {
  const renderValorNF = () => (
    <div className="valorNF__container">
      <span className="valorNF__container__span">
        Valor da Nota
      </span>
      <div className="valorNF__container__data">
        <span>{formatCurrency(valorNF) || ''}</span>
      </div>
    </div>
  );

  return renderValorNF();
};

InputValorNF.propTypes = {
  valorNF: PropTypes.string,
};

InputValorNF.defaultProps = {
  valorNF: '',
};

export default InputValorNF;
