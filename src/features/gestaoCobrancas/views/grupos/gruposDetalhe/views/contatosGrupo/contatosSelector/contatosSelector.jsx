import React from 'react';
import PropTypes from 'prop-types';
import MultipleSelect from 'common/controls/multipleSelect/multipleSelect';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '-23px',
  },
});

const ContatosSelector = ({
  contatos, associarContato, associacoes,
}) => {
  const classes = useStyles();
  return (
    <MultipleSelect
      className={classes.container}
      value={associacoes || []}
      onSelect={(b) => { associarContato(b); }}
      items={contatos}
      placeholder="Buscar Contato"
      showSearchIcon
      allItemsText="Todos os contatos"
      allTagsText="Contatos selecionados"
    />

  );
};

ContatosSelector.propTypes = {
  contatos: PropTypes.array,
  associacoes: PropTypes.array,
  associarContato: PropTypes.func,
};

ContatosSelector.defaultProps = {
  contatos: null,
  associacoes: null,
  associarContato: () => {},
};

export default ContatosSelector;
