import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';
import { ListGroup } from 'common/layout/list';
import OfertaRow from './ofertaRow';

const useStyles = makeStyles({
  padding: {
    padding: '0 32px',
  },
});

const formatDate = (d) => (_.isDate(d) ? moment(d).format('DD MMM YYYY') : ' --- ');

const OfertasGroup = ({ grupoOfertas }) => {
  const classes = useStyles();
  return (
    <ListGroup
      label={`Vigência: ${formatDate(grupoOfertas?.vigenciaInicio)} a ${formatDate(grupoOfertas?.vigenciaFim)}`}
      className={classes.padding}
    >
      {
        (grupoOfertas?.ofertas || []).map((o, i) => (
          <OfertaRow oferta={o} key={i} />
        ))
      }
    </ListGroup>
  );
};

OfertasGroup.propTypes = {
  grupoOfertas: PropTypes.object.isRequired,
};

export default OfertasGroup;
