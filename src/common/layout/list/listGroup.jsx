import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';

const useStyles = makeStyles({
  groupContainerDiv: {
    display: 'grid',
  },

  groupHeader: {
    width: '100%',
    height: '26px',
    backgroundColor: colors.primary_color_100_36,

    display: 'flex',
    alignItems: 'center',
    padding: '0 32px',

    '& span': {
      fontSize: '10px',
      fontWeight: '500',
      letterSpacing: '1.5px',
      color: colors.secundary_color_900,

      whiteSpace: 'pre-wrap',
      textTransform: 'uppercase',
    },
  },

  groupContent: {
    width: '100%',
  },
});

const ListGroup = ({ children, label, className }) => {
  const classes = useStyles();

  return (
    <div className={classes.groupContainerDiv}>
      <div className={`${classes.groupHeader} ${className}`}>
        <div data-cy="vigencia-span">
          <span>{label}</span>
        </div>
      </div>
      <div className={classes.groupContent}>
        {children}
      </div>
    </div>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string,
};

ListGroup.defaultProps = {
  children: null,
  label: null,
  className: '',
};

export { ListGroup };
