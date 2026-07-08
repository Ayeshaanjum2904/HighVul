import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import ListContatosRow from './contatosAssociadosListRow';

const useStyles = makeStyles({
  outer: {
    background: 'white',
    width: '100%',
    height: '100%',
  },
});

const ContatosAssociadosList = ({ contatos, desassociarContato }) => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Scrollbars>
        {(Array.isArray(contatos) ? contatos : []).map((c, i) => (
          <ListContatosRow
            contato={c}
            onClick={desassociarContato}
            key={i}
          />
        ))}
      </Scrollbars>
    </div>

  );
};

ContatosAssociadosList.propTypes = {
  contatos: PropTypes.array,
  desassociarContato: PropTypes.func,
};

ContatosAssociadosList.defaultProps = {
  contatos: [],
  desassociarContato: () => {},
};

export default ContatosAssociadosList;
