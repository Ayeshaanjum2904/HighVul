import React from 'react';
import PropTypes from 'prop-types';

import { safeConcat, formatDate } from 'utils/format';

import './cardDetalhe.scss';

const CardDetalhe = ({
  isLoading, data, tipo,
}) => (
  <div className="solicitacao__card-detalhe__container">
    {!isLoading ? (
      <div className="solicitacao__card-detalhe__header">
        <div className="solicitacao__card-detalhe__header-tipo">
          {safeConcat('Pedido de ', tipo)}
        </div>
        <div className="solicitacao__card-detalhe__header-data">
          {safeConcat('Realizado em ', formatDate(data, 'DD [de] MMM YYYY [às] HH:mm'))}
        </div>
      </div>
    ) : null}

  </div>
);

CardDetalhe.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  tipo: PropTypes.string,
};

CardDetalhe.defaultProps = {
  isLoading: null,
  data: null,
  tipo: null,
};

export default CardDetalhe;
