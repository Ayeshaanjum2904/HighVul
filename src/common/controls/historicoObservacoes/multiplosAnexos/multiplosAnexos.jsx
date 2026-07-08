import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { convertBytesToMb } from 'utils/file';
import UploadButton from './uploadButton';
import {
  StyledChip, StyledTaskIcon, StyledCloseIcon, StyledCircularProgress,
} from './multiplosAnexos.style';

const MultiplosAnexos = ({
  uploadDocumento, downloadDocumento, deleteDocumento,
  urlDownload, documentos, accept, disabled, addSnackbar,
  error, disableUpload,
}) => {
  const [arquivosCarregados, setArquivosCarregados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});

  useEffect(() => {
    if (urlDownload) window.open(urlDownload, '_blank');
  }, [urlDownload]);

  const validatefile = (file) => {
    const validTypes = [
      'image/',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];

    if (convertBytesToMb(file.size) > 10.0) {
      addSnackbar('Erro ao inserir arquivo. O tamanho excede o limite 10mb');
      return false;
    }
    if (!validTypes.some((type) => file.type.includes(type))) {
      addSnackbar('Erro ao inserir arquivo. O arquivo deve se tratar de uma imagem, pdf, word ou excel.');
      return false;
    }

    return true;
  };

  const upload = async (file) => {
    if (validatefile(file)) {
      setIsLoading(true);
      const novoDocumento = await uploadDocumento(file);
      if (novoDocumento) {
        setArquivosCarregados([...arquivosCarregados, novoDocumento]);
      }
      setIsLoading(false);
    }
  };

  const download = async (documento) => {
    const arquivoCarregado = arquivosCarregados
      .find((arquivo) => arquivo.nomeGuid === documento.nomeGuid);
    if (arquivoCarregado) {
      const blobUrl = URL.createObjectURL(arquivoCarregado.file);
      window.open(blobUrl, '_blank');
    } else {
      setLoadingStates((prev) => ({ ...prev, [documento.nomeGuid]: true }));
      await downloadDocumento(documento.id);
      setLoadingStates((prev) => ({ ...prev, [documento.nomeGuid]: false }));
    }
  };

  const deleteFile = (documento) => {
    deleteDocumento(documento);
    setArquivosCarregados(arquivosCarregados
      .filter((arquivo) => arquivo.nomeGuid !== documento.nomeGuid));
  };

  return (
    <Stack direction="row" alignItems="center" spacing={0} sx={{ flexWrap: 'wrap', columnGap: '8px' }}>
      {documentos.map((documento, index) => (
        <>
          <StyledChip
            disableUpload={disableUpload}
            key={index}
            icon={<StyledTaskIcon />}
            label={documento.nomeOriginal}
            onDelete={disableUpload ? null : () => deleteFile(documento)}
            onClick={() => download(documento)}
            disabled={disabled}
            color={documento.isError ? 'error' : 'default'}
            deleteIcon={<StyledCloseIcon />}
          />
          {loadingStates[documento.nomeGuid] && (
            <StyledCircularProgress size={15} />
          )}
        </>
      ))}
      {isLoading && (
        <StyledCircularProgress size={15} />
      )}
      {!disableUpload && (
        <UploadButton
          onUpload={(file) => upload(file)}
          accept={accept}
          disabled={disabled}
          error={error}
        />
      )}
    </Stack>
  );
};

MultiplosAnexos.propTypes = {
  uploadDocumento: PropTypes.func,
  downloadDocumento: PropTypes.func,
  deleteDocumento: PropTypes.func,
  urlDownload: PropTypes.string,
  documentos: PropTypes.array,
  accept: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  addSnackbar: PropTypes.func,
  error: PropTypes.bool,
  disableUpload: PropTypes.bool,
};

MultiplosAnexos.defaultProps = {
  uploadDocumento: () => {},
  downloadDocumento: () => {},
  deleteDocumento: () => {},
  urlDownload: null,
  documentos: [],
  accept: ['.pdf', '.png', '.jpg', '.doc', '.docx', '.xls', '.xlsx'],
  disabled: false,
  addSnackbar: () => {},
  error: false,
  disableUpload: false,
};

export default MultiplosAnexos;
