import React from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import WorkspacePremiumOutlined from '@mui/icons-material/WorkspacePremiumOutlined';
import CalculateOutlined from '@mui/icons-material/CalculateOutlined';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_CORPORATE } from 'routes/paths';

import MenuItemComponent from 'common/controls/menuItem';

import {
  MenuContainer,
  MenuItem,
  TitleContainer,
  TitleIcon,
  TitleText,
  MenuContent,
} from '../menuGestaoCorporate.styles';

const MenuCorporate = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };

  return (
    <MenuContainer data-cy="menu-corporate">
      <TitleContainer>
        <TitleIcon>
          <WorkspacePremiumOutlined />
        </TitleIcon>
        <TitleText>
          Gestão Corporate
        </TitleText>
      </TitleContainer>
      <MenuContent>
        <RenderIfPermission requireAny={[permissions.gestaoCorporate]}>
          <MenuItem>
            <MenuItemComponent
              Icon={CalculateOutlined}
              title="Simulador"
              isActive={!!useRouteMatch(`${PATH_CORPORATE}/simulador`)}
              onClick={() => navTo('simulador')}
            />
          </MenuItem>
        </RenderIfPermission>
      </MenuContent>
    </MenuContainer>
  );
};

export default MenuCorporate;
