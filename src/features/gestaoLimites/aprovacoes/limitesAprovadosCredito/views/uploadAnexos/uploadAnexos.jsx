import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileButton from 'common/controls/fileButton/fileButton';

const UploadAnexosCredito = ({
  uploadDocumento,
  downloadDocumento,
  deleteDocumento,
  documento,
  statusLimite,
  errorStatusList,
  label,
  maxFileSize,
  fileExtensions,
  showDeleteButton,
}) => {
  const [componentState, setComponentState] = useState({
    error: '',
    isLoading: false,
  });
  const [arquivoCarregado, setArquivoCarregado] = useState(null);

  const validatefile = (file) => {
    if (file.size > maxFileSize) {
      setComponentState({ ...componentState, error: 'Erro ao inserir arquivo. O tamanho excede o limite 5mb' });
      return false;
    }
    if (!(file.type.includes('image/') || file.type === 'application/pdf')) {
      setComponentState({ ...componentState, error: 'Erro ao inserir arquivo. O arquivo deve se tratar de uma imagem ou um pdf' });
      return false;
    }
    return true;
  };

  const upload = async (file) => {
    if (validatefile(file)) {
      setComponentState({ ...componentState, isLoading: true });
      if (await uploadDocumento(file)) setArquivoCarregado(file);
      setComponentState({ ...componentState, isLoading: false });
    }
  };

  const download = async () => {
    if (arquivoCarregado) {
      const blobUrl = URL.createObjectURL(arquivoCarregado);
      window.open(blobUrl, '_blank');
    } else {
      setComponentState({ ...componentState, isLoading: true });
      await downloadDocumento();
      setComponentState({ ...componentState, isLoading: false });
    }
  };

  const deleteFile = async () => {
    setComponentState({ ...componentState, isLoading: true });
    await deleteDocumento();
    setArquivoCarregado(null);
    setComponentState({ ...componentState, isLoading: false });
  };

  return (
    <FileButton
      downloadFile={download}
      uploadFile={upload}
      deleteFile={deleteFile}
      erro={
        Boolean(componentState.error)
        || (!documento?.nome && errorStatusList.includes(statusLimite))
      }
      nome={documento?.nome}
      tamanho={documento?.tamanho}
      isLoading={componentState.isLoading}
      textoErro={componentState.error}
      label={label}
      accept={fileExtensions}
      isDocumentoCarregado={Boolean(arquivoCarregado)}
      showDeleteButton={showDeleteButton}
    />
  );
};

UploadAnexosCredito.propTypes = {
  uploadDocumento: PropTypes.func,
  downloadDocumento: PropTypes.func,
  deleteDocumento: PropTypes.func,
  documento: PropTypes.shape({
    nome: PropTypes.string,
    tamanho: PropTypes.string,
  }),
  statusLimite: PropTypes.string.isRequired,
  errorStatusList: PropTypes.array,
  label: PropTypes.string,
  maxFileSize: PropTypes.number,
  fileExtensions: PropTypes.string,
  showDeleteButton: PropTypes.bool,
};

UploadAnexosCredito.defaultProps = {
  uploadDocumento: () => {},
  downloadDocumento: () => {},
  deleteDocumento: () => {},
  documento: null,
  errorStatusList: [],
  label: 'Documento',
  maxFileSize: 5242880,
  fileExtensions: '.pdf,.png,.jpg,.jpeg',
  showDeleteButton: true,
};

export default UploadAnexosCredito;
