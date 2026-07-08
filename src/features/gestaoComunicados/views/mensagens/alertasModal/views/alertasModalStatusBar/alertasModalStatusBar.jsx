/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import StatusLabel from 'common/views/statusLabel';
import modalStatus from '../../status';

const NUM_CONTEUDO = 1;
const NUM_CONFIRMACAO = 2;

const mapStatusToNumber = (currentStatus) => {
  switch (currentStatus) {
    case modalStatus.conteudo:
      return NUM_CONTEUDO;
    case modalStatus.concluido:
      return NUM_CONFIRMACAO;
    default:
      return 0;
  }
};

const createItems = (status) => {
  const statusNumber = mapStatusToNumber(status);
  return [
    {
      number: NUM_CONTEUDO,
      label: 'CONTEÚDO',
      checkmark: statusNumber > NUM_CONTEUDO,
      active: statusNumber === NUM_CONTEUDO,
      color: statusNumber > NUM_CONTEUDO ? 'blue' : 'gray',
    }, {
      number: NUM_CONFIRMACAO,
      label: 'CONFIRMAÇÃO',
      checkmark: statusNumber > NUM_CONFIRMACAO,
      active: statusNumber === NUM_CONFIRMACAO,
      color: statusNumber > NUM_CONFIRMACAO ? 'blue' : 'gray',
    },
  ];
};

const AlertasModalStatusBar = ({
  status, isLoading,
}) => {
  const items = isLoading ? [] : createItems(status);
  return (
    <>
      { ((items || []).map((i, index) => (
        <StatusLabel
          number={i.number}
          label={i.label}
          color={i.color}
          checkmark={i.checked}
          active={i.active}
          key={index}
        />
      ))) }
    </>
  );
};

AlertasModalStatusBar.propTypes = {
  status: PropTypes.string,
  isLoading: PropTypes.bool,
};

AlertasModalStatusBar.defaultProps = {
  status: null,
  isLoading: null,
};

export default AlertasModalStatusBar;
