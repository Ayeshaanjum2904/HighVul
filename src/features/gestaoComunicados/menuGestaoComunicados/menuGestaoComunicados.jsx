import React from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import { AttachFile, Forum } from '@material-ui/icons';
import InfoIcon from 'assets/icons/info-2';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_COMUNICADOS } from 'routes/paths';

import MenuItem from 'common/controls/menuItem';

import './menuGestaoComunicados.scss';

const MenuGestaoComunicados = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };

  return (
    <div
      className="menu-comunicados__container"
      data-cy="menu-comunicados"
    >
      <div className="menu-comunicados__container__title">
        <div className="menu-comunicados__container__title_icon">
          <InfoIcon />
        </div>
        <div className="menu-comunicados__container__title_text">
          Gestão de comunicados
        </div>
      </div>
      <div className="menu-comunicados__container__content">

        <RenderIfPermission requireAny={[permissions.alertas.criar]}>
          <div className="menu-comunicados__item">
            <MenuItem
              Icon={Forum}
              title="Criação de alertas"
              isActive={!!useRouteMatch(`${PATH_COMUNICADOS}/mensagens`)}
              onClick={() => navTo('mensagens')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.alertas.comunicados]}>
          <div className="menu-comunicados__item">
            <MenuItem
              Icon={AttachFile}
              title="Central de comunicados"
              isActive={!!useRouteMatch(`${PATH_COMUNICADOS}/comunicados`)}
              onClick={() => navTo('comunicados')}
            />
          </div>
        </RenderIfPermission>
      </div>
    </div>
  );
};

export default MenuGestaoComunicados;
