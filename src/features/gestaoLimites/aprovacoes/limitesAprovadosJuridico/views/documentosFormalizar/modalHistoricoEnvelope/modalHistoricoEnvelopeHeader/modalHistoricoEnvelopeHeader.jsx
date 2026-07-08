import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './modalHistoricoEnvelopeHeader.scss';

const ModalHistoricoEnvelopeHeader = ({
  idEnvelope, closeModal,
}) => (
  <div className="modal-historico-envelope__header">
    <div>
      <div className="modal-historico-envelope__title">
        Histórico de assinaturas
      </div>
      <div className="modal-historico-envelope__id-produto">
        ID DO ENVELOPE:
        {' '}
        {idEnvelope}
      </div>
    </div>
    <div className="modal-historico-envelope__header-flex">
      <IconButtonTooltip
        onClick={() => closeModal()}
        tooltip="Fechar"
      >
        <CloseRoundedIcon style={{ width: 30, height: 30 }} />
      </IconButtonTooltip>
    </div>
  </div>

);

ModalHistoricoEnvelopeHeader.propTypes = {
  idEnvelope: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};

ModalHistoricoEnvelopeHeader.defaultProps = {
  closeModal: () => { },
};

export default ModalHistoricoEnvelopeHeader;
