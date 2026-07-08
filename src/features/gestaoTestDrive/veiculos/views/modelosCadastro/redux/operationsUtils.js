import { Mixpanel, trackedProperties } from 'modules';

const isUpdateModelo = (getState) => {
  const { id } = getState().veiculos.cadastroModelo.modelo;
  return id !== null;
};

const getSuccessMessage = (getState) => {
  const isUpdate = isUpdateModelo(getState);

  if (isUpdate) {
    Mixpanel.trackSubmit(trackedProperties.editarModelo, false);
    return 'Modelo atualizado com sucesso';
  }

  Mixpanel.trackSubmit(trackedProperties.inserirModelo, false);
  return 'Modelo adicionado com sucesso';
};

const getErrorMessage = (getState) => {
  const isUpdate = isUpdateModelo(getState);

  if (isUpdate) {
    Mixpanel.trackSubmit(trackedProperties.editarModelo, true);
    return 'Erro ao atualizar o modelo';
  }

  Mixpanel.trackSubmit(trackedProperties.inserirModelo, true);
  return 'Erro ao adicionar o modelo, modelo já existente';
};

export default {
  isUpdateModelo,
  getSuccessMessage,
  getErrorMessage,
};
