/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom';

import PermissionRoute from 'modules/auth/routes/permissionRoute';
import { hasPermission } from 'modules/auth/authLogic';
import { permissions } from 'modules/auth/permissions';

import MenuGestaoTestDrive from './menuGestaoTestDrive';
import Descontos from './descontos';
import CondicoesComerciais from './condicoesComerciais';
import Ofertas from './ofertas';
import PedidosPage from './pedidos/pedidosPage';
import Ordens from './ordens';
import Veiculos from './veiculos';
import CadastroPage from './taxas/cadastro';
import HistoricoTaxaPage from './taxas/historico';

import './gestaoTestDrive.scss';

const permsListarPedidos = [...Object.values(permissions.pedidos)];
const permsVeiculos = [...Object.values(permissions.veiculos)];

const GestaoTestDrive = ({ user }) => {
  const { path } = useRouteMatch();

  const hasPermissionOfertas = hasPermission(user, permissions.ofertas.visualizar);
  const hasPermissionPedidos = hasPermission(user, permissions.pedidos.listarCredito)
                            || hasPermission(user, permissions.pedidos.listarComercial)
                            || hasPermission(user, permissions.pedidos.listarRegional)
                            || hasPermission(user, permissions.pedidos.listarTodos)
                            || hasPermission(user, permissions.pedidos.listarComercialFca)
                            || hasPermission(user, permissions.pedidos.listarOperacoes)
                            || hasPermission(user, permissions.pedidos.listarFaturamento)
                            || hasPermission(user, permissions.pedidos.listarFatuRegi);

  let defaultPath = '';
  if (hasPermissionPedidos) defaultPath = 'pedidos';
  if (hasPermissionOfertas) defaultPath = 'listagem-ofertas';

  return (
    <div className="gestao-testdrive-page__page">
      <div className="gestao-testdrive-page__menu">
        <MenuGestaoTestDrive />
      </div>
      <div className="gestao-testdrive-page__content">
        <Switch>
          <PermissionRoute
            path={`${path}/listagem-ofertas`}
            requireAll={[permissions.ofertas.visualizar]}
          >
            <Ofertas />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/descontos`}
            requireAll={[permissions.ofertas.cadastrar]}
          >
            <Descontos />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/condicoes-comerciais`}
            requireAll={[permissions.ofertas.cadastrar]}
          >
            <CondicoesComerciais />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/pedidos`}
            requireAny={permsListarPedidos}
          >
            <PedidosPage />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/ordens`}
            requireAll={[permissions.ordem.cadastrar]}
          >
            <Ordens />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/veiculos`}
            requireAny={permsVeiculos}
          >
            <Veiculos />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/taxas/historico`}
            requireAny={[permissions.taxas.historico]}>
            <HistoricoTaxaPage />
          </PermissionRoute>

          <PermissionRoute
            path={`${path}/taxas/cadastro`}
            requireAny={[permissions.taxas.cadastrar]}>
            <CadastroPage />
          </PermissionRoute>

          <Route path="*">
            <Redirect to={`${path}/${defaultPath}`} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

GestaoTestDrive.propTypes = {
  user: PropTypes.object.isRequired,
};

export default GestaoTestDrive;
