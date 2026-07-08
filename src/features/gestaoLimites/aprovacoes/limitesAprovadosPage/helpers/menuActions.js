/* eslint-disable key-spacing */
/* eslint-disable no-multi-spaces */
import { sortBy } from 'lodash';

const createAction = (label, action, status = null) => ({
  label,
  action: status ? () => action(status, label) : () => action(),
});

export const menuActions = (action = () => { }, cancelarAprovacao = () => { }) => ({
  aguardando_aprovacao_dealer: createAction('Liberar para dealer', action, 'aguardando_aprovacao_dealer'),
  aprovacao_retida: createAction('Reter aprovação', action, 'aprovacao_retida'),
  aprovacao_pausada: createAction('Pausar aprovação', action, 'aprovacao_pausada'),
  aprovacao_cancelada: createAction('Cancelar aprovação', cancelarAprovacao),
  enviado_para_cadastro: createAction('Enviar para cadastro', action, 'enviado_para_cadastro'),
  enviado_para_credito: createAction('Enviar para crédito', action, 'enviado_para_credito'),
  enviado_para_juridico: createAction('Enviar para jurídico', action, 'enviado_para_juridico'),
  aprovacao_finalizada: createAction('Aprovação finalizada', action, 'aprovacao_finalizada'),
  renovacao_cadastral: createAction('Em renovação cadastral', action, 'renovacao_cadastral'),
  cadastro_atualizado: createAction('Cadastro atualizado', action, 'cadastro_atualizado'),
  atualizacao_docs_juridico: createAction('Em atualização docs. jurídico', action, 'atualizacao_docs_juridico'),
});

const actionList = [
  'aprovacao_pausada',
  'enviado_para_cadastro',
  'enviado_para_credito',
  'enviado_para_juridico',
  'aprovacao_finalizada',
  'renovacao_cadastral',
  'cadastro_atualizado',
  'atualizacao_docs_juridico',
  'aprovacao_cancelada',
];

const removeActions = (removeList = []) => actionList.filter((item) => !removeList.includes(item));

const cadastroListActions = {
  enviado_para_cadastro: ['renovacao_cadastral', 'cadastro_atualizado'],
  renovacao_cadastral: ['cadastro_atualizado'],
  default: [],
};

const juridicoListActions = {
  enviado_para_juridico: ['atualizacao_docs_juridico'],
  default: [],
};

const financimentoRedeListActions = {
  'Liberar para dealer': ['aguardando_aprovacao_dealer', 'aprovacao_retida'],
  Pendente: ['aprovacao_cancelada'],
  aprovacao_retida: ['aguardando_aprovacao_dealer', 'aprovacao_cancelada'],
  aprovacao_cancelada: [],
  aprovacao_pausada: removeActions(['aprovacao_pausada']),
  enviado_para_cadastro: removeActions(['enviado_para_cadastro']),
  enviado_para_credito: removeActions(['enviado_para_credito']),
  enviado_para_juridico: removeActions(['enviado_para_juridico']),
  aprovacao_finalizada: [],
  renovacao_cadastral: removeActions(['renovacao_cadastral']),
  cadastro_atualizado: removeActions(['cadastro_atualizado']),
  atualizacao_docs_juridico: removeActions(['atualizacao_docs_juridico']),
  default: actionList,
};

const getActions = (actions, status) => actions[status] ?? actions.default;

const addUserActions = (permission, actions, userActions) => (
  permission
    ? new Set([...userActions, ...actions])
    : userActions
);

export const getUserActions = (
  permissions,
  statusLimite,
  isLiberadoDealer,
  defaultAction,
  cancelarAprovacao,
) => {
  let userActions = new Set([]);

  userActions = addUserActions(
    permissions.isGestaoCadastro,
    getActions(cadastroListActions, statusLimite),
    userActions,
  );

  userActions = addUserActions(
    permissions.isGestaoJuridico,
    getActions(juridicoListActions, statusLimite),
    userActions,
  );

  userActions = addUserActions(
    permissions.isGestaoFinanciamentoRede,
    getActions(financimentoRedeListActions, statusLimite),
    userActions,
  );

  if (!isLiberadoDealer) {
    userActions.add('aguardando_aprovacao_dealer');
  }

  if (userActions.size === 0) return [];
  const menuActionList = menuActions(defaultAction, cancelarAprovacao);
  return sortBy([...userActions].map((action) => menuActionList[action]), ['label']);
};
