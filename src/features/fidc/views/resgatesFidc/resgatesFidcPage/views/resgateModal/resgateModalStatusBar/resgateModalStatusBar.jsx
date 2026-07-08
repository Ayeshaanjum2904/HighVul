import React from 'react';
import PropTypes from 'prop-types';
import StatusLabel from 'common/views/statusLabel';
import modalStatus from '../status';

const NUM_CONTEUDO = 1;
const NUM_VISUALIZACAO = 2;

const mapStatusToNumber = (currentStatus) => {
  switch (currentStatus) {
    case modalStatus.conteudo:
      return NUM_CONTEUDO;
    case modalStatus.concluido:
      return NUM_VISUALIZACAO;
    default:
      return 0;
  }
};

const createItems = (status, preVisualizacao) => {
  const statusNumber = mapStatusToNumber(status);
  return [
    {
      number: NUM_CONTEUDO,
      label: 'CONTEÚDO',
      checkmark: preVisualizacao || statusNumber > NUM_CONTEUDO,
      active: preVisualizacao || statusNumber === NUM_CONTEUDO,
      color: preVisualizacao || statusNumber > NUM_CONTEUDO ? 'blue' : 'gray',
    }, {
      number: NUM_VISUALIZACAO,
      label: 'VISUALIZAÇÃO E CONFIRMAÇÃO',
      checkmark: preVisualizacao || statusNumber > NUM_VISUALIZACAO,
      active: preVisualizacao || statusNumber === NUM_VISUALIZACAO,
      color: preVisualizacao || statusNumber > NUM_VISUALIZACAO ? 'blue' : 'gray',
    },
  ];
};

const ResgateModalStatusBar = ({ status, preVisualizacao }) => {
  const items = createItems(status, preVisualizacao);
  return (
    <>
      { ((items || []).map((i, index) => (
        <StatusLabel
          number={i.number}
          label={i.label}
          color={i.color}
          checkmark={i.checked}
          active={i.active}
          key={index}
        />
      ))) }
    </>
  );
};

ResgateModalStatusBar.propTypes = {
  status: PropTypes.string,
  preVisualizacao: PropTypes.bool,
};

ResgateModalStatusBar.defaultProps = {
  status: '',
  preVisualizacao: false,
};

export default ResgateModalStatusBar;
