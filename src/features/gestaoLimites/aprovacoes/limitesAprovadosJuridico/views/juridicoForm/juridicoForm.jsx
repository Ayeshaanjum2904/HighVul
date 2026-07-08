import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import NewButton from 'common/controls/newButton/newButton';
import ModalInputList from 'common/controls/modalInputList/modalInputList';
import ItemsList from 'common/controls/itemsList/itemsList';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AlertModal from 'common/layout/alertModal';
import { getUnmaskedInput, maskToCPFOrCNPJ } from 'utils/masks';
import FormStyle from './juridicoForm.style';
import BaseInput from './baseInput';
import RadioGroupPessoa from './radioGroupPessoaJuridico/radioGroupPessoaJuridico';
import SelectDocumentos from './selectDocumentos';
import AddButton from './addButton/addButton';
import MaskedInput from './maskedInput';

const getEmptyFile = () => ({
  nomeGuid: '',
  nomeOriginal: '',
  tamanho: '',
  type: '',
  isLoading: false,
  isError: false,
  textoErro: '',
});

const getTextFromValue = (values, data) => values.map((value) => {
  const foundItem = data?.find((item) => item.value === value);
  return foundItem ? foundItem.text : null;
});

const JuridicoForm = ({
  insertPessoaDocumentacao, idLimite, getPessoaDocumentacao, setFormSave, setOpenForm,
  insertTipoDocumento, documentoOpcoes, getTipoDocumentoList, initialData,
}) => {
  const {
    register, handleSubmit, formState: { errors, isDirty },
    trigger, reset, setValue, getValues, watch, getValue,
    control,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      listaArquivos: [
        getEmptyFile(),
      ],
    },
  });

  const [isNotDocument, setIsNotDocument] = useState(false);
  const [isNotPerson, setIsNotPerson] = useState(false);
  const [novosDocumentos, setNovosDocumentos] = useState([]);
  const [openModalDocumento, setOpenModalDocumento] = useState(false);
  const [openModalDeleteForm, setOpenModalDeleteForm] = useState(false);
  const myRef = useRef(null);

  const errorsKey = Object.keys(errors);

  useEffect(() => {
    setFormSave(false);
  }, [watch]);

  useEffect(() => {
    getTipoDocumentoList();
  }, []);

  const editList = initialData ? {
    ...initialData,
    tipoPessoa: initialData.tipoPessoa?.toString(),
    documentos: initialData.documentoPendente?.filter(
      (doc) => doc.tipoDocumentoId,
    ).map((doc) => doc.tipoDocumentoId),
    listaArquivos: _.isEmpty(initialData.listaArquivos)
      ? [getEmptyFile()] : initialData.listaArquivos,
  } : null;

  useEffect(() => {
    reset(editList);
  }, [initialData]);

  const selectedDocuments = watch('documentos');

  const selectedPerson = watch('tipoPessoa');
  const handlePersonChange = (valor) => {
    setValue('tipoPessoa', valor);
    setIsNotPerson(false);
  };

  const onSubmit = (data) => {
    setFormSave(true);
    setOpenForm(false);
    insertPessoaDocumentacao(data, idLimite, initialData.idPessoaDocumentacaoJuridico);
    getPessoaDocumentacao(idLimite);
  };

  const anchorFieldError = () => {
    switch (errorsKey[0]) {
      case 'nome':
        return myRef.current?.children[0].scrollIntoView({ block: 'center' });
      case 'tipoPessoa':
        return myRef.current?.children[1].scrollIntoView({ block: 'center' });
      case 'documento':
        return myRef.current?.children[2].scrollIntoView({ block: 'center' });
      case 'documentos':
        return myRef.current?.children[4].scrollIntoView({ block: 'center' });
      default:
        return null;
    }
  };

  const validateForm = () => {
    trigger();

    if (_.isEmpty(selectedDocuments)) {
      setIsNotDocument(true);
    }
    if (!selectedPerson) {
      setIsNotPerson(true);
    }
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
  const handleDeleteForm = () => {
    setFormSave(true);
    setOpenForm(false);
  };
  const handleCloseForm = () => {
    if (isDirty) {
      setOpenModalDeleteForm(true);
    } else {
      handleDeleteForm();
    }
  };

  const handleClearForm = () => {
    reset();
    setIsNotDocument(false);
    setIsNotPerson(false);
    document.activeElement.blur();
  };

  return (
    <FormStyle editMode={initialData}>
      <div className="form-doc_close">
        <IconButtonTooltip
          tooltip="Excluir"
          size={20}
          placement="bottom-start"
          onClick={handleCloseForm}
        >
          <CloseRoundedIcon />
        </IconButtonTooltip>
      </div>
      <form
        onSubmit={(e) => { handleSubmit(onSubmit)(e).finally(() => anchorFieldError()); }}
        ref={myRef}
      >
        <div className="form-doc_header">
          <h1>Documentos complementares</h1>
          <h3>Insira as informações para criar os documentos complementares.</h3>
        </div>
        <div className="form-doc_dados">
          <BaseInput
            register={register}
            errors={errors}
            fieldKey="nome"
            fieldName="Nome"
            requiredMessage="Insira um nome"
            placeholder="Insira um nome"
            width="562px"
            setValue={setValue}
          />
          <RadioGroupPessoa
            inputData={selectedPerson}
            setInputData={handlePersonChange}
            isError={isNotPerson}
          />
          <MaskedInput
            register={register}
            errors={errors}
            fieldKey="documento"
            fieldName="CNPJ|CPF"
            requiredMessage="Informe um CNPJ ou CPF"
            placeholder="Insira um CNPJ ou CPF"
            width="204px"
            setValue={setValue}
            maxLength="18"
            getValues={getValues}
            initialValue={initialData.documento}
            maskFunction={maskToCPFOrCNPJ}
            onChange={(e) => {
              setValue(
                'documento',
                maskToCPFOrCNPJ(getUnmaskedInput(e.target.value)),
              );
            }}
          />
        </div>
        <div className="form-doc_seletores">
          <SelectDocumentos
            control={control}
            register={register}
            isError={isNotDocument}
            getValues={getValue}
            setValue={setValue}
            selectedDocuments={selectedDocuments}
          />
          <AddButton
            tooltip="Criar novo documento"
            className="form-doc_seletores_button"
            buttonAction={handleModalDocumento}
          />
        </div>
        <div>
          {selectedDocuments?.length > 0 && (
          <ItemsList
            labelValue="Documentos selecionados"
            items={getTextFromValue(selectedDocuments, documentoOpcoes)}
            onRemove={handleRemove}
          />
          )}
        </div>
        <div className="form-doc_observacoes">
          <div className="form-buttons">
            <NewButton
              onClick={handleClearForm}
              className="dark_gray_border"
            >
              <span>Limpar campos</span>
            </NewButton>
            <NewButton
              onClick={validateForm}
              className="gray"
              type="submit"
            >
              <span>Salvar</span>
            </NewButton>
          </div>
        </div>
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
      {openModalDeleteForm && (
      <AlertModal
        buttonAction={() => handleDeleteForm()}
        title="Deseja excluir os dados de documentos complementares?"
        subtitle="As informações inseridas em “Documentos complementares” não foram salvas. Caso clique em excluir os dados serão apagados."
        textRedButton="Excluir"
        openModal={openModalDeleteForm}
        setOpen={setOpenModalDeleteForm}
      />
      )}
    </FormStyle>
  );
};
JuridicoForm.propTypes = {
  insertPessoaDocumentacao: PropTypes.func,
  getPessoaDocumentacao: PropTypes.func,
  idLimite: PropTypes.number,
  setFormSave: PropTypes.func,
  setOpenForm: PropTypes.func,
  insertTipoDocumento: PropTypes.func,
  documentoOpcoes: PropTypes.array,
  getTipoDocumentoList: PropTypes.func,
  initialData: PropTypes.array,
};

JuridicoForm.defaultProps = {
  insertPessoaDocumentacao: () => {},
  getPessoaDocumentacao: () => {},
  idLimite: 0,
  setFormSave: () => {},
  setOpenForm: () => {},
  insertTipoDocumento: () => {},
  documentoOpcoes: [],
  getTipoDocumentoList: () => {},
  initialData: [],
};
export default JuridicoForm;
