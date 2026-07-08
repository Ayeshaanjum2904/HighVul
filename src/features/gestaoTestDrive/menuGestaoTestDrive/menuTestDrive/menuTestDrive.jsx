import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useRouteMatch } from 'react-router-dom';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PedidoIcon from 'assets/icons/pedido';
import CiclePercentIcon from 'assets/icons/cicle-percent';

import RenderIfPermission from 'modules/auth/guards/renderIfPermission';
import { permissions } from 'modules/auth/permissions';
import { PATH_GESTAO_TEST_DRIVE } from 'routes/paths';
import MenuItem from 'common/controls/menuItem';
import { Pages } from '../../veiculos/redux/enums';
import MenuParametros from '../menuParametros';

const MenuTestDrive = ({ setVeiculosPage }) => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const navTo = (itemName) => {
    history.replace(`${url}/${itemName}`);
  };

  return (
    <div className="menu-dashboard__container">
      <div className="menu-dashboard__container__title">
        <div className="menu-dashboard__container__title_icon">
          <DriveEtaIcon />
        </div>
        <div className="menu-dashboard__container__title_text">
          Gestão de Test Drive
        </div>
      </div>
      <div
        className="menu-dashboard__container__content"
        data-cy="menu-dashboard-container-content"
      >
        <RenderIfPermission requireAll={[permissions.ofertas.visualizar]}>
          <div className="menu-dashboard__item">
            <MenuItem
              Icon={LocalOfferIcon}
              title="Ofertas"
              isActive={!!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/listagem-ofertas`)}
              onClick={() => navTo('listagem-ofertas')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[...Object.values(permissions.pedidos)]}>
          <div className="menu-dashboard__item">
            <MenuItem
              Icon={PedidoIcon}
              title="Pedidos"
              isActive={!!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/pedidos`)}
              onClick={() => navTo('pedidos')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[...Object.values(permissions.ordem)]}>
          <div className="menu-dashboard__item">
            <MenuItem
              Icon={ReceiptIcon}
              title="Ordens"
              isActive={!!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/ordens`)}
              onClick={() => navTo('ordens')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[...Object.values(permissions.veiculos)]}>
          <div className="menu-dashboard__item">
            <MenuItem
              Icon={DriveEtaIcon}
              title="Veículos"
              isActive={!!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/veiculos`)}
              onClick={() => {
                navTo('veiculos');
                setVeiculosPage(Pages.listVeiculo);
              }}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission
          requireAll={[permissions.taxas.cadastrar, permissions.taxas.historico]}
        >
          <div className="menu-dashboard__item">
            <MenuItem
              Icon={CiclePercentIcon}
              title="Gestão de taxas"
              isActive={!!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/taxas/historico`)}
              onClick={() => navTo('taxas/historico')}
            />
          </div>
        </RenderIfPermission>

        <RenderIfPermission requireAny={[permissions.ofertas.cadastrar]}>
          <div className="menu-dashboard__item">
            <MenuParametros />
          </div>
        </RenderIfPermission>
      </div>
    </div>
  );
};

MenuTestDrive.propTypes = {
  setVeiculosPage: PropTypes.func.isRequired,
};

export default MenuTestDrive;
