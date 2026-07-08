import React from 'react';
import PropTypes from 'prop-types';

import {
  formatCnpj, formatNomeConcessionaria, formatCodigoConcessionaria, camelFormat,
} from 'utils/format';

import './concessionariasListRow.scss';

const ConcessionariasListRow = ({
  concessionaria, onClick,
}) => (
  <div className="concessionarias__list-row__container__outer">
    <div
      className="concessionarias__list-row__container"
      onClick={() => onClick(concessionaria)}
      role="row"
      tabIndex={0}
    >
      <div className="concessionarias__list-row__item concessionarias__list-row__nome">
        {formatNomeConcessionaria(concessionaria?.nome)}
      </div>
      <div className="concessionarias__list-row__item concessionarias__list-row__cnpj">
        {formatCnpj(concessionaria?.cnpj)}
      </div>
      <div className="concessionarias__list-row__item concessionarias__list-row__cod-buc">
        {formatCodigoConcessionaria(
          concessionaria.corretorId !== 0
            ? concessionaria?.corretorId : concessionaria.codBuc,
        )}
      </div>
      <div className="concessionarias__list-row__item concessionarias__list-row__regional">
        {camelFormat(concessionaria?.regional, 2)}
      </div>
      <div className="concessionarias__list-row__item concessionarias__list-row__brand">
        {camelFormat(concessionaria?.brand)}
      </div>
      <div className="concessionarias__list-row__item concessionarias__list-row__tipo">
        {camelFormat(concessionaria?.tipo)}
      </div>
    </div>
  </div>
);

ConcessionariasListRow.propTypes = {
  concessionaria: PropTypes.object,
  onClick: PropTypes.func,
};

ConcessionariasListRow.defaultProps = {
  concessionaria: null,
  onClick: () => {},
};

export default ConcessionariasListRow;
