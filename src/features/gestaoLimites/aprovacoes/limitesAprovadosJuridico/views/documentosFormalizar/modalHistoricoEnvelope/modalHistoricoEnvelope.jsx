/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Divider, Modal } from '@mui/material';
import './modalHistoricoEnvelope.scss';
import { Loading } from 'common/layout/dataGrid/overlays/overlays';
import ModalHistoricoEnvelopeDados from './modalHistoricoEnvelopeDados/modalHistoricoEnvelopeDados';
import ModalHistoricoEnvelopeHeader from './modalHistoricoEnvelopeHeader/modalHistoricoEnvelopeHeader';
import ModalHistoricoEnvelopeAssinaturas from './modalHistoricoEnvelopeAssinaturas/modalHistoricoEnvelopeAssinaturas';

const ModalHistoricoEnvelope = ({
  open, onCloseModal, idEnvelope, dadosEnvelope, dataSucced, dataLoading,
}) => {
  const renderContent = () => {
    if (dataLoading) return <Loading />;
    return (
      <Stack spacing={1}>
        <div className="modal-historico-envelope__content__dados__sections">
          <div className="modal-historico-envelope__content__text-editor-title">
            Dados do envelope
          </div>
          <ModalHistoricoEnvelopeDados
            dataEnvio={dadosEnvelope?.dataEnvio}
            status={dadosEnvelope?.status}
          />
          <Divider />
        </div>
        <div className="modal-historico-envelope__content__dados__sections">
          <div className="modal-historico-envelope__content__text-editor-title">
            Assinaturas
          </div>
          <ModalHistoricoEnvelopeAssinaturas assinaturasList={dadosEnvelope?.signatarios} />
          <Divider />
        </div>
      </Stack>
  );
};
  return (
    <Modal
      open={open && dataSucced}
      onClose={onCloseModal}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      disableAutoFocus
      disableEnforceFocus
    >
      <div className="modal-historico-envelope">
        <ModalHistoricoEnvelopeHeader
          idEnvelope={idEnvelope}
          closeModal={onCloseModal}
        />
        <div
          className="modal-historico-envelope__content"
          style={dataLoading ? { justifyContent: 'center' } : {}}
        >
          {renderContent()}
        </div>
      </div>
    </Modal>
  );
};

ModalHistoricoEnvelope.propTypes = {
  open: PropTypes.bool,
  idEnvelope: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  dadosEnvelope: PropTypes.object.isRequired,
  dataSucced: PropTypes.bool,
  dataLoading: PropTypes.bool,
};

ModalHistoricoEnvelope.defaultProps = {
  open: false,
  dataSucced: false,
  dataLoading: false,
};

export default ModalHistoricoEnvelope;
