import React from 'react';
import { makeStyles } from '@material-ui/styles';
import EmptyStateStaffIcon from 'assets/icons/empty-state-staff';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

    letterSpacing: '0.15px',
    color: '#555770',
    marginTop: (props) => (props.iconSmall ? '20px' : '0px'),
  },

  icon: {
    marginBottom: '14px',
  },

  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '8px',
    width: '100%',
    '@media (max-width:1400px)': { // eslint-disable-line no-useless-computed-key
      width: (props) => (props.breakLine ? '200px' : '100%'),
    },
  },

  subtitle: {
    fontSize: '14px',
    lineHeight: '24px',
    maxWidth: '360px',
    whiteSpace: 'pre-wrap',
  },
  empty: (props) => {
    if (props.iconSmall) {
      return {
        width: '74px',
        height: '60px',
      };
    }
    return {
      width: '74px',
      height: '95px',
    };
  },
});

const ChartEmpty = ({ iconSmall, breakLine }) => {
  const classes = useStyles({ iconSmall, breakLine });

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <EmptyStateStaffIcon className={classes.empty} />
      </div>
      <div className={classes.title}>
        Ainda não há nenhum dado a ser exibido.
      </div>
      <div className={classes.subtitle}>
        Tente selecionar outro tipo de filtro.
      </div>
    </div>
  );
};

ChartEmpty.propTypes = {
  iconSmall: PropTypes.bool,
  breakLine: PropTypes.bool,
};

ChartEmpty.defaultProps = {
  iconSmall: false,
  breakLine: false,
};

export default ChartEmpty;
