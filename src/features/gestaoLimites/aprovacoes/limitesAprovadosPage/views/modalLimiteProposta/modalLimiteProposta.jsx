/* eslint-disable indent */
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { Modal, CircularProgress, RadioGroup } from '@material-ui/core';
import { formatDate, formatDadosInfoModal } from 'utils/format';
import PropTypes from 'prop-types';
import moment from 'moment';
import _, { deburr } from 'lodash';

import RadioButton from 'common/controls/radioButton';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth';
import AlertCard from 'common/layout/alertCard/alertCard';
import AlertModalInput from 'common/layout/alertModalInput';
import TimelineDropdown from 'common/controls/timelineDropdown';
import AlertFilledIcon from 'assets/icons/alert-filled';
import CircleAlertYellowIcon from 'assets/icons/circle-alert-yellow';
import { Divider } from '@mui/material';
import { hasPermission } from 'modules/auth/authLogic';
import parse from 'html-react-parser';
import colors from 'assets/styles/colors';
import ObservacoesAprovacao from 'features/gestaoLimites/aprovacoes/observacoesAprovacao';
import ModalLimitePropostaFooter from './modalLimitePropostaFooter';
import './modalLimiteProposta.scss';
import InfoModal from './infoModal/infoModal';
import ModalLimitePropostaDetailSection from './modalLimitePropostaDetailSection/modalLimitePropostaDetailSection';
import InputCondicoes from './inputCondicoes';
import ModalLimitePropostaHeader from './modalLimitePropostaHeader';

const setList = (selectedValue, data, modificado) => {
  const statusList = modificado.map((item) => ({
    idVersao: item.id,
    statusSisgar: selectedValue === item.id.toString() ? 'VÁLIDO' : 'INVÁLIDO',
  }));

  statusList.push(
    {
      idVersao: data.id,
      statusSisgar: selectedValue === 'valido' ? 'VÁLIDO' : 'INVÁLIDO',
    },
  );

  return statusList;
};

