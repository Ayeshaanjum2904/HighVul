import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Download } from 'react-feather';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import { Box, Button, Typography } from '@mui/material';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import DeleteDialog from './deleteDialog/deleteDialog';
import {
  Actions, Container, DocumentoInput, DownloadIcon,
  Field, FieldEmpty, Label, NomeDocumento, TamanhoDocumento,
} from './fieldDocumento.style';

const FieldDocumento = ({
  label, documento, validarDocumento, invalidarDocumento, deletarDocumento, getDocumentoDownload,
  isCadastro, editMode, tipoDocumento, desfazerValidacaoDocumento, permissionList,
}) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [documentoParaDeletar, setDocumentoParaDeletar] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const filled = !_.isNull(documento);

  const handleDownloadDocumento = () => {
    const id = isCadastro ? documento.id : documento.idPessoaDocumentacao;
    getDocumentoDownload(id, isCadastro);
  };

  const handleDeletarDocumentoComConfirmacao = (nomeDocumento) => {
    setDocumentoParaDeletar(nomeDocumento);
    setOpenDeleteDialog(true);
  };

  const handleDelete = () => {
    deletarDocumento(documentoParaDeletar);
  };

  const renderField = () => (filled
    ? (
      <Field validated={isCadastro || documento?.validado} onClick={handleDownloadDocumento}>
        <NomeDocumento>{documento?.nomeOriginal}</NomeDocumento>
        <TamanhoDocumento>{` (${documento?.tamanho}Mb)`}</TamanhoDocumento>
        <DownloadIcon><Download width={16} height={16} /></DownloadIcon>
      </Field>
    ) : (
      <FieldEmpty>
        Aguardando envio do arquivo.
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

  const renderActions = () => {
    if (editMode) {
      return (
        <Actions>
          <IconButtonTooltip
            tooltip="Deletar"
            onClick={() => handleDeletarDocumentoComConfirmacao(tipoDocumento)}
            padding={4}
          >
            <DeleteRoundedIcon />
          </IconButtonTooltip>
        </Actions>
      );
    }
    if (!filled) {
      return (
        <Actions>
          <Box sx={{ minWidth: 56 }} />
        </Actions>
      );
    }
    return (
      <Actions>
        {!documento?.validado && (
          <>
            <IconButtonTooltip
              tooltip="Validar"
              onClick={() => handleValidacaoStart()}
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
            <IconButtonTooltip
              tooltip="Invalidar"
              onClick={() => invalidarDocumento(documento, tipoDocumento)}
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
          </>
        )}
      </Actions>
    );
  };

  return (
    <Container>
      <DocumentoInput>
        <Label>{label}</Label>
        {renderField()}
      </DocumentoInput>
      {!isCadastro && !permissionList.isGestaoJuridico && renderActions()}
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
            <b>{` "${documento?.nomeDocumento}"`}</b>
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
      <DeleteDialog
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        onDelete={handleDelete}
        hasAnexoDealer={!!documento}
        documento={tipoDocumento}
      />
    </Container>
  );
};

FieldDocumento.propTypes = {
  documento: PropTypes.object,
  label: PropTypes.string,
  validarDocumento: PropTypes.func,
  invalidarDocumento: PropTypes.func,
  deletarDocumento: PropTypes.func,
  getDocumentoDownload: PropTypes.func,
  isCadastro: PropTypes.bool,
  editMode: PropTypes.bool,
  tipoDocumento: PropTypes.string,
  desfazerValidacaoDocumento: PropTypes.func,
  permissionList: PropTypes.object,
};

FieldDocumento.defaultProps = {
  documento: null,
  label: 'Documento',
  validarDocumento: () => {},
  invalidarDocumento: () => {},
  deletarDocumento: () => {},
  getDocumentoDownload: () => {},
  isCadastro: false,
  editMode: false,
  tipoDocumento: '',
  desfazerValidacaoDocumento: () => {},
  permissionList: null,
};

export default FieldDocumento;
