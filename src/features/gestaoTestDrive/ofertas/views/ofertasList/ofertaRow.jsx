import React from 'react';
import PropTypes from 'prop-types';

import {
  formatMvsa, formatPctg, safeConcat, formatDescVeiculo, capitalize,
} from 'utils/format';

import ProdutoBadge from 'common/views/logoProduto';
import MarcaBadge from 'common/views/logoMarca';

import './ofertaRow.scss';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';

const OfertaRow = ({
  oferta,
}) => (
  <div
    className="ofertas__ofertas-list-row__container"
    data-cy="ofertas-list-row-container"
  >
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__mvs">
      { formatMvsa(oferta?.modelo, oferta?.versao, oferta?.serie, oferta?.allestimento) }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__my">
      { oferta?.modelYear }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__descricao">
      <div className="ofertas__ofertas-list-row__descricao-badge">
        <MarcaBadge marca={oferta?.marca} />
      </div>
      <div className="ofertas__ofertas-list-row__descricao-text" title={capitalize(formatDescVeiculo(oferta?.descricaoVeiculo))}>
        { formatDescVeiculo(oferta?.descricaoVeiculo) }
      </div>
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__produto">
      <ProdutoBadge produto={oferta?.produto} />
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__desconto">
      { formatPctg(
        oferta?.isAVista ? oferta?.percentualAVista : oferta?.percentualFinanciado,
      ) }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__parcelas">
      { safeConcat(oferta?.parcelas, ' parcelas') }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__taxa">
      { formatPctg(oferta?.taxa, 2) }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__vencimento">
      { safeConcat(oferta?.vencimento, ' dias') }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__coeficiente">
      { oferta?.coeficiente }
    </div>
    <div className="ofertas__ofertas-list-row__item ofertas__ofertas-list-row__status">
      <CustomSwitch
        // mixpanelPage={trackedProperties.ofertasPage}
        // mixpanelTarget="Editar status oferta"
        checked={Boolean(oferta?.status === 'True' && oferta?.isVigente)}
        onClick={null}
      />
    </div>
  </div>
);

OfertaRow.propTypes = {
  oferta: PropTypes.object,
  produto: PropTypes.string,
};

OfertaRow.defaultProps = {
  oferta: {},
  produto: null,
};

export default OfertaRow;
