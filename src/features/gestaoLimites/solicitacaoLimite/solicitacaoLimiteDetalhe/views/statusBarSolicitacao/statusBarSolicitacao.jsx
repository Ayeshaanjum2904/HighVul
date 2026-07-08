/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import StatusLabel from 'common/views/statusLabel';
import { status } from '../../status';

const NUM_APROVACAO = 1;
const NUM_APLICACAO = 2;
const NUM_CONCLUIDO = 3;
const NUM_CANCELADO = 1;

const mapStatusToNumber = (currentStatus) => {
  switch (currentStatus) {
    case status.altAguardandoAnalise:
    case status.transfAguardandoAnalise:
      return NUM_APROVACAO;
    case status.altAguardandoEfetivacao:
      return NUM_APLICACAO;
    case status.transfConcluido:
    case status.altConcluido:
      return NUM_CONCLUIDO;
    case status.altReprovado:
    case status.transfReprovado:
      return NUM_CANCELADO;
    default:
      return 0;
  }
};

const createItems = (solicitacao, isTransferencia) => {
  const statusNumber = mapStatusToNumber(solicitacao?.status);
  if (isTransferencia) {
    return [
      {
        number: NUM_APROVACAO,
        label: 'APROVAÇÃO E EFETIVAÇÃO DE LIMITE',
        checkmark: statusNumber > NUM_APROVACAO,
        active: statusNumber === NUM_APROVACAO,
        color: (solicitacao?.status === status.transfReprovado) ? 'red' : statusNumber > NUM_APROVACAO ? 'blue' : 'gray',
      }, {
        number: NUM_APLICACAO,
        label: 'CONCLUÍDO',
        checkmark: statusNumber === NUM_CONCLUIDO,
        active: statusNumber === NUM_CONCLUIDO,
        color: statusNumber === NUM_CONCLUIDO ? 'blue' : 'gray',
      },
    ];
  }
  return [
    {
      number: NUM_APROVACAO,
      label: 'APROVAÇÃO DE LIMITE',
      checkmark: statusNumber > NUM_APROVACAO,
      active: statusNumber === NUM_APROVACAO,
      color: (solicitacao?.status === status.altReprovado) ? 'red' : statusNumber > NUM_APROVACAO ? 'blue' : 'gray',
    }, {
      number: NUM_APLICACAO,
      label: 'AGUARDANDO EFETIVAÇÃO',
      checkmark: statusNumber > NUM_APLICACAO,
      active: statusNumber === NUM_APLICACAO,
      color: statusNumber > NUM_APLICACAO ? 'blue' : 'gray',
    }, {
      number: NUM_CONCLUIDO,
      label: 'CONCLUÍDO',
      checkmark: statusNumber === NUM_CONCLUIDO,
      active: statusNumber === NUM_CONCLUIDO,
      color: statusNumber === NUM_CONCLUIDO ? 'blue' : 'gray',
    },
  ];
};

const StatusBarSolicitacao = ({
  solicitacaoDetalhe, isLoading, isTransferencia,
}) => {
  const items = isLoading ? [] : createItems(solicitacaoDetalhe, isTransferencia);
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

StatusBarSolicitacao.propTypes = {
  solicitacaoDetalhe: PropTypes.object,
  isLoading: PropTypes.bool,
  isTransferencia: PropTypes.bool,
};

StatusBarSolicitacao.defaultProps = {
  solicitacaoDetalhe: null,
  isLoading: null,
  isTransferencia: false,
};

export default StatusBarSolicitacao;
