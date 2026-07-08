import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Scrollbar from 'react-custom-scrollbars';

import './previewEmail.scss';

const PreviewEmail = ({ assunto, corpo }) => (
  <div className="email-modal__preview-email__content">
    2. Confirme a edição do email.
    <div className="email-modal__preview-email__container">
      <div className="email-modal__preview-email__container__label">
        Pré-visualização do email
      </div>
      <div className="email-modal__preview-email__container__content">
        <Scrollbar
          autoHeight
          autoHeightMin="300px"
          autoHeightMax="300px"
        >
          <div className="email-modal__preview-email__container__content_assunto">
            {assunto}
          </div>
          <div className="email-modal__preview-email__container__content_corpo">
            {parse(corpo)}
          </div>
        </Scrollbar>
      </div>
    </div>
  </div>
);

PreviewEmail.propTypes = {
  assunto: PropTypes.string.isRequired,
  corpo: PropTypes.string.isRequired,
};

export default PreviewEmail;