const ModalLimiteProposta = ({
  open, handleClose, data, historicoLimite, historicoIsLoading,
  setAlterarStatusList, enviarProposta, motivo, setMotivo,
  getLimitesAprovados, setUpdateCondicao, setCondicao,
  salvarCancelamentoMotivo, isErrorAlertModal, isLoadingAlertModal,
  user, condicaoSisgar, limites,
}) => {
  const [value, setValue] = useState('valido');
  const [limite, setLimite] = useState(data);
  const [modificado, setModificado] = useState([]);
  const [openModalCancelamento, setOpenModalCancelamento] = useState(false);
  const [documentoAnexo, setDocumentoAnexo] = useState(false);
  const radioButtonRef = useRef(null);
  const isStatusPendente = limite.statusLimite === 'Pendente';
  const isFirstRender = useRef(true);

  const setEscolha = (selectedValue) => {
    const statusList = setList(selectedValue, limite, modificado);
    setValue(selectedValue);
    setAlterarStatusList(statusList);
  };

  useEffect(() => {
    const lim = limites?.find((l) => l.idLimite === data?.idLimite);
    if (lim) {
      setLimite(lim);
      setModificado(lim.modificados);
      let idModificada = value === 'valido' ? 'valido' : lim.modificados[lim.modificados.length - 1].id.toString();
      if (isFirstRender.current) {
        idModificada = 'valido';
        isFirstRender.current = false;
      }
      setValue(idModificada);
      setAlterarStatusList(setList(idModificada, lim, lim.modificados));
      setCondicao(lim.id, lim.condicao);
      if (lim.modificados?.length > 0) {
        lim.modificados.forEach((md) => {
          setCondicao(md.id, md.condicao);
        });
      }
    }
  }, [limites]);

  const timelineItems = useMemo(() => historicoLimite?.slice(0).reverse().map((item) => {
    const datetime = moment(item?.dataHora);
    const date = datetime.format('DD/MM/YYYY');
    const time = datetime.format('HH:mm');
    const search = deburr(item?.descricao?.toLowerCase());

    return {
      date,
      time,
      text: item?.descricao,
      search: [search, date].join(' '),
    };
  }), [historicoLimite]);

  const idProduto = limite?.idLimite;

  const { itensConcessionaria, itensProduto } = formatDadosInfoModal(limite);

  const handleEscolha = (event) => {
    const selectedValue = event.target.value;
    setEscolha(selectedValue);
  };

  const handleSalvarMotivoCancelamento = async () => {
    if (isStatusPendente) {
      salvarCancelamentoMotivo(limite.idLimite, documentoAnexo, motivo);
    } else {
      await enviarProposta(limite.idLimite, 'aprovacao_cancelada', motivo);
      await getLimitesAprovados();
      setOpenModalCancelamento(false);
    }
  };

  const onCloseModal = () => {
    setUpdateCondicao(false);
    handleClose();
  };

  const renderModalCancelamento = () => (
    <AlertModalInput
      openAlertModalInput={openModalCancelamento}
      setOpenAlertModalInput={setOpenModalCancelamento}
      buttonAction={handleSalvarMotivoCancelamento}
      title="Deseja cancelar esta aprovação?"
      subtitle="Para prosseguir com a ação é necessário informar o motivo
        do cancelamento da aprovação selecionada."
      alertCardTitle="É necessário inserir um motivo de cancelamento."
      icone={<AlertFilledIcon width="8" height="8" />}
      colorBase="rgba(245, 142, 134, 0.08)"
      placeholder="Insira o motivo do cancelamento (obrigatório)*"
      inputValue={motivo}
      setInputValue={setMotivo}
      inputDocumento={isStatusPendente}
      documentoValue={documentoAnexo}
      setDocumentoValue={setDocumentoAnexo}
      isLoading={isLoadingAlertModal}
      isError={isErrorAlertModal}
    />
  );

  const renderModificados = () => {
    const sortedModificado = _.sortBy(modificado, (item) => new Date(item.criadoEm)).reverse();
    return (
      <RadioGroup
        value={value}
        onChange={handleEscolha}
      >
        {sortedModificado?.map((m, index) => {
          const {
            itensConcessionaria: itensConcessionariaModificados,
            itensProduto: itensProdutoModificados,
          } = formatDadosInfoModal(m);
          return (
            <>
              <div className="option-container" key={m.id}>
                <div className="radio-button-alteracoes">
                  <RadioButton value={m.id.toString()} setValue={setValue} ref={radioButtonRef} />
                </div>
                <InfoModal
                  descricaoProduto={m.descricaoProduto}
                  itensConcessionaria={itensConcessionariaModificados}
                  itensProduto={itensProdutoModificados}
                  idVersao={m.id}
                  idLimite={limite?.idLimite}
                  isModificada={m.camposModificados?.includes('condicao')}
                  title="Aprovação atualizada"
                  index={index.toString()}
                  isModal
                  userCanEditCondicao
                  dataAlteracao={formatDate(m.criadoEm, 'DD/MM/YYYY')}
                />
              </div>
              {(value === m.id.toString()) && (
              <AlertCard
                backgroundColor={colors.alert_color_100_08}
                colorBase={colors.alert_color_100_36}
                alertCardContent="4px"
                width="510px"
                icone={(
                  <CircleAlertYellowIcon
                    width="16px"
                    height="16px"
                  />
                )}
                title="Ao selecionar aprovação atualizada, os dados da aprovação inicial serão substituídos."
              />
            )}
            </>
        );
})}
        <div className="option-container" key="valido">
          <div className="radio-button-alteracoes">
            <RadioButton value="valido" setValue={setValue} />
          </div>
          <InfoModal
            descricaoProduto={limite?.descricaoProduto}
            itensConcessionaria={itensConcessionaria}
            itensProduto={itensProduto}
            index="valido"
            idVersao={limite?.id}
            idLimite={limite?.idLimite}
            userCanEditCondicao
            title="Aprovação inicial"
            isModal
          />
        </div>
      </RadioGroup>
    );
  };

  const renderCondicao = () => (
    <div className="modal-limite-proposta__content__text-editor">
      <div className="modal-limite-proposta__content__text-editor-title">
        Condições
      </div>
      <RenderIfPermission requireAll={[permissions.limitesAprovados.gestaoFinanciamentoRede]}>
        <InputCondicoes
          className="modal-limite-proposta__content__text-editor"
          idLimite={limite?.idLimite}
          idVersao={limite?.id}
        />
      </RenderIfPermission>
      {(hasPermission(user, permissions.limitesAprovados.gestaoCadastro)
        || hasPermission(user, permissions.limitesAprovados.gestaoJuridico)
        || hasPermission(user, permissions.limitesAprovados.gestaoCredito))
        && !(hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede))
        && <p className="modal-limite-proposta__content__text">{(limite?.condicao) && parse(limite?.condicao)}</p>}

    </div>
  );

  const renderCondicaoJuridico = () => (
    <div className="modal-limite-proposta__content__text-editor">
      <div className="modal-limite-proposta__content__text-editor-title">
        Condições Sisgar
      </div>
      <p className="modal-limite-proposta__content__text">
        {parse(condicaoSisgar ?? '')}
      </p>
    </div>
  );

  const renderValido = () => (
    <div className="modal-limite-proposta__content__dados">
      <div className="modal-limite-proposta__content__dados__sections">
        <div className="modal-limite-proposta__content__text-editor-title">
          Dados da aprovação
        </div>
        <ModalLimitePropostaDetailSection items={itensConcessionaria} />
        <Divider />
        <ModalLimitePropostaDetailSection items={itensProduto} />
        <Divider />
      </div>
      <div style={{ marginTop: '16px' }}>
        <ObservacoesAprovacao limite={limite} isModal />
      </div>
      <div style={{ marginTop: '16px' }}>
        {hasPermission(user, permissions.limitesAprovados.gestaoJuridico)
          ? (
            <>
              {(hasPermission(user, permissions.limitesAprovados.gestaoCadastro)
                || hasPermission(user, permissions.limitesAprovados.gestaoCredito)
                || hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede))
                ? renderCondicao()
                : null}
              {renderCondicaoJuridico()}
            </>
          )
          : renderCondicao()}
      </div>
    </div>
  );

  const renderContent = () => {
    if (hasPermission(user, permissions.limitesAprovados.gestaoFinanciamentoRede)) {
      if (_.isEmpty(modificado)) {
        return renderValido();
      }
      return renderModificados();
    }
    return renderValido();
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      disableAutoFocus
      disableEnforceFocus
    >
      <div className="modal-limite-proposta">
        <RenderIfPermission requireAny={[permissions.limitesAprovados.gestaoFinanciamentoRede,
        permissions.limitesAprovados.gestaoCadastro,
        permissions.limitesAprovados.gestaoJuridico,
        permissions.limitesAprovados.gestaoCredito,
        ]}
        >
          <ModalLimitePropostaHeader
            idProduto={idProduto}
            setOpenModalCancelamento={setOpenModalCancelamento}
            data={limite}
            closeModal={onCloseModal}
          />
        </RenderIfPermission>
        <div className="modal-limite-proposta__content">
          <div className="modal-limite-proposta__content__header-evolucao">
            <div className="modal-limite-proposta__content__evolucao">
              {!historicoIsLoading
                ? (
                  <TimelineDropdown
                    label="Histórico da aprovação"
                    items={timelineItems}
                    defaultItem={{ text: 'Aguardando liberação do financiamento rede' }}
                  />
                )
                : (
                  <div className="loading-historico">
                    <CircularProgress color="inherit" size="18px" />
                  </div>
                )}
            </div>
          </div>
          {renderContent()}
        </div>
        <RenderIfPermission requireAll={[permissions.limitesAprovados.gestaoFinanciamentoRede]}>
          <ModalLimitePropostaFooter
            handleClose={onCloseModal}
            idLimite={limite?.idLimite}
            status={limite?.statusLimite}
            modificado={modificado}
            opcaoEscolhida={value}
            isLiberadoDealer={limite?.isLiberadoDealer}
          />
        </RenderIfPermission>
        {openModalCancelamento && renderModalCancelamento()}
      </div>

    </Modal>
  );
};

