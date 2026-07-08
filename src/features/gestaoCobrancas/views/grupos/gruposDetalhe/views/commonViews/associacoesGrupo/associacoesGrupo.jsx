import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import colors from 'assets/styles/colors';
import AdicionarAssociacaoButton from '../adicionarAssociacaoButton';

const useStyles = makeStyles({
  container: {
    padding: '0px 16px 30px 16px',
    borderRadius: '4px',
    minWidth: '1000px',
  },
  title: {
    height: '70px',
    padding: '15px 20px',
    background: colors.primary_color_100_36,
    color: colors.secundary_color_800,
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    background: '#FAFBFD',
    height: '350px',
  },
});

const AssociacoesGrupo = ({
  title, buttonClick, children, buttonTitle, isLoading,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {title}
        {buttonTitle && !isLoading ? (
          <AdicionarAssociacaoButton
            onClick={buttonClick}
            buttonTitle={buttonTitle}
          />
        )
          : null}
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

AssociacoesGrupo.propTypes = {
  title: PropTypes.string,
  buttonClick: PropTypes.func,
  children: PropTypes.node,
  buttonTitle: PropTypes.string,
  isLoading: PropTypes.bool,
};

AssociacoesGrupo.defaultProps = {
  title: null,
  buttonClick: () => {},
  children: null,
  buttonTitle: null,
  isLoading: false,
};

export default AssociacoesGrupo;
