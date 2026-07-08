import React from 'react';
import PropTypes from 'prop-types';

import './errorFooter.scss';
import Button from 'common/controls/button';
import RealoadIcon from '@material-ui/icons/Cached';
import XCircle from '@material-ui/icons/HighlightOff';
import colors from 'assets/styles/colors';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    width: '180px',
    height: '40px',
  },
  title: {
    marginRight: '6px',
  },
  icon: {
    marginTop: '4px',
  },
});

const ErrorFooter = ({ loadData, isLoading, errorParams }) => {
  const classes = useStyles();
  const { title, showButton } = errorParams;
  return (
    <div className="dashboard__page__error-footer">
      <div className="dashboard__page__error-footer_message">
        <XCircle style={{ color: colors.error_color_300 }} />
        <span>
          {title}
        </span>
      </div>
      {showButton ? (
        <div className="dashboard__page__error-footer_button">
          <Button
            className={classes.button}
            disabled={isLoading}
            isLoading={isLoading}
            onClick={() => loadData()}
          >
            <div className={classes.title}>
              Recarregar dados
            </div>
            <div className={classes.icon}>
              <RealoadIcon />
            </div>
          </Button>

        </div>
      ) : null}
    </div>
  );
};

ErrorFooter.propTypes = {
  loadData: PropTypes.func,
  isLoading: PropTypes.bool,
  errorParams: PropTypes.object,
};

ErrorFooter.defaultProps = {
  loadData: () => {},
  isLoading: false,
  errorParams: {},
};

export default ErrorFooter;
