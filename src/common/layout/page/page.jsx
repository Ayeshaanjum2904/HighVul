import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import './page.scss';

const useStyles = makeStyles({
  common__page__width: {
    minWidth: (props) => props.minWidth,
  },
});

const Page = ({
  minWidth, children, className, hideFooter,
}) => {
  const classes = useStyles({ minWidth });

  return (
    <div
      className={`${hideFooter ? 'common__page__without_footer' : 'common__page'} ${classes.common__page__width} ${className}`}
      data-cy="page-componente"
    >
      {children}
    </div>
  );
};

Page.propTypes = {
  minWidth: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  hideFooter: PropTypes.bool,
};

Page.defaultProps = {
  minWidth: 740,
  children: null,
  className: null,
  hideFooter: false,
};

export default Page;
