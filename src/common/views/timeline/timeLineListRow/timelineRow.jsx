import React from 'react';
import PropTypes from 'prop-types';

import MessageIcon from '@material-ui/icons/InsertComment';
import DotIcon from '@material-ui/icons/FiberManualRecord';

import { formatDate } from 'utils/format';

import './timelineRow.scss';

const SelectIcon = (tipo, isPedidoCancelado) => {
  if (tipo === 'comentario_usuario') {
    return <MessageIcon style={{ fontSize: 16, color: 'inherit' }} />;
  }
  return <DotIcon style={{ fontSize: 12, color: isPedidoCancelado ? '#d32f2f' : '#8f9bb3' }} />;
};

const isSystemUser = (email) => !email || email === 'Portal HUB';

const renderConteudo = (comentario, isPedidoCancelado, showUsuario) => {
  if (isPedidoCancelado) {
    return (
      <div className="conteudo-cancelado">
        <div className="texto-principal">{comentario.conteudo}</div>
        <div className="texto-usuario">
          Pedido cancelado por
          {' '}
          {comentario.emailUsuario}
        </div>
        <div className="motivo-cancelamento">
          Justificativa do cancelamento:
          {' '}
          {comentario.motivoCancelamento}
        </div>
      </div>
    );
  }

  if (comentario.tipo === 'atualizacao_status') {
    return (
      <div>
        <div>{comentario.conteudo}</div>
        {showUsuario && !isSystemUser(comentario.emailUsuario) && (
          <div>
            por
            {' '}
            {comentario.emailUsuario}
          </div>
        )}
      </div>
    );
  }

  return comentario.conteudo;
};

const TimeLineRow = ({ comentario }) => {
  const isPedidoCancelado = comentario?.conteudo === 'Pedido cancelado';
  const showUsuario = !comentario.conteudo.includes('Pedido criado pela ordem')
    && !comentario.conteudo.includes('Aguardando carta do mês');

  return (
    <div className={`common__comentarios-list-row__container ${isPedidoCancelado ? 'pedido-cancelado' : ''}`}>
      <div className="common__comentarios-list-row__container_line" />
      <div className="common__comentarios-list-row__container_icone">
        {SelectIcon(comentario.tipo, isPedidoCancelado)}
      </div>
      <div className="common__comentarios-list-row__container_conteudo">
        {renderConteudo(comentario, isPedidoCancelado, showUsuario)}
      </div>
      <div className="common__comentarios-list-row__container_hora" style={{ color: isPedidoCancelado ? '#d32f2f' : '#505669' }}>
        {formatDate(comentario.data, 'HH:mm')}
      </div>
    </div>
  );
};

TimeLineRow.propTypes = {
  comentario: PropTypes.object,
};

TimeLineRow.defaultProps = {
  comentario: null,
};

export default TimeLineRow;
