import React, {
  useEffect, useRef, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Stack, Typography, Grid,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import ModalInputList from 'common/controls/modalInputList/modalInputList';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import FormTextField from 'common/controls/formTextField/formTextField';
import FormRadioGroup from 'common/controls/formRadioGroup/formRadioGroup';
import SelectMultiActionForm from 'common/controls/selectMultiAction/selectMultiActionForm';
import ItemsList from 'common/controls/itemsList/itemsList';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { MASK_CNPJ, MASK_CPF } from 'utils/masks';
import AddButton from './addButton/addButton';

const getEmptyFile = () => ({
  nomeGuid: '',
  nomeOriginal: '',
  tamanho: '',
  type: '',
  isLoading: false,
  isError: false,
  textoErro: '',
});

const formText = {
  action: 'Salvar',
  secondaryAction: 'Limpar campos',
  tipoEnvio: 'Selecione uma ou mais opções',
  dialogText: 'As informações inseridas em “Documentos do cadastro” não foram salvas. Tem certeza que deseja limpar todos os campos?',
};

const selectDictionary = {
  documentos: {
    singular: 'documento',
    plural: 'documentos',
    type: 'o',
  },
};

const DocumentoComplementarForm = ({
  closeForm, enabled, setEnabled, editMode, defaultValues, loadingDocumentoList, hideCloseButton,
  insertPessoaDocumentacao, idLimite, getPessoaDocumentacao, documentoOpcoes,
  insertTipoDocumento, getTipoDocumentoList, initialData,
}) => {
  const {
    handleSubmit, formState: { isSubmitting, isDirty },
    reset, setValue, watch,
    control,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      nome: '',
      tipoPessoa: '',
      documento: '',
      documentos: [],
      listaArquivos: [
        getEmptyFile(),
      ],
      ...defaultValues,
    },
  });

  const [novosDocumentos, setNovosDocumentos] = useState([]);
  const [openModalDocumento, setOpenModalDocumento] = useState(false);
  const [openResetDialog, setOpenResetDialog] = useState(false);

  const formRef = useRef(null);

  const disableInputs = useMemo(() => !enabled || isSubmitting, [enabled, isSubmitting]);

  useEffect(() => {
    getTipoDocumentoList();
  }, []);

  const selectedDocuments = watch('documentos');

  const getTextFromValue = (values, data) => values.map((value) => {
    const foundItem = data?.find((item) => item.value === value);
    return foundItem ? foundItem.text : null;
  });

  const handleFormSubmit = async (data) => {
    await insertPessoaDocumentacao(data, idLimite, initialData.idPessoaDocumentacaoJuridico);
    getPessoaDocumentacao(idLimite);
    closeForm();
  };

  const handleModalDocumento = () => {
    setOpenModalDocumento(true);
  };

  const handleCloseModalDocumento = () => {
    setOpenModalDocumento(false);
  };

  const inserirNovosDocumentos = () => {
    insertTipoDocumento(novosDocumentos);
  };

  const handleRemove = (index) => {
    const newItems = [...selectedDocuments];
    newItems.splice(index, 1);
    setValue('documentos', newItems);
  };

  const handleFormReset = () => {
    if (openResetDialog) setOpenResetDialog(false);
    if (editMode) setEnabled(false);
    reset();
  };

  const handleResetButton = () => {
    if (isDirty) setOpenResetDialog(true);
    else handleFormReset();
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
                Documentos complementares
              </Typography>
              <Typography component="span" variant="12_regular">
                Insira as informações para criar os documentos complementares.
              </Typography>
            </Stack>
          </Box>
          )}

          <Grid container spacing={2} padding={`${editMode ? '16px' : '0px'} 16px 0px 16px`}>
            <Grid item xs={12} sm={6}>
              <FormTextField
                fieldName="nome"
                label="Nome"
                placeholder="Insira um nome"
                control={control}
                required
                disabled={disableInputs}
                width="100%"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormRadioGroup
                fieldName="tipoPessoa"
                label="Tipo pessoa"
                row
                control={control}
                options={[
                  { value: 1, text: 'Física' },
                  { value: 2, text: 'Jurídica' },
                ]}
                required
                width="100%"
                disabled={disableInputs}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormTextField
                fieldName="documento"
                label="CNPJ | CPF"
                placeholder="Insira um CNPJ ou CPF"
                control={control}
                width="100%"
                required
                disabled={disableInputs}
                maskOptions={{
                  mask: [
                    MASK_CPF,
                    MASK_CNPJ,
                  ],
                }}
              />
            </Grid>
          </Grid>
          <Stack direction="row" gap="16px" padding={`${editMode ? '16px' : '0px'} 16px 0px 16px`} alignItems="flex-end">
            <SelectMultiActionForm
              control={control}
              required
              fieldName="documentos"
              label="Documentos"
              disableCreate
              disableDelete
              dictionary={selectDictionary.documentos}
              items={documentoOpcoes}
              loading={loadingDocumentoList}
              value={setValue}
              width={300}
              disableAllOption
              disabled={disableInputs}
            />
            <AddButton
              tooltip="Criar novo documento"
              className="form-doc_seletores_button"
              buttonAction={handleModalDocumento}
              disabled={disableInputs}
            />
          </Stack>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Stack gap="4px" padding="16px">
                {selectedDocuments?.length > 0 && (
                <>
                  <Typography component="span" variant="14_bold">
                    Documentos selecionados
                  </Typography>
                  <ItemsList
                    items={getTextFromValue(selectedDocuments, documentoOpcoes)}
                    onRemove={handleRemove}
                  />
                </>
                )}
              </Stack>
            </Grid>
          </Grid>
          {enabled && (
          <Stack direction="row" justifyContent="flex-end" gap="12px" padding="0px 16px 16px 16px">
            <Button
              onClick={handleResetButton}
              color="secondary700"
              variant="outlined"
              disabled={isSubmitting}
            >
              {formText?.secondaryAction}
            </Button>
            <LoadingButton
              type="submit"
              color="secondary700"
              variant="contained"
              loading={isSubmitting}
            >
              {formText?.action}
            </LoadingButton>
          </Stack>
          )}
        </Stack>
      </form>
      { openModalDocumento && (
        <ModalInputList
          title="Novo documento"
          inputName="Novo documento"
          itemsListName="Nomes adicionados"
          actionButtonText="Criar novos documentos"
          open={openModalDocumento}
          handleClose={handleCloseModalDocumento}
          onAction={inserirNovosDocumentos}
          setItems={setNovosDocumentos}
          items={novosDocumentos}
        />
      )}
      <AlertDialog
        open={openResetDialog}
        handleClose={setOpenResetDialog}
        icon={<WarningRoundedIcon color="error300" />}
        title="Existem dados inseridos que não foram salvos"
        content={<Typography variant="14_regular">{formText?.dialogText}</Typography>}
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

DocumentoComplementarForm.propTypes = {
  closeForm: PropTypes.func,
  enabled: PropTypes.bool,
  setEnabled: PropTypes.func,
  editMode: PropTypes.bool,
  defaultValues: PropTypes.array,
  loadingDocumentoList: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  insertPessoaDocumentacao: PropTypes.func,
  getPessoaDocumentacao: PropTypes.func,
  idLimite: PropTypes.number,
  insertTipoDocumento: PropTypes.func,
  documentoOpcoes: PropTypes.array,
  getTipoDocumentoList: PropTypes.func,
  initialData: PropTypes.array,
};

DocumentoComplementarForm.defaultProps = {
  closeForm: () => { },
  enabled: false,
  setEnabled: () => { },
  editMode: false,
  defaultValues: [],
  loadingDocumentoList: false,
  hideCloseButton: false,
  insertPessoaDocumentacao: () => {},
  getPessoaDocumentacao: () => {},
  idLimite: 0,
  insertTipoDocumento: () => {},
  documentoOpcoes: [],
  getTipoDocumentoList: () => {},
  initialData: [],
};

export default DocumentoComplementarForm;
