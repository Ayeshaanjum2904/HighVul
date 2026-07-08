import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';

import statusEnum from '../../status';
import AprovarCreditoButton from './buttons/aprovarCreditoButton';
import ReprovarCreditoButton from './buttons/reprovarCreditoButton';
import AprovarAplicacaoButton from './buttons/aprovarAplicacaoButton';
import FooterError from './footerError';

import './solicitacaoModalFooter.scss';

const makeButtonMap = () => [
  {
    status: statusEnum.altAguardandoAnalise,
    button1: <ReprovarCreditoButton />,
    button2: <AprovarCreditoButton />,
  },
  {
    status: statusEnum.altAguardandoEfetivacao,
    button1: null,
    button2: <AprovarAplicacaoButton />,
  },
  { status: statusEnum.altConcluido, button1: null, button2: null },
  { status: statusEnum.altReprovado, button1: null, button2: null },

  {
    status: statusEnum.transfAguardandoAnalise,
    button1: <ReprovarCreditoButton />,
    button2: <AprovarCreditoButton />,
  },
  { status: statusEnum.transfConcluido, button1: null, button2: null },
  { status: statusEnum.transfReprovado, button1: null, button2: null },
];

const getButtons = (buttonMap, status) => {
  if (!_.isArray(buttonMap)) return null;
  return buttonMap.find((m) => m.status === status);
};

const permsListarLimite = [
  permissions.limite.listarAnaliseCredito,
  permissions.limite.listarTodos,
];

const SolicitacaoModalFooter = ({ status, isError }) => {
  const buttonMap = makeButtonMap();
  const buttons = getButtons(buttonMap, status);
  return (
    <div className="solicitacoes__modal-footer__container">
      <RenderIfPermission
        requireAny={permsListarLimite}
      >
        <div className="solicitacoes__modal-footer__error">
          {isError ? <FooterError /> : null}
        </div>
        <div className="solicitacoes__modal-footer__cancel">
          {buttons?.button1}
        </div>
        <div className="solicitacoes__modal-footer__aprovar">
          {buttons?.button2}
        </div>
      </RenderIfPermission>
    </div>
  );
};

SolicitacaoModalFooter.propTypes = {
  isError: PropTypes.bool,
  status: PropTypes.string,
};

SolicitacaoModalFooter.defaultProps = {
  isError: false,
  status: null,

};

export default SolicitacaoModalFooter;
