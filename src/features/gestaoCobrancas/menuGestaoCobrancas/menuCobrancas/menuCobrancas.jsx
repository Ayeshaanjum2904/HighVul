import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useRouteMatch } from 'react-router-dom';

import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PeopleIcon from '@material-ui/icons/People';
import EmailsIcon from 'assets/icons/email';

import { List } from 'react-feather';
import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_COBRANCAS } from 'routes/paths';

import MenuItem from 'common/controls/menuItem';
import { Pages } from '../../redux/enums';
import MenuConfiguracoes from '../menuConfiguracoes';

const MenuCobrancas = ({
  setConcessionariasPage, setGruposPage,
}) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };

  return (
    <div className="menu-cobrancas__container">
      <div className="menu-cobrancas__container__title">
        <div className="menu-cobrancas__container__title_icon">
          <EmailIcon />
        </div>
        <div className="menu-cobrancas__container__title_text">
          Cobranças
        </div>
      </div>
      <div className="menu-cobrancas__container__content">

        <RenderIfPermission requireAny={[permissions.cobrancas.master]}>
          <div className="menu-cobrancas__item">
            <MenuItem
              Icon={PersonIcon}
              title="Contatos"
              isActive={!!useRouteMatch(`${PATH_COBRANCAS}/contatos`)}
              onClick={() => navTo('contatos')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.cobrancas.master]}>
          <div className="menu-cobrancas__item">
            <MenuItem
              Icon={DriveEtaIcon}
              title="Concessionárias"
              isActive={!!useRouteMatch(`${PATH_COBRANCAS}/concessionarias`)}
              onClick={() => {
                navTo('concessionarias');
                setConcessionariasPage(Pages.listConcessionarias);
              }}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.cobrancas.master]}>
          <div className="menu-cobrancas__item">
            <MenuItem
              Icon={PeopleIcon}
              title="Grupos"
              isActive={!!useRouteMatch(`${PATH_COBRANCAS}/grupos`)}
              onClick={() => {
                navTo('grupos');
                setGruposPage(Pages.listGrupos);
              }}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.cobrancas.master]}>
          <div className="menu-cobrancas__item">
            <MenuItem
              Icon={EmailsIcon}
              title="E-mails"
              isActive={!!useRouteMatch(`${PATH_COBRANCAS}/emails`)}
              onClick={() => navTo('emails')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.cobrancas.master]}>
          <div className="menu-cobrancas__item">
            <MenuItem
              Icon={List}
              title="Histórico"
              isActive={!!useRouteMatch(`${PATH_COBRANCAS}/historico`)}
              onClick={() => navTo('historico')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.cobrancas.master]}>
          <div className="menu-cobrancas__item">
            <MenuConfiguracoes />
          </div>
        </RenderIfPermission>
      </div>
    </div>
  );
};

MenuCobrancas.propTypes = {
  setConcessionariasPage: PropTypes.func.isRequired,
  setGruposPage: PropTypes.func.isRequired,
};

export default MenuCobrancas;
