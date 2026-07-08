import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_DASHBOARD } from 'routes/paths';

import MenuItem from 'common/controls/menuItem';
import MenuFidc from './menuFidc/menuFidc';

const MenuDashboard = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };
  return (
    <div className="menu-dashboard__container">
      <div className="menu-dashboard__container__title">
        <div className="menu-dashboard__container__title_icon">
          <DashboardIcon />
        </div>
        <div className="menu-dashboard__container__title_text">
          Dashboards
        </div>
      </div>
      <div
        className="menu-dashboard__container__content"
        data-cy="menu-dashboard-container-content"
      >
        <RenderIfPermission requireAll={[permissions.dashboard.principal]}>
          <div className="menu-dashboard__item">
            <MenuItem
              Icon={() => <DashboardIcon style={{ fontSize: '18px', marginRight: '14px', transform: 'translateY(20%)' }} />}
              title="Test Drive"
              isActive={window.location.pathname === `${PATH_DASHBOARD}/`}
              onClick={() => navTo(' ')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAll={[permissions.dashboard.fidc]}>
          <div className="menu-dashboard__item">
            <MenuFidc />
          </div>
        </RenderIfPermission>

      </div>
    </div>
  );
};

MenuDashboard.propTypes = {
};

export default MenuDashboard;
