import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';
import { Button, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Modal from 'common/layout/modal';
import FormRadioGroup from 'common/controls/formRadioGroup/formRadioGroup';
import DownloadIcon from 'assets/icons/download';
import ErrorIcon from '@mui/icons-material/Error';
import TextFilterDebounce from 'common/controls/textFilterDebounce/textFilterDebounce';
import {
  ModalContent,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderSubtitle,
  ModalBody,
  ModalFooter,
  DownloadButton,
  ButtonVoltar,
  FormColumn,
  FormRow,
  DatePickerWrapper,
  AlertMessage,
  FirstRowGroup,
  TextFilterWrapper,
  TextFilterProdutoWrapper,
  ModalHeaderIdOrdem,
  FormTextContainer,
  RELATORIO_BUTTON_SX,
  SUBMIT_BUTTON_SX,
} from './modalNovaOrdem.style';
import { clearNovaOrdemErrors, resetValidacaoOrdem } from '../../redux/actions';
import operations from '../../redux/operations';
import SelectProduto from './views/selectProduto';
import DatepickerPrazo from './views/datepickerPrazo';
import UploadArquivoOrdem from './views/uploadArquivoOrdem/uploadArquivoOrdem';
import ErrorDisplay from './views/errorDisplay/errorDisplay';

const FORM_DEFAULT_VALUES = {
  existeCartaMes: 'true',
  numCartaMes: '',
  prazoReversao: null,
  produto: null,
  arquivo: null,
};

const CARTA_MES_OPTIONS = [
  { value: true, text: 'Sim' },
  { value: false, text: 'Não' },
];

const ModalNovaOrdem = ({
  setOpen,
  downloadTemplate,
  isTemplateLoading,
  createOrdem,
  editOrdem,
  selectedOrdem,
}) => {
  const dispatch = useDispatch();

  const {
    isLoading,
  } = useSelector((state) => state.ordens.novaOrdem);

  const {
    resultado,
    relatorioGerado,
    isLoading: isValidating,
    isRelatorioErrosLoading,
  } = useSelector((state) => state.ordens.validacaoOrdem);

  const {
    handleSubmit, control, watch, setValue,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const formValues = {
    existeCartaMes: watch('existeCartaMes'),
    numCartaMes: watch('numCartaMes'),
    prazoReversao: watch('prazoReversao'),
    produto: watch('produto'),
    arquivo: watch('arquivo'),
  };
  const isCartaMesEnabled = formValues.existeCartaMes === 'true';
  const isEditMode = selectedOrdem != null;

  const temErros = !isEditMode && resultado && resultado.totalLinhasComErro > 0;
  const todasLinhasComErro = temErros && resultado.totalLinhasCorretas === 0;

  const getSubmitButtonState = () => {
    const {
      numCartaMes, produto, prazoReversao, arquivo,
    } = formValues;
    if (isEditMode) {
      return numCartaMes && prazoReversao;
    }
    const baseRequirements = produto && arquivo;

    if (isCartaMesEnabled) {
      return baseRequirements && numCartaMes && prazoReversao;
    }
    return baseRequirements;
  };

  const isFormReady = getSubmitButtonState();
  const errosPermitemEnvio = !temErros || (!todasLinhasComErro && relatorioGerado);
  const isSubmitEnabled = isFormReady && !isValidating && errosPermitemEnvio;

  const handleClose = () => {
    setOpen(false);
    dispatch(clearNovaOrdemErrors());
    dispatch(resetValidacaoOrdem());
  };

  const handleFormSubmit = (data) => {
    dispatch(clearNovaOrdemErrors());

    const formData = {
      numCartaMes: data.numCartaMes,
      prazoReversao: data.prazoReversao,
      produto: data.produto,
      arquivo: data.arquivo,
    };
    if (isEditMode) editOrdem(formData, handleClose);
    else createOrdem(formData, handleClose);
  };

  const handleFieldChange = (field) => (value) => {
    setValue(field, value);
  };

  const getSubmitLabel = () => {
    const hasPartialErrors = temErros && !todasLinhasComErro;
    if (!hasPartialErrors || resultado?.totalLinhasCorretas <= 0) return 'Criar ordem';
    const count = resultado.totalLinhasCorretas;
    return `Criar ordem com ${count} ${count === 1 ? 'linha válida' : 'linhas válidas'}`;
  };

  const handleGerarRelatorio = () => {
    dispatch(operations.gerarRelatorioErros(formValues.arquivo));
  };

  useEffect(() => {
    if (!isCartaMesEnabled) {
      setValue('numCartaMes', null);
      setValue('prazoReversao', null);
    }
  }, [isCartaMesEnabled, setValue]);

  useEffect(() => {
    if (selectedOrdem) {
      setValue('produto', selectedOrdem.produto);
    }
    dispatch(clearNovaOrdemErrors());
  }, [selectedOrdem, dispatch]);

  const modalBodyCadastro = () => (
    <>
      <FirstRowGroup>
        <FormRow>
          <FormColumn $isEditMode={isEditMode}>
            <DownloadButton type="button" onClick={downloadTemplate}>
              {isTemplateLoading ? (
                <CircularProgress color="inherit" size="18px" />
              ) : (
                <DownloadIcon />
              )}
              Baixar template
            </DownloadButton>
          </FormColumn>
          <FormRow>
            <FormRadioGroup
              width="160px"
              fieldName="existeCartaMes"
              control={control}
              label="Existe carta do mês"
              hideErrorText
              options={CARTA_MES_OPTIONS}
              row
              disabled={isLoading || isEditMode}
            />
            <FormTextContainer>
              <TextFilterDebounce
                label="Nº da carta do mês"
                value={formValues.numCartaMes}
                setValue={handleFieldChange('numCartaMes')}
                placeholder="Preencha o número da carta do mês"
                disabled={!isCartaMesEnabled || isLoading}
              />
            </FormTextContainer>
          </FormRow>
        </FormRow>
        <AlertMessage $visible={!isCartaMesEnabled}>
          <ErrorIcon fontSize="small" style={{ color: '#BF8900' }} />
          Ordens sem carta do mês exigem liberação manual pela montadora antes de
          seguir para o dealer.
        </AlertMessage>
      </FirstRowGroup>
      <FormRow>
        <FormColumn>
          <DatePickerWrapper>
            <DatepickerPrazo
              key={isCartaMesEnabled ? 'enabled' : 'disabled'}
              data={formValues.prazoReversao}
              setData={handleFieldChange('prazoReversao')}
              isDisabled={!isCartaMesEnabled || isLoading}
            />
          </DatePickerWrapper>
        </FormColumn>
        <FormColumn $isEditMode={isEditMode}>
          <SelectProduto
            selectedProduto={formValues.produto}
            setSelectedProduto={handleFieldChange('produto')}
            disabled={isLoading}
          />
        </FormColumn>
        <FormColumn>
          <UploadArquivoOrdem
            control={control}
            disabled={isLoading}
            dispatch={dispatch}
            isValidating={isValidating}
          />
        </FormColumn>
      </FormRow>
      <ErrorDisplay
        erros={resultado?.erros || []}
        totalLinhasCorretas={resultado?.totalLinhasCorretas || 0}
        totalLinhasComErro={resultado?.totalLinhasComErro || 0}
        todasLinhasComErro={!!todasLinhasComErro}
      />

    </>
  );

  const modalBodyEdit = () => (
    <>
      <FormRow>
        <DatePickerWrapper>
          <DatepickerPrazo
            data={formValues.prazoReversao}
            setData={handleFieldChange('prazoReversao')}
            isDisabled={isLoading}
          />
        </DatePickerWrapper>
        <TextFilterWrapper>
          <TextFilterDebounce
            label="Nº da carta do mês"
            value={formValues.numCartaMes}
            setValue={handleFieldChange('numCartaMes')}
            placeholder="Preencha o número da carta do mês"
            disabled={isLoading}
          />
        </TextFilterWrapper>
        <TextFilterProdutoWrapper>
          <TextFilterDebounce
            label="Produto"
            value={formValues.produto}
            disabled
          />
        </TextFilterProdutoWrapper>
      </FormRow>
      <ErrorDisplay erros={[]} />
    </>
  );

  return (
    <Modal closeModal={handleClose} width="800px" height="fit-content">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <ModalContent>
          <ModalHeader>
            <ModalHeaderSubtitle>Gestão de Test Drive</ModalHeaderSubtitle>
            <ModalHeaderTitle>
              {isEditMode ? 'Inserir carta do mês' : 'Criação de ordem'}
            </ModalHeaderTitle>
            {isEditMode
            && (
              <ModalHeaderIdOrdem>
                ID ORDEM #
                {selectedOrdem.id}
              </ModalHeaderIdOrdem>
            )}
          </ModalHeader>
          <ModalBody>
            {isEditMode ? modalBodyEdit() : modalBodyCadastro()}
          </ModalBody>
          <ModalFooter>
            <ButtonVoltar>
              <Button onClick={handleClose}>Cancelar</Button>
            </ButtonVoltar>
            {temErros && (
              <LoadingButton
                variant="outlined"
                type="button"
                loading={isRelatorioErrosLoading}
                onClick={handleGerarRelatorio}
                sx={RELATORIO_BUTTON_SX}
              >
                Baixar relatório de erros
              </LoadingButton>
            )}
            <Tooltip
              title={temErros && !todasLinhasComErro && !relatorioGerado ? 'Baixe o relatório de erros para desbloquear a criação de ordem.' : ''}
              placement="top"
            >
              <span>
                <LoadingButton
                  type="submit"
                  disabled={!isSubmitEnabled}
                  loading={isLoading}
                  sx={SUBMIT_BUTTON_SX}
                >
                  {isEditMode ? 'Salvar alterações' : getSubmitLabel()}
                </LoadingButton>
              </span>
            </Tooltip>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

ModalNovaOrdem.propTypes = {
  setOpen: PropTypes.func.isRequired,
  downloadTemplate: PropTypes.func.isRequired,
  createOrdem: PropTypes.func.isRequired,
  editOrdem: PropTypes.func.isRequired,
  isTemplateLoading: PropTypes.bool,
  selectedOrdem: PropTypes.object,
};

ModalNovaOrdem.defaultProps = {
  isTemplateLoading: false,
  selectedOrdem: null,
};

export default ModalNovaOrdem;
