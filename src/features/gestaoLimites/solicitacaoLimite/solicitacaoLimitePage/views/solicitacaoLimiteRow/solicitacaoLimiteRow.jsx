import React from 'react';
import PropTypes from 'prop-types';

import {
  safeConcat, formatDate,
  formatCodigoConcessionaria, formatNomeConcessionaria,
} from 'utils/format';

import './solicitacaoLimiteRow.scss';
import TooltipMessage from 'common/controls/tooltipMessage';

const SolicitacaoLimiteRow = ({
  solicitacao, onRowClicked,
}) => (
  <div
    className={`
      ${(solicitacao?.visualizado) ? 'solicitacoes__solicitacoes-list-row__container-outer'
      : 'solicitacoes__solicitacoes-list-row__container-outer--highlight'}
    `}
    onClick={() => onRowClicked(solicitacao?.solicitacaoId)}
    role="row"
    tabIndex={0}
  >
    <div className="solicitacoes__solicitacoes-list-row__container">
      <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__id">
        {safeConcat('#', solicitacao?.solicitacaoId)}
      </div>
      <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__data">
        {formatDate(solicitacao?.data, 'DD/MM/YYYY')}
      </div>
      <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__solicitante">
        <span className="solicitacoes__solicitacoes-list-row__solicitante__text">
          {solicitacao?.solicitante}
        </span>
      </div>
      <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__concessionaria">
        <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__concessionaria__subtitle">
          {formatCodigoConcessionaria(solicitacao?.concessionariaId)}
        </div>
        <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__concessionaria__title">
          <TooltipMessage title={formatNomeConcessionaria(solicitacao?.concessionariaNome)} placement="bottom-start">
            <span className="solicitacoes__solicitacoes-list-row__concessionaria__title__text" style={{ cursor: 'pointer' }}>
              {formatNomeConcessionaria(solicitacao?.concessionariaNome)}
            </span>
          </TooltipMessage>
        </div>
      </div>
      <div className="solicitacoes__solicitacoes-list-row__item solicitacoes__solicitacoes-list-row__tipo">
        <span className="solicitacoes__solicitacoes-list-row__tipo__text">
          {solicitacao?.tipo}
        </span>
      </div>
    </div>
  </div>
);

SolicitacaoLimiteRow.propTypes = {
  solicitacao: PropTypes.object,
  onRowClicked: PropTypes.func.isRequired,
};

SolicitacaoLimiteRow.defaultProps = {
  solicitacao: {},
};

export default SolicitacaoLimiteRow;
