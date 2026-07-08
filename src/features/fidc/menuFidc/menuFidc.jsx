import React from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import { AttachMoney } from '@material-ui/icons';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BallotIcon from '@material-ui/icons/Ballot';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_FIDC } from 'routes/paths';

import MenuItem from 'common/controls/menuItem';

import './menuFidc.scss';

const MenuFidc = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };

  return (
    <div
      className="menu-fidc__container"
      data-cy="menu-fidc"
    >
      <div className="menu-fidc__container__title">
        <div className="menu-fidc__container__title_icon">
          <BallotIcon />
        </div>
        <div className="menu-fidc__container__title_text">
          FIDC
        </div>
      </div>
      <div className="menu-fidc__container__content">
        <RenderIfPermission requireAny={[permissions.contaCorrenteDealer]}>
          <div className="menu-fidc__item">
            <MenuItem
              Icon={AccountBalanceIcon}
              title="Conta Corrente | Dealer"
              isActive={!!useRouteMatch(`${PATH_FIDC}/conta-corrente-dealer`)}
              onClick={() => navTo('conta-corrente-dealer')}
            />
          </div>
        </RenderIfPermission>
        <RenderIfPermission requireAny={[permissions.resgatesFidc]}>
          <div className="menu-fidc__item">
            <MenuItem
              Icon={AttachMoney}
              title="Resgates"
              isActive={!!useRouteMatch(`${PATH_FIDC}/resgates`)}
              onClick={() => navTo('resgates')}
            />
          </div>
        </RenderIfPermission>
      </div>
    </div>
  );
};

export default MenuFidc;
