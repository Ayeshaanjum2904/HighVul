import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import SelectMultiActionForm from 'common/controls/selectMultiAction/selectMultiActionForm';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import SummaryPage from 'common/controls/summaryPage';
import UploadMultiplosAnexos from 'common/controls/uploadMultiplosAnexos/uploadMultiplosAnexos';
import colors from 'assets/styles/colors';
import TipoEnvioDocumento from './tipoEnvioDocumento/tipoEnvioDocumento';
import EnvelopeDocusign from './envelopeDocusign';
import {
  dialogTipoEnvioDefault, formDictionary, selectDictionary, tipoEnvioDialogDictionary,
} from './documentoFormalizarForm.style';

const DocumentoFormalizarForm = ({
  onSubmit, closeForm, enabled, setEnabled, defaultValues, editMode,
  documentoList, getDocumentoList, createDocumento, deleteDocumento,
  loadingDocumentoList, hideCloseButton, uploadAnexo, uploadMultiplosAnexos,
  downloadAnexo, handleInvalidAnexo,
}) => {
  const {
    handleSubmit, reset, formState: { isSubmitting, isDirty },
    watch, setValue, clearErrors, control,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      tipoDocumento: '',
      tipoEnvioDocumento: [],
      filesToDelete: [],
      listaArquivos: [],
      ...defaultValues,
    },
  });
  const idEnvelopeDocusign = watch('idEnvelopeDocusign');

  const tipoEnvioDocumento = watch('tipoEnvioDocumento');
  const { append, remove } = useFieldArray({
    control, name: 'tipoEnvioDocumento',
  });

  const listaArquivos = watch('listaArquivos', []);
  const { append: appendAnexo, remove: removeAnexo } = useFieldArray({
    control, name: 'listaArquivos',
  });

  const { append: appendDelete } = useFieldArray({
    control, name: 'filesToDelete',
  });

  const formRef = useRef(null);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [dialogTipoEnvio, setDialogTipoEnvio] = useState(dialogTipoEnvioDefault);
  const [showError, setShowError] = useState(false);

  const text = useMemo(() => formDictionary(editMode), [editMode]);
  const isDocusign = useMemo(() => tipoEnvioDocumento?.some((tipo) => tipo === 'docusign'), [tipoEnvioDocumento]);
  const isAnexoDealer = useMemo(() => tipoEnvioDocumento?.some((tipo) => tipo === 'anexo_do_dealer'), [tipoEnvioDocumento]);
  const disableInputs = useMemo(() => !enabled || isSubmitting, [enabled, isSubmitting]);
  const documentosJuridico = useMemo(() => (Array.isArray(listaArquivos) ? listaArquivos.filter((arquivo) => arquivo?.tipo === 'juridico') : []), [listaArquivos]);
  const documentosDealer = useMemo(() => {
    const filtered = Array.isArray(listaArquivos)
      ? listaArquivos.filter((arquivo) => arquivo?.tipo === 'dealer')
      : [];
    return filtered.sort((a, b) => {
      const dateA = new Date(a.anexadoEm);
      const dateB = new Date(b.anexadoEm);
      return dateB - dateA;
    });
  }, [listaArquivos]);

  useEffect(() => {
    if (enabled) getDocumentoList();
  }, [enabled]);

  useEffect(() => {
    if (formRef) formRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [formRef]);

  useEffect(() => {
    if (isDocusign) {
      setShowError(false);
    }
  }, [isDocusign]);

  const handleFormSubmit = async (data) => {
    if (!isDocusign && documentosJuridico.length === 0) {
      setShowError(true);
      return;
    }

    setShowError(false);
    const { tipoDocumento, ...fields } = data;
    const nome = data?.nome ?? documentoList.find((d) => d?.value === tipoDocumento)?.text;
    await onSubmit({ ...fields, nome });
  };

  const handleCreateDocumento = async (newValue) => {
    const result = await createDocumento([newValue]);
    if (result) setValue('documento', result);
  };

  const handleDeleteDocumento = async (itemValue) => {
    const result = await deleteDocumento(itemValue);
    if (result) getDocumentoList();
  };

  const handleFormReset = () => {
    if (openResetDialog) setOpenResetDialog(false);
    if (editMode) setEnabled(false);
    setShowError(false);
    reset();
  };

  const handleResetButton = () => {
    if (isDirty) setOpenResetDialog(true);
    else handleFormReset();
  };

  const resetDialogTipoEnvio = () => setDialogTipoEnvio(dialogTipoEnvioDefault);

  const handleRemoveTipoEnvio = (tipoEnvio, index) => {
    if (tipoEnvio === 'docusign' && Boolean(idEnvelopeDocusign)) {
      setDialogTipoEnvio({
        open: true, tipoEnvio, index, key: 0,
      });
      return;
    }

    if (tipoEnvio === 'anexo_do_dealer' && documentosDealer?.length > 0) {
      setDialogTipoEnvio({
        open: true, tipoEnvio, index, key: 1,
      });
      return;
    }
    remove(index);
  };

  const handleAppendTipoEnvio = (tipoEnvio) => {
    if (tipoEnvio === 'docusign' && (documentosJuridico?.length > 0 || documentosDealer?.length > 0)) {
      setDialogTipoEnvio({
        open: true, tipoEnvio: 'docusign', index: -1, key: 2,
      });
      return;
    }
    append(tipoEnvio);
  };

  const removeFiles = (list) => {
    const indexes = list.map(
      (file) => listaArquivos.findIndex(
        (item) => item.nomeGuid === file.nomeGuid,
      ),
    );
    appendDelete(list?.map((doc) => doc?.nomeGuid));
    removeAnexo(indexes);
  };

  const handleTipoEnvioAction = () => {
    const isAppend = dialogTipoEnvio?.index === -1;
    if (dialogTipoEnvio?.tipoEnvio === 'anexo_do_dealer') removeFiles(documentosDealer);

    if (dialogTipoEnvio?.tipoEnvio === 'docusign' && isAppend) {
      if (documentosJuridico?.length > 0) removeFiles(documentosJuridico);
      if (documentosDealer?.length > 0) removeFiles(documentosDealer);
    }

    if (isAppend) append(dialogTipoEnvio?.tipoEnvio);
    else remove(dialogTipoEnvio?.index);

    resetDialogTipoEnvio();
  };

  const handleUploadAnexo = async (file) => {
    const novoAnexo = await uploadAnexo(file);
    if (novoAnexo) {
      const {
        nomeGuid, nomeOriginal, tamanho, type, tipo,
      } = novoAnexo;
      appendAnexo({
        nomeGuid, nomeOriginal, tamanho, type, tipo,
      });
      clearErrors('lisaArquivos');
      if (tipo === 'juridico') {
        setShowError(false);
      }
      return novoAnexo;
    }
    return null;
  };

  const handleUploadMultiplosAnexos = async (files) => {
    const novosAnexos = await uploadMultiplosAnexos(files);
    if (novosAnexos) {
      novosAnexos.map((anexo) => appendAnexo({
        nomeGuid: anexo.nomeGuid,
        nomeOriginal: anexo.nomeOriginal,
        tamanho: anexo.tamanho,
        type: anexo.type,
        tipo: anexo.tipo,
      }));
      clearErrors('lisaArquivos');
      const temAnexoJuridico = novosAnexos.some((anexo) => anexo.tipo === 'juridico');
      if (temAnexoJuridico) {
        setShowError(false);
      }
      return novosAnexos;
    }
    return null;
  };

  const handleDeleteAnexo = (anexo) => {
    const indexAnexo = listaArquivos.findIndex(
      (arquivo) => arquivo?.nomeGuid === anexo?.nomeGuid,
    );
    if (indexAnexo > -1) {
      removeAnexo(indexAnexo);
      if (anexo?.anexadoEm) appendDelete(anexo?.nomeGuid);
    }
  };

  const renderEmptyList = () => (
    <Stack color={colors.primary_color_600} height={104} gap="8px" alignItems="center" padding="24px 0px">
      <FileCopyRoundedIcon color="inherit" />
      <Typography component="span" lineHeight="24px" variant="14_bold" color="inherit">
        Não existem documentos anexados
      </Typography>
    </Stack>
  );

  const renderDocumentosJuridico = () => {
    const anexos = (!enabled && documentosJuridico?.length === 0
      ? renderEmptyList()
      : (
        <Box padding="8px 16px 0px 16px">
          <UploadMultiplosAnexos
            uploadDocumento={handleUploadAnexo}
            uploadMultiplosDocumentos={handleUploadMultiplosAnexos}
            deleteDocumento={handleDeleteAnexo}
            downloadDocumento={downloadAnexo}
            documentos={documentosJuridico}
            disableUpload={disableInputs}
            handleInvalidAnexo={handleInvalidAnexo}
            error={showError}
            isDragAndDrop
            multipleSelection
          />
        </Box>
      ));

    return enabled ? (
      <Stack gap="8px">
        <Typography component="span" variant="14_regular" padding="0 16px">
          Insira um ou mais arquivos para envio
        </Typography>
        {anexos}
      </Stack>
    ) : (
      <SummaryPage level={6} title="Documentos jurídico" open={enabled}>
        {anexos}
      </SummaryPage>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <Stack gap="16px" paddingBottom={enabled ? '0px' : '8px'}>
          {!editMode && (
          <Box position="relative" padding="16px 16px 0px 16px">
            {!hideCloseButton && (
              <Box position="absolute" right={8} top={8}>
                <IconButtonTooltip tooltip="Fechar" onClick={closeForm} size={20} placement="bottom-end">
                  <CloseRoundedIcon />
                </IconButtonTooltip>
              </Box>
            )}
            <Typography component="span" variant="14_regular">
              Selecione os documentos que deverão ser formalizados para envio.
            </Typography>
          </Box>
          )}
          <Stack direction="row" gap="16px" alignItems="center" padding={`${editMode ? '16px' : '0px'} 16px 0px 16px`}>
            {!editMode && (
            <SelectMultiActionForm
              disabled={disableInputs}
              control={control}
              required
              fieldName="tipoDocumento"
              label="Documentos"
              dictionary={selectDictionary}
              items={documentoList}
              onCreate={handleCreateDocumento}
              onDelete={handleDeleteDocumento}
              loading={loadingDocumentoList}
              hideCheckbox
            />
            )}
            <TipoEnvioDocumento
              value={tipoEnvioDocumento}
              append={handleAppendTipoEnvio}
              remove={handleRemoveTipoEnvio}
              disabled={disableInputs}
              text={enabled ? text.tipoEnvio : undefined}
            />
          </Stack>
          {isDocusign && (
            <EnvelopeDocusign
              label="ID do envelope Docusign"
              fieldName="idEnvelopeDocusign"
              control={control}
              required
              disabled={disableInputs}
              defaultValue={defaultValues?.idEnvelopeDocusign}
            />
          )}
          <Box>
            {!isDocusign && renderDocumentosJuridico()}

            {(isAnexoDealer && !enabled) && (
            <SummaryPage level={6} title="Documentos dealer">
              {documentosDealer?.length > 0
                ? (
                  <Box padding="16px">
                    <UploadMultiplosAnexos
                      downloadDocumento={downloadAnexo}
                      documentos={documentosDealer}
                      disableUpload
                    />
                  </Box>
                ) : renderEmptyList()}
            </SummaryPage>
            )}
          </Box>
          {enabled && (
            <Stack direction="row" justifyContent="flex-end" gap="12px" padding="0px 16px 16px 16px">
              <Button
                onClick={handleResetButton}
                color="secondary700"
                variant="outlined"
                disabled={isSubmitting}
              >
                {text?.secondaryAction}
              </Button>
              <LoadingButton
                type="submit"
                color="secondary700"
                variant="contained"
                loading={isSubmitting}
              >
                {text?.action}
              </LoadingButton>
            </Stack>
          )}
        </Stack>
      </form>
      <AlertDialog
        open={openResetDialog}
        handleClose={setOpenResetDialog}
        icon={<WarningRoundedIcon color="error300" />}
        title="Existem dados inseridos que não foram salvos"
        content={<Typography variant="14_regular">{text?.dialogText}</Typography>}
        actions={(
          <>
            <Button variant="outlined" onClick={() => setOpenResetDialog(false)} color="secondary700">Cancelar</Button>
            <Button variant="contained" onClick={handleFormReset} color="secondary700">{text?.secondaryAction}</Button>
          </>
        )}
      />
      <AlertDialog
        open={dialogTipoEnvio?.open}
        handleClose={resetDialogTipoEnvio}
        icon={<WarningRoundedIcon color="error300" />}
        title="Alterar opção de envio"
        content={<Typography variant="14_regular">{tipoEnvioDialogDictionary(dialogTipoEnvio?.key)}</Typography>}
        actions={(
          <>
            <Button variant="outlined" onClick={resetDialogTipoEnvio} color="secondary700">Cancelar</Button>
            <Button variant="contained" onClick={handleTipoEnvioAction} color="secondary700">Sim, alterar</Button>
          </>
        )}
      />
    </>
  );
};
DocumentoFormalizarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeForm: PropTypes.func,
  enabled: PropTypes.bool,
  setEnabled: PropTypes.func,
  defaultValues: PropTypes.object,
  documentoList: PropTypes.array,
  getDocumentoList: PropTypes.func,
  createDocumento: PropTypes.func,
  deleteDocumento: PropTypes.func,
  loadingDocumentoList: PropTypes.bool,
  editMode: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  uploadAnexo: PropTypes.func,
  uploadMultiplosAnexos: PropTypes.func,
  downloadAnexo: PropTypes.func,
  handleInvalidAnexo: PropTypes.func,
};
DocumentoFormalizarForm.defaultProps = {
  closeForm: () => {},
  enabled: false,
  setEnabled: () => {},
  defaultValues: {},
  documentoList: [],
  getDocumentoList: () => {},
  createDocumento: () => {},
  deleteDocumento: () => {},
  loadingDocumentoList: false,
  editMode: false,
  hideCloseButton: false,
  uploadAnexo: () => {},
  uploadMultiplosAnexos: () => {},
  downloadAnexo: () => {},
  handleInvalidAnexo: () => {},
};

export default DocumentoFormalizarForm;
