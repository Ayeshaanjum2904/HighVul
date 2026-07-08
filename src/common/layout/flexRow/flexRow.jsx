import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  flexRowContainer: {
    width: ({ width }) => width || '100%',
    height: ({ height }) => height || '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: ({ justifyContent }) => justifyContent || 'flex-start',
  },
});

const FlexRow = ({
  justifyContent, children, width, height,
}) => {
  const classes = useStyles({ justifyContent, width, height });

  return (
    <div className={classes.flexRowContainer}>
      {children}
    </div>
  );
};

FlexRow.propTypes = {
  justifyContent: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
};

FlexRow.defaultProps = {
  justifyContent: null,
  width: null,
  height: null,
  children: null,
};

export default FlexRow;
