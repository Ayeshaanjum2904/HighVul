import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import SubMenuDropDown from 'common/controls/subMenuDropDown/subMenuDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import { PATH_COBRANCAS } from 'routes/paths';

const MenuConfiguracoes = () => {
  const options = [
    {
      urlRedirect: 'analistas',
      title: 'Associar analistas',
      isActive: !!useRouteMatch(`${PATH_COBRANCAS}/analistas`),
    },
    {
      urlRedirect: 'gerentes',
      title: 'Associar gerentes',
      isActive: !!useRouteMatch(`${PATH_COBRANCAS}/gerentes`),
    },
  ];

  return (
    <SubMenuDropDown
      Icon={SettingsIcon}
      options={options}
      titleDropdown="Configurações"
      isActive
      dataCy="MenuConfiguracoes"
      colorSelected="#282B34"
      margin="4px 28px 0 8px"
    />
  );
};

export default MenuConfiguracoes;
