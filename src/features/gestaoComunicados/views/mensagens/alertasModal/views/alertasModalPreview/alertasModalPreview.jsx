import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'utils/format';
import { Scrollbars } from 'react-custom-scrollbars';

import { makeStyles } from '@material-ui/styles';
import ModalMensagemRede from './mensagemRede';

import './alertasModalPreview.scss';

const useStyles = makeStyles({
  container: {
    flexDirection: (props) => (props.breakLine ? 'column' : 'row'),
  },
});

// eslint-disable-next-line react/prop-types
const DataRow = ({ titulo, conteudo, breakLine }) => {
  const classes = useStyles({ breakLine });
  return (
    <div className={`alertas__modal-preview__data-row ${classes.container}`}>
      <div className="alertas__modal-preview__data-row_titulo">
        {titulo}
      </div>
      <div className="alertas__modal-preview__data-row_conteudo">
        {conteudo}
      </div>
    </div>
  );
};

const AlertasModalPreview = ({ alerta }) => (
  <Scrollbars>
    <div className="alertas__modal-preview__container">
      <div className="alertas__modal-preview__container_header">
        Confirme os dados do seu alerta e faça a publicação:
      </div>
      <DataRow
        titulo="Periodo:"
        conteudo={` ${formatDate(alerta.startDate, 'DD MMM YYYY')} - ${formatDate(alerta.endDate, 'DD MMM YYYY')}`}
      />
      <DataRow
        titulo="Brand:"
        conteudo={` ${alerta?.selectedBrands?.map((b) => b.text.concat(', ')).join('').slice(0, -2)}`}
      />
    </div>
    <div className="alertas__modal-preview__text">
      Pré-visualização:
    </div>
    <ModalMensagemRede mensagens={[alerta]} />
  </Scrollbars>
);

AlertasModalPreview.propTypes = {
  alerta: PropTypes.object,
};

AlertasModalPreview.defaultProps = {
  alerta: null,
};

export default AlertasModalPreview;
