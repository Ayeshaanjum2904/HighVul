/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './infoDocumentosComplementares.scss';
import { Divider } from '@mui/material';
import Button from 'common/controls/button';
import AlertModal from 'common/layout/alertModal';
import { camelFormat } from 'utils/format';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import EditIcon from '@material-ui/icons/Edit';
import _ from 'lodash';
import AlertModalInput from 'common/layout/alertModalInput';
import AlertFilledIcon from 'assets/icons/alert-filled';
import colors from 'assets/styles/colors';
import SummaryPage from 'common/controls/summaryPage';
import { maskToCPFOrCNPJ } from 'utils/masks';
import RadioGroupPessoaJuridico from '../../juridicoForm/radioGroupPessoaJuridico/radioGroupPessoaJuridico';
import JuridicoForm from '../../juridicoForm';
import { getDocumentStatus, renderStatusItens } from '../documentoComplementarStatus/statusUtils';

import FieldDocumentoJuridico from './fieldDocumentoJuridico';
import FieldDocumentoComplementar from '../fieldDocumentoComplementar';

const renderItem = (text, item) => (
  <div className="modal-documentos-complementares__content__documentos__itens">
    <span className="modal-documentos-complementares__content__documentos__text-label">{text}</span>
    <div className="modal-documentos-complementares__content__documentos__text-info">{item}</div>
  </div>
);
const InfoDocumentosComplementares = ({
  listaDocumentacaoJuridico,
  removeButtonClick,
  idLimite,
  invalidarDocumento,
  mudarStatus,
  statusDestino,
  indexPessoa,
  updateStatusPendenteAnexo,
  updateStatusValidado,
  isReadonlyStatus,
}) => {
  const [openAlertModalLista, setOpenAlertModalLista] = useState(false);
  const [openAlertModalDocumento, setOpenAlertModalDocumento] = useState(false);
  const [componentToRender, setComponentToRender] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [motivo, setMotivo] = useState(false);
  const [documentoSelecionado, setDocumentoSelecionado] = useState();
  const history = useHistory();

  const handleOpenAlertModalLista = () => {
    setOpenAlertModalLista(true);
  };

  const handleOpenAlertModalDocumento = (documento, indexDocumento) => {
    setDocumentoSelecionado({
      ...documento,
      indexDocumento,
      indexPessoa,
      lista: listaDocumentacaoJuridico.nome,
      documentoNome: listaDocumentacaoJuridico.documentoPendente[indexDocumento].tipoDocumentoNome,
    });
    setOpenAlertModalDocumento(true);
  };

  const handleCloseAlertModalLista = () => {
    setMotivo('');
    setDocumentoSelecionado();
    setOpenAlertModalDocumento(false);
    history.replace('/limites/aprovacoes/limites-aprovados');
  };
  const deleteDocumentosComplementares = () => {
    removeButtonClick(listaDocumentacaoJuridico.idPessoaDocumentacaoJuridico);
  };

  const hasDocumentoId = () => listaDocumentacaoJuridico.documentoPendente.some(
    (item) => item.documentoId !== null,
  );

  useEffect(() => {
    setComponentToRender(<InfoDoc />);
    const isValidado = listaDocumentacaoJuridico.documentoPendente.every((doc) => doc.validado);
    const isPendenteAnexo = listaDocumentacaoJuridico.documentoPendente.some((doc) => !doc.documentoId);
    if (isValidado !== listaDocumentacaoJuridico.isValidado) updateStatusValidado(isValidado, indexPessoa);
    if (isPendenteAnexo !== listaDocumentacaoJuridico.isPendenteAnexo) updateStatusPendenteAnexo(isPendenteAnexo, indexPessoa);
  }, [listaDocumentacaoJuridico]);

  const handleSalvarMotivo = () => {
    const motivoWithLineBreaks = motivo.replace(/\n/g, '<br />');

    invalidarDocumento(
      documentoSelecionado,
      motivoWithLineBreaks,
      idLimite,
      statusDestino,
      mudarStatus,
      () => handleCloseAlertModalLista(),
    );
  };

  const InfoDoc = () => (
    <div className="modal-documentos-complementares__sections">
      <div className="modal-documentos-complementares__content__header">
        <RadioGroupPessoaJuridico
          inputData={listaDocumentacaoJuridico?.tipoPessoa}
          disabled
        />
        {renderItem('CNPJ|CPF', maskToCPFOrCNPJ(listaDocumentacaoJuridico?.documento))}
      </div>
      <Divider />
      {listaDocumentacaoJuridico?.documentoPendente?.map((item, index) => (
        <>
          <div key={item.documentoId} className="modal-documentos-complementares__content__documentos">
            {renderItem('Nome do documento', item.tipoDocumentoNome)}
            <FieldDocumentoJuridico
              key={item.documentoId}
              indexDocumento={index}
              indexPessoa={indexPessoa}
              invalidarDocumento={() => handleOpenAlertModalDocumento(item, index)}
              isReadonlyStatus={isReadonlyStatus}
            />
          </div>
          <Divider />
        </>
      ))}
      {!_.isEmpty(listaDocumentacaoJuridico.listaArquivos) && (
        <FieldDocumentoComplementar
          documento={listaDocumentacaoJuridico.listaArquivos}
          label="Anexo Arquivo"
        />
      )}
      {!listaDocumentacaoJuridico.documentoPendente
        .some((documento) => documento.documentoId !== null) && !isReadonlyStatus && (
          <div className="modal-documentos-complementares__content__footer">
            <Button
              onClick={handleOpenAlertModalLista}
              color="new-gray"
            >
              Apagar Lista
            </Button>
          </div>
      )}
    </div>
  );

  const handleEditClick = (event) => {
    setIsFocused(!isFocused);
    setOpenDetails(true);
    event.stopPropagation();
    setComponentToRender(
      <JuridicoForm initialData={listaDocumentacaoJuridico} idLimite={idLimite} />,
    );
  };

  const statusSummary = getDocumentStatus(listaDocumentacaoJuridico);

  const iconTitle = () => {
    const editIcon = (
      <IconButtonTooltip
        tooltip="Editar"
        padding="4px"
        onClick={handleEditClick}
        isActive={isFocused}
      >
        <EditIcon />
      </IconButtonTooltip>
    );
    return (!hasDocumentoId() && !isReadonlyStatus && editIcon);
  };

  const baseActions = [iconTitle()];

  return (
    <div className="info-documentos-complementares">
      <SummaryPage
        title={camelFormat(listaDocumentacaoJuridico.nome, 2)}
        IconTitle={renderStatusItens(statusSummary)}
        open={openDetails}
        level={5}
        actions={baseActions}
      >
        {componentToRender}
      </SummaryPage>
      <AlertModal
        buttonAction={() => deleteDocumentosComplementares()}
        title="Deseja apagar lista de documentos complementares?"
        subtitle="Ao apagar a lista de documentos complementares, os documentos solicitados serão removidos da lista de solicitações do dealer."
        textRedButton="Apagar lista"
        openModal={openAlertModalLista}
        setOpen={setOpenAlertModalLista}
      />
      <AlertModalInput
        openAlertModalInput={openAlertModalDocumento}
        setOpenAlertModalInput={setOpenAlertModalDocumento}
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
    </div>
  );
};

InfoDocumentosComplementares.propTypes = {
  listaDocumentacaoJuridico: PropTypes.array,
  removeButtonClick: PropTypes.func,
  invalidarDocumento: PropTypes.func,
  idLimite: PropTypes.number,
  mudarStatus: PropTypes.bool,
  statusDestino: PropTypes.string,
  indexPessoa: PropTypes.number.isRequired,
  updateStatusPendenteAnexo: PropTypes.func,
  updateStatusValidado: PropTypes.func,
  isReadonlyStatus: PropTypes.bool,
};

InfoDocumentosComplementares.defaultProps = {
  listaDocumentacaoJuridico: [],
  removeButtonClick: () => {},
  invalidarDocumento: () => {},
  idLimite: null,
  mudarStatus: false,
  statusDestino: '',
  updateStatusPendenteAnexo: () => {},
  updateStatusValidado: () => {},
  isReadonlyStatus: false,
};

export default InfoDocumentosComplementares;
