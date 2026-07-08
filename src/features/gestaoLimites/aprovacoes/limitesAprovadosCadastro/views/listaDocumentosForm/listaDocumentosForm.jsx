/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import PlusIcon from 'assets/icons/plus';
import NewButton from 'common/controls/newButton/newButton';
import ModalInputList from 'common/controls/modalInputList/modalInputList';
import { maskToCPFOrCNPJ } from 'utils/masks';
import MaskedInput from 'features/gestaoLimites/aprovacoes/limitesAprovadosJuridico/views/juridicoForm/maskedInput';
import FormStyle from './listaDocumentosForm.styles';
import BaseInput from './baseInput';
import RadioGroupPessoa from './radioGroupPessoa/radioGroupPessoa';
import ItemsList from '../../../../../../common/controls/itemsList/itemsList';
import SelectDocumentos from './selectDocumentos';
import SelectRelacionamento from './selectRelacionamento';

const getTextFromValue = (values, data) => values.map((value) => {
  const foundItem = data?.find((item) => item.value === value);
  return foundItem ? foundItem.text : null;
});

const ListaDocumentosForm = ({
  insertPessoaDocumentacao, idLimite, getPessoaDocumentacao, setFormSave, setOpenForm,
  insertTipoRelacionamento, insertTipoDocumento, documentoOpcoes,
}) => {
  const {
    register, formState: { errors }, trigger, reset, setValue, watch, getValue,
    control, getValues,
  } = useForm({
    mode: 'onBlur',
  });
  const [isNotRelation, setIsNotRelation] = useState(false);
  const [isNotDocument, setIsNotDocument] = useState(false);
  const [isNotPerson, setIsNotPerson] = useState(false);
  const [novosRelacionamentos, setNovosRelacionamentos] = useState([]);
  const [novosDocumentos, setNovosDocumentos] = useState([]);
  const [openModalRelacionamento, setOpenModalRelacionamento] = useState(false);
  const [openModalDocumento, setOpenModalDocumento] = useState(false);
  const myRef = useRef(null);

  const errorsKey = Object.keys(errors);

  useEffect(() => {
    setFormSave(false);
  }, [watch]);

  const selectedRelation = watch('relacionamento');
  const handleRelationChange = (valor) => {
    setValue('relacionamento', valor);
    setIsNotRelation(false);
  };

  const selectedDocuments = watch('documentos');
  useEffect(() => {
    if (selectedDocuments && selectedDocuments.length > 0) {
      setIsNotDocument(false);
    }
  }, [selectedDocuments]);

  const selectedPerson = watch('tipoPessoa');
  const handlePersonChange = (valor) => {
    setValue('tipoPessoa', valor);
    setIsNotPerson(false);
  };

  const onSubmit = (data) => {
    setFormSave(true);
    setOpenForm(false);
    insertPessoaDocumentacao(data, idLimite);
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
      case 'relacionamento':
        return myRef.current?.children[3].scrollIntoView({ block: 'center' });
      case 'documentos':
        return myRef.current?.children[4].scrollIntoView({ block: 'center' });
      default:
        return null;
    }
  };

  const validateAndSubmitForm = async () => {
    let isValid = await trigger();

    if (!selectedRelation) {
      setIsNotRelation(true);
      isValid = false;
    }
    if (!selectedDocuments || selectedDocuments.length === 0) {
      setIsNotDocument(true);
      isValid = false;
    }
    if (!selectedPerson) {
      setIsNotPerson(true);
      isValid = false;
    }

    if (isValid) {
      const data = getValues();
      onSubmit(data);
    } else {
      anchorFieldError();
    }
  };

  const resetForm = () => {
    reset();
    setIsNotDocument(false);
    setIsNotRelation(false);
    setIsNotPerson(false);
    document.activeElement.blur();
  };

  const handleModalRelacionamento = () => {
    setOpenModalRelacionamento(true);
  };
  const handleCloseModalRelacionamento = () => {
    setOpenModalRelacionamento(false);
  };
  const handleModalDocumento = () => {
    setOpenModalDocumento(true);
  };
  const handleCloseModalDocumento = () => {
    setOpenModalDocumento(false);
  };
  const inserirNovosRelacionamentos = () => {
    insertTipoRelacionamento(novosRelacionamentos);
  };
  const inserirNovosDocumentos = () => {
    insertTipoDocumento(novosDocumentos);
  };
  const handleRemove = (index) => {
    const newItems = [...selectedDocuments];
    newItems.splice(index, 1);
    setValue('documentos', newItems);
  };
  return (
    <FormStyle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateAndSubmitForm();
        }}
        ref={myRef}
      >
        <div className="form-doc_header">
          <h1>Lista de documentos</h1>
          <h3>Insira as informações referentes a atualização do cadastro da aprovação.</h3>
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
            maskFunction={maskToCPFOrCNPJ}
            onChange={(e) => {
              setValue(
                'documento',
                maskToCPFOrCNPJ(e.target.value),
              );
            }}
          />
        </div>
        <div className="form-doc_seletores">
          <SelectRelacionamento
            fieldKey="documentos"
            label="Relacionamento"
            placeHolder="Selecione um relacionamento"
            searchPlaceHolder="Pesquisar"
            selectedRelation={selectedRelation}
            handleRelationChange={handleRelationChange}
            isError={isNotRelation}
            width={240}
          />
          <ButtonTooltipIcon
            title="Criar novo relacionamento"
            className="form-doc_seletores_button"
            buttonAction={handleModalRelacionamento}
          >
            <PlusIcon
              baseColor="#243782"
            />
          </ButtonTooltipIcon>
          <SelectDocumentos
            control={control}
            register={register}
            isError={isNotDocument}
            getValues={getValue}
            setValue={setValue}
            selectedDocuments={selectedDocuments}
          />
          <ButtonTooltipIcon
            title="Criar novo documento"
            className="form-doc_seletores_button"
            buttonAction={handleModalDocumento}
          >
            <PlusIcon
              baseColor="#243782"
            />
          </ButtonTooltipIcon>
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
              onClick={resetForm}
              className="dark_gray_border"
            >
              <span>Limpar campos</span>
            </NewButton>
            <NewButton
              className="gray"
              type="submit"
            >
              <span>Salvar</span>
            </NewButton>
          </div>
        </div>
      </form>
      <ModalInputList
        title="Novo relacionamento"
        inputName="Novo relacionamento"
        itemsListName="Nomes adicionados"
        actionButtonText="Criar novos relacionamentos"
        open={openModalRelacionamento}
        handleClose={handleCloseModalRelacionamento}
        onAction={inserirNovosRelacionamentos}
        setItems={setNovosRelacionamentos}
        items={novosRelacionamentos}
      />
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
    </FormStyle>
  );
};
ListaDocumentosForm.propTypes = {
  insertPessoaDocumentacao: PropTypes.func,
  getPessoaDocumentacao: PropTypes.func,
  idLimite: PropTypes.number,
  setFormSave: PropTypes.func,
  setOpenForm: PropTypes.func,
  insertTipoRelacionamento: PropTypes.func,
  insertTipoDocumento: PropTypes.func,
  documentoOpcoes: PropTypes.array,
};

ListaDocumentosForm.defaultProps = {
  insertPessoaDocumentacao: () => {},
  getPessoaDocumentacao: () => {},
  idLimite: 0,
  setFormSave: () => {},
  setOpenForm: () => {},
  insertTipoRelacionamento: () => {},
  insertTipoDocumento: () => {},
  documentoOpcoes: [],
};
export default ListaDocumentosForm;