ModalLimiteProposta.propTypes = {
  open: PropTypes.bool,
  historicoIsLoading: PropTypes.bool,
  handleClose: PropTypes.func,
  setAlterarStatusList: PropTypes.func,
  enviarProposta: PropTypes.func,
  data: PropTypes.object,
  historicoLimite: PropTypes.array,
  setMotivo: PropTypes.func,
  setUpdateCondicao: PropTypes.func,
  motivo: PropTypes.string,
  getLimitesAprovados: PropTypes.func,
  setCondicao: PropTypes.func,
  salvarCancelamentoMotivo: PropTypes.func,
  isErrorAlertModal: PropTypes.bool,
  isLoadingAlertModal: PropTypes.bool,
  user: PropTypes.object.isRequired,
  condicaoSisgar: PropTypes.string,
  limites: PropTypes.object,
};

ModalLimiteProposta.defaultProps = {
  open: false,
  historicoIsLoading: false,
  handleClose: () => { },
  setAlterarStatusList: () => { },
  enviarProposta: () => { },
  data: {},
  historicoLimite: [],
  setMotivo: () => { },
  getLimitesAprovados: () => { },
  setUpdateCondicao: () => { },
  setCondicao: () => { },
  motivo: null,
  salvarCancelamentoMotivo: () => { },
  isLoadingAlertModal: false,
  isErrorAlertModal: false,
  limites: null,
  condicaoSisgar: null,
};

export default ModalLimiteProposta;
