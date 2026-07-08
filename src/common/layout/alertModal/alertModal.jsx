import React from 'react';
import PropTypes from 'prop-types';

import './alertModal.scss';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import Modal from '@material-ui/core/Modal';
import colors from 'assets/styles/colors';
import NewButton from 'common/controls/newButton/newButton';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';

const AlertModal = ({
  buttonAction, title, subtitle, textRedButton, textGrayButton, openModal, setOpen,
  disableAction, isLoadingAction, closeOnSubmit, mixpanelTarget, mixpanelPage, children,
  alertCardTitle, icone, colorBase, limitesAprovados, color,
  widthButton, preventAction, isNotificationAlert,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (closeOnSubmit) handleClose();
    buttonAction();
  };

  const renderHeaderIcon = (style) => {
    if (isNotificationAlert) {
      return <NotificationImportantIcon style={{ fontSize: '30px', ...style }} />;
    }
    return <WarningRoundedIcon style={style} />;
  };

  const renderButtonSave = () => {
    if (limitesAprovados) {
      return (
        <NewButton
          className="gray"
          onClick={handleClick}
          preventOnClick={preventAction}
          alertCardTitle={alertCardTitle}
          icone={icone}
          colorBase={colorBase}
          disabled={disableAction}
          isLoading={isLoadingAction}
        >
          <span>{textRedButton}</span>
        </NewButton>
      );
    }
    return (
      <NewButton
        className="gray"
        onClick={handleClick}
        disabled={disableAction}
        isLoading={isLoadingAction}
        mixpanelTarget={mixpanelTarget}
        mixpanelPage={mixpanelPage}
        width={widthButton}
      >
        {textRedButton}
      </NewButton>
    );
  };
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      disableEscapeKeyDown
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <div className="message">
            <div className="header">
              {renderHeaderIcon({
                color: color || colors.error_color_300,
                fontSize: '24px',
              })}
              <span className="title">{title}</span>
            </div>
            <span className="subtitle">{subtitle}</span>
          </div>
          <IconButtonTooltip
            className="card-close-button"
            type="button"
            onClick={() => handleClose()}
            tooltip="Fechar"
          >
            <CloseRoundedIcon style={{ width: 16, height: 16 }} />
          </IconButtonTooltip>
        </div>
        {children && (
        <div className="modal-body">
          {children}
        </div>
        )}
        <div className="modal-footer">
          <div className="return-button">
            <NewButton
              className="dark_gray_border"
              onClick={() => handleClose()}
              width="86px"
            >
              {textGrayButton}
            </NewButton>
          </div>
          <div>
            {renderButtonSave()}
          </div>
        </div>
      </div>
    </Modal>
  );
};

AlertModal.propTypes = {
  setOpen: PropTypes.func,
  buttonAction: PropTypes.func,
  preventAction: PropTypes.bool,
  openModal: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textRedButton: PropTypes.string,
  textGrayButton: PropTypes.string,
  disableAction: PropTypes.bool,
  closeOnSubmit: PropTypes.bool,
  isLoadingAction: PropTypes.bool,
  mixpanelTarget: PropTypes.string,
  mixpanelPage: PropTypes.string,
  children: PropTypes.element,
  alertCardTitle: PropTypes.string,
  icone: PropTypes.element,
  colorBase: PropTypes.string,
  limitesAprovados: PropTypes.bool,
  color: PropTypes.string,
  widthButton: PropTypes.string,
  isNotificationAlert: PropTypes.bool,
};

AlertModal.defaultProps = {
  setOpen: () => {},
  buttonAction: () => {},
  preventAction: false,
  openModal: false,
  title: '',
  subtitle: '',
  textRedButton: 'Salvar',
  textGrayButton: 'Voltar',
  disableAction: false,
  isLoadingAction: false,
  closeOnSubmit: true,
  mixpanelTarget: null,
  mixpanelPage: null,
  children: null,
  alertCardTitle: '',
  icone: null,
  colorBase: colors.alert_color_200,
  limitesAprovados: false,
  color: colors.error_color_300,
  widthButton: '',
  isNotificationAlert: false,
};

export default AlertModal;
