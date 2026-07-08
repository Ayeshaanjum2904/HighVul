import { Mixpanel, trackedProperties } from 'modules';

const isUpdateModelo = (getState) => {
  const { id } = getState().veiculos.cadastroVeiculo.veiculo;
  return id !== null;
};

const getSuccessMessage = (getState) => {
  const isUpdate = isUpdateModelo(getState);

  if (isUpdate) {
    Mixpanel.trackSubmit(trackedProperties.editarVeiculo, false);
    return 'Veículo atualizado com sucesso.';
  }

  Mixpanel.trackSubmit(trackedProperties.inserirVeiculo, false);
  return 'Veículo adicionado com sucesso.';
};

const getErrorMessage = (getState) => {
  const isUpdate = isUpdateModelo(getState);

  if (isUpdate) {
    Mixpanel.trackSubmit(trackedProperties.editarVeiculo, true);
    return 'Erro ao atualizar o modelo';
  }

  Mixpanel.trackSubmit(trackedProperties.inserirVeiculo, true);
  return 'Erro ao adicionar o modelo, modelo já existente';
};

export default {
  isUpdateModelo,
  getSuccessMessage,
  getErrorMessage,
};
