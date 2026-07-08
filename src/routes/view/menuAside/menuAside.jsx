import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { useRouteMatch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { SvgIcon } from '@mui/material';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import IconeStellantis from 'assets/icons/iconesRebranding/icone-stellantis';
import ExitIcon from 'assets/icons/exit';
import LimiteIcon from 'assets/icons/limite';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import BallotIcon from '@material-ui/icons/Ballot';
import WorkspacePremiumOutlined from '@mui/icons-material/WorkspacePremiumOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AlertModal from '../../../common/layout/alertModal';

import {
  PATH_GESTAO_TEST_DRIVE,
  PATH_GESTAO_LIMITES,
  PATH_DASHBOARD,
  PATH_COBRANCAS,
  PATH_COMUNICADOS,
  PATH_FIDC,
  PATH_CORPORATE,
} from '../../paths';

import NotificationDrawer from '../../../features/notification/views/notificationDrawer';
import MenuAsideButton from './menuAsideButton';
import './menuAside.scss';

const MenuAside = ({
  hasTestDrivePermission, invalidateSession, hasLimitesPermission, navTo,
  hasDashboardPermission, hasAlertasPermission, hasCobrancasPermission,
  hasAprovacoesPermission, hasFidcPermission, hasCorporatePermission, hasNotifications,
  exibirAlarme,
}) => {
  const [openNotification, setOpenNotification] = useState(false);
  const [exibirModalAlarme, setExibirModalAlarme] = useState(false);

  useEffect(() => {
    if (!exibirModalAlarme) setExibirModalAlarme(exibirAlarme);
  }, [exibirAlarme]);

  return (
    <>
      {exibirModalAlarme && (
      <AlertModal
        title="Notificações"
        subtitle="Existem pendências que precisam de sua ação. Acesse o menu de notificações para ver os detalhes"
        textRedButton="Ir para notificações"
        textGrayButton="Ignorar"
        openModal={exibirModalAlarme}
        setOpen={setExibirModalAlarme}
        isNotificationAlert
        closeAction={() => setExibirModalAlarme(false)}
        buttonAction={() => setOpenNotification(true)}
      />
      )}
      <section className="menu-aside">
        <Scrollbars
          autoHeight
          autoHeightMax="100vh"
          autoHeightMin="100vh"
          renderThumbHorizontal={() => (<div style={{ display: 'none' }} />)}
        >
          <div
            className="menu-aside__itens-container"
            data-cy="menu-aside"
          >

            <div className="menu-aside__fidis-logo">
              <IconeStellantis className="menu-aside__fidis-logo__icon" />
            </div>

            <div className="menu-aside__buttons">
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_GESTAO_TEST_DRIVE);
                }}
                active={!!useRouteMatch(`${PATH_GESTAO_TEST_DRIVE}/*`)}
                visible={hasTestDrivePermission}
                icon={<DriveEtaIcon />}
                label="Gestão de Test Drive"
              />
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_GESTAO_LIMITES);
                }}
                active={!!useRouteMatch(`${PATH_GESTAO_LIMITES}/*`)}
                visible={hasLimitesPermission || hasAprovacoesPermission}
                icon={<SvgIcon><LimiteIcon /></SvgIcon>}
                label="Gestão de Limites"
              />
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_DASHBOARD);
                }}
                active={!!useRouteMatch(`${PATH_DASHBOARD}/*`)}
                visible={hasDashboardPermission}
                icon={<DashboardIcon />}
                label="Dashboards"
              />
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_COMUNICADOS);
                }}
                active={!!useRouteMatch(`${PATH_COMUNICADOS}/*`)}
                visible={hasAlertasPermission}
                icon={<InfoIcon />}
                label="Gestão de Comunicados"
              />
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_COBRANCAS);
                }}
                active={!!useRouteMatch(`${PATH_COBRANCAS}/*`)}
                visible={hasCobrancasPermission}
                icon={<EmailIcon />}
                label="Cobranças"
              />
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_FIDC);
                }}
                active={!!useRouteMatch(`${PATH_FIDC}/*`)}
                visible={hasFidcPermission}
                icon={<BallotIcon />}
                label="FIDC"
              />
              <MenuAsideButton
                onClick={() => {
                  navTo(PATH_CORPORATE);
                }}
                active={!!useRouteMatch(`${PATH_CORPORATE}/*`)}
                visible={hasCorporatePermission}
                icon={<WorkspacePremiumOutlined />}
                label="Gestão Corporate"
              />
            </div>

            <div className="menu-aside__footer">

              <Tooltip placement="right" title="Notificações">
                <div className="menu-aside-item menu-aside-notication-center">
                  <NotificationsIcon
                    onClick={() => setOpenNotification(!openNotification)}
                  />
                  <div className={hasNotifications && 'menu-aside-notification-indicator'} />
                </div>
              </Tooltip>

              <Tooltip placement="right" title="Sair">
                <div className="menu-aside-item">
                  <ExitIcon onClick={invalidateSession} />
                </div>
              </Tooltip>
            </div>
          </div>
        </Scrollbars>
        <NotificationDrawer
          isOpen={openNotification}
          onClose={() => setOpenNotification(false)}
        />
      </section>
    </>
  );
};

MenuAside.propTypes = {
  hasTestDrivePermission: PropTypes.bool.isRequired,
  hasLimitesPermission: PropTypes.bool.isRequired,
  hasAprovacoesPermission: PropTypes.bool.isRequired,
  invalidateSession: PropTypes.func.isRequired,
  navTo: PropTypes.func.isRequired,
  hasDashboardPermission: PropTypes.bool.isRequired,
  hasAlertasPermission: PropTypes.bool.isRequired,
  hasCobrancasPermission: PropTypes.bool.isRequired,
  hasFidcPermission: PropTypes.bool.isRequired,
  hasCorporatePermission: PropTypes.bool.isRequired,
  hasNotifications: PropTypes.bool.isRequired,
  exibirAlarme: PropTypes.bool,
};

MenuAside.defaultProps = {
  exibirAlarme: false,
};

export default MenuAside;
