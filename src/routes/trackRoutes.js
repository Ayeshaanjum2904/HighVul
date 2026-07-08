import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Mixpanel } from 'modules';

const TrackRoutes = ({ children, refreshToken }) => {
  const location = useLocation();
  React.useEffect(() => {
    refreshToken();
    Mixpanel.trackPageNavigation(location.pathname);
  }, [location.pathname, refreshToken]);

  return (
    <div>
      { children }
    </div>
  );
};

TrackRoutes.propTypes = {
  children: PropTypes.object.isRequired,
  refreshToken: PropTypes.func.isRequired,
};

export default TrackRoutes;
