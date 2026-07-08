import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'common/layout/list';
import PedidoRow from '../solicitacaoLimiteRow';

const SolicitacaoLimiteGroup = ({ grupoSolicitacoes }) => {
  if (grupoSolicitacoes?.label) {
    return (
      <ListGroup
        label={grupoSolicitacoes?.label}
      >
        {
          (grupoSolicitacoes?.solicitacoes.map((s, i) => (
            <PedidoRow solicitacao={s} key={i} />
          )))
        }
      </ListGroup>
    );
  }
  return null;
};

SolicitacaoLimiteGroup.propTypes = {
  grupoSolicitacoes: PropTypes.object.isRequired,
};

export default SolicitacaoLimiteGroup;
