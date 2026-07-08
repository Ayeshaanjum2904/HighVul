import React from 'react';

import Warning from 'assets/icons/warning-color';
import colors from 'assets/styles/colors';
import './warningPreview.scss';

const WarningPreview = () => (
  <div className="veiculos__preview-veiculos-warning__container">
    <div className="veiculos__preview-veiculos-warning__container__header">
      <div className="veiculos__preview-veiculos-warning__container__header_icon">
        <Warning width={24} height={24} color={colors.alert_color_300} />
      </div>
      <div className="veiculos__preview-veiculos-warning__container__header_text">
        As imagens não estão disponíveis.
      </div>
    </div>
    <div className="veiculos__preview-veiculos-warning__container__content">
      Preencha os dados do veículo para visualizar a prévia das imagens disponíveis.
    </div>
  </div>
);

export default WarningPreview;
