import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Scrollbars from 'react-custom-scrollbars';

import Modal from 'common/layout/modal';
import { ModalEmail } from '../../../redux/enums';
import EdicaoEmail from './views/edicaoEmail';
import EmailModalStatusBar from './views/emailModalStatusBar';
import EmailModalFooter from './views/emailModalFooter';
import PreviewEmail from './views/previewEmail';

import './emailsModal.scss';

const EmailsModal = ({
  closeModal, isLoading, resetStore, template,
}) => {
  useEffect(() => () => {
    resetStore();
  }, [resetStore]);

  return (
    <Modal
      disableCloseButton={isLoading}
      closeModal={closeModal}
      width="800px"
      height="600px"
    >
      <div className="emails__modal__content">
        <div className="emails__modal__content__header">
          <div className="emails__modal__content__header_title">
            Editar e-mail de cobrança
          </div>
          <div className="emails__modal__content__header_status">
            <EmailModalStatusBar />
          </div>
        </div>
        <Scrollbars>
          <div className="emails__modal__content__body">
            {template === ModalEmail.edicaoEmail ? <EdicaoEmail /> : <PreviewEmail />}
          </div>
        </Scrollbars>
        <div className="emails__modal__content__footer">
          <EmailModalFooter />
        </div>
      </div>
    </Modal>
  );
};

EmailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  resetStore: PropTypes.func.isRequired,
  template: PropTypes.string,
};

EmailsModal.defaultProps = {
  isLoading: false,
  template: '',
};

export default EmailsModal;
