import React from 'react';
import PropTypes from 'prop-types';

import './dadosFaturamento.scss';
import TooltipMessage from 'common/controls/tooltipMessage';
import InputNumeroNotaFiscal from './inputNumeroNotaFiscal';
import InputDataFaturamento from './inputDataFaturamento';
import InputAnexarNotaFiscal from './inputAnexarNotaFiscal';
import PreviewFatura from './previewFatura';
import InputValorNF from './inputValorNF';
import InputChaveNF from './inputChaveNF';

const DadosFaturamento = ({
  currentStatus, isFaturamento, status,
}) => {
  const isProntoParaFaturamento = currentStatus === status.prontoParaFaturamento;
  return (
    isFaturamento ? (
      <div
        className="pedidos__faturamento__container"
        data-cy="pedidos__faturamento__container"
      >
        <div className="pedidos__faturamento__container__header_title">
          Faturamento
        </div>
        <div className="pedidos__faturamento__container__content">
          <div className="pedidos__faturamento__container__content_data-faturamento">
            <InputDataFaturamento />
          </div>
          <div className="pedidos__faturamento__container__content_valor-nf">
            <InputValorNF />
          </div>
        </div>
        <div className="pedidos__faturamento__container__novo-row">
          <div className="pedidos__faturamento__container__novo-row_numero-nf">
            <InputNumeroNotaFiscal />
          </div>
          <div className="pedidos__faturamento__container__novo-row_chave-nf">
            <InputChaveNF />
          </div>
        </div>
        <div className="pedidos__faturamento__container__anexar">
          <div className="pedidos__faturamento__container__anexar_text">
            <InputAnexarNotaFiscal />
          </div>
          <div className={`pedidos__faturamento__container__anexar_preview-icon
            ${(isProntoParaFaturamento) ? 'pedidos__faturamento__container__anexar_preview-icon_enabled' : ''}`}
          >
            <TooltipMessage title="Baixar arquivo">
              <div>
                <PreviewFatura />
              </div>
            </TooltipMessage>
          </div>
        </div>
      </div>
    ) : null
  );
};

DadosFaturamento.propTypes = {
  currentStatus: PropTypes.string,
  isFaturamento: PropTypes.bool,
  status: PropTypes.string,
};

DadosFaturamento.defaultProps = {
  currentStatus: null,
  isFaturamento: false,
  status: '',
};

export default DadosFaturamento;
