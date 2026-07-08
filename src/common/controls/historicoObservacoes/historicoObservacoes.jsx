import {
  React, useEffect, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { deburr } from 'lodash';

import { Box, Divider, Stack } from '@mui/material';
import { Quill } from 'react-quill';
import { useForm, useFieldArray } from 'react-hook-form';
import moment from 'moment';
import { AuthStorage } from 'modules/auth/authStorage';

import colors from 'assets/styles/colors';
import AlertModal from 'common/layout/alertModal';
import InputToolbar from './inputToolbar/inputToolbar';
import InputContainer from './inputContainer/InputContainer';
import 'react-quill/dist/quill.snow.css';
import ObservacoesList from './observacoesList/observacoesList';
import SelecionarPerfil from './selecionarPerfil/selecionarPerfil';
import TextFieldComponent from './pesquisaObservacoes/TextFieldComponent';
import SelectFilterPerfil from './pesquisaObservacoes/SelectFilterPerfil';

const AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);

const HistoricoObservacoes = ({
  observacoes, perfis, inputMaxLines, isDealer, addSnackbar, maxHeight, insertObservacao,
  uploadArquivoTemporario, getDocumentoDownload,
}) => {
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
    setValue, watch, control, clearErrors,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      observacao: '',
      perfil: perfis?.length > 1 ? '' : perfis[0]?.value,
      enviarParaDealer: isDealer,
      anexos: [],
    },
  });

  const [openAlert, setOpenAlert] = useState(false);
  const [warningDealer, setWarningDealer] = useState(false);
  const [search, setSearch] = useState('');
  const [perfil, setPerfil] = useState(null);

  const observacaoValue = watch('observacao');
  const isErrorObservacao = Boolean(errors.observacao);
  const isErrorPerfil = Boolean(errors.perfil);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'anexos',
  });
  const normalizeText = (text) => deburr(text.toLowerCase().normalize('NFD'));
  const perfilMap = {
    cadastro: 'Cadastro',
    credito: 'Crédito',
    dealer: 'Dealer',
    financiamento: 'Finan. Rede',
    juridico: 'Jurídico',
  };

  useEffect(() => {
    register('observacao', {
      validate: (value) => {
        const tmpValue = new DOMParser().parseFromString(value, 'text/html');
        const validInput = Boolean(tmpValue.body.textContent.trim());
        if (!validInput && fields.length === 0) setValue('observacao', '');
        return validInput || fields.length > 0;
      },
    });
  }, [register, fields]);

  const onSubmit = async (data) => {
    try {
      const observacaoComAnexos = {
        ...data,
        anexos: fields,
      };

      setWarningDealer(false);
      await insertObservacao(observacaoComAnexos);
      setValue('observacao', '');
      remove();
    } catch (error) {
      addSnackbar('Erro ao enviar observação');
    }
  };

  const handleFormSubmit = async (data) => {
    if (data?.enviarParaDealer) {
      setOpenAlert(true);
      setWarningDealer(true);
    } else {
      await onSubmit(data);
    }
  };

  const uploadDocumento = async (file) => {
    const novoDocumento = await uploadArquivoTemporario(file);

    if (novoDocumento) {
      append(novoDocumento);
      clearErrors('observacao');
    }
  };

  const deleteDocumento = (documento) => {
    remove(fields.findIndex((field) => field.nomeGuid === documento.nomeGuid));
  };

  const handleSetObservacao = (value) => {
    setValue('observacao', value);
    if (isErrorObservacao) clearErrors('observacao');
  };

  const downloadDocumento = async (guidDocumento) => getDocumentoDownload(guidDocumento);

  const filterByPerfil = (item) => {
    if (!perfil || perfil.length === 7) return true;

    const usuarioNameText = normalizeText(item?.usuarioNome);

    const isPerfilSelected = perfil.some((p) => p.label === item.perfil);
    const isUserNameSelected = perfil.some((p) => p.label === 'usuarioNome') && usuarioNameText === normalizeText(AuthStorage.getCurrentUser().name);
    const isSentToDealerSelected = perfil.some((p) => p.label === 'enviarDealer') && item.enviarDealer && item.perfil !== 'dealer';

    return isPerfilSelected || isUserNameSelected || isSentToDealerSelected;
  };

  const filterBySearch = (item) => {
    const normalizeSearch = normalizeText(search);
    const domParser = new DOMParser();

    const htmlDocument = domParser.parseFromString(item?.observacao, 'text/html');
    const perfilText = normalizeText(perfilMap[item?.perfil] || 'N/A');
    const itemText = normalizeText(htmlDocument.body.textContent);
    const usuarioEmailText = normalizeText(item?.usuarioEmail);
    const creationDate = moment(item?.criadoEm).format('DD/MM/YYYY').toLowerCase();
    const creationTime = moment(item?.criadoEm).format('HH:mm').toLowerCase();

    return [
      perfilText.includes(normalizeSearch),
      itemText.includes(normalizeSearch),
      usuarioEmailText.includes(normalizeSearch),
      creationDate.includes(normalizeSearch),
      creationTime.includes(normalizeSearch),
    ].some((condition) => condition);
  };

  const filteredObservacoes = useMemo(
    () => observacoes.filter((item) => filterByPerfil(item) && filterBySearch(item)),
    [search, observacoes, perfil],
  );

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Stack
          minWidth={356}
          maxHeight={maxHeight}
          sx={{
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              width: '4px',
            },
          }}
        >
          <Stack direction="row" minHeight={56} gap="12px" padding="16px 12px 16px 6px" justifyContent="space-between">
            <InputToolbar disabled={isSubmitting} />
            <Stack direction="row" alignItems="center">
              <TextFieldComponent
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SelectFilterPerfil
                perfil={perfil}
                setPerfil={setPerfil}
              />
            </Stack>
          </Stack>
          <Divider sx={{ borderColor: colors.secundary_color_100 }} />
          <Stack padding="12px 12px 0px 12px" gap="8px">
            {!isDealer && (
            <Stack direction="row" minHeight={20} gap="8px">
              <SelecionarPerfil
                control={control}
                items={perfis}
                error={isErrorPerfil}
              />
            </Stack>
            )}
            <InputContainer
              control={control}
              inputMaxLines={inputMaxLines}
              observacao={observacaoValue}
              setObservacao={handleSetObservacao}
              error={isErrorObservacao}
              isSubmitting={isSubmitting}
              uploadDocumento={uploadDocumento}
              deleteDocumento={deleteDocumento}
              documentos={fields}
              warningDealer={warningDealer}
              setWarningDealer={setWarningDealer}
              isBreakWord
            />
          </Stack>
          <Box padding="0px 12px 8px 12px">
            <ObservacoesList
              observacoes={observacoes}
              filteredObservacoes={filteredObservacoes}
              isDealer={isDealer}
              downloadDocumento={downloadDocumento}
            />
          </Box>
        </Stack>
      </form>
      <AlertModal
        title="Enviar para dealer"
        subtitle="Essa mensagem será enviada para o dealer, tem certeza que deseja enviar? Caso não deseje enviar a mensagem para o dealer, selecione cancelar e desmarque essa opção no campo de texto."
        textGrayButton="Cancelar"
        textRedButton="Sim, enviar"
        openModal={openAlert}
        setOpen={setOpenAlert}
        buttonAction={handleSubmit(onSubmit)}
        color={colors.alert_color_200}
        widthButton="100px"
      />
    </>
  );
};

HistoricoObservacoes.propTypes = {
  observacoes: PropTypes.array,
  perfis: PropTypes.array.isRequired,
  inputMaxLines: PropTypes.number,
  isDealer: PropTypes.bool,
  addSnackbar: PropTypes.func,
  maxHeight: PropTypes.number,
  insertObservacao: PropTypes.func.isRequired,
  uploadArquivoTemporario: PropTypes.func.isRequired,
  getDocumentoDownload: PropTypes.func.isRequired,
};

HistoricoObservacoes.defaultProps = {
  observacoes: [],
  inputMaxLines: 9,
  isDealer: false,
  addSnackbar: () => {},
  maxHeight: 320,
};

export default HistoricoObservacoes;
