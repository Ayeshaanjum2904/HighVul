import React from 'react';
import PropTypes from 'prop-types';

import { status } from '../../../status';

import UploadContrato from './uploadContrato';
import PreviewContrato from './previewContrato';
import InputContrato from './inputContrato';
import InputDataPagamento from './inputDataPagamento';
import InputNumeroContrato from './inputNumeroContrato';

import './dadosContrato.scss';

const DadosContrato = ({ currentStatus, isContrato, camposEditaveis }) => {
  const isFaturado = currentStatus === status.faturado
  || currentStatus === status.faturadoMontadora;
  if (camposEditaveis.length === 0) {
    return null;
  }
  return (
    isContrato ? (
      <div
        className="pedidos__contrato__container"
        data-cy="pedidos__contrato__container"
      >
        <div className="pedidos__contrato__container__header_title">
          Contrato
        </div>
        <div className="pedidos__contrato__container__anexar">
          <div className="pedidos__contrato__container__anexar_text">
            <InputContrato />
          </div>
          <div className={`pedidos__contrato__container__anexar_folder-icon
                ${(isFaturado) ? 'pedidos__contrato__container__anexar_folder-icon_enabled' : ''}`}
          >
            <UploadContrato accept=".pdf,.xml" />
          </div>
          <div className={`pedidos__contrato__container__anexar_preview-icon
                ${(isFaturado) ? 'pedidos__contrato__container__anexar_preview-icon_enabled' : ''}`}
          >
            <PreviewContrato />
          </div>
        </div>
        <div className="pedidos__contrato__container__content">
          <div className="pedidos__contrato__container__content_data-pagamento">
            <InputDataPagamento />
          </div>
          <div className="pedidos__contrato__container__content_numero-contrato">
            <InputNumeroContrato />
          </div>
        </div>

      </div>
    ) : null
  );
};

DadosContrato.propTypes = {
  currentStatus: PropTypes.string,
  isContrato: PropTypes.bool,
  camposEditaveis: PropTypes.array,
};
DadosContrato.defaultProps = {
  currentStatus: null,
  isContrato: false,
  camposEditaveis: [],
};

export default DadosContrato;
