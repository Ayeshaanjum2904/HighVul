import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../../../assets/icons/x';
import WarningImg from './stop.png';

import './ofertasErrorModal.scss';

const OfertasErrorModal = ({ onClose, title, children }) => (
  <div className="modal__container">
    <div className="modal__container-centralized">
      <div className="modal__content-container">
        <div className="modal__header-background">
          <div
            className="modal__header-close"
            onClick={() => { onClose(); }}
            role="button"
            tabIndex="0"
          >
            <CloseIcon
              className="modal__header-close-icon"
            />
            <div className="modal__header-close-text">
              Fechar
            </div>
          </div>
          <div className="modal__header-stop">
            <img src={WarningImg} alt="Warning icon" className="modal__header-stop-image" />
          </div>
        </div>
        <div className="modal__header-title">
          {title}
        </div>
        {children}
      </div>
    </div>
  </div>
);

OfertasErrorModal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

OfertasErrorModal.defaultProps = {
  onClose: () => {},
  title: null,
  children: null,
};

export default OfertasErrorModal;
