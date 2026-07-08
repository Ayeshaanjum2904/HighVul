import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Arrow from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/styles';
import { Mixpanel } from 'modules';
import ButtonIcon from '../../controls/buttonIcon';

const useStyles = makeStyles({
  icon: {
    fontSize: 9,
    color: '#555770',
    margin: '0 10px 0 10px',
  },
  container: {
    display: 'inline-flex',
    alignItems: 'center',
  },
});

const BreadCrumb = ({ labels }) => {
  const classes = useStyles();
  const lastItem = (labels?.length || 0) - 1;
  const history = useHistory();
  return (
    <>
      {(labels || []).map((lb, i) => (
        <React.Fragment key={i}>
          <ButtonIcon
            className={classes.container}
            onClick={() => {
              Mixpanel.trackBreadCrumb(lb.path);
              history.push(`${lb.path}`);
              window.location.reload();
            }}
            data-cy="breadcrumb-fragment"
            key={i}
            disabled={lastItem === i || (lb?.disabled)}
          >
            {lb.label}
          </ButtonIcon>
          {lastItem !== i ? <Arrow className={classes.icon} /> : null}
        </React.Fragment>
      ))}
    </>
  );
};
BreadCrumb.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object),
};

BreadCrumb.defaultProps = {
  labels: null,
};

export default BreadCrumb;
