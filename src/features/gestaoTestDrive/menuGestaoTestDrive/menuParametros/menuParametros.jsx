import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';

import SubMenuDropDown from 'common/controls/subMenuDropDown/subMenuDropDown';
import ParametrosIcon from 'assets/icons/parametros';

const MenuParametros = () => {
  const options = [
    {
      urlRedirect: 'descontos',
      title: 'Condições à vista',
      isActive: !!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/descontos`),
    },
    {
      urlRedirect: 'condicoes-comerciais',
      title: 'Condições comerciais',
      isActive: !!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/condicoes-comerciais`),
    },
  ];

  return (
    <SubMenuDropDown
      Icon={ParametrosIcon}
      options={options}
      titleDropdown="Parâmetros"
      isActive
      dataCy="MenuParametros"
      colorSelected="#282B34"
      margin="4px 56px 0 0px"
    />
  );
};

export default MenuParametros;
