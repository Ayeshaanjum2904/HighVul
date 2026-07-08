import _ from 'lodash';

import { Mixpanel, trackedProperties } from 'modules';

const isUpdateContato = (contato) => !_.isNull(contato.id);

const getSuccessMessage = (contato) => {
  const isUpdate = isUpdateContato(contato);
  if (isUpdate) {
    Mixpanel.trackSubmit(trackedProperties.editarContato, false);
    return 'Contato atualizado com sucesso';
  }
  Mixpanel.trackSubmit(trackedProperties.inserirContato, false);
  return 'Contato adicionado com sucesso';
};

const getErrorMessage = (contato, errors) => {
  const isUpdate = isUpdateContato(contato);
  if (isUpdate) {
    Mixpanel.trackSubmit(trackedProperties.editarContato, true, errors);
    return 'Erro ao atualizar o contato';
  }
  Mixpanel.trackSubmit(trackedProperties.inserirContato, true, errors);
  return 'Erro ao adicionar o contato';
};

export default {
  getErrorMessage,
  getSuccessMessage,
  isUpdateContato,
};
