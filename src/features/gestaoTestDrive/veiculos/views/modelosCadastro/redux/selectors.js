import { createSelector } from 'reselect';

const isCloseDisabled = createSelector(
  (state) => state?.cadastroModelo?.sendModelo?.isLoading,
  (state) => state?.cadastroModelo?.uploadImagem?.isLoading,
  (state) => state?.cadastroModelo?.deleteModelo?.isLoading,
  (
    isSendingModelo,
    isUploadingImage,
    isDeletingModelo,
  ) => (isSendingModelo || isUploadingImage || isDeletingModelo),
);

const isButtonDisabled = createSelector(
  isCloseDisabled,
  (state) => state?.cadastroModelo?.modelo,
  (closeDisabledveiculo, modelo) => (
    !modelo.marca || !modelo.codigoModelo || !modelo.descricaoModelo || closeDisabledveiculo),
);

const buttonTitle = createSelector(
  (state) => state?.cadastroModelo?.modelo?.id,
  (id) => (id == null ? 'Cadastrar modelo' : 'Editar Modelo'),
);

const selectUrlModelo = createSelector(
  (state) => state?.cadastroModelo?.modelo?.urlModelo,
  (state) => state?.cadastroModelo?.uploadImagem?.urlDownload,
  (urlModelo, urlDownload) => (urlDownload ?? urlModelo),
);

export default {
  isCloseDisabled,
  buttonTitle,
  isButtonDisabled,
  selectUrlModelo,
};
