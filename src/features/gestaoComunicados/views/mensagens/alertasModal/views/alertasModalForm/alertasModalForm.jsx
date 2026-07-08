import React from 'react';
import PropTypes from 'prop-types';

import List, { ListContent } from 'common/layout/list';

import ConteudoSection from './conteudoSection';
import AlvoSection from './alvoSection';
import PeriodoSection from './periodoSection';

const AlertasModalForm = ({
  isLoading, isError,
}) => (
  <List
    isLoading={isLoading}
    isError={isError}
  >
    <ListContent>
      <ConteudoSection />
      <PeriodoSection />
      <AlvoSection />
    </ListContent>

    <ListContent type="empty">
      Nenhum Alerta encontrado.
    </ListContent>

    <ListContent type="error">
      Ocorreu um erro ao carregar o Alerta.
    </ListContent>
  </List>
);

AlertasModalForm.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

AlertasModalForm.defaultProps = {
  isLoading: false,
  isError: false,
};

export default AlertasModalForm;
