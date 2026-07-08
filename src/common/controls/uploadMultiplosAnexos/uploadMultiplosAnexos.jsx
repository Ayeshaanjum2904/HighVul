import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { convertBytesToMb } from 'utils/file';
import { Box, Stack, Typography } from '@mui/material';
import TooltipMessage from 'common/controls/tooltipMessage';
import moment from 'moment';
import FileButton from './fileButton';
import {
  StyledChip, StyledAttachFileIcon, StyledCloseIcon, StyledCircularProgress,
} from './uploadMultiplosAnexos.style';
import DropzoneArea from '../dropzoneArea/dropzoneArea';

const UploadMultiplosAnexos = ({
  uploadDocumento,
  uploadMultiplosDocumentos,
  deleteDocumento,
  downloadDocumento,
  documentos,
  accept,
  error,
  disabled,
  disableUpload,
  handleInvalidAnexo,
  isDragAndDrop,
  multipleSelection,
}) => {
  const [arquivosCarregados, setArquivosCarregados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});

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
      return { valid: false, message: 'Arquivo com tamanho superior à 10Mb' };
    }
    if (!validTypes.some((type) => file.type.includes(type))) {
      return { valid: false, message: 'Arquivo com formato inválido' };
    }

    return { valid: true };
  };

  const upload = async (file) => {
    const result = validatefile(file);
    if (result?.valid) {
      setIsLoading(true);
      const novoDocumento = await uploadDocumento(file);
      if (novoDocumento) setArquivosCarregados([...arquivosCarregados, novoDocumento]);
      setIsLoading(false);
    } else {
      handleInvalidAnexo(result?.message);
    }
  };

  const uploadMultiple = async (files) => {
    const validFiles = [];
    files.forEach((file) => {
      const result = validatefile(file);
      if (result?.valid) {
        validFiles.push(file);
      } else handleInvalidAnexo(`${result?.message}: ${file.name}`);
    });

    if (validFiles.length) {
      setIsLoading(true);
      const novosDocumentos = await uploadMultiplosDocumentos(validFiles);
      setIsLoading(false);
      if (novosDocumentos.length) {
        setArquivosCarregados([...arquivosCarregados, ...novosDocumentos]);
      }
    }
  };

  const deleteFile = (documento) => {
    deleteDocumento(documento);
    setArquivosCarregados(
      arquivosCarregados.filter(
        (arquivo) => arquivo.nomeGuid !== documento.nomeGuid,
      ),
    );
  };

  const download = async (documento) => {
    const arquivoCarregado = arquivosCarregados.find(
      (arquivo) => arquivo.nomeGuid === documento.nomeGuid,
    );
    if (arquivoCarregado) {
      const blobUrl = URL.createObjectURL(arquivoCarregado.file);
      window.open(blobUrl, '_blank');
    } else {
      setLoadingStates((prev) => ({ ...prev, [documento.nomeGuid]: true }));
      await downloadDocumento(documento?.nomeGuid);
      setLoadingStates((prev) => ({ ...prev, [documento.nomeGuid]: false }));
    }
  };

  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      spacing={0}
      sx={{ flexWrap: 'wrap', columnGap: '8px' }}
    >
      {!disableUpload && (
      <DropzoneArea
        showArea={isDragAndDrop}
        label="Formatos suportados: .pdf, .doc, .docx, .xls, .xlsx, .jpg, .jpeg e .png"
        onUpload={(files) => uploadMultiple(files)}
        error={error}
        childrenProps={{
          label: 'Selecione um arquivo para inserir',
          width: '278px',
          secondary: true,
          error,
        }}
      >
        <FileButton
          onUpload={
            (file) => (multipleSelection
              ? uploadMultiple(file)
              : upload(file))
          }
          accept={accept}
          disabled={disabled}
          error={error}
          sx={{ order: -1 }}
          multipleSelection={multipleSelection}
        />
      </DropzoneArea>
      )}
      <Stack
        direction="row"
        width="100%"
        alignItems="flex-start"
        spacing={0}
        sx={{
          flexWrap: 'wrap', marginTop: '8px', columnGap: '8px', rowGap: '8px',
        }}
      >
        {(documentos || []).map((documento, index) => (
          <div style={{ width: '32.8%' }} key={index}>
            <StyledChip
              key={documento.nomeGuid}
              icon={loadingStates[documento.nomeGuid]
                ? <Box height={16} width={16}><StyledCircularProgress /></Box>
                : <StyledAttachFileIcon />}
              label={(
                <TooltipMessage title={documento.nomeOriginal} maxWidth="480px" className="full-width-label">
                  <div className="label-wrapper">
                    <span className="file-name">
                      {documento.nomeOriginal}
                      {' '}
                    </span>
                    <span className="file-size">
                      {`(${documento.tamanho}mb)`}
                    </span>
                  </div>
                </TooltipMessage>
              )}
              onDelete={disableUpload ? null : () => deleteFile(documento)}
              disabled={disabled}
              color={documento.isError ? 'error' : 'default'}
              deleteIcon={<StyledCloseIcon />}
              onClick={() => download(documento)}
            />
            {Boolean(documento?.anexadoEm) && (
              <Typography variant="10_regular">
                {`Anexado em ${moment(documento?.anexadoEm).format('DD/MM/YYYY')}`}
              </Typography>
            )}
          </div>
        ))}
        {isLoading && (
          <Box height="38px" alignContent="center">
            <StyledCircularProgress />
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

UploadMultiplosAnexos.propTypes = {
  uploadDocumento: PropTypes.func,
  uploadMultiplosDocumentos: PropTypes.func,
  deleteDocumento: PropTypes.func,
  downloadDocumento: PropTypes.func,
  documentos: PropTypes.array,
  accept: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  disableUpload: PropTypes.bool,
  handleInvalidAnexo: PropTypes.func,
  isDragAndDrop: PropTypes.bool,
  multipleSelection: PropTypes.bool,
};

UploadMultiplosAnexos.defaultProps = {
  uploadDocumento: () => { },
  uploadMultiplosDocumentos: () => {},
  deleteDocumento: () => { },
  downloadDocumento: () => { },
  documentos: [],
  accept: ['.pdf', '.png', '.jpg', '.doc', '.docx', '.xls', '.xlsx'],
  disabled: false,
  disableUpload: false,
  error: false,
  handleInvalidAnexo: () => { },
  isDragAndDrop: false,
  multipleSelection: false,
};

export default UploadMultiplosAnexos;
