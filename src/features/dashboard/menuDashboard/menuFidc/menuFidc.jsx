import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { PATH_DASHBOARD } from 'routes/paths';
import SubMenuDropDown from 'common/controls/subMenuDropDown/subMenuDropDown';
import FidcIcon from 'assets/icons/fidc-icon';
import { Page } from 'features/dashboard/principal/redux/enums';

const MenuFidc = () => {
  const options = [
    {
      urlRedirect: 'fidc/duplicatas-liquidadas',
      title: 'Duplicatas Liquidadas',
      isActive: !!useRouteMatch(`${PATH_DASHBOARD}/${Page.fidc}`),
    },
  ];

  return (
    <SubMenuDropDown
      Icon={FidcIcon}
      options={options}
      titleDropdown="FIDC"
      isActive
      dataCy="MenuFidc"
    />
  );
};

export default MenuFidc;
