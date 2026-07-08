import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  Button, Divider, IconButton, Stack, Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import colors from 'assets/styles/colors';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ClearIcon from '@mui/icons-material/Clear';
import SelectMultiActionForm from 'common/controls/selectMultiAction/selectMultiActionForm';
import AlertDialog from 'common/layout/alertDialog/alertDialog';
import AlertModalInput from 'common/layout/alertModalInput';
import AlertFilledIcon from 'assets/icons/alert-filled';
import FormTextField from 'common/controls/formTextField/formTextField';
import FormRadioGroup from 'common/controls/formRadioGroup/formRadioGroup';
import SummaryPage from 'common/controls/summaryPage';
import UploadDocumento from 'common/controls/fileButton/uploadDocumento';
import { convertBytesToMb } from 'utils/file';
import { MASK_CNPJ, MASK_CPF } from 'utils/masks';
import { formDictionary, selectDictionary } from './documentoCadastroEditForm.style';
import InfoCadastroList from '../../listaDocumentos/infoCadastroList/infoCadastroList';
import CheckboxAnexo from '../checkboxAnexo';

const documentoCadastroEditForm = ({
  onSubmit, enabled, setEnabled, defaultValues, editMode,
  documentoList, loadingDocumentoList,
  relacionamentoList, insertRelacionamento, loadingRelacionamentoList,
  deleteRelacionamento, dadosPessoaDocumentacao, invalidarDocumento,
  idLimite, uploadArquivoTemporario,
}) => {
  const {
    handleSubmit, reset, formState: { isSubmitting, isDirty },
    control, watch, setValue, getValues,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      nome: '',
      tipoPessoa: '',
      documento: '',
      tipoRelacionamento: '',
      tipoDocumento: [],
      listToInclude: [],
      listToExclude: [],
      ...defaultValues,
    },
  });

  const formRef = useRef(null);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [openModalInvalidacao, setOpenModalInvalidacao] = useState(false);
  const [motivo, setMotivo] = useState(false);
  const [documento, setDocumento] = useState(null);

  const selectedDocumentos = watch('tipoDocumento');
  const text = formDictionary();
  const disableInputs = useMemo(() => !enabled || isSubmitting, [enabled, isSubmitting]);
  const listToExclude = watch('listToExclude', []);
  const [anexos, setAnexos] = useState({});

  const isChecked = (idTipoDocumento) => anexos[idTipoDocumento]?.isChecked;

  const getTextFromValue = (value, list) => (Array.isArray(value)
    ? value.map((v) => list.find((item) => item.value === v)?.text || '')
    : list.find((item) => item.value === value)?.text || '');

  const getAnexoByIdTipoDocumento = (idTipoDocumento) => anexos[idTipoDocumento];

  const insertAnexo = (anexo) => {
    const novosAnexos = { ...anexos };
    novosAnexos[anexo.tipoDocumento] = anexo;
    setAnexos(novosAnexos);
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

  useEffect(() => {
    if (formRef) formRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [formRef]);

  const { append: appendFilesToInclude } = useFieldArray({
    control, name: 'listToInclude',
  });

  const { append: appendFilesToExclude } = useFieldArray({
    control, name: 'listToExclude',
  });

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

  const newDocuments = useMemo(() => selectedDocumentos.filter((document) => {
    const existsInTipoDocumento = defaultValues?.tipoDocumento?.includes(document);
    const existsInListToExclude = listToExclude?.includes(document);

    return !existsInTipoDocumento || (existsInTipoDocumento && existsInListToExclude);
  }), [selectedDocumentos]);

  const handleRemove = (documentoCadastro, index) => {
    const newList = selectedDocumentos.filter((doc) => doc !== documentoCadastro);
    setValue('tipoDocumento', newList);

    const idTipoDocumento = newDocuments[index];
    const newAnexos = { ...anexos };
    delete newAnexos[idTipoDocumento];
    setAnexos(newAnexos);
  };

  const handleInvalidarDocumento = (documentoPessoa, nomeLista, nomeDocumento) => {
    setDocumento({
      ...documentoPessoa, nomeLista, nomeDocumento, idLimite,
    });
    setOpenModalInvalidacao(true);
  };

  const handleSalvarMotivo = () => {
    const motivoWithLineBreaks = motivo.replace(/\n/g, '<br />');
    invalidarDocumento(documento, motivoWithLineBreaks, () => setOpenModalInvalidacao(false));
  };

  const handleDeletarDocumento = (nomeOriginal) => {
    appendFilesToExclude(nomeOriginal);
  };

  useEffect(() => {
    const newAnexos = {};
    Object.keys(anexos).forEach((key) => {
      if (selectedDocumentos.includes(key)) { newAnexos[key] = anexos[key]; }
    });

    setAnexos(newAnexos);
  }, [selectedDocumentos]);

  useEffect(() => {
    const documentsArray = newDocuments.map((document) => ({
      tipoDocumento: getTextFromValue(document, documentoList),
      anexo: [],
    }));

    const currentList = getValues('listToInclude');

    const uniqueNewEntries = documentsArray.filter(
      (doc) => !currentList.some(
        (existingDoc) => existingDoc.tipoDocumento === doc.tipoDocumento,
      ),
    );

    if (uniqueNewEntries.length > 0) {
      appendFilesToInclude(uniqueNewEntries);
    }
  }, [newDocuments]);

  const filteredDocumentoList = documentoList.filter(
    (doc) => {
      const existsInTipoDocumento = defaultValues?.tipoDocumento?.includes(doc.value);
      const existsInListToExclude = listToExclude.includes(doc.value);

      return !existsInTipoDocumento || (existsInTipoDocumento && existsInListToExclude);
    },
  );

  useEffect(() => {
    const filteredDocumentos = selectedDocumentos.filter(
      (doc) => !listToExclude.includes(doc),
    );
    setValue('tipoDocumento', filteredDocumentos);
  }, [listToExclude]);

  const relacionamentoExists = relacionamentoList.some(
    (rel) => rel.value === defaultValues.tipoRelacionamento,
  );

  if (!relacionamentoExists) {
    relacionamentoList.push(
      {
        value: defaultValues.tipoRelacionamento,
        text: defaultValues.tipoRelacionamento,
      },
    );
  }

  const handleFormSubmit = async (data) => {
    if (!validarAnexosComUpload()) return;

    const anexosMap = new Map(
      Object.keys(anexos)
        .filter((key) => anexos[key].isChecked && anexos[key].upload)
        .map((key) => [
          getTextFromValue(anexos[key].tipoDocumento, documentoList),
          {
            nomeOriginal: anexos[key].upload.nomeOriginal,
            nomeGuid: anexos[key].upload.nomeGuid,
            tamanho: anexos[key].upload.tamanho,
          },
        ]),
    );

    const transformedData = {
      ...data,
      tipoRelacionamento: getTextFromValue(data.tipoRelacionamento, relacionamentoList),
      listToInclude: data.listToInclude.map((item) => ({
        ...item,
        anexo: anexosMap.get(item.tipoDocumento) || null,
      })),
    };
    await onSubmit(idLimite, transformedData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <Stack gap="16px" paddingBottom={enabled ? '0px' : '8px'}>
          <Stack
            direction="row"
            gap="16px"
            padding="8px  16px 0px 16px"
            sx={{ height: '72px' }}
          >
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
              disabled={!editMode}
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
          <Divider />
          <Stack padding="8px  16px 0px 16px">
            <Typography component="span" variant="14_bold">
              Lista de documentos
            </Typography>
            {editMode && (
              <Stack gap="4px" padding="12px 0px 0px 0px">
                <SelectMultiActionForm
                  control={control}
                  required
                  fieldName="tipoDocumento"
                  label="Documentos"
                  disableSearch
                  disableCreate
                  disableDelete
                  disableAllOption
                  dictionary={selectDictionary.documentos}
                  items={filteredDocumentoList}
                  loading={loadingDocumentoList}
                  value={setValue}
                  width={300}
                />
                {newDocuments.map((idTipoDocumento, index) => (
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
                        <IconButton onClick={() => handleRemove(idTipoDocumento, index)}>
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
              </Stack>
            )}
          </Stack>
          <InfoCadastroList
            key={dadosPessoaDocumentacao.indexPessoa}
            indexPessoa={dadosPessoaDocumentacao.indexPessoa}
            listaPessoaDocumentacao={dadosPessoaDocumentacao}
            listToExclude={listToExclude}
            invalidarDocumento={(documentoPessoa, tipoDocumento) => handleInvalidarDocumento(
              documentoPessoa,
              dadosPessoaDocumentacao.pessoaDocumentacao.nome,
              tipoDocumento,
            )}
            deletarDocumento={handleDeletarDocumento}
            editMode={editMode}
          />
          <AlertModalInput
            openAlertModalInput={openModalInvalidacao}
            setOpenAlertModalInput={setOpenModalInvalidacao}
            buttonAction={handleSalvarMotivo}
            title="Deseja deletar o anexo enviado pelo dealer?"
            subtitle="Para prosseguir com a ação é necessário informar o motivo
              da exclusão do documento. Será enviada uma atualização para o dealer"
            alertCardTitle="É necessário inserir um motivo da exclusão documento."
            icone={<AlertFilledIcon width="8" height="8" />}
            placeholder="Insira o motivo do parecer (obrigatório) *"
            inputValue={motivo}
            setInputValue={setMotivo}
            colorBase={colors.error_color_300}
          />
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

documentoCadastroEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeForm: PropTypes.func,
  enabled: PropTypes.bool,
  setEnabled: PropTypes.func,
  defaultValues: PropTypes.object,
  documentoList: PropTypes.array,
  loadingDocumentoList: PropTypes.bool,
  relacionamentoList: PropTypes.array,
  insertRelacionamento: PropTypes.func,
  loadingRelacionamentoList: PropTypes.bool,
  editMode: PropTypes.bool,
  deleteRelacionamento: PropTypes.func,
  dadosPessoaDocumentacao: PropTypes.object,
  idLimite: PropTypes.number,
  uploadArquivoTemporario: PropTypes.func,
  invalidarDocumento: PropTypes.func,
};

documentoCadastroEditForm.defaultProps = {
  closeForm: () => { },
  enabled: false,
  setEnabled: () => { },
  defaultValues: {},
  documentoList: [],
  deleteRelacionamento: () => { },
  loadingDocumentoList: false,
  relacionamentoList: [],
  insertRelacionamento: () => { },
  loadingRelacionamentoList: false,
  editMode: false,
  dadosPessoaDocumentacao: {},
  idLimite: 0,
  uploadArquivoTemporario: () => { },
  invalidarDocumento: () => {},
};

export default documentoCadastroEditForm;
