import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import LimiteActions from '../../limitesAprovadosList/limiteActions';
import './modalLimitePropostaHeader.scss';

const ModalLimitePropostaHeader = ({
  idProduto, enviarProposta, data, condicaoModificada, closeModal,
}) => {
  const updateStatus = async (id, status, motivo) => {
    if (await enviarProposta(id, status, motivo)) closeModal();
  };

  return (
    <div className="modal-limite-proposta__header">
      <div>
        <div className="modal-limite-proposta__breadcrumb">
          Limites aprovados
        </div>
        <div className="modal-limite-proposta__title">
          Alteração de aprovação
        </div>
        <div className="modal-limite-proposta__id-produto">
          ID APROVAÇÃO #
          {idProduto}
        </div>
      </div>
      <div className="modal-limite-proposta__header-flex">
        <LimiteActions
          iconProps={{ size: 32 }}
          limite={data}
          disabled={condicaoModificada}
          enviarProposta={updateStatus}
          closeModal={closeModal}
        />
        <IconButtonTooltip
          onClick={() => closeModal()}
          tooltip="Fechar"
        >
          <CloseRoundedIcon style={{ width: 30, height: 30 }} />
        </IconButtonTooltip>
      </div>
    </div>

  );
};

ModalLimitePropostaHeader.propTypes = {
  idProduto: PropTypes.number,
  enviarProposta: PropTypes.func,
  data: PropTypes.object,
  condicaoModificada: PropTypes.bool,
  closeModal: PropTypes.func,
};

ModalLimitePropostaHeader.defaultProps = {
  idProduto: 0,
  enviarProposta: () => { },
  data: {},
  condicaoModificada: false,
  closeModal: () => { },
};

export default ModalLimitePropostaHeader;
