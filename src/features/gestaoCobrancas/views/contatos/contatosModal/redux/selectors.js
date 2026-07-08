import _ from 'lodash';

import { createSelector } from 'reselect';

const buttonTitle = createSelector(
  (state) => state?.contatos?.modal?.contato?.id,
  (id) => (id === null
    ? 'Criar Contato'
    : 'Editar Contato'),
);

const modalInfo = createSelector(
  (state) => state?.contatos?.modal?.contato?.id,
  (id) => (id === null
    ? {
      title: 'Novo contato',
      subtitle: 'Preencha os dados para a criação do contato',
      button: 'Criar contato',
      confirmClose: false,
    }
    : {
      title: 'Editar contato',
      subtitle: 'Para editar, altere os dados desejados e clique em salvar edição',
      button: 'Salvar edição',
      confirmClose: true,
      alertTitle: 'Deseja sair de edição de contatos?',
      alertSubtitle: 'Ao sair, lembre-se de salvar as informações. Caso contrário elas não serão salvas.',
    }),
);

const isButtonEnabled = createSelector(
  (state) => state?.contatos?.modal?.contato,
  (contato) => (!contato.nome || _.isEmpty(contato.telefoneList)
             || _.isEmpty(contato.emailList) || !contato.papel.id),
);

const selectPapeis = createSelector(
  (state) => state?.contatos?.modal?.contato?.papel,
  (state) => state?.contatos?.modal?.papeis,
  (papel, papeis) => (_.isEmpty(papeis) ? [papel] : papeis)
    .map((p) => ({ value: p.id, text: p.descricao })),
);

export default {
  buttonTitle,
  isButtonEnabled,
  modalInfo,
  selectPapeis,
};
