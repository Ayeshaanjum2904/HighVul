import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';
import OfertasHeader from './ofertasHeader';
import OfertasGroup from './ofertasGroup';

import './ofertasList.scss';

const OfertasList = ({
  gruposOfertas, isLoading, isError,
}) => (
  <div className="ofertas__ofertas-list__container">
    <div className="ofertas__ofertas-list__header">
      <OfertasHeader />
    </div>
    <List
      isLoading={isLoading}
      isError={isError}
      isEmpty={_.isEmpty(gruposOfertas)}
    >
      <ListContent>
        {(Array.isArray(gruposOfertas) ? gruposOfertas : []).map((go, i) => (
          <OfertasGroup grupoOfertas={go} key={i} />
        ))}
      </ListContent>

      <ListContent type="empty">
        <div className="ofertas__ofertas-list__message-container">
          Nenhuma oferta encontrada.
        </div>
      </ListContent>

      <ListContent type="error">
        <div className="ofertas__ofertas-list__message-container">
          Ocorreu um erro ao carregar as ofertas.
        </div>
      </ListContent>
    </List>
  </div>
);

OfertasList.propTypes = {
  gruposOfertas: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

OfertasList.defaultProps = {
  gruposOfertas: null,
  isLoading: false,
  isError: false,
};

export default OfertasList;
