import React from 'react';
import PropTypes from 'prop-types';

import {
  formatDate, camelFormat,
} from 'utils/format';

import './historicoListRow.scss';
import { Mixpanel, trackedProperties } from 'modules';

const ContatosListRow = ({
  historico, openModalEmail,
}) => (
  <div
    className="historico__list-row__container"
    onClick={() => {
      Mixpanel.trackButtonClick('Detalhe histórico', trackedProperties.historicoPage);
      openModalEmail(historico?.id);
    }}
    role="row"
    tabIndex={0}
  >
    <div className="historico__list-row__item historico__list-row__assunto">
      {historico?.assunto}
    </div>
    <div className="historico__list-row__item historico__list-row__grupo">
      {camelFormat(historico?.grupo, 2)}
    </div>
    <div className="historico__list-row__item historico__list-row__regional">
      {camelFormat(historico?.regional, 2)}
    </div>
    <div className="historico__list-row__item historico__list-row__tipo-email">
      {camelFormat(historico?.tipoEmail, 2)}
    </div>
    <div className="historico__list-row__item historico__list-row__envio">
      {formatDate(historico?.dataEnvio, 'DD/MM/YYYY HH:mm')}
    </div>
  </div>
);

ContatosListRow.propTypes = {
  historico: PropTypes.object,
  openModalEmail: PropTypes.func,
};

ContatosListRow.defaultProps = {
  historico: null,
  openModalEmail: () => {},
};

export default ContatosListRow;
