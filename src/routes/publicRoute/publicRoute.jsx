import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import './publicRoute.scss';

const PublicRoute = (
  {
    component: Component, path, exact, isAuthenticated,
  },
) => (
  <Route exact={exact} path={path}>
    {
      isAuthenticated
        ? <Redirect to="/public_route_redirect" />
        : (
          <section className="public-route-container">
            <Component />
          </section>
        )
    }
  </Route>
);

PublicRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

PublicRoute.defaultProps = {
  exact: false,
};

export default PublicRoute;
