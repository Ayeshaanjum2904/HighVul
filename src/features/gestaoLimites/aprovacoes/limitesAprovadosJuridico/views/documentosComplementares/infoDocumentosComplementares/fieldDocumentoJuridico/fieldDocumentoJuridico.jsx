import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Download, Info } from 'react-feather';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import { Box, Button, Typography } from '@mui/material';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import {
  Actions, Container, DocumentoInput, DownloadIcon,
  Field, FieldEmpty, Label, NomeDocumento, TamanhoDocumento,
  InfoIcon,
} from './fieldDocumentoJuridico.style';

const FieldDocumentoJuridico = ({
  listaPessoaDocumentacao, label, validarDocumento, invalidarDocumento, getDocumentoDownload,
  indexDocumento, indexPessoa, isReadonlyStatus, desfazerValidacaoDocumento, permissionList,
}) => {
  const [documento, setDocumento] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const filled = !_.isNull(documento?.documentoNome);

  useEffect(() => {
    setDocumento({
      ...listaPessoaDocumentacao[indexPessoa]?.documentoPendente[indexDocumento],
      indexPessoa,
      indexDocumento,
    });
  }, [listaPessoaDocumentacao]);

  const handleDownloadDocumento = () => {
    getDocumentoDownload(documento?.documentoId);
  };

  const renderField = () => (filled
    ? (
      <Field validated={documento?.validado} onClick={handleDownloadDocumento}>
        <NomeDocumento>{documento?.documentoNome}</NomeDocumento>
        <TamanhoDocumento>{` (${documento?.documentoTamanho}Mb)`}</TamanhoDocumento>
        <DownloadIcon><Download width={16} height={16} /></DownloadIcon>
      </Field>
    ) : (
      <FieldEmpty motivoRemocao={documento?.motivoRemocao}>
        Aguardando envio do arquivo.
        <InfoIcon><Info width={16} height={16} /></InfoIcon>
      </FieldEmpty>
    )
  );

  const handleValidacaoStart = () => {
    setOpenDialog(true);
    setDialogType('validar');
  };

  const handleDesfazerValidacaoStart = () => {
    setOpenDialog(true);
    setDialogType('desvalidar');
  };

  const handleValidarDocumento = (doc) => {
    if (dialogType === 'validar') validarDocumento(doc);
    if (dialogType === 'desvalidar') desfazerValidacaoDocumento(doc);
    setOpenDialog(false);
  };

  const renderActions = () => (filled
    ? (
      <Actions>
        {!documento?.validado && !isReadonlyStatus && (
          <>
            {permissionList.isGestaoJuridico && (
              <IconButtonTooltip
                tooltip="Validar"
                onClick={() => handleValidacaoStart(documento)}
                padding={0}
                margin={0}
              >
                <CheckRoundedIcon
                  sx={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '4px',
                    color: '#06C270',
                    backgroundColor: '#06C27014',
                    padding: '4px',
                  }}
                />
              </IconButtonTooltip>
            )}
            <IconButtonTooltip
              tooltip="Invalidar"
              onClick={() => invalidarDocumento(documento)}
              padding={0}
              margin={0}
            >
              <CloseRoundedIcon
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  color: '#E42313',
                  backgroundColor: '#ED5C6F14',
                  padding: '4px',
                }}
              />
            </IconButtonTooltip>
          </>
        )}
        {documento?.validado && (
          <>
            <CheckRoundedIcon
              sx={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                color: '#06C270',
                padding: '4px',
              }}
            />
            {permissionList.isGestaoJuridico && (
              <IconButtonTooltip
                tooltip="Desfazer validação"
                onClick={() => handleDesfazerValidacaoStart()}
                padding={0}
                margin={0}
              >
                <KeyboardReturnRoundedIcon
                  sx={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '4px',
                    color: '#555770',
                    backgroundColor: '#E5E6EB',
                    padding: '4px',
                  }}
                />
              </IconButtonTooltip>
            )}
          </>
        )}
      </Actions>
    )
    : <Box sx={{ minWidth: 68 }} />);

  return (
    <Container>
      <DocumentoInput>
        <Label>{label}</Label>
        {renderField()}
      </DocumentoInput>
      {renderActions()}
      <AlertDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        icon={dialogType === 'validar'
          ? <CheckRoundedIcon sx={{ color: '#06C270' }} />
          : <KeyboardReturnRoundedIcon sx={{ color: '#555770' }} />}
        title={dialogType === 'validar' ? 'Validar documento' : 'Desfazer validação'}
        content={(
          <Typography variant="14_regular">
            {dialogType === 'validar'
              ? 'Tem certeza que deseja validar o documento'
              : 'Tem certeza que deseja desfazer a validação do documento'}
            <b>{` "${documento?.documentoNome}"`}</b>
            ?
          </Typography>
        )}
        actions={(
          <>
            <Button variant="outlined" onClick={() => setOpenDialog(false)} color="secondary700">Cancelar</Button>
            <Button variant="contained" onClick={() => handleValidarDocumento(documento)} color="secondary700">
              {dialogType === 'validar'
                ? 'Sim, validar'
                : 'Sim, desfazer'}
            </Button>
          </>
        )}
      />
    </Container>
  );
};

FieldDocumentoJuridico.propTypes = {
  label: PropTypes.string,
  validarDocumento: PropTypes.func,
  invalidarDocumento: PropTypes.func,
  getDocumentoDownload: PropTypes.func,
  listaPessoaDocumentacao: PropTypes.array.isRequired,
  indexPessoa: PropTypes.number.isRequired,
  indexDocumento: PropTypes.number.isRequired,
  isReadonlyStatus: PropTypes.bool,
  desfazerValidacaoDocumento: PropTypes.func,
  permissionList: PropTypes.object,
};

FieldDocumentoJuridico.defaultProps = {
  label: 'Arquivo',
  validarDocumento: () => {},
  invalidarDocumento: () => {},
  getDocumentoDownload: () => {},
  isReadonlyStatus: false,
  desfazerValidacaoDocumento: () => {},
  permissionList: null,
};

export default FieldDocumentoJuridico;
