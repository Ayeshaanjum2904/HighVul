import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'common/layout/modal';
import TextFilterMasked from 'common/controls/textFilterMasked/textFilterMasked';
import FormatInput from 'common/controls/input/formInput/formInput';
import Button from 'common/controls/button';
import NewBasicSelect from 'common/controls/newBasicSelect/newBasicSelect';
import { getUnmaskedInput, MASK_CNPJ } from 'utils/masks';
import selectors from '../../redux/selectors';
import {
  ModalContent,
  ModalHeaderTitle,
  ModalBody,
  ModalFooter,
  Row,
  CnpjField,
  NomeField,
  BrandField,
  BancoField,
  AgenciaField,
  ContaField,
  CadastrarButton,
  EditarButton,
  CancelarButton,
  FooterContainer,
  TextContainer,
  FooterText,
  ButtonsContainer,
} from './modalCadastroConta.style';

const ModalCadastroConta = ({
  setOpen,
  onSubmit,
  getConcessionariaDados,
  concessionariaDados,
  isLoadingConcessionaria,
  modalCadastroForm,
  setModalCadastroFormField,
  resetModalCadastroForm,
  isEditMode = false,
}) => {
  const [isEditConfirmation, setIsEditConfirmation] = useState(false);

  useEffect(() => {
    const numericCnpj = getUnmaskedInput(modalCadastroForm.cnpj);
    if (numericCnpj.length === 14) {
      getConcessionariaDados(numericCnpj);
    }
  }, [modalCadastroForm.cnpj]);

  useEffect(() => {
    if (concessionariaDados && !isEditMode) {
      setModalCadastroFormField('nomeConcessionaria', concessionariaDados.nomeConcessionaria ?? '');
      setModalCadastroFormField('brand', '');
    }
  }, [concessionariaDados, setModalCadastroFormField]);

  const brandsOptions = useSelector(selectors.brandsList);

  const defaultBrand = { value: modalCadastroForm?.brand, label: modalCadastroForm?.brandLabel };

  const combinedOptions = brandsOptions.length > 0
    ? brandsOptions
    : [defaultBrand];

  const handleChange = (field) => (value) => {
    if (isEditConfirmation && isEditMode) {
      setIsEditConfirmation(false);
    }
    setModalCadastroFormField(field, value);
  };

  const isFormFilled = [
    modalCadastroForm.cnpj,
    modalCadastroForm.nomeConcessionaria,
    modalCadastroForm.brand,
    modalCadastroForm.banco,
    modalCadastroForm.agencia,
    modalCadastroForm.conta,
  ].every((v) => v && v !== '' && v !== '_default');

  const handleClose = () => {
    resetModalCadastroForm();
    setOpen(false);
  };

  const handleSubmit = () => {
    const formToSend = {
      ...modalCadastroForm,
      cnpj: getUnmaskedInput(modalCadastroForm.cnpj),
    };
    onSubmit(formToSend, isEditMode);
    resetModalCadastroForm();
    setOpen(false);
  };

  const handleEdit = () => {
    if (isEditConfirmation) handleSubmit();
    else {
      setIsEditConfirmation(true);
    }
  };

  return (
    <Modal
      closeModal={handleClose}
      width="600px"
      height="447px"
    >
      <ModalContent>
        <ModalHeaderTitle>
          {isEditMode ? 'Editar conta' : 'Cadastrar nova conta'}
        </ModalHeaderTitle>
        <ModalBody>
          <Row>
            <CnpjField>
              <TextFilterMasked
                placeholder="Preencha o CNPJ"
                label="CNPJ"
                value={modalCadastroForm.cnpj}
                setValue={handleChange('cnpj')}
                showSearchIcon
                mask={MASK_CNPJ.mask}
                blocks={MASK_CNPJ.blocks}
                prepareChar={MASK_CNPJ.prepareChar}
                disabled={isLoadingConcessionaria || isEditMode}
              />
            </CnpjField>
            <NomeField>
              <FormatInput
                label="Nome da Concessionária"
                value={modalCadastroForm.nomeConcessionaria}
                disabled
                onChange={handleChange('nomeConcessionaria')}
              />
            </NomeField>
          </Row>
          <Row>
            <BrandField>
              <NewBasicSelect
                nameLabel="Brand"
                placeholder="Selecione a brand"
                selectedOption={modalCadastroForm.brand || '_default'}
                options={combinedOptions}
                setOption={handleChange('brand')}
                renderAllOptions={false}
                isLoading={isLoadingConcessionaria || !brandsOptions.length}
              />
            </BrandField>
            <BancoField>
              <FormatInput
                placeholder="Preencha o código do banco"
                type="number"
                label="Banco"
                value={modalCadastroForm.banco}
                setValue={handleChange('banco')}
                inputProps={{ maxLength: 3 }}
              />
            </BancoField>
          </Row>
          <Row>
            <AgenciaField>
              <FormatInput
                placeholder="Preencha a agência"
                type="text"
                label="Agência"
                value={modalCadastroForm.agencia}
                setValue={handleChange('agencia')}
              />
            </AgenciaField>
            <ContaField>
              <FormatInput
                placeholder="Preencha a conta"
                type="text"
                label="Conta Corrente"
                value={modalCadastroForm.conta}
                setValue={handleChange('conta')}
              />
            </ContaField>
          </Row>
        </ModalBody>
        <ModalFooter>
          {isEditMode ? (
            <FooterContainer>
              <TextContainer>
                <FooterText>{isEditConfirmation ? 'Esta alteração irá sobrescrever as informações atuais' : ''}</FooterText>
              </TextContainer>
              <ButtonsContainer>
                <CancelarButton>
                  <Button onClick={handleClose}>
                    Cancelar
                  </Button>
                </CancelarButton>

                <EditarButton>
                  <Button
                    onClick={handleEdit}
                    disabled={!isFormFilled}
                  >
                    {isEditConfirmation ? 'Salvar mesmo assim' : 'Salvar alterações'}
                  </Button>
                </EditarButton>
              </ButtonsContainer>
            </FooterContainer>
          )
            : (
              <CadastrarButton>
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormFilled}
                >
                  Cadastrar Conta
                </Button>
              </CadastrarButton>
            )}

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ModalCadastroConta.propTypes = {
  setOpen: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  getConcessionariaDados: PropTypes.func,
  concessionariaDados: PropTypes.object,
  isLoadingConcessionaria: PropTypes.bool,
  modalCadastroForm: PropTypes.object.isRequired,
  setModalCadastroFormField: PropTypes.func.isRequired,
  resetModalCadastroForm: PropTypes.func,
  isEditMode: PropTypes.bool,
};

ModalCadastroConta.defaultProps = {
  concessionariaDados: null,
  isLoadingConcessionaria: false,
  getConcessionariaDados: () => { },
  resetModalCadastroForm: () => { },
  isEditMode: false,
};

export default ModalCadastroConta;
