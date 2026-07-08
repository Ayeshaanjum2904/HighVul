import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'common/layout/modal';
import useCustomFetch from 'hooks/useFetch';
import moment from 'moment';
import resgateService from '../../../services/resgateService';
import {
  Body, Content, Footer, Header, HeaderId, HeaderStatusBar, HeaderText, HeaderTitle,
} from './resgateModal.style';
import ResgateModalStatusBar from './resgateModalStatusBar/resgateModalStatusBar';
import ResgateModalFooter from './resgateModalFooter/resgateModalFooter';
import ResgateModalForm from './resgateModalForm/resgateModalForm';

import modalStatus from './status';
import ResgatePrevForm from './resgateModalForm/resgatePrevForm/resgatePrevForm';

const ResgateModal = ({
  close,
  resgate,
  addSnackbar,
  getMensagens,
  vigenciaAtiva,
  setUpdateMessage,
}) => {
  const { id } = resgate;
  const [{
    loading, data, success, error,
  }, updateStatus] = useCustomFetch(() => resgateService.updateResgateStatus(id, 'I'), [id], false);

  const [status] = useState(modalStatus.conteudo);
  const [openCopy, setOpenCopy] = useState(false);
  const [preVisualizacao, setPreVisualizacao] = useState(false);
  const [form, setForm] = useState({
    titulo: resgate.titulo,
    textoMensagem: resgate.mensagem,
  });

  const [startDate, setStartDate] = useState(resgate.dataInicioVigencia);
  const [endDate, setEndDate] = useState(resgate.dataFimVigencia);
  const [invalidDate, setInvalidDate] = useState(null);

  useEffect(() => {
    if (success) {
      close();
      addSnackbar('Mensagem desativada com sucesso.', 'success');
      getMensagens();
    } else if (error) {
      close();
      addSnackbar('Erro ao desativar mensagem.', 'error');
    }
    // eslint-disable-next-line
  }, [loading, data, success, error]);

  const resgatePrevForm = () => (
    <ResgatePrevForm
      resgate={resgate}
      form={form}
      startDate={startDate}
      endDate={endDate}
    />
  );

  const shouldBeNull = openCopy && moment(endDate).isBefore(moment().startOf('day'));

  const resgateModalForm = () => (
    <ResgateModalForm
      resgate={resgate}
      openCopy={openCopy}
      dates={{
        startDate: (!shouldBeNull && startDate) ? startDate : null,
        endDate: (!shouldBeNull && endDate) ? endDate : null,
        shouldBeNull,
        setStartDate,
        setEndDate,
        invalidDate,
        setInvalidDate,
      }}
      form={form}
      setForm={setForm}
    />
  );

  return (
    <Modal
      width="802px"
      closeModal={close}
      disableCloseButton={loading}
    >
      <Content data-cy="ModalResgateFidc">
        <Header>
          <HeaderTitle data-cy="ModalTitleResgateFidc">
            <HeaderText>Resgate juros carência</HeaderText>
            <HeaderId>{`#${id}`}</HeaderId>
          </HeaderTitle>
          <HeaderStatusBar>
            <ResgateModalStatusBar
              status={status}
              preVisualizacao={preVisualizacao}
            />
          </HeaderStatusBar>
        </Header>
        <Body>
          {preVisualizacao ? resgatePrevForm() : resgateModalForm()}
        </Body>
        <Footer>
          <ResgateModalFooter
            vigenciaAtiva={vigenciaAtiva}
            status={resgate?.status}
            updateStatus={updateStatus}
            addSnackbar={addSnackbar}
            openCopy={openCopy}
            setOpenCopy={setOpenCopy}
            close={close}
            setPreVisualizacao={setPreVisualizacao}
            preVisualizacao={preVisualizacao}
            form={form}
            startDate={(shouldBeNull || !startDate) ? null : startDate}
            endDate={(shouldBeNull || !endDate) ? null : endDate}
            brand={resgate?.brand}
            setUpdateMessage={setUpdateMessage}
          />
        </Footer>
      </Content>
    </Modal>
  );
};

ResgateModal.propTypes = {
  close: PropTypes.func,
  resgate: PropTypes.object,
  addSnackbar: PropTypes.func,
  getMensagens: PropTypes.func,
  vigenciaAtiva: PropTypes.bool,
  setUpdateMessage: PropTypes.func,
};

ResgateModal.defaultProps = {
  close: () => {},
  resgate: {},
  addSnackbar: () => {},
  getMensagens: () => {},
  setUpdateMessage: () => {},
  vigenciaAtiva: false,
};

export default ResgateModal;
