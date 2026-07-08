import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { XCircle } from 'react-feather';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#555770',
  },
  icon: {
    color: colors.error_color_300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '12px',
    lineHeight: '16px',
    maxWidth: '340px',
    whiteSpace: 'pre-wrap',
    '@media (max-width:1400px)': { // eslint-disable-line no-useless-computed-key
      maxWidth: (props) => (props.breakLine ? '250px' : '340px'),
    },
  },
  teste: {
    width: '52px',
    height: '52px',
  },
});

const ChartError = ({ breakLine }) => {
  const classes = useStyles({ breakLine });

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <XCircle className={classes.teste} />
      </div>
      <div className={classes.title}>
        Não foi possível exibir os dados
      </div>
      <div className={classes.subtitle}>
        Algumas informações não foram carregadas corretamente.
        Tente novamente recarregando os dados da página.
      </div>
    </div>
  );
};

ChartError.propTypes = {
  breakLine: PropTypes.bool,
};

ChartError.defaultProps = {
  breakLine: false,
};

export default ChartError;
