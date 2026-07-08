import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  Box, Button, IconButton, Stack, Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ClearIcon from '@mui/icons-material/Clear';
import SelectMultiActionForm from 'common/controls/selectMultiAction/selectMultiActionForm';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import FormTextField from 'common/controls/formTextField/formTextField';
import FormRadioGroup from 'common/controls/formRadioGroup/formRadioGroup';
import SummaryPage from 'common/controls/summaryPage';
import UploadDocumento from 'common/controls/fileButton/uploadDocumento';
import { convertBytesToMb } from 'utils/file';
import { MASK_CNPJ, MASK_CPF } from 'utils/masks';
import { formDictionary, selectDictionary } from './documentoCadastroForm.style';
import CheckboxAnexo from '../checkboxAnexo';

const DocumentoCadastroForm = ({
  onSubmit, closeForm, enabled, setEnabled, defaultValues, editMode,
  documentoList, getDocumentoList, insertDocumento, loadingDocumentoList,
  relacionamentoList, getRelacionamentoList, insertRelacionamento, loadingRelacionamentoList,
  hideCloseButton, deleteDocumento, deleteRelacionamento, uploadArquivoTemporario, permissionList,
}) => {
  const {
    handleSubmit, reset, formState: { isSubmitting, isDirty },
    control, watch, setValue,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      nome: '',
      tipoPessoa: '',
      documento: '',
      tipoRelacionamento: '',
      tipoDocumento: [],
      anexos: [],
      ...defaultValues,
    },
  });

  const formRef = useRef(null);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [anexos, setAnexos] = useState({});

  const selectedDocumentos = watch('tipoDocumento');
  const getTextFromValue = (value, list) => (Array.isArray(value)
    ? value.map((v) => list.find((item) => item.value === v)?.text || '')
    : list.find((item) => item.value === value)?.text || '');

  const text = formDictionary();
  const disableInputs = useMemo(() => !enabled || isSubmitting, [enabled, isSubmitting]);

  useEffect(() => {
    if (formRef) formRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [formRef]);

  useEffect(() => {
    getDocumentoList();
    getRelacionamentoList();
  }, []);

  useEffect(() => {
    const newAnexos = {};
    Object.keys(anexos).forEach((key) => {
      if (selectedDocumentos.includes(key)) { newAnexos[key] = anexos[key]; }
    });

    setAnexos(newAnexos);
  }, [selectedDocumentos]);

  const validarAnexosComUpload = () => {
    let isValid = true;
    const newAnexos = { ...anexos };
    Object.keys(anexos).forEach((key) => {
      if (anexos[key].isChecked && !anexos[key].upload) {
        isValid = false;
        newAnexos[key] = { ...anexos[key], isError: true, textoErro: 'O envio de anexo é necessário' };
      }
    });

    setAnexos(newAnexos);
    return isValid;
  };

  const handleFormSubmit = async (data) => {
    if (!validarAnexosComUpload()) return;

    const transformedData = {
      ...data,
      tipoRelacionamento: getTextFromValue(data.tipoRelacionamento, relacionamentoList),
      tipoDocumento: getTextFromValue(data.tipoDocumento, documentoList),
      anexos: Object.keys(anexos)
        .filter((key) => (anexos[key].isChecked && anexos[key].upload))
        .map((key) => ({
          tipoDocumento: getTextFromValue(anexos[key].tipoDocumento, documentoList),
          nomeOriginal: anexos[key].upload.nomeOriginal,
          nomeGuid: anexos[key].upload.nomeGuid,
          tamanho: anexos[key].upload.tamanho,
        })),
    };

    await onSubmit(transformedData);
    closeForm();
  };

  const handleFormReset = () => {
    if (openResetDialog) setOpenResetDialog(false);
    if (editMode) setEnabled(false);
    reset();
    setAnexos({});
  };

  const handleResetButton = () => {
    if (isDirty) setOpenResetDialog(true);
    else handleFormReset();
  };

  const handleRemove = (index) => {
    const idTipoDocumento = selectedDocumentos[index];
    const newItems = [...selectedDocumentos];
    newItems.splice(index, 1);
    setValue('tipoDocumento', newItems);

    const newAnexos = { ...anexos };
    delete newAnexos[idTipoDocumento];
    setAnexos(newAnexos);
  };

  const getAnexoByIdTipoDocumento = (idTipoDocumento) => anexos[idTipoDocumento];
  const isChecked = (idTipoDocumento) => anexos[idTipoDocumento]?.isChecked;

  const insertAnexo = (anexo) => {
    const novosAnexos = { ...anexos };
    novosAnexos[anexo.tipoDocumento] = anexo;
    setAnexos(novosAnexos);
  };

  const handleAnexoErro = (error, idTipoDocumento) => {
    const anexo = getAnexoByIdTipoDocumento(idTipoDocumento);
    if (anexo) {
      insertAnexo({
        ...anexo,
        isError: true,
        textoErro: error,
        isLoading: false,
      });
    }
  };

  const handleUploadAnexo = async (file, idTipoDocumento) => {
    const anexo = getAnexoByIdTipoDocumento(idTipoDocumento);

    insertAnexo({
      ...anexo, isError: false, isLoading: true, textoErro: null,
    });
    try {
      const upload = await uploadArquivoTemporario(file);
      insertAnexo({
        ...anexo,
        nome: file.name,
        tamanho: `${convertBytesToMb(file.size)}`,
        upload,
        isLoading: false,
        isError: false,
        textoErro: null,
      });
    } catch (e) {
      handleAnexoErro('Falha ao anexar documento', idTipoDocumento);
    }
  };

  const handleDeleteUpload = (idTipoDocumento) => {
    delete anexos[idTipoDocumento].nome;
    delete anexos[idTipoDocumento].tamanho;
    delete anexos[idTipoDocumento].upload;
    delete anexos[idTipoDocumento].isError;
    delete anexos[idTipoDocumento].textoErro;
  };

  const markCheckbox = (idTipoDocumento) => {
    const anexo = getAnexoByIdTipoDocumento(idTipoDocumento);
    if (anexo) {
      if (anexo.isChecked) handleDeleteUpload(idTipoDocumento);
      insertAnexo({ ...anexo, isChecked: !anexo.isChecked });
    } else insertAnexo({ isChecked: true, tipoDocumento: idTipoDocumento });
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
              <Stack gap="8px">
                <Typography component="span" variant="14_bold">
                  Lista de documentos
                </Typography>
                <Typography component="span" variant="12_regular">
                  Insira as informações referentes a atualização do cadastro da aprovação.
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack direction="row" gap="16px" padding={`${editMode ? '16px' : '0px'} 16px 0px 16px`}>
            <FormTextField
              fieldName="nome"
              label="Nome"
              placeholder="Insira um nome"
              control={control}
              required
              disabled={disableInputs}
            />
            <FormRadioGroup
              fieldName="tipoPessoa"
              label="Tipo pessoa"
              row
              width={205}
              control={control}
              options={[
                { value: 1, text: 'Física' },
                { value: 2, text: 'Jurídica' },
              ]}
              required
              disabled={disableInputs}
            />
            <FormTextField
              fieldName="documento"
              label="CNPJ | CPF"
              placeholder="Insira um CNPJ ou CPF"
              control={control}
              width={205}
              required
              disabled={disableInputs}
              maskOptions={{
                mask: [
                  MASK_CPF,
                  MASK_CNPJ,
                ],
              }}
            />
          </Stack>
          <Stack direction="row" gap="16px" padding={`${editMode ? '16px' : '0px'} 16px 0px 16px`}>
            <SelectMultiActionForm
              control={control}
              required
              fieldName="tipoRelacionamento"
              label="Relacionamento"
              dictionary={selectDictionary.relacionamento}
              items={relacionamentoList}
              loading={loadingRelacionamentoList}
              onCreate={insertRelacionamento}
              hideCheckbox
              onDelete={deleteRelacionamento}
              width={300}
              disabled={permissionList.isGestaoJuridico}
            />
            <SelectMultiActionForm
              control={control}
              required
              fieldName="tipoDocumento"
              label="Documentos"
              dictionary={selectDictionary.documentos}
              items={documentoList}
              loading={loadingDocumentoList}
              onCreate={insertDocumento}
              onDelete={deleteDocumento}
              value={setValue}
              width={300}
              disableAllOption
              disabled={permissionList.isGestaoJuridico}
            />
          </Stack>
          <Stack gap="4px" padding="16px 16px 16px 16px">
            {(!permissionList.isGestaoJuridico && selectedDocumentos?.length > 0) && (
              <>
                <Typography component="span" variant="14_bold">
                  Documentos selecionados
                </Typography>
                {selectedDocumentos.map((idTipoDocumento, index) => (
                  <SummaryPage
                    key={idTipoDocumento}
                    title={getTextFromValue(idTipoDocumento, documentoList)}
                    level={7}
                    open={isChecked(idTipoDocumento)}
                    hideAccordion
                    controlled
                    actions={(
                      <>
                        <CheckboxAnexo
                          value={isChecked(idTipoDocumento)}
                          setValue={() => markCheckbox(idTipoDocumento)}
                        />
                        <IconButton onClick={() => handleRemove(index)}>
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </>
                    )}
                  >
                    <UploadDocumento
                      uploadDocumento={(file) => handleUploadAnexo(file, idTipoDocumento)}
                      deleteDocumento={() => handleDeleteUpload(idTipoDocumento)}
                      setErroDocumento={(error) => handleAnexoErro(error, idTipoDocumento)}
                      documento={getAnexoByIdTipoDocumento(idTipoDocumento)}
                      label="Documento do cadastro"
                      placeholder="Insira um documento"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx,"
                      width="500px"
                      maxSizeMB={10}
                      showDeleteButton
                      validateAllTypes
                    />
                  </SummaryPage>
                ))}
              </>
            )}
          </Stack>
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
            <Button variant="contained" onClick={handleFormReset} color="secondary700">Sim, limpar</Button>
          </>
        )}
      />
    </>
  );
};
DocumentoCadastroForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeForm: PropTypes.func,
  enabled: PropTypes.bool,
  setEnabled: PropTypes.func,
  defaultValues: PropTypes.object,
  documentoList: PropTypes.array,
  getDocumentoList: PropTypes.func,
  insertDocumento: PropTypes.func,
  loadingDocumentoList: PropTypes.bool,
  relacionamentoList: PropTypes.array,
  getRelacionamentoList: PropTypes.func,
  insertRelacionamento: PropTypes.func,
  loadingRelacionamentoList: PropTypes.bool,
  editMode: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  deleteDocumento: PropTypes.func,
  deleteRelacionamento: PropTypes.func,
  uploadArquivoTemporario: PropTypes.func,
  permissionList: PropTypes.object,
};
DocumentoCadastroForm.defaultProps = {
  closeForm: () => { },
  enabled: false,
  setEnabled: () => { },
  defaultValues: {},
  documentoList: [],
  getDocumentoList: () => { },
  insertDocumento: () => { },
  deleteDocumento: () => { },
  deleteRelacionamento: () => { },
  loadingDocumentoList: false,
  relacionamentoList: [],
  getRelacionamentoList: () => { },
  insertRelacionamento: () => { },
  loadingRelacionamentoList: false,
  editMode: false,
  hideCloseButton: false,
  uploadArquivoTemporario: () => { },
  permissionList: null,
};

export default DocumentoCadastroForm;
