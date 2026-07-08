import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { convertBytesToMb } from 'utils/file';
import FileButton from './fileButton';

const UploadDocumento = ({
  uploadDocumento,
  downloadDocumento,
  deleteDocumento,
  setErroDocumento,
  anexoRemovido,
  urlDownload,
  documento,
  label,
  placeholder,
  accept,
  isLoading,
  isError,
  disabled,
  showDeleteButton,
  hideLabel,
  width,
  maxWidth,
  validateAllTypes,
  maxSizeMB,
}) => {
  const [arquivoCarregado, setArquivoCarregado] = useState(null);

  useEffect(() => {
    if (urlDownload) window.open(urlDownload, '_blank');
  }, [urlDownload]);

  useEffect(() => {
    if (anexoRemovido) setErroDocumento('Erro ao inserir arquivo. O tamanho excede o limite 5mb', documento);
  }, []);

  const getErrorMessageByAccept = () => {
    if (accept) {
      const extensions = accept.split(',').map((ext) => ext.trim());
      const extensionsText = extensions.join(' ou ');
      return `Erro ao inserir arquivo. O arquivo deve ser do tipo ${extensionsText}.`;
    }
    return validateAllTypes
      ? 'Erro ao inserir arquivo. O arquivo deve se tratar de uma imagem, pdf, word ou excel.'
      : 'Erro ao inserir arquivo. O arquivo deve se tratar de uma imagem ou pdf.';
  };

  const validatefile = (file) => {
    const validTypes = validateAllTypes ? [
      'image/',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ] : [
      'image/',
      'application/pdf',
    ];

    if (convertBytesToMb(file.size) > maxSizeMB) {
      setErroDocumento(`Erro ao inserir arquivo. O tamanho excede o limite de ${maxSizeMB}mb`, documento);
      return false;
    }
    if (!validTypes.some((type) => file.type.includes(type))) {
      const messageError = getErrorMessageByAccept();
      setErroDocumento(messageError, documento);
      return false;
    }

    return true;
  };

  const upload = (file) => {
    if (validatefile(file)) {
      uploadDocumento(file);
      setArquivoCarregado(file);
    }
  };

  const download = () => {
    if (arquivoCarregado) {
      const blobUrl = URL.createObjectURL(arquivoCarregado);
      window.open(blobUrl, '_blank');
    } else {
      downloadDocumento(documento);
    }
  };

  const deleteFile = () => {
    deleteDocumento(documento);
    setArquivoCarregado(null);
  };

  return (
    <FileButton
      downloadFile={download}
      uploadFile={upload}
      deleteFile={deleteFile}
      erro={documento?.isError || isError}
      nome={documento?.nome ? documento?.nome : documento?.nomeOriginal}
      tamanho={documento?.tamanho}
      isLoading={documento?.isLoading || isLoading}
      textoErro={documento?.textoErro}
      label={label}
      placeholder={placeholder}
      accept={accept}
      disabled={disabled}
      showDeleteButton={showDeleteButton}
      hideLabel={hideLabel}
      maxWidth={maxWidth}
      width={width}
    />
  );
};

UploadDocumento
  .propTypes = {
    uploadDocumento: PropTypes.func,
    downloadDocumento: PropTypes.func,
    deleteDocumento: PropTypes.func,
    setErroDocumento: PropTypes.func,
    anexoRemovido: PropTypes.bool,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    showDeleteButton: PropTypes.bool,
    hideLabel: PropTypes.bool,
    urlDownload: PropTypes.string,
    documento: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    accept: PropTypes.string,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    disabled: PropTypes.bool,
    validateAllTypes: PropTypes.bool,
    maxSizeMB: PropTypes.number,
  };

UploadDocumento
  .defaultProps = {
    uploadDocumento: () => {},
    downloadDocumento: () => {},
    deleteDocumento: () => {},
    setErroDocumento: () => {},
    anexoRemovido: false,
    isLoading: false,
    isError: false,
    showDeleteButton: false,
    hideLabel: false,
    urlDownload: null,
    documento: null,
    width: null,
    maxWidth: '700px',
    label: undefined,
    placeholder: undefined,
    accept: '.pdf,.png,.jpg,.jpeg',
    disabled: false,
    validateAllTypes: false,
    maxSizeMB: 5.0,
  };

export default UploadDocumento;
