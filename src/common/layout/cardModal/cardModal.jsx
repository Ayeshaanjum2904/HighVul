import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'common/controls/button';
import './cardModal.scss';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@mui/material';
import colors from 'assets/styles/colors';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import AlertModal from '../alertModal';

const useStyles = makeStyles({
  button: {
    width: (props) => props.buttonWidth || '116px',
    height: '40px',
    padding: '0',
  },
  closeButton: {
    width: (props) => props.closeButtonWidth || '116px',
    height: '40px',
    padding: '0',
    color: `${colors.secundary_color_800}`,
  },
  cardModal: {
    height: 'fit-content',
    width: '100%',
    background: '#FFFFFF',
    boxShadow: '0px 0px 2px rgba(85, 87, 112, 0.08), 0px 4px 8px rgba(85, 87, 112, 0.16)',
    borderRadius: '8px',
    padding: '40px 0 16px 0',
    maxWidth: (props) => props.width || 1042,
  },
  cardTitle: {
    gridArea: 'title',
    fontFamily: 'CircularStd, sans-serif',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: (props) => props.titleSize || '24px',
    lineHeight: '30px',
    color: '#555770',
    display: 'flex',
    alignItems: 'center',
  },
});

const CardModal = ({
  buttonAction, icone, title, subtitle, textGreenButton, openModal, setOpen, children, confirmClose,
  alertTitle, alertSubtitle, isLoadingSubmit, closeOnSubmit, disableSubmit, disableClose,
  textButton, color, buttonWidth, closeButtonWidth, width, titleSize, colorGreenButton,
  actionFirstButton, colorIcon,
}) => {
  const classes = useStyles({
    width, buttonWidth, closeButtonWidth, titleSize,
  });
  const [openAlertModal, setOpenAlertModal] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') {
      return;
    }
    setOpen(false);
  };

  const onClick = () => {
    if (closeOnSubmit) handleClose();
    buttonAction();
  };

  const handleOpenAlertModal = () => {
    if (confirmClose) setOpenAlertModal(true);
    else handleClose();
  };

  const renderSubtitle = () => {
    if (subtitle) return (<span className="card-subtitle">{subtitle}</span>);
    return null;
  };

  const Icone = () => {
    if (icone) {
      return (
        <Icon style={{ marginRight: '10px' }}>
          {icone}
        </Icon>
      );
    }
    return null;
  };

  return (
    <>
      <Modal
        disableEnforceFocus
        open={openModal}
        onClose={handleClose}
        disableEscapeKeyDown
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className={classes.cardModal}>
          <div className="card-modal-header">
            <div className={classes.cardTitle}>
              <Icone />
              <span>{title}</span>
            </div>
            {renderSubtitle()}
            <IconButtonTooltip
              className="card-close-button"
              type="button"
              disabled={disableClose}
              onClick={() => handleOpenAlertModal()}
            >
              <CloseRoundedIcon style={{ width: 24, height: 24 }} />
            </IconButtonTooltip>
          </div>
          <div className="card-modal-children">
            {children}
          </div>
          <Divider className="divider" />
          <div className="card-modal-footer">
            <div className="return-button">
              <Button
                color={color}
                onClick={actionFirstButton || (() => handleOpenAlertModal())}
                className={`${classes.button} ${classes.closeButton}`}
                disabled={disableClose}
              >
                {textButton}
              </Button>
            </div>
            <div>
              <Button
                onClick={() => onClick()}
                className={classes.button}
                disabled={disableSubmit}
                isLoading={isLoadingSubmit}
                color={colorGreenButton}
              >
                {textGreenButton}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <AlertModal
        title={alertTitle}
        subtitle={alertSubtitle}
        textRedButton="Sair"
        openModal={openAlertModal}
        setOpen={setOpenAlertModal}
        buttonAction={() => handleClose()}
        color={colorIcon}
        widthButton="100px"
      />
    </>
  );
};

CardModal.propTypes = {
  setOpen: PropTypes.func,
  buttonAction: PropTypes.func,
  openModal: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icone: PropTypes.element,
  textGreenButton: PropTypes.string,
  textButton: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.element,
  alertTitle: PropTypes.string,
  alertSubtitle: PropTypes.string,
  isLoadingSubmit: PropTypes.bool,
  closeOnSubmit: PropTypes.bool,
  disableSubmit: PropTypes.bool,
  disableClose: PropTypes.bool,
  confirmClose: PropTypes.bool,
  buttonWidth: PropTypes.string,
  closeButtonWidth: PropTypes.string,
  width: PropTypes.string,
  titleSize: PropTypes.string,
  colorGreenButton: PropTypes.string,
  colorIcon: PropTypes.string,
  actionFirstButton: PropTypes.func,
};

CardModal.defaultProps = {
  setOpen: () => {},
  buttonAction: () => {},
  openModal: false,
  title: '',
  subtitle: '',
  icone: null,
  textGreenButton: '',
  textButton: 'Voltar',
  color: 'gray',
  children: {},
  alertTitle: '',
  alertSubtitle: '',
  isLoadingSubmit: false,
  closeOnSubmit: true,
  disableSubmit: false,
  disableClose: false,
  confirmClose: true,
  buttonWidth: '',
  closeButtonWidth: '',
  width: '',
  titleSize: '',
  colorGreenButton: '',
  colorIcon: '',
  actionFirstButton: () => {},
};

export default CardModal;
